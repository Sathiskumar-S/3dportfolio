export const basePath =
    process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "true" ? "" : "/3dportfolio";

export function publicAssetPath(path: string) {
  return `${basePath}${path}`;
}
