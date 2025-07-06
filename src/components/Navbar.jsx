// src/components/Navbar.jsx
import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png"; // your 'cg' image logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <img src='https://crestonixglobal.com/logoo.png' alt="cg" className="w-10 h-10" />
        </div>

        {/* Center Links (hidden on mobile) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-orange-500 transition ${
                    isActive ? "text-orange-400 font-bold" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Logo Text */}
        <div className="text-right hidden md:block">
          <div className="flex items-center gap-2">
          <img src='https://crestonixglobal.com/logoo1.png' alt="cg" className="w-25" />
        </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-zinc-900 text-center py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className="text-white hover:text-orange-500 block"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
