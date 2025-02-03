import React,{useEffect} from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const PetProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = [
    { id: 1, img: "https://headsupfortails.com/cdn/shop/files/HUFT-Cat-Litter-_Natural-_-Clumping_---Lavender-Scented---10-kg.jpg?v=1686811084&width=533", title: "Cat Litter" },
    { id: 2, img: "https://m.media-amazon.com/images/I/811QqACja8L.jpg", title: "Pet Food" },
    { id: 3, img: "https://www.orangepet.in/cdn/shop/files/StarterPuppy_f64b071b-598c-495e-95e0-e9937a5805ca.jpg?v=1707221875", title: "Puppy Food" },
    { id: 4, img: "https://www.all4pets.in/wp-content/uploads/2024/01/dry-dog-food.jpg", title: "Dog Food" },
    { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU2vpSlaomKzb_1nWZO5am3p4vMtjYosthQ&s", title: "Pet Treats" },
    { id: 6, img: "https://www.petterati.com/cdn/shop/files/Image18902979012379.jpg?v=1711696548", title: "Pet Accessories" },
    { id: 7, img: "https://m.media-amazon.com/images/I/41RtpTh6PpL._SX300_SY300_QL70_FMwebp_.jpg", title: "Pet Care" },
    { id: 8, img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/18d44c28-d854-47fb-adbb-0c13a25776ee.__CR0,0,970,600_PT0_SX970_V1___.png", title: "Pet Supplies" }
  ];

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white min-h-screen pt-24 pb-12 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
         
        </div>
        <h1 className="text-4xl font-bold text-gray-800 font-serif mb-3">
          Pocket Friendly Deals
        </h1>
        <h2 className="text-xl text-gray-600 font-serif">
          Budget Friendly Products for your Loving Pets
        </h2>
      </div>

      {/* Coming Soon Banner */}
      <div className="flex justify-center mb-8">
        <div className="bg-cyan-100 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-600 animate-pulse" />
          <span className="font-semibold text-cyan-800">Coming Soon</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={product.img} 
                  alt={product.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cyan-900/30 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="font-semibold text-lg mb-2">{product.title}</p>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default PetProducts;