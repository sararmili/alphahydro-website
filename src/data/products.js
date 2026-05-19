import filterImg from "../assets/images/filter.jpg";
import freinage from "../assets/images/Kit_freinage.jpg";
import Huile from "../assets/images/vasco.jpg";
import Amortisseur from "../assets/images/Amortisseur.jpg";
import dentImg from "../assets/images/images.jpg";
import pompeHydraulique from "../assets/images/pompeHydraulique.png";
import capteur from "../assets/images/capteur.png";
import battery from "../assets/images/battery.png";
import Godet from "../assets/images/Godet.png";
import Joint_Torique from "../assets/images/Joint_Torique.png";
import Courroies from "../assets/images/Courroies.png";
import Accessoires from "../assets/images/Accessoires.png";
import Fluide_Graisse from "../assets/images/Fluide_Graisse.png";
import distributeur from "../assets/images/distributeur.png";
import Reservoir from "../assets/images/Reservoir.png";
import pompePistonImg from "../assets/images/pompePistonImg.png";
import verinsImg from "../assets/images/verinsImg.png";
import commandePneumatiqueImg from "../assets/images/commandePneumatiqueImg.png";
import flexibleHydraulique from "../assets/images/flexibleHydraulique.png";



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
  {
  id: 7,
  name: "Pompe hydraulique pour engins lourds",
  category: "Pièces moteur",
  brand: "CAT",
  status: "Disponible",
  ref: "PMP-007-HD",
  image: pompeHydraulique,
  description: "Pompe hydraulique robuste pour engins de chantier CAT et machines lourdes.",
},
{
  id: 8,
  name: "Capteur hydraulique industriel",
  category: "Électricité",
  brand: "CAT",
  status: "Disponible",
  ref: "CPT-008-HD",
  image: capteur,
  description: "Capteur hydraulique haute précision pour engins de chantier et systèmes industriels lourds.",
},
{
  id: 9,
  name: "Batterie industrielle haute performance",
  category: "Électricité",
  brand: "CAT",
  status: "Disponible",
  ref: "BAT-009-HD",
  image: battery,
  description: "Batterie robuste et fiable pour engins de chantier, camions lourds et équipements industriels.",
},
{
  id: 10,
  name: "Godet renforcé pour excavatrice",
  category: "Pièces moteur",
  brand: "CAT",
  status: "Disponible",
  ref: "GDT-010-HD",
  image: Godet,
  description: "Godet robuste et renforcé pour excavatrices et engins de chantier lourds, conçu pour une résistance maximale.",
},
{
  id: 11,
  name: "Joint torique industriel",
  category: "Transmission",
  brand: "MAN",
  status: "Disponible",
  ref: "JTR-011-HD",
  image: Joint_Torique,
  description: "Joint torique haute résistance pour systèmes hydrauliques et équipements industriels lourds.",
},
{
  id: 12,
  name: "Courroies industrielles renforcées",
  category: "Transmission",
  brand: "Volvo",
  status: "Disponible",
  ref: "CRR-012-HD",
  image: Courroies,
  description: "Courroies haute résistance pour moteurs industriels, engins lourds et systèmes de transmission.",
},
{
  id: 13,
  name: "Accessoires industriels pour engins",
  category: "Électricité",
  brand: "Mercedes-Benz",
  status: "Disponible",
  ref: "ACC-013-HD",
  image: Accessoires,
  description: "Ensemble d’accessoires et équipements pour engins lourds et véhicules industriels.",
},
{
  id: 14,
  name: "Fluides et graisse industriels",
  category: "Huiles & lubrifiants",
  brand: "MAN",
  status: "Disponible",
  ref: "FLD-014-HD",
  image: Fluide_Graisse,
  description: "Huiles hydrauliques, fluides moteur et graisse haute performance pour engins lourds et équipements industriels.",
},
{
  id: 15,
  name: "Distributeur hydraulique industriel",
  category: "Transmission",
  brand: "Volvo",
  status: "Disponible",
  ref: "DST-015-HD",
  image: distributeur,
  description: "Distributeur hydraulique haute précision pour systèmes industriels et engins de chantier lourds.",
},
{
  id: 16,
  name: "Réservoir hydraulique industriel",
  category: "Huiles & lubrifiants",
  brand: "DAF",
  status: "Disponible",
  ref: "RSV-016-HD",
  image: Reservoir,
  description: "Réservoir hydraulique robuste pour systèmes industriels et engins de chantier lourds.",
},
{
  id: 18,
  name: "Vérins hydrauliques industriels",
  category: "Transmission",
  brand: "Mercedes-Benz",
  status: "Disponible",
  ref: "VRN-018-HD",
  image: verinsImg,
  description: "Vérins hydrauliques robustes pour engins de chantier et équipements industriels lourds.",
},
{
  id: 19,
  name: "Commande pneumatique industrielle",
  category: "Électricité",
  brand: "Scania",
  status: "Disponible",
  ref: "CMD-019-HD",
  image: commandePneumatiqueImg,
  description: "Commande pneumatique haute précision pour systèmes industriels et engins de chantier lourds.",
},
{
  id: 20,
  name: "Flexible hydraulique renforcé",
  category: "Hydraulique",
  brand: "MAN",
  status: "Disponible",
  ref: "FLX-020-HD",
  image: flexibleHydraulique,
  description:
    "Flexible hydraulique haute pression pour camions, engins lourds et systèmes industriels.",
},
  

];