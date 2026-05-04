import "./About.css";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";

import {
  FaCheckCircle,
  FaMedal,
  FaClock,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

import heroAbout from "../../assets/images/Apropos.png";
import aboutProduct from "../../assets/images/Apropos2.png";


export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroAbout})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>ACCUEIL › À PROPOS</span>
          <h1>À propos d’AlphaHydro</h1>
          <p>
            Spécialiste des pièces détachées, huiles et composants pour engins
            de chantier, poids lourds et équipements industriels.
          </p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-container about-intro">
          <div className="about-text">
            <span className="small-title">NOTRE HISTOIRE</span>
            <h2>Une expertise bâtie sur la performance et la confiance</h2>
            <p>
              Depuis plus de 15 ans, AlphaHydro accompagne les professionnels
              du transport, de l’industrie et du bâtiment en leur fournissant
              des produits de qualité supérieure.
            </p>
            <p>
              Notre savoir-faire, notre réactivité et notre engagement qualité
              font de nous un partenaire de confiance au quotidien.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutProduct} alt="Produits AlphaHydro" />
          </div>
        </div>

        <div className="about-container values-grid">
          <div className="value-card">
            <FaMedal />
            <h3>Qualité premium</h3>
            <p>
              Des produits rigoureusement sélectionnés selon les standards les
              plus exigeants.
            </p>
          </div>

          <div className="value-card">
            <FaClock />
            <h3>Service rapide</h3>
            <p>
              Livraison rapide et support client réactif pour maintenir vos
              lignes actives.
            </p>
          </div>

          <div className="value-card">
            <FaTools />
            <h3>Engagement durable</h3>
            <p>
              Des solutions fiables et durables pour la performance et la
              longévité de vos machines.
            </p>
          </div>

          <div className="value-card">
            <FaHandshake />
            <h3>Partenaire de confiance</h3>
            <p>
              Une équipe experte à votre écoute pour vous conseiller et vous
              accompagner.
            </p>
          </div>
        </div>

        <div className="about-container mission-section">
          <div className="mission-text">
            <span className="small-title">NOTRE MISSION</span>
            <h2>
              Garantir la performance, <br />
              la durabilité et la fiabilité <br />
              de vos machines.
            </h2>
            <p>
              Nous mettons tout en œuvre pour vous fournir des solutions
              adaptées à vos besoins.
            </p>
          </div>

          <div className="mission-box">
            <p>
              <FaCheckCircle /> Pièces détachées pour engins de chantier
            </p>
            <p>
              <FaCheckCircle /> Huiles et lubrifiants haute performance
            </p>
            <p>
              <FaCheckCircle /> Composants pour poids lourds
            </p>
            <p>
              <FaCheckCircle /> Équipements industriels et filtration
            </p>
          </div>
        </div>

        <div className="about-container team-section">
          <div className="team-text">
            <span className="small-title">NOTRE ÉQUIPE</span>
            <h2>Une équipe passionnée à votre service</h2>
            <p>
              Nos experts techniques et commerciaux travaillent chaque jour pour
              vous offrir le meilleur service.
            </p>
          </div>

       
        </div>
      </section>
    </div>
  );
}