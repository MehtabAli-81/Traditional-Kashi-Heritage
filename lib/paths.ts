export const REPO_NAME = "/Traditional-Kashi-Heritage";

export function assetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  
  // Prevent duplicate prefixes if already prefixed
  if (path.startsWith(REPO_NAME)) return path;
  
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${REPO_NAME}${cleanPath}`;
}

export function getImagePath(path: string): string {
  return assetUrl(path);
}