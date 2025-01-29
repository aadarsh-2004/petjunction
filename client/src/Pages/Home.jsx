import React from "react";
import HeroSection from "../Components/HeroSection";
import MembershipSection from "../Components/Membership";
import Gallery from "../Components/Gallery";
import BoardingPage from "../Components/Boarding";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MembershipSection />
      <BoardingPage />
      
      <Gallery />
    </div>
  );
};

export default Home;
