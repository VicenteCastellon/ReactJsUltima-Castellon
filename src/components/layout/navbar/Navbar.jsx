import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css"; // Archivo CSS para personalizaciones adicionales
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sneakers-store-brand-logo%2C-sneaker-store-logo-design-template-cd4d67885f338eb3623ea9e1a7d92328_screen.jpg?ts=1695153682"
            alt="Brand Logo"
            className="logo"
          />
        </Link>

        {/* Botón colapsable para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/urbanas">
                Urbanas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/deportivas">
                Deportivas
              </Link>
            </li>
          </ul>
        </div>

        
        <CartWidget />
      </div>
    </nav>
  );
};


