# Aqua Shipping Serverless Quote API

This folder contains a Cloudflare Workers example for the quote form endpoint used by the static GitHub Pages frontend.

The frontend submits JSON to:

```text
VITE_QUOTE_API_URL=https://your-worker.your-subdomain.workers.dev
```

## Environment Variables

Set these only in the serverless platform, never in frontend code:

```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
OWNER_EMAIL=
EMAIL_API_KEY=
EMAIL_FROM=
ALLOWED_ORIGIN=
EMAIL_PROVIDER=resend
```

`EMAIL_PROVIDER=placeholder` logs email payloads instead of sending them. The default live adapter uses Resend-compatible API calls.

## Cloudflare Worker Setup

1. Copy `wrangler.toml.example` to `wrangler.toml`.
2. Install dependencies:

```bash
npm install
```

3. Add secrets:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
npx wrangler secret put EMAIL_API_KEY
```

4. Deploy:

```bash
npm run deploy
```

The worker accepts `POST` JSON, validates required fields, sends a Telegram alert, sends a customer confirmation email and sends a business owner notification email.
