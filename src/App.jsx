import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
=======
>>>>>>> cbde6eeb34b1197f7c109ce14eaf5dacef20efa6
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
=======
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:id" element={<ProductDetails />} />
        <Route path="*" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

      <Footer /> 
>>>>>>> cbde6eeb34b1197f7c109ce14eaf5dacef20efa6
    </BrowserRouter>
  );
}

export default App;