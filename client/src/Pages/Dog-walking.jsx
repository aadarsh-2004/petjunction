import React, { useEffect } from "react";
import {
  PawPrint,
  Clock,
  ShieldCheck,
  MapPin,
  Heart,
  Star,
  Bus,
  Footprints,
  Smile,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const DogWalking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PHONE_NUMBER = "+919784249525";

  const bookViaWhatsApp = (plan, price) => {
    const message =
      encodeURIComponent(`Hello! I'm interested in booking the ${plan} dog walking package. 

Package Details:
- Plan: ${plan}
- Price: ₹${price}/month

Could you provide more information about booking?`);

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
  };

  const walkingPlans = [
    {
      icon: PawPrint,
      title: "Basic Plan",
      description: "One dedicated walk for your dog at a convenient time slot.",
      price: "300/day",
      details: [
        { icon: Clock, text: "30 minutes per walk" },
        { icon: ShieldCheck, text: "Insured professional walkers" },
        { icon: MapPin, text: "Custom routes" },
      ],
    },
    {
      icon: Heart,
      title: "Monthly Plan",
      description: "Ideal for regular exercise. This plan includes daily walks to keep your dog healthy and happy.",
      price: "5,500/month",
      details: [
        { icon: Clock, text: "30 minutes per walk" },
        { icon: MapPin, text: "Custom routes" },
        { icon: Star, text: "5 walks per week" },
      ],
    },
    {
      icon: PawPrint,
      title: "Premium Plan",
      description: "The ultimate daily experience, providing both a long walk and dedicated playtime.",
      price: "7,000/month",
      details: [
        { icon: Clock, text: "1.5 hours per walk" },
        { icon: Heart, text: "Playtime included" },
        { icon: Star, text: "25 walks per month" },
      ],
    },
  ];

  const features = [
    { icon: Footprints, title: "Daily Exercise", description: "Regular walks are essential for your pet's physical and mental health. We ensure your dog gets the exercise they need.", color: "text-cyan-500" },
    { icon: ShieldCheck, title: "Trusted Professionals", description: "All our walkers are background-checked and trained to handle dogs of all sizes and temperaments. Your pet's safety is our priority.", color: "text-blue-500" },
    { icon: Bus, title: "Pet Pick & Drop Service", description: "We offer a convenient pet pick and drop service, so you don't have to worry about transportation. We are your reliable pet taxi in Udaipur.", color: "text-green-500" },
    { icon: MapPin, title: "Customized Routes", description: "We tailor each walk to your dog's preferences, whether it's a park stroll, a trail hike, or a neighborhood adventure.", color: "text-fuchsia-500" },
  ];

  return (
    <>

      <Helmet>
        <title>Dog Walking in Udaipur | Trusted Pet Walkers Near You | PetJunction</title>

        <meta
          name="description"
          content="Looking for professional dog walking in Udaipur? PetJunction offers reliable, safe, and fun daily walks for your pets. Book expert pet walkers for regular exercise and care today!"
        />

        <meta
          name="keywords"
          content="dog walking in Udaipur, pet walking in Udaipur, dog walkers near me, daily dog walking Udaipur, professional dog walkers Udaipur, pet exercise service Udaipur, PetJunction dog walking, pet walking service near me"
        />

        <link rel="canonical" href="https://www.petjunction.in/dog-walking" />

        {/* <!-- OpenGraph --> */}
        <meta property="og:title" content="Dog Walking in Udaipur | Trusted Pet Walkers Near You | PetJunction" />
        <meta property="og:description" content="Reliable and professional dog walking services in Udaipur. Let PetJunction take your pet on safe, fun, and healthy walks every day." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petjunction.in/dog-walking" />
        <meta property="og:site_name" content="PetJunction" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dog Walking in Udaipur | Trusted Pet Walkers Near You | PetJunction" />
        <meta name="twitter:description" content="Safe, reliable, and fun dog walking services in Udaipur with PetJunction. Book your pet’s daily walks today!" />
      </Helmet>
      <div className="max-w-6xl mt-24 mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-600 text-transparent bg-clip-text">
              Dog Walking & Pet Taxi
            </span>{" "}
            in Udaipur
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Give your furry friend the exercise and adventure they deserve with our professional <span className="font-bold">dog walking</span> services. As a reliable <span className="font-bold bg-gradient-to-r from-cyan-500 to-teal-600 text-transparent bg-clip-text">pet walking daily service provider</span>, we also offer a convenient <span className="font-bold bg-gradient-to-r from-cyan-500 to-teal-600 text-transparent bg-clip-text">pet pick and drop in Udaipur</span>.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-cyan-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our <span className="bg-gradient-to-r from-cyan-500 to-teal-600 text-transparent bg-clip-text">Pet Taxi & Walking Services</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon size={40} className={`mb-4 ${feature.color}`} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {walkingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <plan.icon className="mx-auto text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                ₹{plan.price}
                <span className="text-lg text-gray-600"></span>
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2">
                    <detail.icon className="w-5 h-5 text-cyan-600" />{" "}
                    {detail.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => bookViaWhatsApp(plan.title, plan.price)}
                className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-cyan-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 mb-6">
            Book a walk today and give your dog the exercise and adventure they
            deserve!
          </p>
          <button
            onClick={() => bookViaWhatsApp("Dog Walking Services", "1,500-4,000")}
            className="bg-white text-cyan-800 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-100 transition-colors shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DogWalking;
