import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "ar", name: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div style={{ margin: "3rem" }}>
      {languages.map((lng) => (
        <button key={lng.code} onClick={() => changeLanguage(lng.code)}>
          {lng.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
