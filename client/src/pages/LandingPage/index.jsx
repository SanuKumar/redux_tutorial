import React from "react";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>LandingPage</div>
      <div style={{ padding: "2px" }}>{t("Welcome to React")}</div>
    </>
  );
};

export default LandingPage;
