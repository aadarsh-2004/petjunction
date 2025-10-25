import React, { useEffect } from 'react';
import { Home, Shield, Heart, User, Dog, Cat } from 'lucide-react';
import { Helmet } from "react-helmet-async";

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

    window.open(`https://wa.me/+919784249525?text=${message}`, '_blank');
  };

  const sittingServices = [
    {
      icon: Home,
      title: "Home-like Day Care",
      description: "Our **day care** provides a fun and safe environment for your dog while you're away at work. Daily playtime and socialization guaranteed.",
      price: "500",
      priceUnit: "/day"
    },
    {
      icon: Shield,
      title: "Cozy Overnight Stay",
      description: "A comfortable and secure overnight **pet boarding** for your furry friend, ensuring they feel right at home with our attentive **pet care specialists**.",
      price: "1,000",
      priceUnit: "/night"
    },
    {
      icon: Heart,
      title: "Extended Vacation Stay",
      description: "Ideal for long trips or vacations. Our extended **dog boarding** service provides consistent care and comfort for your pet, making us a true **pet hostel**.",
      price: "6,000",
      priceUnit: "/week"
    }
  ];

  const testimonialData = [
    {
      quote: "My dog loves staying here! The team provides top-notch care. It’s the best **pet boarding near me** in Udaipur.",
      author: "Rahul Sharma",
      icon: User
    },
    {
      quote: "I was nervous about leaving my dog, but they made me feel so comfortable. Thank you for being the best **pet services in Udaipur**!",
      author: "Priya Patel",
      icon: User
    },
  ];

  return (
    <>


      <Helmet>
        <title>Dog Sitting in Udaipur | At-Home Pet Care & Dog Walking by PetJunction</title>
        <meta name="description" content="Looking for reliable dog sitting in Udaipur? PetJunction offers professional at-home dog care, walking, and pet sitting services for dogs and cats. Keep your pets happy, safe, and stress-free." />
        <meta name="keywords" content="dog sitting Udaipur, professional dog sitter Udaipur, at-home pet care Udaipur, dog walking Udaipur, pet walking Udaipur, cat sitting Udaipur, pet sitting near me, dog sitter near me, pet care services Udaipur, pet care for dogs and cats" />
        <link rel="canonical" href="https://www.petjunction.in/dog-sitting" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Dog Sitting in Udaipur | At-Home Pet Care & Dog Walking by PetJunction" />
        <meta property="og:description" content="Looking for reliable dog sitting in Udaipur? PetJunction offers professional at-home dog care, walking, and pet sitting services for dogs and cats. Keep your pets happy, safe, and stress-free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petjunction.in/dog-sitting" />
        {/* <meta property="og:image" content="https://www.petjunction.in/assets/images/dog-sitting-og.jpg" /> */}
        <meta property="og:site_name" content="PetJunction" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dog Sitting in Udaipur | At-Home Pet Care & Dog Walking by PetJunction" />
        <meta name="twitter:description" content="Looking for reliable dog sitting in Udaipur? PetJunction offers professional at-home dog care, walking, and pet sitting services for dogs and cats. Keep your pets happy, safe, and stress-free." />
        {/* <meta name="twitter:image" content="https://www.petjunction.in/assets/images/dog-sitting-og.jpg" /> */}
        <meta name="twitter:site" content="@PetJunction" />
      </Helmet>
      <div className="max-w-6xl mt-24 mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
              Professional Dog Sitting
            </span>{" "}
            in Udaipur
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Find the perfect solution for your pet with our trusted<span className='font-bold  bg-gradient-to-r from-teal-500 to-emerald-600 text-transparent bg-clip-text'>dog sitting</span> for your pet with our professional <span className='font-bold'>pet care services in Udaipur</span> . We offer loving, in-home care for both dogs and cats.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sittingServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <service.icon className="mx-auto text-orange-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                ₹{service.price}
                <span className="text-lg text-gray-600">{service.priceUnit}</span>
              </p>
              <button
                onClick={() => bookViaWhatsApp(service.title, service.price)}
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-orange-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What Our Clients Say about Our Dog Sitting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-2">
                  <testimonial.icon className="text-orange-600" size={24} />
                  <span className="font-semibold text-gray-800">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Book a Stay for Your Dog Today!</h2>
          <p className="text-gray-200 mb-6">
            <span className="font-semibold">Give your dog a home away from home</span> and book a **pet service appointment** today.
          </p>
          <button
            onClick={() => bookViaWhatsApp('Day Care', '500-6,000')}
            className="bg-white text-orange-800 py-3 px-6 rounded-xl font-semibold hover:bg-orange-100 transition-colors shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DogSitting;
