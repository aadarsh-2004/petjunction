import React from 'react';
import { Check, ChevronRight, Star, Crown, Shield } from 'lucide-react';

const MembershipSection = () => {
  const plans = [
    {
      title: "Basic Paw",
      icon: <Star className="w-6 h-6 text-cyan-500" />,
      price: "$29",
      period: "/month",
      description: "Perfect for new pet parents starting their journey",
      features: [
        "2 Dog walks per week",
        "Basic grooming session monthly",
        "10% discount on additional services",
        "Regular health check-ups",
        "Online booking access"
      ],
      color: "bg-white",
      buttonColor: "bg-cyan-500"
    },
    {
      title: "Premium Paw",
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      price: "$59",
      period: "/month",
      description: "Most popular choice for dedicated pet owners",
      features: [
        "4 Dog walks per week",
        "Premium grooming session monthly",
        "20% discount on additional services",
        "Priority vet appointments",
        "24/7 vet consultation"
      ],
      color: "bg-gradient-to-b from-cyan-50 to-white",
      buttonColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      popular: true
    },
    {
      title: "Ultimate Paw",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      price: "$99",
      period: "/month",
      description: "Package for the ultimate pet experience",
      features: [
        "Daily dog walks",
        "Unlimited grooming sessions",
        "30% discount on additional services",
        "Emergency vet services",
        "Personal pet concierge"
      ],
      color: "bg-white",
      buttonColor: "bg-cyan-500"
    }
  ];

  const handleChoosePlan = (plan) => {
    // Create message text
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

    // Create WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/917877571101?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 bg-gradient-to-b from-cyan-100/2 via-white to-cyan-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Membership Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our pet care family with a plan that suits your needs. Every membership comes with our commitment to providing the best care for your furry friends.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl ${plan.color} border-2 border-dashed border-red-500 p-6 shadow-2xl transform transition-transform hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-gray-50 rounded-xl mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-3 text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleChoosePlan(plan)}
                className={`w-full ${plan.buttonColor} text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-md transition-shadow`}
              >
                Choose Plan
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;