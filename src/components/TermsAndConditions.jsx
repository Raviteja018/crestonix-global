import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "Agreement Scope",
      description:
        "Priacc Innovations agrees to deliver software products and/or services as outlined in specific client agreements.",
    },
    {
      title: "License and Usage",
      description:
        "The Client is granted a non-exclusive, non-transferable license to use the software as per the terms specified.",
    },
    {
      title: "Intellectual Property",
      description:
        "All software, designs, and related documentation remain the intellectual property of Priacc Innovations.",
    },
    {
      title: "Fees and Payment",
      description:
        "All fees must be paid as per the agreed-upon schedule. Late payments may incur penalties.",
    },
    {
      title: "Support and Maintenance",
      description:
        "Support and maintenance include bug fixes, updates, and patches as outlined in the agreement.",
    },
    {
      title: "Data Privacy",
      description:
        "Priacc Innovations is committed to safeguarding the Client’s data under applicable privacy laws.",
    },
    {
      title: "Confidentiality",
      description:
        "Both parties agree to maintain the confidentiality of all proprietary information shared during the relationship.",
    },
    {
      title: "Warranties and Disclaimers",
      description:
        "Priacc Innovations warrants that its software will perform as described in the documentation.",
    },
    {
      title: "Liability",
      description:
        "Priacc Innovations shall not be liable for indirect, incidental, or consequential damages.",
    },
    {
      title: "Termination",
      description:
        "Either party may terminate the agreement with 15 days written notice. The Client must cease using the software upon termination.",
    },
    {
      title: "Governing Law",
      description: "This agreement is governed by the laws of Telangana, India.",
    },
    {
      title: "Amendments",
      description:
        "Priacc Innovations reserves the right to modify these terms with prior notice.",
    },
    {
      title: "Dispute Resolution",
      description:
        "Disputes will first be addressed through negotiation. Unresolved disputes will go to arbitration.",
    },
    {
      title: "Force Majeure",
      description:
        "Priacc Innovations is not liable for delays caused by events beyond its control, including natural disasters.",
    },
    {
      title: "Entire Agreement",
      description:
        "This document constitutes the complete agreement between Priacc Innovations and the Client.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 md:px-20 py-20">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 mb-8">
          Please read these Terms and Conditions ("Agreement") carefully before using services provided by Priacc Innovations.
        </p>

        {terms.map((item, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              {index + 1}. {item.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}

        <p className="text-sm text-gray-500 mt-12">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </section>

      <Footer />
    </div>
  );
}
