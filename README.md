# Aqua Shipping

A professional React, TypeScript and Vite website for a UK cargo and shipping quote business. The frontend is static and GitHub Pages friendly; private Telegram and email credentials stay in the separate `serverless/` backend example.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- React Router clean routes with GitHub Pages 404 fallback
- Lucide React icons
- Serverless Cloudflare Worker example for Telegram and email alerts

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build the static site:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

5. Deploy with the `gh-pages` package:

```bash
npm run deploy
```

## Frontend Environment Variables

Create `.env.local` for local development:

```text
VITE_QUOTE_API_URL=https://your-serverless-endpoint.com/api/quote
VITE_COMPANY_NAME=Aqua Shipping
VITE_COMPANY_PHONE=+44 20 0000 0000
VITE_COMPANY_EMAIL=quotes@aquashipping.co.uk
VITE_COMPANY_WHATSAPP=447000000000
VITE_SITE_URL=https://www.aquashipping.co.uk
```

Do not put Telegram bot tokens, email API keys or private credentials in frontend environment variables.

## GitHub Pages

The Vite `base` path is controlled by `VITE_BASE_PATH`.

For a repository page such as `https://username.github.io/aquashipping/`:

```bash
VITE_BASE_PATH=/aquashipping/ npm run build
```

The included GitHub Actions workflow sets:

```text
VITE_BASE_PATH=/${{ github.event.repository.name }}/
```

It also copies `dist/index.html` to `dist/404.html` so direct route refreshes work on GitHub Pages.

## Quote Backend

Deploy the worker in `serverless/`, then set the deployed URL as `VITE_QUOTE_API_URL` in GitHub Pages repository variables or `.env.local`.

Backend secrets:

```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
OWNER_EMAIL=
EMAIL_API_KEY=
EMAIL_FROM=
ALLOWED_ORIGIN=
```

The backend sends:

- Telegram alert to the business owner or team chat
- Confirmation email to the customer
- Notification email to the business owner

## Content

Reusable content lives in `src/data/`:

- `destinations.ts`
- `services.ts`
- `faqs.ts`
- `testimonials.ts`
- `seo.ts`
- `navLinks.ts`
- `articles.ts`

Update these files to change page copy, routes, FAQs, service cards and guide templates.
