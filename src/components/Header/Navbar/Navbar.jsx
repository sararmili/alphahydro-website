import "./Navbar.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logooo.png";

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="nav-container top-content">
          <div className="top-links">
            <a
                href="https://www.google.com/maps/place/34%C2%B013'36.0%22N+4%C2%B000'32.0%22W/@34.22654,-4.0105567,18z/data=!4m4!3m3!8m2!3d34.2266655!4d-4.0088892?hl=fr&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt className="top-icon" /> Localisation du magasin
            </a>

            <span>
              <a href="tel:+212689777336">
                <FaPhoneAlt className="top-icon" /> Contact
              </a>
            </span>
          </div>

          <div className="top-hours">
            Lun - Ven: 9h00-13h00 / 15h00-18h30 | Sam: 9h00 - 16h00
          </div>
        </div>
      </div>

      <header className="main-navbar">
  <div className="nav-container nav-content">

    <div className="brand-logo">
      <img
        src={logo}
        alt="AlphaHydro Logo"
        className="navbar-logo"
      />
    </div>

    <nav className="menu-links">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Accueil
      </NavLink>

      <NavLink to="/produits" className={({ isActive }) => (isActive ? "active" : "")}>
        Produits
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        À Propos
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        Contact
      </NavLink>
    </nav>

    <div className="right-contact">
      <a
        className="whatsapp-main"
        href="https://wa.me/212689777336"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        WhatsApp
      </a>
    </div>

  </div>
</header>
    </>
  );
}