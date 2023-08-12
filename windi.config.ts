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
      colors: {
        "background-dark-90": "#111111",
        "background-dark-80": "#181a1b",
        "background-light-10": "#f8faff",
        "background-light-0": "#ffffff",
      },
      listStyleType: {
        alpha: "lower-alpha",
      },
    },
  },
  shortcuts: {},
});
