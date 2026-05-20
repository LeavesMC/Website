import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enUS from "src/i18n/en-US.json";
import frFR from "src/i18n/fr-FR.json";
import zhBone from "src/i18n/zh-Bone.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en-US", "fr-FR","zh-Bone"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": {
        translation: enUS,
      },
      "fr-FR": {
        translation: frFR,
      },
      "zh-Bone": {
        translation: zhBone
      }
    },
  });

export default i18n;
