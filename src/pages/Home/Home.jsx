import "./Home.css";
import Navbar from "../../components/Header/Navbar/Navbar";

 import {
  FaCog,
  FaOilCan,
  FaShieldAlt,
  FaBolt,
  FaCogs,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";

import { FaHeadset } from "react-icons/fa";
import { GiCarWheel, GiGearHammer } from "react-icons/gi";
import heroVideo from "../../assets/videos/alphaHydro.mp4";
import bgCategories from "../../assets/images/categoryBg.png";
import moteurImg from "../../assets/images/catimages/8.jpg";
import huileImg from "../../assets/images/catimages/2.png";
import freinageImg from "../../assets/images/catimages/3.png";
import suspensionImg from "../../assets/images/catimages/4.png";
import transmissionImg from "../../assets/images/catimages/5.png";
import electriciteImg from "../../assets/images/catimages/6.png";
import aboutImg from "../../assets/images/about.png";
import heroAbout from "../../assets/images/Apropos.png";

const categories = [
  {
    title: "Pièces moteur",
    desc: "Composants moteur de qualité",
    icon: <FaCog />,
    image: moteurImg,
  },
  {
    title: "Huiles & lubrifiants",
    desc: "Gamme complète de lubrifiants",
    icon: <FaOilCan />,
    image: huileImg,
  },
  {
    title: "Freinage",
    desc: "Systèmes de freinage fiables",
    icon: <GiCarWheel />,
    image: freinageImg,
  },

  {
    title: "Transmission",
    desc: "Pièces de transmission",
    icon: <FaShieldAlt />,
    image: transmissionImg,
  },
  {
    title: "Électricité",
    desc: "Composants électriques",
    icon: <FaBolt />,
    image: electriciteImg,
  },
];

export default function Home() {
  return (
    <div className="home-page">
      

      <section className="hero">
       <video className="hero-bg" autoPlay loop muted playsInline>
  <source src={heroVideo} type="video/mp4" />
</video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-brand-row">
            <div className="hero-text-block">
              <h1 className="hero-wordmark">
                <span>ALPHA</span>
                <strong>HYDRO</strong>
              </h1>
              <div className="hero-line"></div>
            </div>
          </div>

          <p className="hero-subtitle">LA FORCE DERRIERE VOS MACHINES</p>

          <div className="hero-features">
            <div className="hero-feature">
              <FaCog className="hero-icon" />
              <p>
                PIÈCES DE
                <br />
                QUALITÉ
              </p>
            </div>

            <div className="separator"></div>

            <div className="hero-feature">
              <FaOilCan className="hero-icon" />
              <p>
                HUILES &
                <br />
                LUBRIFIANTS
              </p>
            </div>

            <div className="separator"></div>

            <div className="hero-feature">
              <FaShieldAlt className="hero-icon" />
              <p>
                PERFORMANCE
                <br />
                GARANTIE
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <a className="primary-btn" href="/produits">
              Voir les produits →
            </a>
            <a className="secondary-btn" href="/contact">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section
        className="categories-dark"
        style={{
          backgroundImage: `url(${bgCategories})`,
        }}
      >
        <div className="overlay"></div>

        <div className="categories-header">
          <span>● NOS CATÉGORIES ●</span>
          <h2>
            Découvrez notre gamme complète <br />
            de <strong>produits</strong>
          </h2>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="dark-category-card" key={index}>
              <div className="cat-content">
                <div className="cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <a href="/produits">Voir les produits →</a>
              </div>

              <div className="cat-image">
                <img src={cat.image} alt={cat.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-pro">
        <div className="about-pro-container">
          <div className="about-pro-left">
            <span className="about-small">À PROPOS DE NOUS</span>

            <h2>
              AlphaHydro, la force <br />
              derrière vos machines
            </h2>

            <p>
              AlphaHydro est spécialisée dans les pièces détachées, huiles et
              composants pour engins de chantier, poids lourds et équipements
              industriels.
            </p>

            <p>
              Notre mission est simple : garantir la performance, la durabilité
              et la fiabilité de vos machines grâce à des produits premium.
            </p>

            <div className="about-features">
              <div className="feature">
                <FaShieldAlt className="feature-icon" />
                <div>
                  <h4>QUALITÉ PREMIUM</h4>
                  <p>Produits sélectionnés avec les meilleurs standards</p>
                </div>
              </div>

             <div className="feature">
  <FaHeadset className="feature-icon" />
  <div>
    <h4>SERVICE RAPIDE</h4>
    <p>Disponibilité rapide et support de qualité</p>
  </div>
</div>

<div className="about-more">
  <a href="/about" className="about-link">
    Voir plus
    <FaArrowRight className="arrow-icon" />
  </a>
</div>
            </div>
          </div>

          <div className="about-pro-right">
            <img src={aboutImg} alt="AlphaHydro machines" />
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>7+</h3>
            <p>Années d’expérience</p>
          </div>

          <div className="stat">
            <h3>500+</h3>
            <p>Références produits</p>
          </div>

          <div className="stat">
            <h3>200+</h3>
            <p>Clients satisfaits</p>
          </div>

          <div className="stat">
            <h3>10+</h3>
            <p>Marques partenaires</p>
          </div>
        </div>
      </section>

   
    </div>
  );
}