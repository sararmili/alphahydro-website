import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-box">
          <div className="logo-icon">AH</div>
          <div>
            <h2>AlphaHydro</h2>
            <span>PIÈCES INDUSTRIELLES</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">Accueil</a>
          <a href="/produits">Produits</a>
          <a href="/about">À Propos</a>
          <a href="/contact">Contact</a>
          <a className="whatsapp-btn" href="https://wa.me/212600000000">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}