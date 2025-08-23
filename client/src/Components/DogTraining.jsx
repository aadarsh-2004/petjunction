import React, { useEffect } from 'react';
import { BookOpen, Shield, Award, ChevronDown, Compass, UserCheck, Star } from 'lucide-react';
import SEO from '../SEO'; // Assuming you have a reusable SEO component

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
      question: "What types of pets do you offer training for?",
      answer: "We offer expert training services for both  **dogs** and **cats**. Our certified trainers specialize in all breeds and ages, including specific programs for **puppy training** and **cat training**."
    },
    {
      question: "What is included in your dog training programs?",
      answer: "Each of our **dog training in Udaipur** programs includes personalized sessions, hands-on practice, and continued support. We ensure every pet parent leaves with the skills to reinforce training at home."
    },
    {
      question: "How do I find a certified dog trainer near me?",
      answer: "Our team consists of certified and experienced **dog trainers in Udaipur**. We are conveniently located to serve anyone searching for a **dog trainer near me** or a **cat trainer**."
    },
    {
      question: "Can you help with specific behavioral issues?",
      answer: "Yes, our **Behavior Correction** sessions are tailored to address specific problems like excessive barking, leash pulling, or anxiety. We work closely with you to find the best solutions for your pet."
    },
  ];
  
  const features = [
    { icon: Compass, title: 'Experienced Trainers', description: 'Our certified **dog trainers** have years of experience with all breeds.', color: 'text-orange-500' },
    { icon: UserCheck, title: 'Customized Plans', description: 'Training plans tailored to your dog’s specific needs and personality.', color: 'text-purple-500' },
    { icon: Star, title: 'Positive Reinforcement', description: 'We use reward-based methods for effective and stress-free learning.', color: 'text-green-500' },
  ];

  return (
    <>
      <SEO
        title="Dog Training in Udaipur | Professional Dog Trainer & Puppy Training"
        description="Looking for professional dog training in Udaipur? Our expert trainers offer personalized dog training, puppy training, and cat training programs. Find the best dog trainer near you."
        canonical="https://www.petjunction.in/dog-training"
      />
      <div className="max-w-6xl mt-24 mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text">
              Expert Dog Training
            </span>{" "}
            in Udaipur
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Find the perfect <span className='font-bold  bg-gradient-to-r from-teal-500 to-emerald-600 text-transparent bg-clip-text'>dog trainer</span> for your pet with our professional <span className='font-bold'>dog training in Udaipur</span> programs, designed to transform behavior and strengthen your bond.
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
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <program.icon className="mx-auto text-orange-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-gray-600 mb-2">{program.sessions}</p>
              <p className="text-gray-600 mb-4">{program.duration}</p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                ₹{program.price}
                <span className="text-lg text-gray-600">
                  {program.sessions === "Per Session" ? "/session" : " total"}
                </span>
              </p>
              <button 
                onClick={() => enrollViaWhatsApp(program.plan, program.price, program.sessions)}
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-md"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions about Training
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow transition-shadow cursor-pointer group">
                <summary className="flex justify-between items-center font-semibold text-gray-800">
                  {faq.question}
                  <ChevronDown className="text-teal-600 transform transition-transform duration-300 group-open:rotate-180" size={20} />
                </summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Pet's Journey to Better Behavior Today!</h2>
          <p className="text-gray-200 mb-6">
            Contact a **dog trainer near me** to get started with a customized plan.
          </p>
          <button 
            onClick={() => enrollViaWhatsApp('Basic Obedience Training', '3,500', '4 Sessions')}
            className="bg-white text-teal-800 py-3 px-6 rounded-xl font-semibold hover:bg-teal-100 transition-colors shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default DogTraining;
