// src/Pages/About-us.jsx

import React, { useEffect } from 'react';
import { PawPrint, Mail, Heart } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      <Helmet>
        <title>About PetJunction | Our Mission to Redefine Pet Care in Udaipur</title>

        <meta
          name="description"
          content="Discover PetJunction — Udaipur’s trusted pet care brand offering professional dog grooming, cat boarding, and pet training. Learn about our story, mission, and commitment to providing safe and loving services for every pet."
        />

        <meta
          name="keywords"
          content="About PetJunction, pet services in Udaipur, dog grooming Udaipur, cat boarding Udaipur, dog training Udaipur, pet care center Udaipur, best pet service Udaipur, PetJunction mission, Udaipur pet care, about pet company"
        />

        <link rel="canonical" href="https://www.petjunction.in/about-us" />

       
        <meta property="og:title" content="About PetJunction | Our Mission to Redefine Pet Care in Udaipur" />
        <meta property="og:description" content="Discover PetJunction — Udaipur’s trusted pet care brand offering professional dog grooming, cat boarding, and pet training. Learn about our mission and team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petjunction.in/about-us" />
        <meta property="og:site_name" content="PetJunction" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About PetJunction | Our Mission to Redefine Pet Care in Udaipur" />
        <meta name="twitter:description" content="Discover PetJunction — Udaipur’s trusted pet care brand offering professional dog grooming, cat boarding, and pet training." />


      </Helmet>

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