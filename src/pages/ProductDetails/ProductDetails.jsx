import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="details-page">
        <Link to="/produits">← Retour aux produits</Link>
        <h2>Produit introuvable</h2>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="back-container">
            <Link className="back-link" to="/produits">
                ← Retour aux produits
            </Link>
      </div>

      <div className="details-wrapper">
        <div className="details-top">
          <div className="details-image-card">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-info-card">
            <span className="detail-badge">{product.category}</span>
            <h1>{product.name}</h1>

            <p><strong>Référence:</strong> {product.ref || "FLT-001-HD"}</p>
            <p><strong>Marque:</strong> {product.brand}</p>

            <div className="stock-detail">
                <span className="stock-icon">✔</span>
                <span>En stock - Disponible immédiatement</span>
            </div>
            <hr />

            <h3>Description</h3>
            <p className="description-detail">{product.description}</p>

            <div className="buttons-group">
                <a
                    className="whatsapp-btn"
                    href={`https://wa.me/212700808100?text=Bonjour, je veux ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp className="btn-icon" />
                    Contacter via WhatsApp
                </a>

                <a
                    className="email-btn"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=c.harika@gmail.com&su=Demande produit&body=Bonjour,%0D%0AJe suis intéressé par: ${product.name}%0D%0AMerci.`}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaEnvelope className="btn-icon" />
                    Envoyer un email
                </a>
            </div>
           

            <div className="mini-info">
             
              <div>
                <span>🛡</span>
                <strong>Garantie</strong>
                <p>2 ans</p>
              </div>
              <div>
                <span>↩</span>
                <strong>Retour</strong>
                <p>30 jours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-bottom">
          <div className="spec-card">
            <h2>Spécifications Techniques</h2>
            <div className="spec-row"><span>Type</span><strong>{product.category}</strong></div>
            <div className="spec-row"><span>Compatibilité</span><strong>Moteurs Volvo, DAF, MAN</strong></div>
            <div className="spec-row"><span>Diamètre</span><strong>82 mm</strong></div>
            <div className="spec-row"><span>Hauteur</span><strong>142 mm</strong></div>
            <div className="spec-row"><span>Pression max</span><strong>10 bar</strong></div>
          </div>

          <div className="features-card">
            <h2>Caractéristiques</h2>
            <p>✓ Média filtrant haute efficacité</p>
            <p>✓ Valve anti-retour intégrée</p>
            <p>✓ Résistant aux hautes températures</p>
            <p>✓ Certification ISO 9001</p>
            <p>✓ Garantie constructeur 2 ans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;