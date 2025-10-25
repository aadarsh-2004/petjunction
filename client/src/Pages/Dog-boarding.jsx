import React, { useState, useEffect } from "react";
import {
  Check,
  Snowflake,
  Fan,
  Coffee,
  Clock,
  Bath,
  DoorOpen,
  Camera,
  Phone,
  Calendar,
  Star,
  ChevronRight,
  Book,
  AlertCircle,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
const BoardingPage = () => {
  const [selectedTab, setSelectedTab] = useState("requirements");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bookViaWhatsApp = (title, price, features) => {
    const message =
      encodeURIComponent(`Hello! I'm interested in booking the ${title} boarding service I saw on your website.

Service Details:
- Features: ${features}
- Price: ₹${price}

Could you please provide more information and confirm availability?`);

    window.open(`https://wa.me/+919784249525?text=${message}`, "_blank");
  };

  const boardingOptions = [
    {
      title: "AC Boarding",
      price: "₹999",
      timeUnit: "per night",
      features: [
        "Temperature controlled environment (22-24°C)",
        "Premium bedding and comfort items",
        "24/7 staff supervision",
        "3 walks per day",
        "Daily grooming session",
        "Regular health monitoring",
        "Spacious individual kennels",
        "Play time in AC play area",
        "Premium food included",
        "Daily photo updates",
      ],
      icon: Snowflake,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50/80 via-purple-50/80 to-pink-50/80",
      popular: true,
    },
    {
      title: "Non-AC Boarding",
      price: "₹699",
      timeUnit: "per night",
      features: [
        "Well-ventilated environment",
        "Comfortable bedding",
        "24/7 staff supervision",
        "2 walks per day",
        "Basic grooming",
        "Health monitoring",
        "Standard kennels",
        "Outdoor play time",
        "Regular food included",
        "Weekly photo updates",
      ],
      icon: Fan,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50/80 via-teal-50/80 to-cyan-50/80",
      popular: false,
    },
  ];

  const amenities = [
    {
      icon: Clock,
      title: "24/7 Care",
      description: "Round-the-clock supervision",
      gradient: "from-red-500 to-orange-500",
      delay: "delay-100",
    },
    {
      icon: Bath,
      title: "Clean Facilities",
      description: "Daily sanitization",
      gradient: "from-blue-500 to-cyan-500",
      delay: "delay-200",
    },
    {
      icon: Coffee,
      title: "Fresh Food & Water",
      description: "Regular meals included",
      gradient: "from-yellow-500 to-amber-500",
      delay: "delay-300",
    },
    {
      icon: DoorOpen,
      title: "Exercise Areas",
      description: "Indoor & outdoor spaces",
      gradient: "from-purple-500 to-pink-500",
      delay: "delay-400",
    },
    {
      icon: Camera,
      title: "Photo Updates",
      description: "Regular pet updates",
      gradient: "from-orange-500 to-red-500",
      delay: "delay-500",
    },
    {
      icon: Phone,
      title: "Vet On Call",
      description: "Emergency medical support",
      gradient: "from-green-500 to-emerald-500",
      delay: "delay-600",
    },
  ];

  const testimonials = [
    {
      name: "Vinita Verma",
      pet: "Mark",
      rating: 5,
      comment:
        "The AC boarding facility is amazing! Max loved his stay and the staff was incredibly caring. Highly recommended!",
      avatar: "VV",
      gradient: "from-pink-400 to-purple-500",
    },
    {
      name: "Arin Wilson",
      pet: "Joyee",
      rating: 5,
      comment:
        "Great experience with the non-AC boarding. The ventilation was perfect and Luna was well taken care of.",
      avatar: "AW",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Arman Gupta",
      pet: "Rocky",
      rating: 4,
      comment:
        "The daily updates and photos gave me peace of mind. Will definitely use again for my future trips!",
      avatar: "AG",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  const requirements = [
    "Updated vaccination records (DHPP, Rabies, Bordetella)",
    "Minimum age: 4 months",
    "Temperament evaluation for first-time boarders",
    "Emergency contact information",
    "Medications and feeding instructions if applicable",
    "Proof of flea and tick prevention",
  ];

  const policies = [
    "Check-in time: 8 AM - 6 PM",
    "Check-out time: Before 11 AM",
    "Late check-out fee applies",
    "Minimum 24-hour advance booking required",
    "Cancellation: 48 hours notice for full refund",
    "Special diet additional charges apply",
  ];

  const faqs = [
    {
      question: "What types of pets do you offer boarding for?",
      answer:
        "We offer professional boarding services for both **dogs** and **cats**, providing a safe and comfortable environment for all.",
    },
    {
      question: "Do you offer a pet pick and drop service?",
      answer:
        "Yes, we provide a convenient **pet pick and drop in Udaipur** to ensure a stress-free experience for you and your pet. Please contact us for details on availability.",
    },
    {
      question: "How is your pet hostel in Udaipur different?",
      answer:
        "Our **pet hostel in Udaipur** stands out for its 24/7 supervision, spacious individual kennels, and premium care. We are committed to providing a true home away from home.",
    },
    {
      question: "Can I book a dog boarding service near me?",
      answer:
        "Yes, our facility is centrally located, making it easy to find a **dog boarding near me** and get your dog the best care in the area. We also serve pet parents searching for a **cat boarding near me**.",
    },
  ];

  const tabs = [
    { id: "requirements", label: "Requirements", icon: Shield },
    { id: "policies", label: "Policies", icon: Book },
    { id: "faqs", label: "FAQs", icon: AlertCircle },
  ];

  return (
    <>


      <Helmet>
        {/* <!-- Primary SEO --> */}
        <title>Dog & Cat Boarding in Udaipur | AC & Non-AC Overnight Pet Stay at PetJunction</title>
        <meta name="description" content="Looking for dog or cat boarding in Udaipur? PetJunction offers safe, comfortable AC and Non-AC overnight stays for pets with 24/7 care, loving attention, and secure facilities. Book your pet's stay today!" />
        <meta name="keywords" content="dog boarding Udaipur, cat boarding Udaipur, AC pet boarding Udaipur, Non-AC pet boarding Udaipur, overnight pet stay Udaipur, pet hotel Udaipur, dog hostel Udaipur, cat hostel Udaipur, pet boarding near me, dog boarding near me, cat boarding near me, safe pet boarding Udaipur, pet care services Udaipur" />
        <link rel="canonical" href="https://www.petjunction.in/dog-boarding" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Dog & Cat Boarding in Udaipur | AC & Non-AC Overnight Pet Stay at PetJunction" />
        <meta property="og:description" content="Looking for dog or cat boarding in Udaipur? PetJunction offers safe, comfortable AC and Non-AC overnight stays for pets with 24/7 care, loving attention, and secure facilities. Book your pet's stay today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petjunction.in/dog-boarding" />
        {/* <meta property="og:image" content="https://www.petjunction.in/assets/images/dog-boarding-og.jpg" /> */}
        <meta property="og:site_name" content="PetJunction" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dog & Cat Boarding in Udaipur | AC & Non-AC Overnight Pet Stay at PetJunction" />
        <meta name="twitter:description" content="Looking for dog or cat boarding in Udaipur? PetJunction offers safe, comfortable AC and Non-AC overnight stays for pets with 24/7 care, loving attention, and secure facilities. Book your pet's stay today!" />
        {/* <meta name="twitter:image" content="https://www.petjunction.in/assets/images/dog-boarding-og.jpg" /> */}
        <meta name="twitter:site" content="@PetJunction" />


      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-6 pb-12 pt-20">
          {/* Hero Section */}
          <div
            className={`text-center max-w-6xl mx-auto py-16 transform transition-all duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }`}
          >
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
                  Premium Pet Boarding
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
                  Services in Udaipur
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Heart className="w-12 h-12 text-pink-500 fill-current" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              Give your furry friend a{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                luxury home away from home
              </span>{" "}
              with our premium boarding facilities. Professional care for both
              dogs and cats.
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">
                  Trusted by 500+ Pet Parents
                </span>
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.title}
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-gray-200/50 animate-fade-in-up ${amenity.delay}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${amenity.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <amenity.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Boarding Options */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
            {boardingOptions.map((option, index) => (
              <div
                key={option.title}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r ${option.gradient} transform hover:scale-105`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {option.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div
                      className={`bg-gradient-to-r ${option.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse`}
                    >
                      Most Popular ⭐
                    </div>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${option.gradient} shadow-lg group-hover:rotate-12 transition-transform duration-500`}
                      >
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-gray-800">
                          {option.title}
                        </h2>
                        <p className="text-gray-600 font-medium">
                          Premium boarding experience
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-4xl font-black bg-gradient-to-r ${option.gradient} text-transparent bg-clip-text`}
                      >
                        {option.price}
                      </div>
                      <p className="text-sm text-gray-500 font-medium">
                        {option.timeUnit}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center gap-3 transform transition-all duration-300 ${hoveredCard === index ? "translate-x-2" : ""
                          }`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="p-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() =>
                      bookViaWhatsApp(
                        option.title,
                        option.price,
                        option.features.join(", ")
                      )
                    }
                    className={`w-full py-4 bg-gradient-to-r ${option.gradient} text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book Now
                      <Heart className="w-5 h-5 group-hover:animate-bounce" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Tabs */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
              <div className="flex gap-1 p-2 bg-gradient-to-r from-indigo-50 to-purple-50">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex-1 py-4 px-6 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${selectedTab === tab.id
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:bg-white/50 hover:scale-102"
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {selectedTab === "requirements" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                      <Shield className="w-7 h-7 text-indigo-500" />
                      Boarding Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {requirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50"
                        >
                          <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "policies" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                      <Book className="w-7 h-7 text-purple-500" />
                      Boarding Policies
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {policies.map((policy, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50"
                        >
                          <ChevronRight className="w-6 h-6 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {policy}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === "faqs" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                      <AlertCircle className="w-7 h-7 text-orange-500" />
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200/50 hover:shadow-lg transition-shadow duration-300"
                        >
                          <h4 className="font-bold text-gray-800 mb-3 text-lg">
                            {faq.question}
                          </h4>
                          <p
                            className="text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: faq.answer.replace(
                                /\*\*(.*?)\*\*/g,
                                '<span class="font-semibold text-orange-600">$1</span>'
                              ),
                            }}
                          ></p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                Happy Pet Parents
              </h2>
              <p className="text-xl text-gray-600">
                See what our community says about us
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 transform hover:scale-105 hover:-rotate-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center shadow-lg group-hover:animate-pulse`}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">
                        Pet Parent of {testimonial.pet}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }

          .hover\:scale-102:hover {
            transform: scale(1.02);
          }

          .hover\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </div>
    </>
  );
};

export default BoardingPage;
