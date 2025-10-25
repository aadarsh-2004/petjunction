// src/Pages/Home.jsx

import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroSection from "../Components/HeroSection";
import MembershipSection from "../Components/Membership";
import Gallery from "../Components/Gallery";
import BoardingPage from "./Dog-boarding";

const Home = () => {
  const websiteURL = "https://www.petjunction.in/"; // Replace with your actual domain

  return (
    <div>
      {/* --- STEP 2: Add the SEO component here --- */}
      

      <Helmet>
         
       <title>PetJunction | Best Pet Services in Udaipur – Boarding, Grooming & Training</title>

<meta
  name="description"
  content="PetJunction offers trusted and professional pet services in Udaipur, including expert dog grooming, comfortable pet boarding, and customized dog training. We care for your pets like our own – book your service today!"
/>

<meta
  name="keywords"
  content="pet services in Udaipur, dog grooming Udaipur, pet boarding Udaipur, dog training Udaipur, pet grooming near me, pet boarding near me, dog training near me, cat grooming Udaipur, cat boarding Udaipur, PetJunction"
/>

<link rel="canonical" href="https://www.petjunction.in/" />


<meta property="og:title" content="PetJunction | Best Pet Services in Udaipur – Boarding, Grooming & Training" />
<meta property="og:description" content="Professional pet care services in Udaipur – grooming, boarding, and training by experts at PetJunction. Book your pet’s service today!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.petjunction.in/" />
<meta property="og:site_name" content="PetJunction" />


<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PetJunction | Best Pet Services in Udaipur – Boarding, Grooming & Training" />
<meta name="twitter:description" content="Professional pet care services in Udaipur – grooming, boarding, and training by experts at PetJunction." />
      </Helmet>

      <HeroSection />
      <MembershipSection />
      <BoardingPage />
      <Gallery />
    </div>
  );
};

export default Home;