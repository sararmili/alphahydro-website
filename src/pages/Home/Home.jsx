import "./Home.css";
import Header from "../../components/Header/Header";
import { categories } from "../../data/categories";

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Pièces & Accessoires pour <br />
              <span>Camions et Engins Lourds</span>
            </h1>
            <p>Qualité professionnelle pour transport et mécanique</p>

            <div className="hero-buttons">
              <a href="/produits" className="primary-btn">
                Voir les produits →
              </a>
              <a href="/contact" className="secondary-btn">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-title">
          <h2>Nos Catégories</h2>
          <p>Découvrez notre gamme complète de produits</p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}