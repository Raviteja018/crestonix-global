import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaCode, FaBusinessTime, FaRobot } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <section className="bg-gradient-to-b from-gray-900 via-black to-gray-950 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto space-y-16 mb-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              Crestonix Global Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering Cutting-Edge IT & Non-IT Services with Expertise in AI
              Internships and More — Empowering Your Business & Career Growth.
            </p>
          </div>

          {/* Offerings Section */}
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* IT Services */}
            <div className="bg-[#111111] rounded-xl shadow-lg p-6 hover:shadow-orange-500/20 transition duration-300">
              <FaCode className="text-4xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                IT Services
              </h3>
              <p className="text-sm text-gray-300">
                Custom software, cloud solutions, cybersecurity, and digital transformation tailored to your business.
              </p>
            </div>

            {/* Non-IT Services */}
            <div className="bg-[#111111] rounded-xl shadow-lg p-6 hover:shadow-orange-500/20 transition duration-300">
              <FaBusinessTime className="text-4xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                Non-IT Services
              </h3>
              <p className="text-sm text-gray-300">
                Business consulting, automation, and support solutions to optimize operations across industries.
              </p>
            </div>

            {/* AI Internship Program */}
            <div className="bg-[#111111] rounded-xl shadow-lg p-6 hover:shadow-orange-500/20 transition duration-300">
              <FaRobot className="text-4xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                AI Internship Program
              </h3>
              <p className="text-sm text-gray-300">
                Hands-on training in AI, ML, and Data Science with real-world projects under expert mentorship.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-[#111111] rounded-2xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto text-center hover:shadow-orange-500/20 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              Our Story
            </h3>
            <p className="text-gray-300 text-md md:text-lg leading-relaxed">
              At Crestonix Global Solutions, we believe in innovation that
              shapes the future. Since our inception, we have been committed to
              delivering comprehensive IT and Non-IT services designed to
              empower businesses and individuals alike. Our passion for
              excellence drives us to offer tailored solutions and
              industry-leading internship programs that bridge the gap between
              academic knowledge and practical experience. Together, we build
              success stories that last.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
