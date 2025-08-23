import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronRight, Star, Crown, Shield, Sparkles, Zap, Heart } from 'lucide-react';

const MembershipSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const plans = [
    {
      title: "Basic Paw",
      icon: <Star className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" />,
      price: "₹7,000",
      period: "/month",
      description: "Perfect for new pet parents starting their journey",
      features: [
        "2 Dog walks per week",
        "Basic grooming session monthly",
        "10% discount on additional services",
        "Regular health check-ups",
        "Online booking access"
      ],
      gradient: "from-cyan-500 to-blue-600",
      borderGradient: "from-cyan-400 to-blue-500",
      bgGlow: "from-cyan-400/20 to-blue-400/20",
      popular: false
    },
    {
      title: "Premium Paw",
      icon: <Crown className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />,
      price: "₹12,000",
      period: "/month",
      description: "Most popular choice for dedicated pet owners",
      features: [
        "4 Dog walks per week",
        "Premium grooming session monthly",
        "20% discount on additional services",
        "Priority vet appointments",
        "24/7 vet consultation"
      ],
      gradient: "from-yellow-500 to-orange-600",
      borderGradient: "from-yellow-400 to-orange-500",
      bgGlow: "from-yellow-400/20 to-orange-400/20",
      popular: true
    },
    {
      title: "Ultimate Paw",
      icon: <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />,
      price: "₹18,000",
      period: "/month",
      description: "Package for the ultimate pet experience",
      features: [
        "Daily dog walks",
        "Unlimited grooming sessions",
        "30% discount on additional services",
        "Emergency vet services",
        "Personal pet concierge"
      ],
      gradient: "from-purple-500 to-pink-600",
      borderGradient: "from-purple-400 to-pink-500",
      bgGlow: "from-purple-400/20 to-pink-400/20",
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChoosePlan = (plan) => {
    const message = `
*New Membership Plan Request*
---------------------------
I would like to subscribe to the *${plan.title}* plan!

*Plan Details:*
💰 Price: ${plan.price}${plan.period}
📝 Description: ${plan.description}

*Features:*
${plan.features.map(feature => `✓ ${feature}`).join('\n')}

Please contact me to proceed with the subscription.
    `.trim();

    const whatsappUrl = `https://wa.me/+919784249525?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 sm:w-60 h-32 sm:h-60 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-2 sm:w-4 h-2 sm:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-16 sm:left-32 w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-8 sm:right-16 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg">
              <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-white animate-pulse" />
            </div>
            <span className="text-sm sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Premium Membership Plans
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our pet care family with a plan that suits your needs. Every membership comes with our commitment to providing the best care for your furry friends.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative group cursor-pointer 
              `}
              
            >
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 p-4 sm:p-6 lg:p-8 shadow-xl hover:scale-105  ">
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className={`bg-gradient-to-r ${plan.gradient} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 `}>
                      <Heart className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
                      Most Popular
                      <Heart className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
                    </div>
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${plan.gradient} rounded-xl sm:rounded-2xl shadow-lg mb-3 sm:mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-1 sm:mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-500 font-semibold">{plan.period}</span>
                  </div>
                  <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center shadow-sm `}>
                          <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white stroke-2" />
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-lg `}
                >
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 " />
                  Choose Plan
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 " />
                </button>

                
                
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 p-4 sm:p-6 lg:p-8 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-red-500 fill-current animate-pulse" />
              <span className="text-base sm:text-lg font-bold text-gray-800">Still Unsure?</span>
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-red-500 fill-current animate-pulse" />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Get a personalized consultation to find the perfect plan for your pet's needs!
            </p>
            <a href="https://wa.me/+919784249525?text=Hi! I'd like to know more about your membership plans and get a personalized consultation for my pet." target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-lg  mx-auto">
                <span>💬</span>
                Free Consultation
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;