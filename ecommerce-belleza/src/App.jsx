// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
//import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
//import NotFound from './pages/NotFound';


import { ProductProvider } from './context/ProductContext';

export default function App() {
  return (
    <Router>
      <ProductProvider>
        <div className="flex flex-col min-h-screen">
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/products" element={<Products />} /> */}
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </ProductProvider>
    </Router>
  );
}

