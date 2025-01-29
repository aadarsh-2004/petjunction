import React, { useState, useEffect } from "react";
import homesection from "../assets/homesection.jpg";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt2.png',
    'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt3.png',
    'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt4.png',
    'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt1.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Increased interval to 3 seconds for better user experience

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-15 md:mt-10   flex flex-col md:flex-row justify-center">
      {/* Background Image */}
      <img
        src={homesection}
        className="absolute  md:top-26 inset-0 w-full h-full md:h-fit  object-cover z-0"
        alt="Hero Background"
      />

      <div className="relative z-10 flex  flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Text Section */}
        <div className="w-full md:w-2/2  md:text-left mb-8 md:mb-0 md:mr-8">
          <h2 className="text-xl md:text-4xl text-center md:text-left font- text-gray-800 mb-4">
            Top-notch Pet Services at Competitive Prices
          </h2>
          
          <h3 className="inline-block text-left md:text-left p-2 md:p-3 mb-4 rounded-xl text-base md:text-lg font-medium bg-[#e3edec] backdrop">
            <span className="text-green-600 font-bold mr-2">5000+</span>
            Trusted Pet Masters
          </h3>

          {/* Services Card */}
          <div className="bg-gray-50 mt-6 md:w-[650px] w-full shadow-2xl rounded-2xl overflow-hidden">
            {/* Services Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 bg-white p-4">
              {[
                { icon: "dog-training.png", name: "Dog Training" },
                { icon: "dog-walking.png", name: "Dog Walking" },
                { icon: "dog-grooming.png", name: "Dog Grooming" },
                { icon: "dog-boarding.png", name: "Dog Boarding" },
                { icon: "dog-sitting.png", name: "Dog Sitting" },
                
                
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center hover:text-amber-400 transition-colors"
                >
                  <img
                    className="w-16 h-16 md:w-25 md:h-25 mb-2 p-3 border-2 hover:border-amber-400 border-gray-200 rounded-2xl"
                    src={`https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/${service.icon}`}
                    
                    alt={service.name}
                  />
                  <h2 className="font-medium text-sm md:text-base text-center">{service.name}</h2>
                </div>
              ))}
            </div>

            {/* View Package Button */}
            <div className="flex justify-end p-4">
              <button className="bg-[#ef786d] text-white font-medium p-2 md:p-3 rounded-xl text-base md:text-xl w-full md:w-1/2">
                View Package
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Image Section */}
        <div className=" md:w-1/2  hidden   md:flex justify-center">
          <img 
            src={images[currentIndex]} 
            alt="Sliding pet image" 
            className="max-w-full h-auto md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;