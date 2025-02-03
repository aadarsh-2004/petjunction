import React, { useEffect } from 'react';
import { Scissors, ShowerHead, Brush } from 'lucide-react';

const DogGrooming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groomingServices = [
    {
      icon: ShowerHead,
      title: "Bath & Brush",
      description: "A refreshing bath and thorough brushing to keep your dog clean and shiny.",
      price: "800"
    },
    {
      icon: Scissors,
      title: "Haircut & Styling",
      description: "Professional haircuts tailored to your dog's breed and style.",
      price: "1,200"
    },
    {
      icon: Brush,
      title: "Full Grooming Package",
      description: "Includes bath, haircut, nail trimming, and ear cleaning.",
      price: "1,800"
    }
  ];

  return (
    <div className="relative max-w-6xl mt-24 mx-auto p-6">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-white/50  backdrop-blur-md flex items-start  justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-45 bg-pink-400 p-4 rounded-3xl text-black mb-4">Opening Soon</h2>
          
        </div>
      </div>

      {/* Content with blur effect */}
      <div className="relative  pointer-events-none">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">Dog Grooming Services</h1>
          <p className="text-gray-600 text-lg">
            Pamper your furry friend with our top-notch grooming services. From baths to haircuts, we've got it all!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {groomingServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <service.icon className="mx-auto text-pink-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-pink-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-3xl font-bold text-pink-800 mb-4">₹{service.price}<span className="text-lg text-gray-600">/session</span></p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-pink-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Treat Your Dog to a Spa Day!</h2>
          <p className="text-gray-200 mb-6">
            Book a grooming session today and let your dog shine!
          </p>
          <button className="bg-white text-pink-800 py-3 px-6 rounded-lg font-semibold hover:bg-pink-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DogGrooming;