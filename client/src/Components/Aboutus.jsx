// src/Pages/Aboutus.jsx

import React, { useEffect } from 'react';
import { PawPrint, Mail, Heart } from 'lucide-react';
import SEO from "../SEO"; // Ensure this path is correct

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Our Pet Services in Udaipur | PetJunction"
        description="Learn about PetJunction's story, mission, and commitment to professional pet care in Udaipur. We are passionate about providing expert dog training, grooming, and pet boarding services for your furry friends."
        canonical="https://www.petjunction.in/aboutus"
      />
      <div className="max-w-4xl mt-25 mb-28 mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-cyan-700">PetJunction: Your Trusted Partner for Pet Care in Udaipur</h1>
          <PawPrint className="mx-auto text-cyan-500 mb-4" size={48} />
        </div>

        <div className="grid gap-6">
          {/* Our Story Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Pet Junction was born from a passion for connecting pets with loving families. 
              What started as a small local initiative has grown into a trusted community hub for pet lovers, specializing in professional dog grooming and training services.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to be the leading provider of high-quality **pet services in Udaipur**. We strive to create lasting bonds between pets and their owners by offering expert care, including our renowned **pet boarding service in Udaipur**, personalized dog training, and reliable pet walking daily service.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Heart className="mx-auto text-red-500 mb-2" size={32} />
              <h3 className="font-semibold mb-2">100+ Happy Families</h3>
              <p className="text-gray-600">Successfully matched with their perfect pets</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <PawPrint className="mx-auto text-cyan-500 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Qualified veterinarians and pet care specialists</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Mail className="mx-auto text-blue-500 mb-2" size={32} />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here for you and your pets</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;