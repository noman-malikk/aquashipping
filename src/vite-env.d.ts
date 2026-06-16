/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_QUOTE_API_URL?: string;
  readonly VITE_COMPANY_NAME?: string;
  readonly VITE_COMPANY_PHONE?: string;
  readonly VITE_COMPANY_EMAIL?: string;
  readonly VITE_COMPANY_WHATSAPP?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
