import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SlickCarousel from './Components/Slick'
import WhatsappButton from './Components/WhatsappButton'
import TestimonialSlider from './Components/TestimonialSlider'
import Footer from './Components/Footer'
import PetProducts from './Components/PetProducts'
function App() {
  
  return (
    <div >
      <Navbar/>
      
      <HeroSection/>
      <WhatsappButton/>
      <TestimonialSlider/> 
      <PetProducts/>
      <Footer/>
      
      

      
    
    </div>

  )
}

export default App
