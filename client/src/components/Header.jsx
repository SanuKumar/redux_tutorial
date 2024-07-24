import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import { useTranslation } from "react-i18next";

import LanguageSelector from "./languageSelector";

const Header = () => {
  const { t } = useTranslation();
  const handleLogin = () => {};
  return (
    <>
      <div className='headerWrapper'>
        <nav id='sidebar'>
          <NavLink
            exact
            to='/'
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t("Home")}
          </NavLink>

          <NavLink
            exact
            to='/users'
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t("User")}
          </NavLink>
          <NavLink
            exact
            to='/login-signup'
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            onClick={handleLogin}
          >
            {t("Login")}
          </NavLink>
          <LanguageSelector />
        </nav>
      </div>
    </>
  );
};

export default Header;
