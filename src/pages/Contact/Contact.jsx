import "./Contact.css";
import contactBg from "../../assets/images/background.png";
import { useState } from "react";

import {
  FaCog,
  FaEnvelope,
  FaUser,
  FaTag,
  FaPen,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { FiHeadphones, FiShield, FiAward } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
        `Nom: ${formData.name}
    Email: ${formData.email}

    Message:
    ${formData.message}`
    );

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=contact@alphahydro.fr&su=${subject}&body=${body}`,
        "_blank"
    );
    };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-overlay">
          <p className="breadcrumb">Accueil › Contact</p>
          <h1>Contactez-Nous</h1>
          <p>
            Notre équipe est à votre écoute pour répondre à toutes vos demandes
            <br />
            et vous accompagner dans vos projets.
          </p>

          <div className="hero-divider">
            <span></span>
            <FaCog />
            <span></span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        <div className="contact-grid">

          {/* FORM */}
          <div className="contact-card">
            <h2><FaEnvelope /> Envoyez-nous un message</h2>
            <div className="title-line"></div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">

                <div className="input-box">
                  <FaUser />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <FaEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-box">
                <FaTag />
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box textarea-box">
                <FaPen />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                <FaPaperPlane />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-card">
            <h2><FaPhoneAlt /> Nos coordonnées</h2>
            <div className="title-line"></div>

            <div className="info-map-layout">

              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Adresse</h4>
                    <p>Zone Industrielle Sud</p>
                    <p>123 Avenue des Poids Lourds</p>
                    <p>Agadir, Maroc</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaPhoneAlt /></div>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+212 6 23 45 67 89</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    <p>contact@alphahydro.fr</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaClock /></div>
                  <div>
                    <h4>Horaires</h4>
                    <p>Lundi - Vendredi : 8h00 - 18h00</p>
                    <p>Samedi : 9h00 - 13h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="map-box">
                <a
                  className="map-click"
                  href="https://www.google.com/maps/search/?api=1&query=34.226667,-4.008889"
                  target="_blank"
                  rel="noreferrer"
                >
                  <iframe
                    title="AlphaHydro Localisation"
                    src="https://www.google.com/maps?q=34.226667,-4.008889&z=18&output=embed"
                    loading="lazy"
                  ></iframe>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="contact-services">
          <div className="service-box">
            <FiHeadphones />
            <div>
              <h4>Support Rapide</h4>
              <p>Réponse garantie sous 24h</p>
            </div>
          </div>

          <div className="service-box">
            <FiShield />
            <div>
              <h4>Service Professionnel</h4>
              <p>Une équipe experte à votre service</p>
            </div>
          </div>

          <div className="service-box">
            <FiAward />
            <div>
              <h4>Qualité Garantie</h4>
              <p>Produits de qualité certifiée</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}