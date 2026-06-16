import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("react-hook-form") || id.includes("@hookform/resolvers") || id.includes("zod")) {
            return "forms";
          }
          if (id.includes("react-router-dom") || id.includes("react-helmet-async")) {
            return "router";
          }
          return undefined;
        },
      },
    },
  },
});
