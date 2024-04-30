import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for navbar styling
import React, { useEffect, useState } from "react";

const Layout = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
      // Default landing page route
      const defaultRoute = "/home";

      // Only navigate to default route on initial load
      if (initialLoad && location.pathname === "/") {
        navigate(defaultRoute);
        setInitialLoad(false); // Set initialLoad to false after the first navigation
      }
    }, [location.pathname, navigate, initialLoad]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-text">
              <Link to="/home" className="nav-links">H4CK3RZ H4V3N</Link>
            </span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links">
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Hit-List
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;