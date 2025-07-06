import { motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import GlobeBackground from "./GlobeBackground";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover brightness-75 -z-20"
        />

        {/* Optional globe layer */}
        <div className="absolute inset-0 -z-10">
          <GlobeBackground />
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 z-10 pt-16 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold"
          >
            Welcome to <span className="text-orange-500">Crestonix Global</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white mt-4 text-lg md:text-xl"
          >
            Innovative Software Solutions for Your Business
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate('/about')}
            className="mt-8 px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Explore
          </motion.button>
        </div>
      </div>
      {/* Footer Outside of Hero Section */}
      <Footer />
    </div>
  );
}
