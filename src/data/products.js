import filterImg from "../assets/images/filter.jpg";
import freinage from "../assets/images/Kit_freinage.jpg";
import Huile from "../assets/images/vasco.jpg";
import Amortisseur from "../assets/images/Amortisseur.jpg";
import dentImg from "../assets/images/images.jpg";



export const products = [
  {
    id: 1,
    name: "Filtre à huile haute performance",
    category: "Pièces moteur",
    brand: "Volvo",
    status: "Disponible",
    image:filterImg,
    description: "Compatible avec la plupart des moteurs diesel lourds.",
  },
  {
    id: 2,
    name: "Kit de freinage complet",
    category: "Freinage",
    brand: "Scania",
    status: "Disponible",
    image:freinage,
    description: "Pour camions Volvo et Scania.",
  },
  {
    id: 3,
    name: "Huile moteur 15W-40",
    category: "Huiles & lubrifiants",
    brand: "MAN",
    status: "Disponible",
    image:Huile,
    description: "Qualité professionnelle pour usage intensif.",
  },
  {
    id: 4,
    name: "Amortisseur pour engins lourds",
    category: "Suspension",
    brand: "Volvo",
    status: "Disponible",
    image: Amortisseur,
    description: "Compatible avec tracteurs et bulldozers.",
  },
  
 {
    id: 6,
    name: "Dent & Adaptateur pour godet",
    category: "Pièces engins",
    brand: "Générique",
    status: "Disponible",
    image: dentImg,
    description: "Dents et adaptateurs robustes pour engins de chantier (tracteurs, pelles mécaniques). Haute résistance pour usage intensif.",
  },
  

];