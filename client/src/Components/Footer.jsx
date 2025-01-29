import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full relative">
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0   w-full overflow-hidden leading-none -z-30 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eefefe" fill-opacity="1" d="M0,0L20,16C40,32,80,64,120,74.7C160,85,200,75,240,80C280,85,320,107,360,106.7C400,107,440,85,480,74.7C520,64,560,64,600,74.7C640,85,680,107,720,117.3C760,128,800,128,840,138.7C880,149,920,171,960,160C1000,149,1040,107,1080,85.3C1120,64,1160,64,1200,90.7C1240,117,1280,171,1320,160C1360,149,1400,75,1420,37.3L1440,0L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        
      </div>

      <footer className="w-full pt-4 z-50  ">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold ">PawPerfect</h3>
              <p className="">
                Providing loving care for your furry family members since 2010. Your pets deserve the best, and we deliver just that.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="">Services</a></li>
                <li><a href="#" className="">About Us</a></li>
                <li><a href="#" className="">Book Now</a></li>
                <li><a href="#" className="">Gallery</a></li>
                <li><a href="#" className="">Pet Care Tips</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div >
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 " />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 " />
                  <span>woof@pawperfect.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 " />
                  <span>123 Puppy Lane, Dogtown</span>
                </div>
              </div>
            </div>

            
          </div>

          {/* Social Media Links */}
          <div className="mt-8 pt-8 ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-black hover:text-amber-800">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-amber-800">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-amber-800">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <p className="text-black">© {new Date().getFullYear()} PawPerfect. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;