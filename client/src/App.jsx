import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import WhatsappButton from './Components/WhatsappButton'

import Footer from './Components/Footer'
import PetProducts from './Components/PetProducts'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <WhatsappButton />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<PetProducts />} />
        <Route path="/products" element={<PetProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App ;
