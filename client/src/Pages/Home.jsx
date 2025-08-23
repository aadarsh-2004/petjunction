// src/Pages/Home.jsx

import React from "react";
import SEO from "../SEO";
import HeroSection from "../Components/HeroSection";
import MembershipSection from "../Components/Membership";
import Gallery from "../Components/Gallery";
import BoardingPage from "../Components/Boarding";

const Home = () => {
  const websiteURL = "https://www.petjunction.in/"; // Replace with your actual domain

  return (
    <div>
      {/* --- STEP 2: Add the SEO component here --- */}
      <SEO
        title="PetJunction | Best Pet Services in Udaipur "
        description="PetJunction offers professional pet services in Udaipur, including expert dog grooming, reliable pet boarding, and personalized dog training. We are dedicated to your pet's well-being. Get an instant quote or book an appointment today."
        canonical={websiteURL}
      />

      <HeroSection />
      <MembershipSection />
      <BoardingPage />
      <Gallery />
    </div>
  );
};

export default Home;