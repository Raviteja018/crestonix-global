import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="py-20 text-center px-6 md:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We're here to help you with your IT, Non-IT, and AI internship inquiries. Reach out to us or visit our office.
        </p>
      </section>

      {/* Contact Content */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-24 pb-20">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Contact Details
          </h2>
          <p className="text-gray-300">
            <strong>Address:</strong> Crestonix Global Solutions, Hyderabad, Telangana, India
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@crestonixglobal.com" className="text-orange-400 hover:underline">
              info@crestonixglobal.com
            </a>
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919876543210" className="text-orange-400 hover:underline">
              +91 98765 43210
            </a>
          </p>

          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2560272088665!2d78.37402657485866!3d17.44723078336108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f9fba274d1%3A0x50d2a8a3e6bbdfd!2sCrestonix%20Global%20Solutions!5e0!3m2!1sen!2sin!4v1720250000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>

          <a
            href="https://maps.app.goo.gl/5sXXNf8V89wbxCfNA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-orange-400 hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">
            Send a Message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Mock)");
              e.target.reset();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
