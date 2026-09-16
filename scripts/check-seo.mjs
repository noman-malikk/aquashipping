import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replaceAll("&amp;", "&"));
assert(urls.length > 0, "Sitemap must contain indexable pages");
assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
// The homepage is the shortest path, including repository Pages deployments.
const base = new URL([...urls].sort((a, b) => a.length - b.length)[0]);
const titles = new Set();
const descriptions = new Set();
const localPaths = new Set(urls.map((url) => new URL(url).pathname.replace(/\/$/, "")));
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))].map((match) => {
  return Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map((attribute) => [attribute[1], attribute[2]]));
});
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, base.origin, `Different sitemap origin: ${url}`);
  assert(parsed.pathname.startsWith(base.pathname), `Different base path: ${url}`);
  const relative = parsed.pathname.slice(base.pathname.length);
  const html = await readFile(`dist/${relative}index.html`, "utf8");
  const titleMatches = [...html.matchAll(/<title[^>]*>([^<]+)<\/title>/g)];
  assert.equal(titleMatches.length, 1, `Expected one title: ${url}`);
  const title = titleMatches[0][1];
  assert(!titles.has(title), `Duplicate title: ${url}`);
  titles.add(title);
  const meta = tags(html, "meta");
  const description = meta.filter((tag) => tag.name === "description");
  assert.equal(description.length, 1, `Expected one description: ${url}`);
  assert(description[0].content.length > 30, `Missing meaningful description: ${url}`);
  assert(!descriptions.has(description[0].content), `Duplicate description: ${url}`);
  descriptions.add(description[0].content);
  const canonicals = tags(html, "link").filter((tag) => tag.rel === "canonical");
  assert.equal(canonicals.length, 1, `Expected one canonical: ${url}`);
  assert.equal(canonicals[0].href, url, `Canonical and sitemap disagree: ${url}`);
  assert.equal(meta.filter((tag) => tag.name === "robots").length, 1);
  assert(!meta.find((tag) => tag.name === "robots").content.includes("noindex"), `Indexable page blocked: ${url}`);
  assert.equal(meta.find((tag) => tag.property === "og:url")?.content, url);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one H1: ${url}`);
  assert(html.includes('data-prerendered="true"'), `Missing prerendered body: ${url}`);
  assert(!html.includes("<!--app-head-->"), `Unfilled template: ${url}`);
  const structured = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(structured.length, 1, `Expected structured data: ${url}`);
  const graph = JSON.parse(structured[0][1])["@graph"];
  assert(graph.some((item) => item["@type"] === "WebPage" && item.url === url));
  const organization = graph.find((item) => item["@type"] === "Organization");
  assert.equal(organization.telephone, "+447588772465", `Incorrect public phone: ${url}`);
  assert.equal(organization.email, "nomanmalik6254@gmail.com", `Incorrect public email: ${url}`);
  assert.equal(organization.address.postalCode, "TW4 6JQ", `Incorrect office postcode: ${url}`);
  assert(html.includes("Vista Centre, 50 Salisbury"), `Office address missing: ${url}`);
  assert(!/442000000000|447000000000|quotes@aquashipping|owner@example|A\. Khan|S\. Patel|M\. Rahman/.test(html), `Stale business or sample content: ${url}`);
  assert(tags(html, "link").some((tag) => tag.rel === "icon" && tag.href.endsWith("/favicon.svg")), `Missing favicon: ${url}`);

  for (const link of tags(html, "a")) {
    if (link.href?.startsWith("tel:")) assert.equal(link.href, "tel:+447588772465");
    if (link.href?.startsWith("mailto:")) assert.equal(link.href, "mailto:nomanmalik6254@gmail.com");
    if (link.href?.startsWith("https://wa.me/")) assert.equal(link.href, "https://wa.me/447588772465");
    if (!link.href || /^(tel:|mailto:|#)/.test(link.href)) continue;
    const target = new URL(link.href.replaceAll("&amp;", "&"), url);
    if (target.origin === base.origin) {
      assert(localPaths.has(target.pathname.replace(/\/$/, "")), `Broken internal link ${link.href} on ${url}`);
    }
  }
  for (const tag of [...tags(html, "img"), ...tags(html, "script"), ...tags(html, "link").filter((tag) => ["stylesheet", "modulepreload"].includes(tag.rel))]) {
    const source = tag.src || tag.href;
    if (!source) continue;
    const target = new URL(source, url);
    if (target.origin === base.origin && target.pathname.startsWith(base.pathname)) {
      await stat(`dist/${target.pathname.slice(base.pathname.length)}`);
    }
  }
}
const robots = await readFile("dist/robots.txt", "utf8");
assert(robots.includes(`Sitemap: ${base.href}sitemap.xml`), "robots.txt sitemap URL disagrees");
const notFound = await readFile("dist/404.html", "utf8");
assert(tags(notFound, "meta").some((tag) => tag.name === "robots" && tag.content.includes("noindex")), "404 must be noindex");
assert(!tags(notFound, "link").some((tag) => tag.rel === "canonical"), "404 must not canonicalize to an indexable page");
console.log(`SEO checks passed for ${urls.length} pages: static content, unique metadata, canonicals, structured data, internal links, assets and 404.`);

const quoteHtml = await readFile("dist/get-quote/index.html", "utf8");
assert(tags(quoteHtml, "form").some((form) => form.action === "https://formsubmit.co/nomanmalik6254@gmail.com" && form.method === "POST"), "Quotation recipient or submission method is incorrect");
const fieldNames = [...tags(quoteHtml, "input").filter((field) => field.type !== "hidden"), ...tags(quoteHtml, "textarea")].map((field) => field.name).sort();
assert.deepEqual(fieldNames, ["fullName", "phone", "collectionCountry", "collectionCity", "collectionPostcode", "destinationCountry", "destinationCity", "destinationPostcode", "message"].sort());
console.log("Business details, phone/WhatsApp/email links, shared favicon and nine-field quotation form checks passed.");
