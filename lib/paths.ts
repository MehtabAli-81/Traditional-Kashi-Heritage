const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export function assetUrl(path: string) {
  if (!path.startsWith("/") || path.startsWith("/manus-storage/")) return path;
  return `${basePath}${path}`;
}
