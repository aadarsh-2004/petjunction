
import BoardingPage from "./Pages/Boarding";
import Home from "./Pages/Home";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import WhatsappButton from './Components/WhatsappButton';
import Footer from './Components/Footer';
import PetProducts from './Components/PetProducts';
import PopupBanner from './Components/PopupBanner';

// Create a wrapper component to handle the conditional rendering
const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHomePage && <PopupBanner />}
      <WhatsappButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/shop" element={<PetProducts />} />
        <Route path="/products" element={<PetProducts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

