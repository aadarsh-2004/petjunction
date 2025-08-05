import React, { useEffect } from 'react';
import { BookOpen, Shield, Award, ChevronDown } from 'lucide-react';

const DogTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enrollViaWhatsApp = (plan, price, sessions) => {
    const message = encodeURIComponent(`Hello! I'm interested in enrolling in the ${plan} dog training program. 

Program Details:
- Course: ${plan}
- Sessions: ${sessions}
- Duration: 60 minutes per session
- Total Price: ₹${price}

Could you please help me schedule my first session?`);

    window.open(`https://wa.me/+919784249525?text=${message}`, '_blank');
  };

  const trainingPrograms = [
    {
      icon: BookOpen,
      title: "Basic Obedience Training",
      description: "A comprehensive 4-session program covering essential commands, leash training, and basic manners. Perfect for puppies and dogs needing fundamental training.",
      price: "3,500",
      sessions: "4 Sessions",
      duration: "60 minutes per session",
      plan: "Basic Obedience Training"
    },
    {
      icon: Shield,
      title: "Advanced Training",
      description: "An intensive 6-session program building on basic obedience to master complex commands, off-leash control, and advanced tricks. Ideal for dogs who have completed basic training.",
      price: "5,500",
      sessions: "6 Sessions",
      duration: "60 minutes per session",
      plan: "Advanced Training"
    },
    {
      icon: Award,
      title: "Behavior Correction",
      description: "Specialized single sessions focusing on specific behavioral issues like excessive barking, jumping, aggression, or anxiety. Customized approach for your dog's needs.",
      price: "1,000",
      sessions: "Per Session",
      duration: "60 minutes per session",
      plan: "Behavior Correction"
    }
  ];

  const faqData = [
    {
      question: "What's included in each session?",
      answer: "Each 60-minute session includes personalized training, hands-on practice, and take-home exercises for continued improvement.",
    },
    {
      question: "How frequently are the sessions conducted?",
      answer: "Sessions are typically scheduled once or twice a week, depending on your availability and dog's learning pace.",
    },
    {
      question: "Do you offer make-up sessions?",
      answer: "Yes, we offer make-up sessions with 24-hour advance notice of cancellation.",
    },
  ];

  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Professional Dog Training Programs</h1>
        <p className="text-gray-600 text-lg">
          Expert training programs customized to your dog's needs. Transform your dog's behavior with our certified trainers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <program.icon className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{program.title}</h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <p className="text-gray-600 mb-2">{program.sessions}</p>
            <p className="text-gray-600 mb-4">{program.duration}</p>
            <p className="text-3xl font-bold text-blue-800 mb-4">
              ₹{program.price}
              <span className="text-lg text-gray-600">
                {program.sessions === "Per Session" ? "/session" : " total"}
              </span>
            </p>
            <button 
              onClick={() => enrollViaWhatsApp(program.plan, program.price, program.sessions)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-semibold text-blue-800">{faq.question}</span>
                <ChevronDown className="text-blue-600" size={20} />
              </summary>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Transform Your Dog's Behavior Today!</h2>
        <p className="text-gray-200 mb-6">
          Start with a professional training program tailored to your dog's needs.
        </p>
        <button 
          onClick={() => enrollViaWhatsApp('Basic Obedience Training', '3,500', '4 Sessions')}
          className="bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DogTraining;