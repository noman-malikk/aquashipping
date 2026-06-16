import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061a33",
        ocean: "#0b5cff",
        aqua: "#0fb9b1",
        ember: "#f97316",
        ink: "#102033",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(11, 92, 255, 0.18)",
        card: "0 18px 45px rgba(6, 26, 51, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
