// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import ProductCardList from './pages/ProductCardList';
import ProductDetail from '.././src/component/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductCardList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="text-center mt-10">404 Not Found</div>} />
      </Routes>

    </Router>
  );
}
