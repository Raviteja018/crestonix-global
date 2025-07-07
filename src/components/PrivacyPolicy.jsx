import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  const policies = [
    {
      title: "Information Collection",
      description:
        "Priacc Innovations collects personal information such as name, email, and contact details when you use our services or contact us.",
    },
    {
      title: "Use of Information",
      description:
        "We use your information to provide services, improve user experience, and communicate important updates.",
    },
    {
      title: "Cookies and Tracking",
      description:
        "Our website may use cookies and similar technologies to analyze usage and enhance functionality.",
    },
    {
      title: "Third-Party Sharing",
      description:
        "We do not sell or rent your personal information. We may share data with trusted partners for service delivery, subject to confidentiality.",
    },
    {
      title: "Data Security",
      description:
        "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "User Rights",
      description:
        "You have the right to access, update, or delete your personal information by contacting us directly.",
    },
    {
      title: "Children’s Privacy",
      description:
        "Our services are not intended for individuals under 13. We do not knowingly collect data from children.",
    },
    {
      title: "Changes to Policy",
      description:
        "Priacc Innovations reserves the right to modify this policy at any time. Updates will be posted on this page.",
    },
    {
      title: "Contact Information",
      description:
        "If you have any questions about this Privacy Policy, please contact us at support@priaccinnovations.com.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 border-l-4 border-orange-500 pl-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-10 text-md md:text-lg leading-relaxed">
          This Privacy Policy outlines how Priacc Innovations collects, uses, and protects your personal information when you interact with our services.
        </p>

        <div className="space-y-8">
          {policies.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-xl shadow-md px-6 py-6 border border-gray-800 hover:shadow-orange-500/20 transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {index + 1}. {item.title}
              </h2>
              <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12 text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>

      <Footer />
    </div>
  );
}
