import React from 'react';
import { Scissors, ShowerHead, Brush, Smile } from 'lucide-react';

const DogGrooming = () => {
  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">Dog Grooming Services</h1>
        <p className="text-gray-600 text-lg">
          Pamper your furry friend with our top-notch grooming services. From baths to haircuts, we’ve got it all!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Bath & Brush */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <ShowerHead className="mx-auto text-pink-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Bath & Brush</h3>
          <p className="text-gray-600 mb-4">A refreshing bath and thorough brushing to keep your dog clean and shiny.</p>
          <p className="text-3xl font-bold text-pink-800 mb-4">₹800<span className="text-lg text-gray-600">/session</span></p>
          <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
            Book Now
          </button>
        </div>

        {/* Haircut & Styling */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <Scissors className="mx-auto text-pink-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Haircut & Styling</h3>
          <p className="text-gray-600 mb-4">Professional haircuts tailored to your dog’s breed and style.</p>
          <p className="text-3xl font-bold text-pink-800 mb-4">₹1,200<span className="text-lg text-gray-600">/session</span></p>
          <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
            Book Now
          </button>
        </div>

        {/* Full Grooming Package */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <Brush className="mx-auto text-pink-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Full Grooming Package</h3>
          <p className="text-gray-600 mb-4">Includes bath, haircut, nail trimming, and ear cleaning.</p>
          <p className="text-3xl font-bold text-pink-800 mb-4">₹1,800<span className="text-lg text-gray-600">/session</span></p>
          <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
            Book Now
          </button>
        </div>
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
  );
};

export default DogGrooming;