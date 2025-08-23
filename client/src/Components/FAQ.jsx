import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, HandHeart } from 'lucide-react';
import SEO from '../SEO';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PHONE_NUMBER = "+919784249525";

  const handleBooking = () => {
    const message = `Hello! I have a question about your services and would like to talk to a representative.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const faqs = [
    {
      question: "What pet services are available in Udaipur?",
      answer: "We are a leading provider of pet services in Udaipur, offering a comprehensive range of care including **dog boarding in Udaipur**, professional **dog grooming udaipur** and **cat grooming**, expert **dog training**, and convenient **pet taxi udaipur**."
    },
    {
      question: "Do you provide pet boarding services for both dogs and cats?",
      answer: "Yes, our pet boarding facilities cater to both dogs and cats. We provide a safe, comfortable, and fun environment for all pets, ensuring they feel right at home while you're away."
    },
    {
      question: "Can you help me with dog training near me?",
      answer: "Absolutely! We offer personalized dog training programs with certified **dog trainer udaipur**. Our training includes puppy training, obedience, and behavior modification. We can work with you to find a solution that fits your dog's needs and your schedule."
    },
    {
      question: "What is included in your grooming packages?",
      answer: "Our **pet grooming in Udaipur** services include everything from a basic bath and brush to full-service styling, de-shedding, and medicated baths. We use professional-grade products and handle all grooming needs for dogs and cats."
    },
    {
      question: "How does your pet pick and drop service work?",
      answer: "Our **pet pick and drop** service, or pet taxi, is designed for your convenience. We can transport your pet safely to and from our facility for boarding, grooming, or training appointments, ensuring a stress-free experience for your furry friend."
    },
    {
      question: "Are your pet care specialists qualified and certified?",
      answer: "Yes, our team of pet care specialists are highly experienced and have undergone professional training. We are passionate about providing the highest standard of care and ensuring the well-being and safety of every pet."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ | Pet Services in Udaipur | Pet Junction"
        description="Find answers to frequently asked questions about our pet boarding, dog training, pet grooming, and pet taxi services in Udaipur. We are the trusted choice for pet care specialists."
        canonical="https://www.petjunction.in/faq"
      />
      <div className="max-w-6xl mt-24 mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our pet services in Udaipur, including dog boarding, dog training, and pet grooming.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white shadow-lg rounded-xl p-6">
              <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-800 p-8 rounded-xl shadow-lg mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-200 mb-6">
            If you can't find the answer you're looking for, feel free to reach out to our team of pet care specialists.
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-teal-800 py-3 px-6 rounded-xl font-semibold hover:bg-teal-100 transition-colors shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
