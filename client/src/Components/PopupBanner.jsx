import React, { useState } from 'react';
import { X, Heart, PawPrint } from 'lucide-react';

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
 
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 h-fit right-0 animate-bounce z-10 md:left-auto  bg-gradient-to-r from-cyan-200  to-cyan-300 rounded-lg shadow-xl overflow-hidden animate-slide-up">
      <div className="relative  gap-4 p-1 md:p-2  flex">
        {/* Close Button */}
        {/* <button 
          onClick={() => setIsVisible(false)}
          className="absolute bg-black ml-4 top-2    text-[#f83e2d] hover:text-white transition-colors"
        >
          <X size={20} />
        </button> */}

        {/* Icon */}
        <div className=" md:mb-4  ">
          <div className="bg-white p-3 mt-3  rounded-full ">
            <PawPrint     className="text-[#f83e2d] " />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-1">
          <h3 className="text-md font-bold text-gray-800 mb-2">
            Find Your Perfect Companion
          </h3>
          <p className="text-gray-700 text-[10px] md:text-xs  mb-4">
            Give a forever home to a furry friend! Adopt a pet today and save a life.
          </p>

          
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2  ">
            <button className=" w-full text-[8px] md:text-xs bg-white text-black hover:text-[#f83e2d] hover:scale-105 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Heart size={20} />
              Adopt Now
            </button>

            <button 
              onClick={() => setIsVisible(false)}
              className="w-full text-[9px] md:text-xs bg-transparent border text-white hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Learn More
        </button>
          
        </div>
        
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-white/10 rounded-full" />
    </div>
  );
};

export default PopupBanner;