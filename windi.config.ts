import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "media",
  extract: {
    include: ["**/*.{tsx,css}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
  attributify: true,
  plugins: [require("windicss/plugin/aspect-ratio")],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "Roboto",
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      listStyleType: {
        alpha: "lower-alpha",
      },
    },
  },
  shortcuts: {},
});
