import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Dog, Shield, Clock, Star, Heart } from "lucide-react";
import logo from '../assets/petjunction.png';

const HeroSection = () => {
  const services = [
    {
      icon: "🦮",
      name: "Dog Training",
      description: "Expert training services",
    },
    {
      icon: "🚶",
      name: "Dog Walking",
      description: "Daily walks & exercise",
    },
    {
      icon: "✂️",
      name: "Dog Grooming",
      description: "Professional grooming",
    },
    {
      icon: "🏠",
      name: "Dog Boarding",
      description: "Safe & comfortable stays",
    },
    {
      icon: "💝",
      name: "Dog Sitting",
      description: "Personalized care",
    },
  ];

  const FloatingCard = ({ icon: Icon, title, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-xl shadow-md p-3 flex items-center gap-2 w-auto"
    >
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="font-medium text-sm text-gray-700">{title}</span>
    </motion.div>
  );

  return (
    <div className="relative bg-gradient-to-b from-cyan-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-red-100 rounded-full opacity-20 blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-100 rounded-full opacity-20 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-100 rounded-full opacity-20 blur-2xl" />
      </div>
      
      <div className="px-6 lg:px-16 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-white shadow-sm rounded-xl px-4 py-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-sm">4.9/5 Rating</span>
              </div>
              <div className="bg-white shadow-sm rounded-xl px-4 py-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-sm">5000+ Happy Pets</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Where Your Pet's
              <span className="text-red-500"> Adventure </span>
              <span className="text-cyan-500">Begins!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600"
            >
              Join the PetJunction family! We provide tail-wagging services that keep your furry friends happy, healthy, and excited for their next visit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col items-center p-3 rounded-xl transition-all hover:bg-cyan-50">
                      <span className="text-3xl mb-2 transition-transform group-hover:scale-110">
                        {service.icon}
                      </span>
                      <h3 className="font-medium text-sm text-center text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-xs text-gray-500 text-center mt-1">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:shadow-md transition-shadow"
              >
                Book Now
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-200 rounded-full opacity-20 blur-2xl" />
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-200 rounded-full opacity-20 blur-2xl" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={logo} alt="PetJunction" className="h-60 w-auto" />
              </motion.div>

              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 right-0"
              >
                <FloatingCard
                  icon={Heart}
                  title="Loving Care"
                  color="bg-red-500"
                  delay={0.8}
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-0"
              >
                <FloatingCard
                  icon={Shield}
                  title="Safe & Secure"
                  color="bg-cyan-500"
                  delay={1}
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 left-12"
              >
                <FloatingCard
                  icon={Clock}
                  title="24/7 Care"
                  color="bg-yellow-500"
                  delay={1.2}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;