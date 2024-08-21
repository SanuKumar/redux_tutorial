import React, { useContext } from "react";
import { LogInContext } from "../App";

const LoginContext = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(LogInContext);
  return (
    <div>
      <h3>Use Context</h3>
      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginContext;
