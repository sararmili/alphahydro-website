import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:id" element={<ProductDetails />} />
        <Route path="*" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

      <Footer /> 
    </BrowserRouter>
  );
}

export default App;