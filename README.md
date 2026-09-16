# Aqua Shipping

React, TypeScript and Vite website for Aqua Shipping Limited, with static HTML generated for every page and deployment through GitHub Pages.

## Business details

The verified public details are in `src/lib/business.ts`:

- Telephone and WhatsApp: +447588772465
- Email and quotation recipient: nomanmalik6254@gmail.com
- Office: Vista Centre, 50 Salisbury, Hounslow, London, TW4 6JQ
- Website: https://aquashipping.co.uk

The header, footer, contact page, structured data and form share these details. The favicon and header logo use the same `public/favicon.svg` asset. The logo retains the existing Lucide Ship mark.

## Local development

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

The build renders 30 public pages, creates sitemap.xml, robots.txt and a noindex 404, then runs the SEO audit. `npm run check:seo` checks an existing build. The GitHub Actions workflow runs typechecking and the build before publishing pushes to main.

## Quotation email activation

The single-page form collects name, contact number, collection country/city/postcode, destination country/city/postcode, and shipment details. Postcodes are optional for locations without postal codes. No customer email or upload is requested.

Forms POST to `https://formsubmit.co/nomanmalik6254@gmail.com`. No API key or custom backend is required. FormSubmit handles the submission and spam check; its confirmation page handles the result. The site does not display a simulated success message.

After deployment:

1. Submit an enquiry from https://aquashipping.co.uk/get-quote/.
2. Open the activation email sent by FormSubmit to nomanmalik6254@gmail.com (check spam) and confirm the address.
3. Submit another enquiry and verify it reaches the inbox with all nine field values. Do not assume the activation request is delivered as a normal quote.

Until the recipient confirms activation, automatic delivery is not verified. Phone, WhatsApp and mailto links are available independently. No live test submission was sent during development. See [FormSubmit setup](https://formsubmit.co/) and [SEO launch](docs/seo-launch.md).

The old unused Cloudflare/Telegram demo backend has been removed. Existing `VITE_QUOTE_API_URL` and `VITE_COMPANY_*` repository variables are no longer used, so stale values cannot override the supplied public details.

## Site configuration

- `VITE_SITE_URL` defaults to `https://aquashipping.co.uk`. The deployment workflow explicitly sets this preferred domain.
- `VITE_BASE_PATH` defaults to `/`. For a separate repository Pages deployment, set it to the repository subpath and set a matching `VITE_SITE_URL`.
- Optional `VITE_GOOGLE_SITE_VERIFICATION` and `VITE_BING_SITE_VERIFICATION` accept verification meta-tag content values.

Do not add private credentials to frontend environment variables.

## Content

Services, destinations, guides, FAQs and SEO copy live in `src/data/`. No sample testimonials are published. Add customer reviews only when verified and approved for use.
