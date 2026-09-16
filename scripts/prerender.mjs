import { build } from "vite";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const serverDir = resolve(".prerender");
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
try {
  await build({ build: { ssr: "src/entry-server.tsx", outDir: serverDir, emptyOutDir: true } });
  const { render, routes, company, siteUrl } = await import(pathToFileURL(resolve(serverDir, "entry-server.js")).href);
  const origin = new URL(company.siteUrl);
  if (!/^https?:$/.test(origin.protocol) || origin.search || origin.hash || origin.username || origin.password) {
    throw new Error("VITE_SITE_URL must be a public HTTP(S) site URL without query parameters or credentials.");
  }
  const template = await readFile("dist/index.html", "utf8");
  for (const route of [...routes, "/404"]) {
    const { html, head } = render(route);
    const page = template.replace("<!--app-head-->", head).replace('<div id="root"></div>', `<div id="root" data-prerendered="true" data-route="${route}">${html}</div>`);
    const target = route === "/404" ? "dist/404.html" : `dist${route === "/" ? "" : route}/index.html`;
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, page);
  }
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${escapeXml(siteUrl(route))}</loc></url>`).join("\n")}\n</urlset>\n`);
  await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${company.siteUrl}/sitemap.xml\n`);
  await writeFile("dist/.nojekyll", "");
  console.log(`Prerendered ${routes.length} indexable pages, a noindex 404, sitemap.xml and robots.txt for ${company.siteUrl}.`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
