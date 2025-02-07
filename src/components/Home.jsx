import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExchangeAlt, FaCode, FaLink, FaClock, FaPalette, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();

  const utilities = [
    {
      title: "Base64 Encode/Decode",
      description: "Easily encode and decode Base64 data.",
      icon: <FaExchangeAlt className="mb-3 utility-icon" size={30} />,
      path: "/base64"
    },
    {
      title: "JSON Formatter",
      description: "Format and beautify JSON data.",
      icon: <FaCode className="mb-3 utility-icon" size={30} />,
      path: "/json-formatter"
    },
    {
      title: "URL Encode/Decode",
      description: "Convert URLs to a safe format.",
      icon: <FaLink className="mb-3 utility-icon" size={30} />,
      path: "/url-encoder"
    },
    {
      title: "Timestamp to Date",
      description: "Convert timestamps to human-readable date.",
      icon: <FaClock className="mb-3 utility-icon" size={30} />,
      path: "/timestamp-to-date"
    },
    {
      title: "Hex to RGB",
      description: "Convert HEX colors to RGB format.",
      icon: <FaPalette className="mb-3 utility-icon" size={30} />,
      path: "/hex-to-rgb"
    },
    {
      title: "Password Generator",
      description: "Generate a secure random password.",
      icon: <FaLock className="mb-3 utility-icon" size={30} />,
      path: "/password-generator"
    }
  ];

  return (
      <>
        <Navbar brandName="Dev Utilities" githubLink="https://github.com/prathammore301" />
        <div className="container-fluid p-4">
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Dev Utilities</h1>
            <p className="lead text-muted">Fast, free, and open-source developer tools</p>
          </div>

          <div className="row g-4 justify-content-center">
            {utilities.map((utility, index) => (
                <div key={index} className="col-md-4">
                  <motion.div
                      className="card h-100 shadow-sm hover-card utility-card"
                      onClick={() => navigate(utility.path)}
                      style={{ cursor: "pointer" }}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      aria-label={`Navigate to ${utility.title}`}
                  >
                    <div className="card-body text-center p-4">
                      {utility.icon}
                      <h5 className="card-title utility-title mb-3">{utility.title}</h5>
                      <p className="card-text text-muted">{utility.description}</p>
                      <button className="btn btn-outline-primary mt-3" aria-label={`Try ${utility.title}`}>
                        Try it
                      </button>
                    </div>
                  </motion.div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}
