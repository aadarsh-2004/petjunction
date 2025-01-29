import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full relative">
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#e0f2fe" 
            fillOpacity="1" 
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="w-full pt-4 z-50">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">PetJunction</h3>
              <p className="text-gray-600">
                Your one-stop destination for premium pet care services. Making tails wag and pets happy since 2020. We treat your pets like family!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-cyan-50 text-cyan-500 rounded-lg hover:bg-cyan-100 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-cyan-50 text-cyan-500 rounded-lg hover:bg-cyan-100 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-cyan-50 text-cyan-500 rounded-lg hover:bg-cyan-100 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h4>
              <ul className="space-y-2">
                {['Dog Walking', 'Dog Grooming', 'Dog Boarding', 'Dog Training', 'Dog Daycare'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Book Now', 'Pet Care Tips', 'FAQs', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-50 rounded-lg">
                    <Phone className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-gray-600">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-50 rounded-lg">
                    <Mail className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-gray-600">hello@petjunction.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-gray-600">123 Pet Street, Pawville</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} PetJunction. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-500 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;