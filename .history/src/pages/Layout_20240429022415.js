import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for navbar styling

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-text">H4CK3RZ</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
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