import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
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
            element={<Home />}
          />
          <PrivateRoute
            path="/blogs"
            authenticated={authenticated}
            element={<Blogs />}
          />
          <PrivateRoute
            path="/contact"
            authenticated={authenticated}
            element={<Contact />}
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
