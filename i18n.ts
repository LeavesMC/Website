import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enUS from "src/i18n/en.json";
import zhCN from "src/i18n/zh-CN.json";
import zhTW from "src/i18n/zh-TW.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en-US", "zh-CN", "zh-TW"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": {
        translation: enUS,
      },
      "zh-CN": {
        translation: zhCN,
      },
      "zh-TW": {
        translation: zhTW,
      },
    },
  });

export default i18n;
