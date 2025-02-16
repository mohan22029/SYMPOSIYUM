import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { FaUsers, FaTrophy, FaChalkboardTeacher, FaBus, FaUtensils, FaTicketAlt } from "react-icons/fa";
import "./about.css";
import Aboutvedio from "../Assets/about2.mp4";

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    setIsPageLoaded(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="about-container">
      {/* Background Video */}
      <div className={`video-container ${isVideoLoaded ? "loaded" : ""}`}>
        <video
          autoPlay
          loop
          muted
          className="background-video"
          preload="auto"
          onCanPlayThrough={handleVideoLoad} 
        >
          <source src={Aboutvedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isVideoLoaded && (
          <div className="loading-overlay">
            <div className="spinner"></div>
          </div>
        )}
      </div>

      {/* About Section */}
      {isPageLoaded && (
        <motion.div
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="about-title">Welcome to <span className="highlight">AI DYNAMICA 2025</span></h1>
          <p className="about-description">
            🚀 AI DYNAMICA 2025 is a cutting-edge tech symposium where innovation meets intelligence!  
            Explore Artificial Intelligence, Machine Learning, and Data Science through expert talks and thrilling competitions.
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      {isPageLoaded && (
        <motion.div
          className="about-footer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>🚀 Don't miss out on the ultimate AI experience! 🚀</p>
          <motion.button 
            className="about-register-btn" 
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/event")} // Navigate to events page
          >
            Register Now
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default About;
