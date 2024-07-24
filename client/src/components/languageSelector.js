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
    <select
      name='selectLng'
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={localStorage.getItem("i18nextLng")}
    >
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
