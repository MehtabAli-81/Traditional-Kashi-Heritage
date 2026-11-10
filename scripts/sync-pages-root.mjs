import { cp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "out");
const manifestPath = path.join(projectRoot, ".pages-root-output.json");
const protectedEntries = new Set([
  ".git",
  ".github",
  "app",
  "components",
  "lib",
  "node_modules",
  "public",
  "scripts",
]);

let previousEntries = [];
try {
  previousEntries = JSON.parse(await readFile(manifestPath, "utf8"));
  if (!Array.isArray(previousEntries) || previousEntries.some((entry) => typeof entry !== "string")) {
    throw new Error("Invalid generated output manifest");
  }
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

for (const entry of previousEntries) {
  if (protectedEntries.has(entry) || entry === ".pages-root-output.json") {
    throw new Error(`Refusing to remove protected repository path: ${entry}`);
  }
  await rm(path.join(projectRoot, entry), { recursive: true, force: true });
}

const generatedEntries = await readdir(outputRoot);
for (const entry of generatedEntries) {
  if (protectedEntries.has(entry) || entry === ".pages-root-output.json") {
    throw new Error(`Refusing to overwrite protected repository path: ${entry}`);
  }
  await cp(path.join(outputRoot, entry), path.join(projectRoot, entry), { recursive: true });
}

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const indexPath = path.join(projectRoot, "index.html");
if (basePath) {
  const html = await readFile(indexPath, "utf8");
  const withoutManagedPreloads = html.replace(/<link\b[^>]*>/gi, (tag) => {
    const href = tag.match(/\bhref=(['"])(.*?)\1/i)?.[2];
    return href?.startsWith("/manus-storage/") ? "" : tag;
  });
  const relativeHtml = withoutManagedPreloads.replace(/\b(src|href)=(['"])\/+[^'"]*\2/g, (match, attribute, quote) => {
    const value = match.slice(attribute.length + 2, -1);
    if (!value.startsWith(`${basePath}/_next/`) && !value.startsWith(`${basePath}/images/`)) return match;
    const relativeValue = `./${value.slice(basePath.length + 1)}`;
    return `${attribute}=${quote}${relativeValue}${quote}`;
  });
  await writeFile(indexPath, relativeHtml);
}

await writeFile(manifestPath, `${JSON.stringify(generatedEntries, null, 2)}\n`);
console.log(`Copied ${generatedEntries.length} static export entries from out/ to repository root.`);
