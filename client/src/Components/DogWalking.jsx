import React from 'react';
import { PawPrint, Clock, ShieldCheck, MapPin, Heart, Star } from 'lucide-react';

const DogWalking = () => {
  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-800 mb-4">Dog Walking Services</h1>
        <p className="text-gray-600 text-lg">
          Give your furry friend the exercise and adventure they deserve with our professional dog walking services.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-cyan-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-6">Our Monthly Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <PawPrint className="mx-auto text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for a quick stroll around the neighborhood.</p>
            <p className="text-3xl font-bold text-cyan-800 mb-4">₹1,500<span className="text-lg text-gray-600">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" /> 30 minutes per walk
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" /> Insured walkers
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-600" /> 15 walks per month
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <Heart className="mx-auto text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Standard Plan</h3>
            <p className="text-gray-600 mb-4">Ideal for a longer, more engaging walk.</p>
            <p className="text-3xl font-bold text-cyan-800 mb-4">₹2,500<span className="text-lg text-gray-600">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" /> 1 hour per walk
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" /> Insured walkers
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600" /> Custom routes
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-600" /> 20 walks per month
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <PawPrint className="mx-auto text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Premium Plan</h3>
            <p className="text-gray-600 mb-4">The ultimate experience for your dog.</p>
            <p className="text-3xl font-bold text-cyan-800 mb-4">₹4,000<span className="text-lg text-gray-600">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" /> 1.5 hours per walk
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" /> Insured walkers
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600" /> Custom routes
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-cyan-600" /> Playtime included
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-600" /> 30 walks per month
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <ShieldCheck className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Trusted Professionals</h3>
            <p className="text-gray-600">
              All our walkers are background-checked, insured, and trained to handle dogs of all sizes and temperaments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Custom Routes</h3>
            <p className="text-gray-600">
              We tailor each walk to your dog's preferences, whether it's a park, trail, or neighborhood stroll.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">Playtime Included</h3>
            <p className="text-gray-600">
              Every walk includes playtime to keep your dog happy, healthy, and engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-gradient-to-r from-cyan-600 to-cyan-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-200 mb-6">
          Book a walk today and give your dog the exercise and adventure they deserve!
        </p>
        <button className="bg-white text-cyan-800 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-100 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DogWalking;