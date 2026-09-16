import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";
import { articles } from "./data/articles";
import { destinations } from "./data/destinations";
import { services } from "./data/services";
import { seo } from "./data/seo";
export { company } from "./lib/company";
export { siteUrl } from "./lib/urls";

export const routes = [
  ...Object.values(seo).map((page) => page.path),
  ...destinations.map((page) => page.path),
  ...services.map((page) => page.path),
  ...articles.map((page) => `/guides/${page.slug}`),
];

export function render(path: string) {
  const context = {} as { helmet: HelmetServerState };
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter basename={base || "/"} location={`${base}${path}`}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = context;
  return {
    html,
    head: [helmet.title, helmet.meta, helmet.link, helmet.script].map((tag) => tag.toString()).join("\n"),
  };
}
