import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "src/i18n/en.json";
import en_guidelines from "src/i18n/en_guidelines.json";
import zh_CN from "src/i18n/zh-CN.json";
import zh_CN_guidelines from "src/i18n/zh-CN_guidelines.json";
import i7h from "src/i18n/i7h.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
        guidelines: en_guidelines,
      },
      zh: {
        translation: zh_CN,
        guidelines: zh_CN_guidelines,
      },
      i7h: {
        translation: i7h,
      },
    },
  });

export default i18n;
