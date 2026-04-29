import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <span>AH</span>
            <h3>AlphaHydro</h3>
          </div>
          <p>
            Votre partenaire de confiance pour les pièces, huiles et accessoires
            de camions et engins lourds au Maroc.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <a href="/">Accueil</a>
          <a href="/produits">Produits</a>
          <a href="/about">À Propos</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+212 6 00 00 00 00</p>
          <p>contact@alphahydro.ma</p>
          <p>Casablanca, Maroc</p>
        </div>

        <div>
          <h4>Horaires</h4>
          <p>Lundi - Vendredi : 8h - 18h</p>
          <p>Samedi : 9h - 13h</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AlphaHydro. Tous droits réservés.
      </div>
    </footer>
  );
}