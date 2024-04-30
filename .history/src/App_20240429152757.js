import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import React, { useState} from 'react';
import LoginPage from './pages/LoginPage';

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (username, password) => {
    // Check if username and password are correct
    if (username === "J4CK" && password === "chromeburned") {
      setTimeout(() => {
        setAuthenticated(true);
      }, 500);
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };


  
  return (
    <BrowserRouter>
      <Routes>
        {authenticated ? (
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        ) : (
          <Route
            path="/*"
            element={<LoginPage handleLogin={handleLogin} error={error} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
