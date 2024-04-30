import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for navbar styling
import React, { useEffect } from "react";

const Layout = () => {

    const navigate = useNavigate();

    useEffect(() => {
      // Redirect to the default route path when the component mounts
      navigate("/home");
    }, [navigate]);

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
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
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