import React from 'react';
import { PawPrint, Mail, Heart } from 'lucide-react';

const Aboutus = () => {
  return (
    <div className="max-w-4xl mt-25 mb-28 mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-red-500">About Pet Junction</h1>
        <PawPrint className="mx-auto text-cyan-500 mb-4" size={48} />
      </div>

      <div className="grid gap-6">
        {/* Our Story Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, Pet Junction was born from a passion for connecting pets with loving families. 
            What started as a small local initiative has grown into a trusted community hub for pet lovers.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We strive to create lasting bonds between pets and their future families, ensuring every 
            animal finds their forever home. Our commitment extends to providing education, support, 
            and resources to pet owners.
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
            <p className="text-gray-600">Qualified veterinarians and pet specialists</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Mail className="mx-auto text-blue-500 mb-2" size={32} />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Always here for you and your pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;