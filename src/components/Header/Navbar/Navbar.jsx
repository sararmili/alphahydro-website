import "./Navbar.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="nav-container top-content">
         <div className="top-links">
  <span>
    <FaMapMarkerAlt className="top-icon" /> Localisation du magasin
  </span>

  <span>
    <a href="tel:+212600000000">
     <FaPhoneAlt className="top-icon" /> Contact
    </a>
  </span>
</div>

          <div className="top-hours">
            Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 13h00
          </div>
        </div>
      </div>

      <header className="main-navbar">
        <div className="nav-container nav-content">
          <div className="brand-logo">
            <div className="brand-icon">AH</div>
            <div>
              <h2><span>Alpha</span>Hydro</h2>
              <p>PIÈCES INDUSTRIELLES</p>
            </div>
          </div>

<<<<<<< HEAD:src/components/Header/Navbar/Navbar.jsx
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
=======
          <nav className="menu-links">
            <a className="active" href="/">Accueil</a>
            <a href="/produits">Produits</a>
            <a href="/about">À Propos</a>
            <a href="tel:+212600000000">
              <FaPhoneAlt className="top-icon" /> Contact
            </a>
          </nav>
>>>>>>> cbde6eeb34b1197f7c109ce14eaf5dacef20efa6:src/components/Navbar/Navbar.jsx

        <div className="right-contact">
  
    <a className="whatsapp-main" href="https://wa.me/212600000000">
  <FaWhatsapp className="whatsapp-icon" />
  WhatsApp
</a>
 
</div>
        </div>
      </header>
    </>
  );
}