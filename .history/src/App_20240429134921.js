import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Layout from './Layout';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (username, password) => {
    // Check if username and password are correct
    if (username === 'J3CK' && password === 'chromeburned') {
      // Add a delay to simulate a transition
      setTimeout(() => {
        setAuthenticated(true);
      }, 500);
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {authenticated ? (
          <Route
            path="/*"
            element={<AuthenticatedLayout />}
          />
        ) : (
          <Route
            path="/*"
            element={<LoginPage handleLogin={handleLogin} error={error} />}
          />
        )}
      </Routes>
    </Router>
  );
};

const AuthenticatedLayout = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Layout>
);

export default App;
