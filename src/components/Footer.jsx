import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <img
            src="https://crestonixglobal.com/logoo.png"
            alt="Crestonix Logo"
            className="w-10 h-10"
          />
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li>
              🌐 <a href="https://crestonixglobal.com" target="_blank" rel="noreferrer">crestonixglobal.com</a>
            </li>
            <li>
              <FaPhone className="inline mr-2 text-orange-400" />
              <a href="tel:+918096695559" className="hover:text-orange-400">8096695559</a>
            </li>
            <li>
              <FaEnvelope className="inline mr-2 text-orange-400" />
              <a href="mailto:info@crestonixglobal.com" className="hover:text-orange-400">info@crestonixglobal.com</a>
            </li>
            <li>
              <FaWhatsapp className="inline mr-2 text-green-400" />
              <a href="https://wa.me/918096695559" target="_blank" rel="noreferrer">WhatsApp Chat</a>
            </li>
            <li className="text-xs text-gray-400">
              407, 4th Floor, Jain Sadguru Capital Park,<br />
              Beside Rameshwaram Cafe, High-Tech City,<br />
              Hyderabad, Telangana, 500081
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Crestonix Global Solutions. All rights reserved.
      </div>
    </footer>
  );
}
