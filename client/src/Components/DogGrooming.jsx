import React, { useEffect } from "react";
import { Brush, ShowerHead, HandHeart, Scissors, Bug, Bath, PawPrint, Award, Star } from "lucide-react";
import SEO from '../SEO';

const DogGrooming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PHONE_NUMBER = "+919784249525";

  const groomingServices = [
    {
      icon: ShowerHead,
      title: "Basic Grooming Package",
      description: "Our essential care package includes gentle bath, brushing, nail care, and thorough ear cleaning. Perfect for keeping your pet fresh and clean.",
      description2: "Time : 60 Minutes",
      price: "900",
    },
    {
      icon: Scissors,
      title: "Full Grooming Session",
      description: "A comprehensive grooming session with breed-specific styling, deep conditioning, and premium finishing touches. Our expert groomers provide a complete **pet spa** experience.",
      description2: "Time : 90 Minutes",
      price: "1,500",
    },
    {
      icon: Brush,
      title: "De-Shedding Treatment",
      description: "Specialized brushing and treatment to reduce excess fur and control seasonal shedding effectively, leaving your pet's coat healthy and shiny.",
      description2: "Time : 90 Minutes",
      price: "1,200",
    },
    {
      icon: HandHeart,
      title: "De-Matting Service",
      description: "Gentle removal of stubborn knots and tangles while maintaining coat health and comfort for a pain-free experience.",
      description2: "Time : 90 Minutes",
      price: "1,200",
    },
    {
      icon: Bath,
      title: "Medicated Bath",
      description: "Therapeutic bathing with specialized shampoos to address skin conditions and promote coat healing, prescribed by our **pet care specialists**.",
      description2: "Time : 90 Minutes",
      price: "1,500",
    },
    {
      icon: Bug,
      title: "Flea & Tick Treatment",
      description: "Targeted treatment to eliminate parasites and prevent reinfestation with pet-safe products, ensuring your pet is healthy and comfortable.",
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
  
  const features = [
    { icon: PawPrint, title: 'Expert Groomers', description: 'Our certified groomers provide gentle and compassionate care for your pet.', color: 'text-purple-500' },
    { icon: Award, title: 'Quality Products', description: 'We use professional, high-quality shampoos and conditioners for all pets.', color: 'text-orange-500' },
    { icon: Star, title: 'Happy Pets', description: 'We ensure a stress-free and positive experience for every dog and cat.', color: 'text-pink-500' },
  ];

  return (
    <>
      <SEO
        title="Professional Pet Grooming in Udaipur | Dog & Cat Spa"
        description="Looking for professional pet grooming in Udaipur? Our certified groomers offer dog grooming, cat grooming, and full-service pet spa packages. Book a pet service appointment today."
        canonical="https://www.petjunction.in/dog-grooming"
      />
      <div className="relative max-w-6xl mt-24 mx-auto p-6">
        <div className="relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                Professional Pet Grooming
              </span>{" "}
              in Udaipur
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Treat your furry friend to a relaxing <span className="font-bold ">pet spa</span> day with our expert <span className="font-bold ">cat grooming</span> services. We are the top choice for <span className="font-bold ">professional dog grooming</span> and <span className="font-bold ">pet care specialists</span> in <span className="font-bold ">Udaipur</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon size={40} className={`mb-4 ${feature.color}`} />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {groomingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <service.icon className="mx-auto text-pink-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-600 mb-4">{service.description2}</p>
                <p className="text-3xl font-bold text-gray-800 mb-4">
                  ₹{service.price}
                  <span className="text-lg text-gray-600">/session</span>
                </p>
                <button 
                  className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition-colors shadow-md"
                  onClick={() => handleBooking(service)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-pink-600 to-pink-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Book a Grooming Session for Your Pet Today!
            </h2>
            <p className="text-gray-200 mb-6">
              Give your pet a luxurious experience and book a **pet grooming in Udaipur** appointment.
            </p>
            <button 
              className="bg-white text-pink-800 py-3 px-6 rounded-xl font-semibold hover:bg-pink-100 transition-colors shadow-md"
              onClick={() => handleBooking(groomingServices[2])}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogGrooming;
