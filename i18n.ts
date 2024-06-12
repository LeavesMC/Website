import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enUS from "src/i18n/en.json";
import enUS_guidelines from "src/i18n/en_guidelines.json";
import zhCN from "src/i18n/zh-CN.json";
import zhCN_guidelines from "src/i18n/zh-CN_guidelines.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en-US", "zh-CN"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": {
        translation: enUS,
        guidelines: enUS_guidelines,
      },
      "zh-CN": {
        translation: zhCN,
        guidelines: zhCN_guidelines,
      },
    },
  });

export default i18n;
