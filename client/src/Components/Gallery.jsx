import React, { useState, useEffect } from "react";
import { Heart, Camera, Sparkles, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "../assets/IMG_7689.jpg";
import photo9 from "../assets/IMG_8049.jpg";
import photo3 from "../assets/IMG_7785.jpg";
import photo4 from "../assets/IMG_7533.jpg";
import photo8 from "../assets/imggg3.jpg";
import photo2 from "../assets/careimg.jpg";
import photo18 from "../assets/cutepet.jpg";
import photo21 from "../assets/snowpet.jpg";
import photo22 from "../assets/standdog.jpg";
import photo23 from "../assets/ss.png";
import photo24 from "../assets/fswalk.jpg";
import photo29 from "../assets/sit.jpg";
import photo28 from "../assets/stand.jpg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: photo1, title: "Happy Pup", category: "Training" },
    { src: photo21, title: "Snow Day Fun", category: "Adventure" },
    { src: photo22, title: "Standing Proud", category: "Portrait" },
    { src: photo8, title: "Playful Moments", category: "Play" },
    { src: photo23, title: "Cute Companion", category: "Portrait" },
    { src: photo24, title: "Walk Time", category: "Walking" },
    { src: photo3, title: "Outdoor Joy", category: "Adventure" },
    { src: photo18, title: "Adorable Friend", category: "Portrait" },
    { src: photo9, title: "Happy Tail", category: "Play" },
    { src: photo2, title: "Caring Moments", category: "Care" },
    { src: photo28, title: "Standing Tall", category: "Training" },
    { src: photo29, title: "Sitting Pretty", category: "Training" },
    { src: photo4, title: "Sweet Smile", category: "Portrait" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Camera Icons */}
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 animate-bounce">
          <Camera className="w-4 sm:w-6 h-4 sm:h-6 text-purple-400/60" />
        </div>
        <div className="absolute bottom-32 left-16 sm:left-32 animate-bounce delay-700">
          <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-pink-400/60" />
        </div>
        <div className="absolute top-1/3 right-8 sm:right-16 animate-bounce delay-300">
          <Sparkles className="w-3 sm:w-5 h-3 sm:h-5 text-cyan-400/60" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg animate-pulse">
              <Camera className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
            </div>
            <span className="text-sm sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Pet Gallery
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              🐾 Paw-some
            </span>{" "}
            <span className="text-gray-800">Moments</span>
          </h1>
          
          <h2 className="text-base sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            A gallery of adorable moments captured with our furry friends
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/5' : '1/1'
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1">{image.title}</h3>
                    <span className="text-xs sm:text-sm text-gray-200 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                    <Eye className="w-3 sm:w-4 h-3 sm:h-4 text-gray-800" />
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                     style={{
                       background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4) border-box',
                     }}>
                </div>
              </div>

              {/* Love Animation */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-red-500 fill-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 p-4 sm:p-6 lg:p-8 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Camera className="w-5 sm:w-6 h-5 sm:h-6 text-purple-500 animate-pulse" />
              <span className="text-base sm:text-lg font-bold text-gray-800">Want Your Pet Featured?</span>
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-pink-500 fill-current animate-pulse" />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Book our services and get professional photos of your furry friend!
            </p>
            <a href="/IForm">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mx-auto">
                <Camera className="w-4 sm:w-5 h-4 sm:h-5" />
                Book Photo Session
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 animate-pulse" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 sm:-top-16 right-0 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 sm:w-8 h-6 sm:h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
              />
              <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <span className="inline-block text-sm sm:text-base text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium">
                  {selectedImage.category}
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-sm sm:text-base">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;