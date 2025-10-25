import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
  ArrowRight,
  Star,
  Shield,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full relative bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse"></div> */}
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-amber-400/25 to-yellow-400/25 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-gradient-to-r from-yellow-300/15 to-orange-300/15 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      <footer className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info with Logo */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="/petjunction.png"
                    alt="PetJunction Logo"
                    className="w-16 h-16 rounded-2xl shadow-xl ring-4 ring-orange-200/50 hover:ring-yellow-400/70 transition-all duration-800"
                  />
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-20 animate-pulse"></div> */}
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-1">
                    <span className="bg-gradient-to-b from-yellow-600 via-yellow-500 to-orange-400 text-transparent bg-clip-text">
                      PetJunction
                    </span>
                  </h3>
                  {/* <p className="text-orange-600 font-medium">Caring for your furry family</p> */}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed max-w-md">
                Your premier destination for pet services in Udaipur. We offer expert dog training, comfortable boarding, and professional grooming. 
                <span className="text-orange-600 font-semibold"> Making tails wag since 2020!</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm">
                <div className="text-center p-3 bg-orange-50 backdrop-blur-sm rounded-xl border border-orange-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-xs text-gray-600">Happy Pets</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 backdrop-blur-sm rounded-xl border border-yellow-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">5★</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="text-center p-3 bg-amber-50 backdrop-blur-sm rounded-xl border border-amber-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 text-black">
                <span className="text-gray-800 font-medium">Follow us:</span>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/petjunction.care/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:animate-bounce" />
                  </a>
                  
                 
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6 ">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-400" />
                <h4 className="text-xl font-bold text-black">Our Services</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { to: "/dog-walking", name: "Dog Walking", icon: "🚶‍♂️" },
                  { to: "/dog-grooming", name: "Pet Grooming", icon: "✂️" },
                  { to: "/dog-boarding", name: "Pet Boarding", icon: "🏠" },
                  { to: "/dog-training", name: "Pet Training", icon: "🎓" },
                  { to: "/dog-sitting", name: "Pet Sitting", icon: "🐕" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.to}
                      className="group flex items-center gap-3 text-gray-800 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Contact */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h4 className="text-xl font-bold text-black">Quick Links</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    { to: "/faq", name: "FAQ's" },
                    { to: "/about-us", name: "About Us" },
                    { to: "/contact-us", name: "Contact Us" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className="text-gray-800 hover:text-purple-400 transition-colors duration-300 font-medium flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-black flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-400" />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium">+919784249525</div>
                      <div className="text-gray-600 text-sm">24/7 Support</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium text-sm">Care.petjunction@gmail.com</div>
                      <div className="text-gray-600 text-sm">Quick Response</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mt-1">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium text-sm">10, Inspiro Building</div>
                      <div className="text-gray-600 text-sm">New Bhopalpura, Udaipur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-800">
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                <span className="font-medium">
                  © {new Date().getFullYear()} PetJunction. Made with love for pets.
                </span>
                
              </div>
              <span className="font-medium text-gray-800">
                  Developed by <a className="text-orange-500" href="https://www.beeztech.studio/">beeztech.studio</a>
                </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-800 text-sm ml-2">Rated 5/5</span>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <a href="/sitemap.xml" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;