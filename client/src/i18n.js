import i18n from "i18next";
import LanguageDeetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// const resources = {};
// https://www.youtube.com/watch?v=dltHi9GWMIo

i18n
  .use(LanguageDeetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    // debug: true,
    returnObject: true,
    // resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
