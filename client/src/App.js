import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import UserDashboard from "./pages/UserDashboard";
import LoginSignup from "./pages/LoginSignup";
import Loader from "./components/Loader";

function App() {
  const { t } = useTranslation();
  return (
    <Suspense
      fallback={
        <div style={{ width: "100%", height: "100vh" }}>
          <Loader />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

const Home = (props) => {
  return <Main />;
};

const Main = () => {
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
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UserDashboard />} />
          <Route path="users/:id" element={<UserPage />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
