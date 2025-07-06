import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaCloud, FaShieldAlt, FaCode, FaBolt, FaRobot, FaComments, FaCogs, FaChalkboardTeacher } from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
        >
          Crestonix Services All Over The World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto"
        >
          Delivering comprehensive IT and Non-IT solutions that drive innovation, efficiency, and growth across industries worldwide.
        </motion.p>
      </section>

      {/* IT Services */}
      <section className="py-16 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <FaCode className="text-4xl text-orange-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-orange-400">IT Services</h2>
          </div>

          <h3 className="text-xl font-semibold mb-3">Advanced IT Services</h3>
          <ul className="text-sm md:text-base space-y-3 text-gray-300 leading-relaxed list-none mt-4">
            <li className="flex items-start gap-3">
              <FaCloud className="text-orange-400 mt-1" /> Custom software & cloud solutions to revolutionize your operations.
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-orange-400 mt-1" /> Advanced cybersecurity & secure infrastructure.
            </li>
            <li className="flex items-start gap-3">
              <FaBolt className="text-orange-400 mt-1" /> Digital transformation tools tailored for scalability.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Non-IT Services */}
      <section className="py-16 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <FaCogs className="text-4xl text-orange-400 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-orange-400">Non-IT Services</h2>
          </div>

          <h3 className="text-xl font-semibold mb-3">Comprehensive Non-IT Services</h3>
          <ul className="text-sm md:text-base space-y-3 text-gray-300 leading-relaxed list-none mt-4">
            <li className="flex items-start gap-3">
              <FaComments className="text-orange-400 mt-1" /> Business consulting & operational strategy.
            </li>
            <li className="flex items-start gap-3">
              <FaBolt className="text-orange-400 mt-1" /> Process automation for optimized workflows.
            </li>
            <li className="flex items-start gap-3">
              <FaChalkboardTeacher className="text-orange-400 mt-1" /> Training & customer support programs.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* AI Internship */}
      <section className="py-16 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <FaRobot className="text-4xl text-orange-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-orange-400 mb-4">AI Internship Program</h2>
          <p className="text-gray-300 text-md md:text-lg leading-relaxed">
            Join our hands-on AI internship to gain real-world experience in Machine Learning, Data Science, and Artificial Intelligence.
            Work on live projects under mentorship from experienced industry professionals and build a career-ready portfolio.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
