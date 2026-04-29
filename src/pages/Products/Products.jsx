import React, { useState } from "react";
import { products } from "../../data/products";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [brand, setBrand] = useState("Toutes");

  const categories = [
    "Toutes",
    "Pièces moteur",
    "Huiles & lubrifiants",
    "Freinage",
    "Suspension",
    "Transmission",
    "Électricité",
  ];

  const brands = ["Toutes", "Volvo", "Scania", "MAN", "Mercedes-Benz", "DAF"];

  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "Toutes" || p.category === category;

    const matchBrand = brand === "Toutes" || p.brand === brand;

    return matchSearch && matchCategory && matchBrand;
  });

  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Catalogue Produits</h1>
        <p>Découvrez notre gamme complète de pièces et accessoires</p>
      </div>

      <div className="products-container">
        <div className="search-wrapper">
            <div className="search-box">
                <input
                type="text"
                placeholder="Rechercher par nom ou référence..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
        <div className="products-layout">
          {/* FILTER */}
          <div className="filters-box">
             <h3>☷ Filtres</h3>

             <p className="filter-title">Catégorie</p>
             {categories.map((cat) => (
                <label className="filter-option" key={cat}>
                 <input
                        type="radio"
                        name="category"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                 />
                 {cat === "Toutes" ? "Toutes les catégories" : cat}
                </label>
            ))}

            <p className="filter-title">Marque</p>
            {brands.map((b) => (
                <label className="filter-option" key={b}>
                <input
                    type="radio"
                    name="brand"
                    checked={brand === b}
                    onChange={() => setBrand(b)}
                />
            {b === "Toutes" ? "Toutes les marques" : b.toUpperCase()}
            </label>
            ))}
            </div>

          {/* PRODUCTS */}
          <div className="products-content">
            <p className="results-count">
              {filteredProducts.length} produits trouvés
            </p>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-box">
                    <img src={product.image} alt={product.name} />

                    <div className="card-badges">
                      <span className="category-badge">
                        {product.category}
                      </span>
                      <span className="brand-badge">
                        {product.brand}
                      </span>
                    </div>
                  </div>

                  <div className="product-info">
                    <h3>{product.name}</h3>

                    <p className="product-ref">
                      Réf: {product.ref || "FLT-001-HD"}
                    </p>

                    <p className="stock">● En stock</p>

                    <div className="product-actions">
                      <a
                        className="details-btn"
                        href={`https://wa.me/212600000000?text=Bonjour, je veux ${product.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        👁 Détails
                      </a>

                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;