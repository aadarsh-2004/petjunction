import React from 'react';
import { BookOpen, Shield, Award, ChevronDown } from 'lucide-react';

const DogTraining = () => {
  return (
    <div className="max-w-6xl mt-24 mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Dog Training Programs</h1>
        <p className="text-gray-600 text-lg">
          Transform your dog’s behavior with our expert training programs. From basic obedience to advanced tricks, we’ve got you covered.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Basic Obedience */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <BookOpen className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Basic Obedience</h3>
          <p className="text-gray-600 mb-4">Learn essential commands like sit, stay, and come.</p>
          <p className="text-3xl font-bold text-blue-800 mb-4">₹2,000<span className="text-lg text-gray-600">/course</span></p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>

        {/* Advanced Training */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <Shield className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Advanced Training</h3>
          <p className="text-gray-600 mb-4">Master complex commands and tricks.</p>
          <p className="text-3xl font-bold text-blue-800 mb-4">₹3,500<span className="text-lg text-gray-600">/course</span></p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>

        {/* Behavioral Training */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <Award className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Behavioral Training</h3>
          <p className="text-gray-600 mb-4">Address issues like aggression, anxiety, and barking.</p>
          <p className="text-3xl font-bold text-blue-800 mb-4">₹5,000<span className="text-lg text-gray-600">/course</span></p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What age can my dog start training?",
              answer: "Dogs can start basic training as early as 8 weeks old.",
            },
            {
              question: "How long does a training course last?",
              answer: "Each course typically lasts 4-6 weeks, depending on the program.",
            },
            {
              question: "Do you offer one-on-one sessions?",
              answer: "Yes, we offer personalized one-on-one training sessions.",
            },
          ].map((faq, index) => (
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

      {/* Call to Action Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Start Your Dog’s Training Journey Today!</h2>
        <p className="text-gray-200 mb-6">
          Enroll in a program and see the difference in your dog’s behavior.
        </p>
        <button className="bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default DogTraining;