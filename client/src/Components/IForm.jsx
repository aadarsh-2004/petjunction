import React, { useState,useEffect } from 'react';
import { Send, MessageCircle, PawPrint, Phone, User, Mail, Heart } from 'lucide-react';

const IForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    clientName: '',
    phoneNumber: '',
    email: '',
    petName: '',
    petType: '',
    petAge: '',
    petBreed: '',
    selectedServices: []
  });

  const services = [
    { id: 'dogTraining', name: 'Dog Training', description: 'Expert training services', icon: '🎓' },
    { id: 'dogWalking', name: 'Dog Walking', description: 'Daily walks & exercise', icon: '🦮' },
    { id: 'dogGrooming', name: 'Dog Grooming', description: 'Professional grooming', icon: '✨' },
    { id: 'dogBoarding', name: 'Dog Boarding', description: 'Comfortable boarding facilities', icon: '🏠' },
    { id: 'dogSitting', name: 'Dog Sitting', description: 'Personal attention and care', icon: '💝' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const handleWhatsAppClick = () => {
    // Get selected services names
    const selectedServiceNames = formData.selectedServices
      .map(id => services.find(service => service.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    // Create message text
    const message = `
*New Pet Service Inquiry*
-------------------
*Owner Details*
Name: ${formData.clientName}
Phone: ${formData.phoneNumber}
Email: ${formData.email}

*Pet Details*
Name: ${formData.petName}
Age: ${formData.petAge}
Type: ${formData.petType}
Breed: ${formData.petBreed}

*Services Requested*
${selectedServiceNames}
    `.trim();

    // Create WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/+919784249525?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative max-w-4xl mt-24 mx-auto p-8 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 animate-bounce opacity-20">
          <PawPrint className="text-cyan-500" size={64} />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 animate-bounce opacity-20 delay-150">
          <PawPrint className="text-cyan-500" size={64} />
        </div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 animate-pulse opacity-20">
          <Heart className="text-pink-500" size={48} />
        </div>
      </div>

      {/* Header with Gradient */}
      <div className="text-center mb-8 relative">
        <div className="bg-white text-black bg-clip-text">
          <h2 className="text-4xl font-bold mb-2 ">Welcome to Pet Junction! 🐾</h2>
        </div>
        <p className="text-cyan-600 text-lg">Where tails wag and hearts purr with joy!</p>
      </div>

      {/* Main Form */}
      <div className="space-y-8 relative">
        {/* Owner Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-101 transition-transform">
          <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
            <User className="mr-2 animate-pulse text-red-500" /> Owner Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Name</label>
              <input
                type="text"
                name="clientName"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Your Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Your Phone Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2 group">
              <label className="block text-gray-700 mb-2 MessageCircle">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Your Email"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Pet Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-101 transition-transform">
          <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
            <PawPrint className="mr-2 animate-pulse text-cyan-600" /> Pet Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Pet's Name</label>
              <input
                type="text"
                name="petName"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Pet's Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Pet's Age</label>
              <input
                type="text"
                name="petAge"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Pet's Age"
                onChange={handleInputChange}
              />
            </div>
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Pet's Type</label>
              <input
                type="text"
                name="petType"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="e.g., Dog, Cat"
                onChange={handleInputChange}
              />
            </div>
            <div className="group">
              <label className="block text-gray-700 mb-2 MessageCircle">Pet's Breed</label>
              <input
                type="text"
                name="petBreed"
                className="w-full p-3 rounded-lg border-2 border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                placeholder="Pet's Breed"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black mb-4">Select Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-4 rounded-lg shadow-xl cursor-pointer transition-all transform hover:scale-105 ${
                  formData.selectedServices.includes(service.id)
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-white hover:shadow-md'
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="text-2xl mb-2 animate-bounce">{service.icon}</div>
                <h4 className="font-semibold mb-1">{service.name}</h4>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
            <Send size={20} className="animate-pulse" />
            Submit Form
          </button> */}
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-400 text-white px-8 py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
            <MessageCircle size={20} className="animate-pulse" />
            Contact via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default IForm;