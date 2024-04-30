import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = ({
  authenticated,
  handleLogin,
  error,
  setUsername,
  setPassword,
}) => {
  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;
