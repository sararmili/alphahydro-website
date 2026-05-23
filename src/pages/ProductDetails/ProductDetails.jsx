import React, { useState } from "react";
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

  const [mainImage, setMainImage] = useState(product.image);

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
            <img src={mainImage} alt={product.name} />

            <div className="thumbnails">
              {(product.images || [product.image]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`thumb ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="details-info-card">
            <span className="detail-badge">{product.category}</span>

            <h1>{product.name}</h1>

            <div className="product-meta">
              <p>
                <strong>Référence:</strong>
                <span>{product.ref || "FLT-001-HD"}</span>
              </p>

              <p>
                <strong>Marque:</strong>
                <span>{product.brand}</span>
              </p>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;