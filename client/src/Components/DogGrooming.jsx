import React, { useEffect } from "react";
import { Brush, ShowerHead, HandHeart, Scissors, Bug, Bath } from "lucide-react";

const DogGrooming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PHONE_NUMBER = "918239498447"; // Replace with your actual WhatsApp number

  const groomingServices = [
    {
      icon: ShowerHead,
      title: "Basic Grooming",
      description: "Essential care package including gentle bath, basic haircut, nail care, and thorough ear cleaning.",
      description2: "Time : 60 Minutes",
      price: "900",
    },
    {
      icon: Scissors,
      title: "De-Shedding Treatment",
      description: "Specialized brushing and treatment to reduce excess fur and control seasonal shedding effectively.",
      description2: "Time : 90 Minutes",
      price: "1,200",
    },
    {
      icon: Brush,
      title: "Full Grooming Package",
      description: "Comprehensive grooming session with breed-specific styling, deep conditioning, and premium finishing touches.",
      description2: "Time : 90 Minutes",
      price: "1,500",
    },
    {
      icon: HandHeart,
      title: "De-Matting Treatment",
      description: "Gentle removal of stubborn knots and tangles while maintaining coat health and comfort.",
      description2: "Time : 90 Minutes",
      price: "1,200",
    },
    {
      icon: Bath,
      title: "Medicated Bath",
      description: "Therapeutic bathing with specialized shampoos to address skin conditions and promote coat healing.",
      description2: "Time : 90 Minutes",
      price: "1,500",
    },
    {
      icon: Bug,
      title: "Flea & Tick Treatment",
      description: "Targeted treatment to eliminate parasites and prevent reinfestation with pet-safe products.",
      description2: "Time : 90 Minutes",
      price: "900",
    },
  ];

  const handleBooking = (service) => {
    const message = `Hello! I would like to book a pet grooming service:
    
Service: ${service.title}
Duration: ${service.description2}
Price: ₹${service.price}

Please help me schedule an appointment.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="relative max-w-6xl mt-24 mx-auto p-6">
      <div className="relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            Dog Grooming Services
          </h1>
          <p className="text-gray-600 text-lg">
            Pamper your furry friend with our top-notch grooming services. From
            baths to haircuts, we've got it all!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {groomingServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <service.icon className="mx-auto text-pink-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-pink-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-600 mb-4">{service.description2}</p>
              <p className="text-3xl font-bold text-pink-800 mb-4">
                ₹{service.price}
                <span className="text-lg text-gray-600">/session</span>
              </p>
              <button 
                className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
                onClick={() => handleBooking(service)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-pink-600 to-pink-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Treat Your Dog to a Spa Day!
          </h2>
          <p className="text-gray-200 mb-6">
            Book a grooming session today and let your dog shine!
          </p>
          <button 
            className="bg-white text-pink-800 py-3 px-6 rounded-lg font-semibold hover:bg-pink-100 transition-colors"
            onClick={() => handleBooking(groomingServices[2])} // Default to Full Grooming Package
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DogGrooming;