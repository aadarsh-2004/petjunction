import React, { useState } from 'react';
import {
  Check, Snowflake, Fan, Coffee, Clock, Bath, DoorOpen, Camera,
  Phone, Calendar, Star, ChevronRight, Book, AlertCircle
} from 'lucide-react';
import logo from '../assets/dog.jpg';

const BoardingPage = () => {
  const [selectedTab, setSelectedTab] = useState('requirements');

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
        "Daily photo updates"
      ],
      icon: Snowflake,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
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
        "Weekly photo updates"
      ],
      icon: Fan,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    }
  ];

  const amenities = [
    { icon: Clock, title: "24/7 Care", description: "Round-the-clock supervision", color: "bg-red-100 text-red-600" },
    { icon: Bath, title: "Clean Facilities", description: "Daily sanitization", color: "bg-blue-100 text-blue-600" },
    { icon: Coffee, title: "Fresh Food & Water", description: "Regular meals included", color: "bg-yellow-100 text-yellow-600" },
    { icon: DoorOpen, title: "Exercise Areas", description: "Indoor & outdoor spaces", color: "bg-purple-100 text-purple-600" },
    { icon: Camera, title: "Photo Updates", description: "Regular pet updates", color: "bg-orange-100 text-orange-600" },
    { icon: Phone, title: "Vet On Call", description: "Emergency medical support", color: "bg-green-100 text-green-600" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      pet: "Max",
      rating: 5,
      comment: "The AC boarding facility is amazing! Max loved his stay and the staff was incredibly caring.",
      image: logo
    },
    {
      name: "John Davis",
      pet: "Luna",
      rating: 5,
      comment: "Great experience with the non-AC boarding. The ventilation was perfect and Luna was well taken care of.",
      image: logo
    },
    {
      name: "Emma Wilson",
      pet: "Rocky",
      rating: 5,
      comment: "The daily updates and photos gave me peace of mind. Will definitely use again!",
      image: logo
    }
  ];

  const galleryImages = [
    { url: logo, alt: "AC Kennel Interior" },
    { url: logo, alt: "Play Area" },
    { url: logo, alt: "Outdoor Space" },
    { url: logo, alt: "Grooming Station" }
  ];

  const requirements = [
    "Updated vaccination records (DHPP, Rabies, Bordetella)",
    "Minimum age: 4 months",
    "Temperament evaluation for first-time boarders",
    "Emergency contact information",
    "Medications and feeding instructions if applicable",
    "Proof of flea and tick prevention"
  ];

  const policies = [
    "Check-in time: 8 AM - 6 PM",
    "Check-out time: Before 11 AM",
    "Late check-out fee applies",
    "Minimum 24-hour advance booking required",
    "Cancellation: 48 hours notice for full refund",
    "Special diet additional charges apply"
  ];

  const tabs = [
    { id: 'requirements', label: 'Requirements' },
    { id: 'policies', label: 'Policies' },
    // { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-7xl mx-auto px-6 py-24 pb-12 ">
        <div className="text-center max-w-5xl mx-auto py-24 ">
          <h1 className="text-4xl font-bold mb-6">Luxury Dog <span className="text-blue-500">Boarding</span> Services</h1>
          <p className="text-gray-600 text-lg mb-8">
            Give your furry friend a home away from home with our premium boarding facilities.
            Choose between our AC and Non-AC accommodations for the perfect stay.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-12 flex items-center gap-3">
          <AlertCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-red-700">24/7 Emergency Support</h3>
            <p className="text-red-600">Contact us anytime at: +91 98765 43210</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {amenities.map((amenity) => (
            <div key={amenity.title} className={`rounded-xl p-6 shadow-sm hover:shadow-md ${amenity.color}`}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-lg bg-white">
                  <amenity.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{amenity.title}</h3>
                  <p className="text-sm">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {boardingOptions.map((option) => (
            <div key={option.title} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`${option.color} p-8 text-white`}>  
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <option.icon className="w-8 h-8" />
                    {option.title}
                  </h2>
                  <div className="text-right">
                    <span className="text-4xl font-extrabold">{option.price}</span>
                    <p className="text-lg opacity-90">{option.timeUnit}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gray-50">
                <ul className="space-y-4">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-4 ${option.color} ${option.hoverColor} text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-transform transform hover:scale-105`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex gap-4 mb-6 border-b">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setSelectedTab(tab.id)} className={`pb-2 px-4 font-medium transition-colors ${selectedTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6">
            {selectedTab === 'requirements' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Boarding Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'policies' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Boarding Policies</h3>
                <ul className="space-y-3">
                  {policies.map((policy, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* {selectedTab === 'gallery' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Happy Pet Parents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">Pet: {testimonial.pet}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 flex items-center gap-2">
            <Book className="w-6 h-6" />
            <span className="font-medium">Quick Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardingPage;