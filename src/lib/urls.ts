import { company } from "./company";

// GitHub Pages serves directory indexes at trailing-slash URLs.
export function siteUrl(path = "/") {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return `${company.siteUrl}/${cleanPath ? `${cleanPath}/` : ""}`;
}

export function assetUrl(path: string) {
  return new URL(path.replace(/^\//, ""), `${company.siteUrl}/`).href;
}
