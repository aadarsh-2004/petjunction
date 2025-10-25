import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Store,HandHeart, Dog, HeadphonesIcon } from 'lucide-react';
import logo from '../assets/petjunction.png';
import PopupBanner from './PopupBanner';

const services = [
  {
    title: "Dog Walking",
    description: "Daily walks and exercise",
    icon: "🚶",
    link:"/dog-walking"
    
  },
  {
    title: "Dog Training",
    description: "Train you dog",
    icon: "🦮",
    link:"/dog-training"
    
  },
  {
    title: "Dog Grooming",
    description: "Professional grooming services",
    icon: "✂️",
    link:"/dog-grooming"
  },
  {
    title: "Dog Boarding",
    description: "Comfortable overnight stays",
    icon: "🏠",
    link:"/dog-boarding"
  },
  {
    title: "Dog Sitting",
    description: "In-home pet care",
    icon: "💝",
    link:"/dog-sitting"
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-3xl">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/ddbu8cm4z/image/upload/v1761398574/petjunction_wp4s4m.png" 
              alt="PetJunction"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>

            <Link 
              to="/shop" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
            >
              <Store className="w-4 h-4" />
              Shop
            </Link>

    


            {/* Adoption */}
            <div className="relative group z-50">
              <button
                onClick={() => toggleDropdown('adopt')}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <HandHeart className="w-4 h-4" />
                Adoption
                
              </button>

              {activeDropdown === 'adopt' && (
                <PopupBanner/>
              )}
            </div>



            {/* Services Dropdown */}
            <div className="relative group z-50">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <Dog className="w-4 h-4" />
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full right-0 mt-2 w-[480px] bg-white rounded-xl shadow-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link to={service.link}>
                      
                      <div
                        key={service.title}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors cursor-pointer"
                      >
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <h3 className="font-medium text-sm">{service.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('support')}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <HeadphonesIcon className="w-4 h-4" />
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'support' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'support' && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border">
                  <div className="py-2">
                    <Link to="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">
                      Contact Us
                    </Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">
                      FAQ
                    </Link>
                    <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">
                      About Us
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action Button */}
            <Link to="/inquiry-form">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-shadow">
              Book Now
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-cyan-50 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-cyan-500" />
            ) : (
              <Menu className="w-5 h-5 text-cyan-500" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              <Link 
                to="/shop" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg"
              >
                <Store className="w-4 h-4" />
                Shop
              </Link>

              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobileServices')}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg w-full"
                >
                  <Dog className="w-4 h-4" />
                  Services
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'mobileServices' && (
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <div>
                          <h3 className="font-medium text-sm">{service.title}</h3>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobileSupport')}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg w-full"
                >
                  <HeadphonesIcon className="w-4 h-4" />
                  Support
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${activeDropdown === 'mobileSupport' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'mobileSupport' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-lg">
                      Contact Us
                    </Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-lg">
                      FAQ
                    </Link>
                    <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-lg">
                      About us
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Call to Action Button */}
               <Link to="/inquiry-form">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-shadow w-full">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;