import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import BlogsPage from "./BlogsPage";
import ContactPage from "./ContactPage";
import Layout from "./Layout";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "J3CK" && password === "chromeburned") {
      setAuthenticated(true);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                authenticated={authenticated}
                handleLogin={handleLogin}
                error={error}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <PrivateRoute
            path="/home"
            authenticated={authenticated}
            element={<HomePage />}
          />
          <PrivateRoute
            path="/blogs"
            authenticated={authenticated}
            element={<BlogsPage />}
          />
          <PrivateRoute
            path="/contact"
            authenticated={authenticated}
            element={<ContactPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ authenticated, element, ...rest }) => {
  return authenticated ? element : <Navigate to="/" />;
};

export default App;
