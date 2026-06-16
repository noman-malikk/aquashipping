import { copyFile, stat } from "node:fs/promises";

try {
  await stat("dist/index.html");
  await copyFile("dist/index.html", "dist/404.html");
  console.log("Created dist/404.html for GitHub Pages SPA fallback.");
} catch (error) {
  console.error("Could not create dist/404.html", error);
  process.exit(1);
}
