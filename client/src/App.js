import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { createContext, Suspense, useState } from "react";

import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import UserDashboard from "./pages/UserDashboard";
import LoginSignup from "./pages/LoginSignup";
import Loader from "./components/Loader";
import ErrorPage from "./pages/ErrorPage";
import Post from "./pages/Post";
import "./App.css";

function App() {
  return (
    <Suspense
      fallback={
        <div style={{ width: "100%", height: "100vh" }}>
          <Loader />
        </div>
      }
    >
      <Main />
    </Suspense>
  );
}

export const LogInContext = createContext();

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <ErrorBoundary
        fallback={(error, reserErrorBoundry) => (
          <div
            style={{
              width: "100vh",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h4>An Error Occured while performing the last actions.</h4>
            <br />
            <button onClick={reserErrorBoundry}>Try Again</button>
          </div>
        )}
        onError={(error, info) => {
          console.log("Error Boundry", error, info);
        }}
        onReset={() => {
          console.log("Error Boundry Reset");
        }}
      >
        <LogInContext.Provider
          value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}
        >
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/users' element={<UserDashboard />} />
            <Route exact path='users/:id' element={<UserPage />} />
            <Route exact path='/login-signup' element={<LoginSignup />} />
            <Route exact path={"/post"} element={<Post />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </LogInContext.Provider>
      </ErrorBoundary>
    </>
  );
};

export default App;
