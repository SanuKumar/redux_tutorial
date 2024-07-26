import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const LOCAL_STORAGE_KEY = "user";

  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
    if (Object.keys(userData).length === 0) {
      navigate("/login");
    }
  }, [navigate, userData]);

  console.log(userData);

  return (
    <>
      <div>LandingPage</div>
      <div style={{ padding: "2px" }}>{t("Welcome to React")}</div>
      <>{userData && `Welcome ${userData.name}, Email: ${userData.email}`}</>
    </>
  );
};

export default LandingPage;
