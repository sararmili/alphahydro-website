
import "./Footer.css";
import { FaFacebookF, FaWhatsapp} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="logo">
            <span>Alpha</span>Hydro
          </h2>
          <p>
           Spécialiste en pièces détachées et accessoires pour engins de chantier CAT, garantissant qualité et performance.
          </p>

          <div className="socials">
               <a 
                  href="https://www.facebook.com/Alphahydrotaza" target="_blank"  rel="noreferrer">
              <FaFacebookF />
              </a>

               <a 
                  href="https://wa.me/212689777336" 
                  target="_blank" 
                  rel="noreferrer"
                >
              <FaWhatsapp />
              </a>
          </div>
        </div>

        {/* NAV */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li>Accueil</li>
            <li>Produits</li>
            <li>À Propos</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="location-icon" />
            <span>ANGLE DE MOHAMED CHAOUI ET CKB BNOU NAFIAE Imm 42 - TAZA</span>
          </div>

         

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+212 6 89 77 73 36</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>stealphahydro@gmail.com</span>
          </div>
        </div>

        {/* HOURS */}
        <div className="footer-col">
          <h3>Horaires d'ouverture</h3>

          <div className="contact-item">
            <FaClock />
            <span>Lundi - Samedi</span>
          </div>
          <p>9h00 - 13h00</p>
          <p>15h00 - 18h30</p>

          <div className="contact-item">
            <FaClock />
           
            <span>Dimanche</span>
          </div>
          <p>Fermé</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AlphaHydro. Tous droits réservés.
      </div>
    </footer>
  );
}