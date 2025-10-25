import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for internal routing
import { 
    ChevronRight, 
    Dog, 
    Shield, 
    Clock, 
    Star, 
    Heart, 
    Sparkles,
    Award,
    Zap
} from "lucide-react";

const HeroSection = () => {
    const services = [
        {
            icon: "🦮",
            name: "Dog Training",
            description: "Expert obedience & behavior training",
            link: "/dog-training",
            gradient: "from-blue-500 to-indigo-600",
        },
        {
            icon: "🚶",
            name: "Dog Walking",
            description: "Daily walks & exercise for happy pups",
            link: "/dog-walking",
            gradient: "from-green-500 to-emerald-600",
        },
        {
            icon: "✂️",
            name: "Dog Grooming",
            description: "Professional grooming & spa services",
            link: "/dog-grooming",
            gradient: "from-purple-500 to-pink-600",
        },
        {
            icon: "🏠",
            name: "Dog Boarding",
            description: "Safe & comfortable overnight stays",
            link: "/dog-boarding", // Corrected link
            gradient: "from-orange-500 to-red-600",
        },
        {
            icon: "💝",
            name: "Dog Sitting",
            description: "Personalized care at home",
            link: "/dog-sitting",
            gradient: "from-yellow-500 to-orange-600",
        },
    ];

    const FloatingCard = ({ icon: Icon, title, color, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, type: "spring", stiffness: 100 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 p-2 sm:p-4 flex items-center gap-2 sm:gap-3 min-w-fit hover:shadow-xl transition-all duration-300"
        >
            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${color} shadow-lg`}>
                <Icon className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800 text-xs sm:text-base">{title}</span>
        </motion.div>
    );

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
            {/* Animated Background Elements - Reduced for mobile */}
            <div className="absolute inset-0">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                
                {/* Floating Geometric Shapes - Smaller for mobile */}
                <motion.div 
                    className="absolute top-16 sm:top-32 right-10 sm:right-20 w-2 sm:w-4 h-2 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-3 sm:w-6 h-3 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                    animate={{ y: [10, -10, 10], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                <motion.div 
                    className="absolute top-20 sm:top-40 left-1/4 sm:left-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    animate={{ y: [-15, 15, -15], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
            </div>
            
            <div className="relative z-10 px-4 sm:px-6 mt-20 md:mt-0 lg:px-16 py-8 sm:py-12 lg:py-20">
                <div className="max-w-7xl mx-3 md:mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 sm:space-y-6 lg:space-y-8"
                        >
                            {/* Trust Indicators - Mobile responsive */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-row sm:flex-row gap-2 sm:gap-4"
                            >
                                <div className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/50 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm sm:text-base">5.0 Rating</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/50 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow">
                                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-red-500 fill-current animate-pulse" />
                                    <span className="font-bold text-gray-800 text-sm sm:text-base">500+ Happy Pets</span>
                                </div>
                            </motion.div>

                            {/* Main Heading - Responsive text sizes */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-3 sm:space-y-6 "
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-black leading-tight">
                                    <span className="block">Where Your Pet's</span>
                                    <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-pulse">
                                        Adventure
                                    </span>{" "}
                                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                                        Begins!
                                    </span>
                                </h1>
                                
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-yellow-500 animate-pulse" />
                                    <span className="text-sm sm:text-lg font-semibold text-gray-600">Professional Pet Care Services in Udaipur</span>
                                </div>
                            </motion.div>

                            {/* Description - Mobile responsive */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl"
                            >
                                Join the PetJunction family! We provide tail-wagging{" "}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    dog training
                                </span>
                                ,{" "}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                    walking
                                </span>
                                , and{" "}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                    boarding
                                </span>{" "}
                                services that keep your furry friends happy, healthy, and excited for their next visit.
                            </motion.p>
                            
                            {/* Mobile Logo - Smaller size */}
                            <motion.div
                                className="block lg:hidden relative h-40 sm:h-48 md:h-60 my-6 sm:my-8 md:my-12"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            >
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    animate={{
                                        y: [-10, 10, -10],
                                        rotate: [-2, 2, -2],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img 
                                        src="https://res.cloudinary.com/ddbu8cm4z/image/upload/v1761398574/petjunction_wp4s4m.png" 
                                        alt="PetJunction Logo - Dog and cat illustration" 
                                        className="h-45 sm:h-40 md:h-48 w-auto drop-shadow-2xl" 
                                    />
                                </motion.div>

                                {/* Mobile Floating Cards - Smaller */}
                                <motion.div
                                    animate={{ y: [-6, 6, -6] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="hidden -right-2 sm:-right-6 top-2 sm:top-4"
                                >
                                    <FloatingCard icon={Heart} title="Loving Care" color="bg-gradient-to-r from-red-500 to-pink-500" delay={0.8} />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [6, -6, 6] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="hidden -left-2 sm:-left-6 bottom-4 sm:bottom-8"
                                >
                                    <FloatingCard icon={Shield} title="Safe & Secure" color="bg-gradient-to-r from-cyan-500 to-blue-500" delay={1} />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Desktop Logo & Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative w-full aspect-square max-w-2xl mx-auto">
                                {/* Background Glow Effects */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl" />
                                    <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-pink-300/30 to-red-300/30 rounded-full blur-3xl" />
                                </motion.div>

                                {/* Main Logo */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                                    animate={{
                                        y: [-20, 20, -20],
                                        rotate: [-2, 2, -2],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img 
                                        src="https://res.cloudinary.com/ddbu8cm4z/image/upload/v1761398574/petjunction_wp4s4m.png" 
                                        alt="PetJunction Logo with a dog and cat" 
                                        className="h-80 w-auto drop-shadow-2xl" 
                                    />
                                </motion.div>

                                {/* Floating Feature Cards */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-16 right-0"
                                >
                                    <FloatingCard
                                        icon={Heart}
                                        title="Loving Care"
                                        color="bg-gradient-to-r from-red-500 to-pink-500"
                                        delay={0.8}
                                    />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-20 left-0"
                                >
                                    <FloatingCard
                                        icon={Shield}
                                        title="Safe & Secure"
                                        color="bg-gradient-to-r from-cyan-500 to-blue-500"
                                        delay={1}
                                    />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-15, 15, -15] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/3 left-8"
                                >
                                    <FloatingCard
                                        icon={Clock}
                                        title="24/7 Care"
                                        color="bg-gradient-to-r from-yellow-500 to-orange-500"
                                        delay={1.2}
                                    />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [12, -12, 12] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-1/3 right-8"
                                >
                                    <FloatingCard
                                        icon={Award}
                                        title="Expert Team"
                                        color="bg-gradient-to-r from-purple-500 to-indigo-500"
                                        delay={1.4}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Services Section - Mobile responsive grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0"
                    >
                        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                            <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-1 sm:mb-2">Our Premium Services</h2>
                            <p className="text-gray-600 text-sm sm:text-base">Professional care tailored for your pet's needs</p>
                        </div>
                        
                        {/* Services Grid - Responsive */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (0.1 * index), type: "spring", stiffness: 100 }}
                                    className="group cursor-pointer"
                                >
                                    <Link to={service.link}> {/* Updated to use Link */}
                                        <div className="relative p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl bg-white/50 hover:bg-white/80 border border-gray-200/50 hover:border-gray-300/50 group-hover:scale-105">
                                            {/* Service Icon */}
                                            <div className="text-center mb-2 sm:mb-4">
                                                <div className="relative inline-block">
                                                    <span className="text-2xl sm:text-3xl lg:text-4xl transition-transform group-hover:scale-125 block">
                                                        {service.icon}
                                                    </span>
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-opacity duration-300`}></div>
                                                </div>
                                            </div>
                                            
                                            <h3 className="font-bold text-center text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600">
                                                {service.name}
                                            </h3>
                                            
                                            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                                                {service.description}
                                            </p>
                                            
                                            {/* Hover indicator */}
                                            <div className={`absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* CTA Button - Mobile responsive */}
                        <Link to="/inquiry-form"> {/* Updated to use Link */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                <Zap className="w-4 sm:w-6 h-4 sm:h-6 group-hover:animate-pulse" />
                                <span className="text-center">Book Premium Pet Services Now</span>
                                <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
