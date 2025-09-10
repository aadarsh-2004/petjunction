import React,{useEffect} from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';
const ContactUs = () => {
  
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
    <SEO
        title="Contact PetJunction | Pet Services in Udaipur"
        description="Get in touch with PetJunction for dog walking, grooming, boarding & training in Udaipur. Call or book your pet’s service todays"
        canonical="https://www.petjunction.in/contact"
      />
    
    <div className="max-w-4xl mt-24 mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-cyan-700">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you! Get in touch with any questions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="How can we help?"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-cyan-600" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+919784249525</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-cyan-600" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">hello@petjunction.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <MapPin className="text-cyan-600" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">10, Inspiro Building, New Bhopalpura, Udaipur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;