import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles.css";

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const root = document.getElementById("root")!;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const currentPath = window.location.pathname.slice(basePath.length).replace(/\/+$/, "") || "/";
// A preview server may serve the homepage shell for an unknown URL.
// Only hydrate when the generated page matches the requested route.
if (root.dataset.prerendered && root.dataset.route === currentPath) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
