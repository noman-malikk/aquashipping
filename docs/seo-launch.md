# SEO launch and measurement

## Deployment configuration

The live site is `https://aquashipping.co.uk`; `www` redirects to this preferred domain. The workflow and default canonical URL now use the non-www hostname. The live site checked before these changes still served the earlier build; deploy the current changes to publish the prerendered pages.

Verified business details are shared through `src/lib/business.ts`: Aqua Shipping Limited, +447588772465 for telephone and WhatsApp, nomanmalik6254@gmail.com for email, and Vista Centre, 50 Salisbury, Hounslow, London, TW4 6JQ for the office. Old `VITE_COMPANY_*` variables are no longer used.

Optional GitHub repository variables `VITE_GOOGLE_SITE_VERIFICATION` and `VITE_BING_SITE_VERIFICATION` accept only the content value of the verification meta tag. Rebuild after setting them.

The workflow uses `VITE_BASE_PATH: /` and `VITE_SITE_URL: https://aquashipping.co.uk`. For a repository-subpath deployment, change both settings together. Sitemap and canonical URLs must match the actual public deployment. Domain DNS, HTTPS and hostname redirects are configured in GitHub Pages / the domain provider.

Quotation forms use FormSubmit and send to nomanmalik6254@gmail.com after one-time recipient activation. Follow the [activation steps](../README.md#quotation-email-activation) after publishing and verify a second enquiry arrives. Inbox delivery and activation were not tested during development.

## What the build now does

`npm run build` builds the browser application, renders every public route into `dist/<route>/index.html`, and creates a dedicated noindex `404.html`. This removes the old dependency on serving valid landing pages through a 404 fallback. Page content, titles, descriptions, canonical URLs, Open Graph metadata and JSON-LD are in the initial HTML. React hydrates that content for interactions.

The sitemap and robots.txt are generated from the same route data and configured site URL. Directory URLs have a trailing slash to match GitHub Pages. New destination, service and guide entries are automatically included. No fabricated freshness dates, reviews or prices are added. Organization structured data uses the business address provided by the owner. FAQ content is readable using native HTML disclosures; FAQ markup does not imply eligibility for a Google FAQ rich result.

`npm run typecheck` validates TypeScript. `npm run check:seo` checks a previously built dist, and the build runs it automatically. Checks cover unique titles and descriptions, canonical/sitemap agreement, one H1 per page, parsable structured data, internal links, local assets and noindex error handling.

## Search engine setup after deployment

1. Verify ownership in [Google Search Console](https://search.google.com/search-console). A Domain property requires a DNS TXT record; a URL-prefix property can use the optional verification meta tag supported above.
2. Submit `https://YOUR-PREFERRED-HOST/sitemap.xml` (including the deployment subpath if applicable).
3. Inspect the homepage, air freight, sea freight and priority destination URLs. Confirm HTTP 200, readable rendered content and matching user-declared canonical. Request indexing for the highest-priority pages.
4. Add the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/) and submit the same sitemap. Import from Search Console if appropriate.
5. Test the deployed homepage and service pages in [Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/). Validate mobile quote-form usability as well as loading performance.
6. If the business is eligible, maintain a Google Business Profile with accurate contact details and service area. Only publish a physical address, opening hours or certifications once verified.

These steps require the owner's search engine / DNS accounts. The repository prepares verification support but cannot establish ownership or submit a sitemap without that access.

## Keyword-to-page map

These are intent-led content targets based on the services in this repository, not measured keyword volumes or ranking promises.

| Landing page | Search intent / phrases |
| --- | --- |
| `/` | cargo shipping from UK, UK to worldwide shipping, international freight quotes |
| `/air-cargo-services-uk/` | air cargo UK, international air freight from UK, air freight quote |
| `/sea-freight-services-uk/` | sea freight UK, international container shipping, LCL and FCL freight |
| `/door-to-door-cargo-service/` | door-to-door cargo shipping, UK collection and overseas delivery |
| `/household-goods-shipping-overseas/` | shipping household goods overseas, furniture shipping from UK |
| `/commercial-cargo-shipping/` | commercial cargo UK, business freight, overseas stock shipments |
| `/excess-baggage-shipping-uk/` | excess baggage shipping UK, unaccompanied luggage, boxes overseas |
| `/shipping-to-pakistan-from-uk/` | shipping to Pakistan from UK, air cargo Pakistan, sea cargo Pakistan |
| `/cargo-to-india-from-uk/` | cargo to India from UK, parcel shipping India, household goods India |
| `/shipping-to-dubai-from-uk/` | shipping to Dubai from UK, air freight Dubai, sea freight Dubai |
| `/cargo-to-uae-from-uk/` | cargo to UAE, shipping to Abu Dhabi, Sharjah cargo |
| `/middle-east-cargo-from-uk/` | UK to Middle East cargo, regional freight enquiries |
| `/asia-cargo-from-uk/` | UK to Asia cargo, regional air and sea freight |
| `/guides/international-shipping-from-uk-guide/` | how to ship cargo overseas from UK, compare international shipping quotes |
| `/get-quote/` | cargo shipping quote, international freight quotation |

Use these naturally in useful page copy and internal links. Google does not use the meta keywords tag for ranking. Do not add repetitive keyword lists or create near-identical country pages for services that have not been confirmed. Expand the shorter existing guides with real route-specific experience, confirmed service scope, packing examples and original photographs as those become available.

## Ongoing work that drives qualified quotations

Review Search Console impressions, clicks, CTR and enquiries by landing page each month. Prioritise queries relevant to shipments the business actually handles. Use the first data to improve low-CTR titles and pages receiving impressions but few enquiries.

Track completed quote submissions separately from CTA clicks using the chosen analytics system once privacy requirements and account configuration are in place. No analytics tracker or invented measurement ID is added here. Check the quotation inbox receives enquiries and the team can respond; traffic alone is not a conversion.

Seek legitimate mentions from business partners and relevant industry directories, with consistent business details. Add authentic customer feedback only with permission. Indexing, search positions and quotations depend on more than code and are not guaranteed.

References: [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## Validation completed for this change

- TypeScript check and production build passed.
- Automated SEO audit passed for all 30 indexable pages and the noindex 404.
- A separate build with a repository subpath and alternate origin passed canonical, sitemap, internal-link and asset checks.
- Chrome checks at a 390px mobile viewport passed across all 30 pages: visible headings, expected canonical metadata, no horizontal overflow and no console/hydration errors.
- Client navigation, quote input interaction, FAQ disclosure with and without JavaScript, and recovery from unknown routes were checked. No quote was submitted and no backend delivery was verified.
- These are local build/preview results, not confirmation of the live deployment or Google's indexing status.

## Contact and quotation update validation

After replacing the public details and simplifying the quotation form, TypeScript, the production build and the SEO/business-data audit passed. All 30 pages were checked in Chrome at a mobile viewport for HTTP responses, canonical metadata, contact links, office address, layout overflow and hydration errors. The homepage, contact page and quotation form were also checked at 320px and desktop widths.

The form's native POST was intercepted locally: it targeted `https://formsubmit.co/nomanmalik6254@gmail.com` and contained the nine requested fields plus the email subject/template. Invalid contact numbers prevented submission; the successful path sent trimmed values. A native submission with JavaScript disabled and an empty destination postcode also passed. No live enquiry was sent, and inbox activation/delivery still requires the owner steps in the README.
