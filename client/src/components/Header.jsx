import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

import LanguageSelector from "./languageSelector";

const Header = () => {
  const handleLogin = () => {};
  return (
    <>
      <div className="headerWrapper">
        <nav id="sidebar">
          <NavLink
            exact
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/users"
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            User
          </NavLink>
          <NavLink
            exact
            to="/login-signup"
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>
          <LanguageSelector />
        </nav>
      </div>
    </>
  );
};

export default Header;
