import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const careerCategories = {
  "AI Internship": [
    {
      title: "AI Research Intern",
      location: "Remote",
      type: "Internship",
      description: "Work on real-world AI projects with our expert team.",
    },
    {
      title: "Machine Learning Intern",
      location: "Remote",
      type: "Internship",
      description: "Build and deploy machine learning models in a collaborative environment.",
    },
  ],
  "IT Careers": [
    {
      title: "Frontend Developer",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "React, JavaScript, UI/UX focus.",
    },
    {
      title: "Backend Developer",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "Node.js, databases, APIs.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Hyderabad",
      type: "Full-Time",
      description: "CI/CD pipelines, cloud infrastructure.",
    },
  ],
  "Non-IT Careers": [
    {
      title: "Business Analyst",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "Bridge business goals with technology solutions.",
    },
    {
      title: "Communication Trainer",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "Enhance skills for effective workplace communication.",
    },
    {
      title: "Project Manager",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "Lead projects ensuring timely delivery and quality.",
    },
  ],
};

const tabNames = Object.keys(careerCategories);

export default function Careers() {
  const [activeTab, setActiveTab] = useState("AI Internship");

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
        >
          Careers at Crestonix
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto"
        >
          Discover growth opportunities in AI, IT, and beyond. Join Crestonix Global to build the future of innovation.
        </motion.p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 px-4 flex-wrap">
        {tabNames.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500"
                : "text-orange-400 border-orange-400 hover:bg-orange-500 hover:text-black"
            } transition duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Openings */}
      <section className="pb-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto space-y-10">
          {careerCategories[activeTab].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-orange-400/30 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-400">
                    {job.type} • {job.location}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">{job.description}</p>
                </div>
                <a
                  href="mailto:info@crestonixglobal.com"
                  className="px-5 py-2 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-500 hover:text-black transition"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 text-center">
        <p className="text-gray-300 mb-4">Don’t see your role listed?</p>
        <a
          href="mailto:info@crestonixglobal.com"
          className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Send Your Resume
        </a>
      </section>

      <Footer />
    </div>
  );
}
