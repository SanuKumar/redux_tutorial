import i18n from "i18next";
import LanguageDeetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
  ar: {
    translation: {
      "Welcome to React": "مرحبًا بك في React و react-i18next",
    },
  },
};

i18n
  .use(LanguageDeetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObject: true,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
