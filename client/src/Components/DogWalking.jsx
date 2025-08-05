import React, { useEffect } from "react";
import {
  PawPrint,
  Clock,
  ShieldCheck,
  MapPin,
  Heart,
  Star,
} from "lucide-react";

const DogWalking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookViaWhatsApp = (plan, price) => {
    const message =
      encodeURIComponent(`Hello! I'm interested in booking the ${plan} dog walking package. 

      Package Details:
      - Plan: ${plan}
      - Price: ₹${price}/month

      Could you provide more information about booking?`);

          window.open(`https://wa.me/+919784249525?text=${message}`, "_blank");
    };

  const walkingPlans = [
    {
      icon: PawPrint,
      title: "Basic Plan",
      description: "One dedicated walk  at your  time slot.",
      price: "300/day",
      details: [
        { icon: Clock, text: "30 minutes per walk" },
        { icon: ShieldCheck, text: "Insured walkers" },
        { icon: MapPin, text: "Custom routes" },
        // { icon: Star, text: "15 walks per month" },
      ],
    },
    {
      icon: Heart,
      title: "Monthly Plan",
      description: "Ideal for a longer, more engaging walk.",
      price: "5,500/month",
      details: [
        { icon: Clock, text: "30 minutes per walk" },
        // { icon: ShieldCheck, text: "Insured walkers" },
        { icon: MapPin, text: "Custom routes" },
        { icon: Star, text: "5 walks per week" },
      ],
    },
    {
      icon: PawPrint,
      title: "Premium Plan",
      description: "The ultimate experience for your dog.",
      price: "7,000/month",
      details: [
        { icon: Clock, text: "1.5 hours per walk" },
        // { icon: ShieldCheck, text: "Insured walkers" },
        // { icon: MapPin, text: "Custom routes" },
        { icon: Heart, text: "Playtime included" },
        { icon: Star, text: "25 walks per month" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-800 mb-4">
          Dog Walking Services
        </h1>
        <p className="text-gray-600 text-lg">
          Give your furry friend the exercise and adventure they deserve with
          our professional dog walking services.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-cyan-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-6">
          Our Monthly Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {walkingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <plan.icon className="mx-auto text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-cyan-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-cyan-800 mb-4">
                ₹{plan.price}
                <span className="text-lg text-gray-600"></span>
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <detail.icon className="w-5 h-5 text-cyan-600" />{" "}
                    {detail.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => bookViaWhatsApp(plan.title, plan.price)}
                className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections Remain the Same */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <ShieldCheck className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">
              Trusted Professionals
            </h3>
            <p className="text-gray-600">
              All our walkers are background-checked, insured, and trained to
              handle dogs of all sizes and temperaments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">
              Custom Routes
            </h3>
            <p className="text-gray-600">
              We tailor each walk to your dog's preferences, whether it's a
              park, trail, or neighborhood stroll.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="text-cyan-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-cyan-800 mb-2">
              Playtime Included
            </h3>
            <p className="text-gray-600">
              Every walk includes playtime to keep your dog happy, healthy, and
              engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-gradient-to-r from-cyan-600 to-cyan-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-200 mb-6">
          Book a walk today and give your dog the exercise and adventure they
          deserve!
        </p>
        <button
          onClick={() => bookViaWhatsApp("Dog Walking Services", "1,500-4,000")}
          className="bg-white text-cyan-800 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-100 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DogWalking;
