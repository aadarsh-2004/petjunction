import React, { useEffect } from 'react';
import { Home, Shield, Heart, User } from 'lucide-react';

const DogSitting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookViaWhatsApp = (service, price) => {
    const message = encodeURIComponent(`Hello! I'm interested in booking the ${service} dog sitting service. 

Service Details:
- Service: ${service}
- Price: ₹${price}

Could you provide more information about booking?`);

    window.open(`https://wa.me/+918239498447?text=${message}`, '_blank');
  };

  const sittingServices = [
    {
      icon: Home,
      title: "Day Care",
      description: "Daily care and playtime for your dog while you're at work.",
      price: "500",
      priceUnit: "/day"
    },
    {
      icon: Shield,
      title: "Overnight Stay",
      description: "A safe and cozy overnight stay for your dog.",
      price: "1,000",
      priceUnit: "/night"
    },
    {
      icon: Heart,
      title: "Extended Stay",
      description: "Perfect for vacations or long trips.",
      price: "6,000",
      priceUnit: "/week"
    }
  ];

  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Dog Sitting Services</h1>
        <p className="text-gray-600 text-lg">
          Leave your dog in safe hands while you're away. We provide a loving and comfortable environment for your pet.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sittingServices.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <service.icon className="mx-auto text-orange-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-orange-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-3xl font-bold text-orange-800 mb-4">₹{service.price}<span className="text-lg text-gray-600">{service.priceUnit}</span></p>
            <button 
              onClick={() => bookViaWhatsApp(service.title, service.price)}
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="bg-orange-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-orange-800 mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "My dog loves staying here! The team is so caring and professional. Highly recommend!"
            </p>
            <div className="flex items-center gap-2">
              <User className="text-orange-600" size={24} />
              <span className="font-semibold text-orange-800">Rahul Sharma</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "I was nervous about leaving my dog, but they made me feel so comfortable. Thank you!"
            </p>
            <div className="flex items-center gap-2">
              <User className="text-orange-600" size={24} />
              <span className="font-semibold text-orange-800">Priya Patel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Book a Stay for Your Dog Today!</h2>
        <p className="text-gray-200 mb-6">
          Give your dog a home away from home.
        </p>
        <button 
          onClick={() => bookViaWhatsApp('Dog Sitting Services', '500-6,000')}
          className="bg-white text-orange-800 py-3 px-6 rounded-lg font-semibold hover:bg-orange-100 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DogSitting;