import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaChalkboardTeacher, FaBus, FaUtensils, FaTicketAlt } from "react-icons/fa";
import "./about.css";
import Aboutvedio from "../Assets/about2.mp4";

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    window.scrollTo({ top: 0, behavior: "smooth" });  // ✅ Always start at top
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

      {/* Why Attend Section */}
      {isPageLoaded && (
        <motion.div
          className="about-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title">Why Attend? 🤩</h2>
          <div className="box-container">
            <motion.div className="about-box" whileHover={{ scale: 1.05 }}>
              <FaUsers className="icon" />
              <h3>🔗 Network & Collaborate</h3>
              <p>Meet AI experts, researchers, and tech enthusiasts.</p>
            </motion.div>
            <motion.div className="about-box" whileHover={{ scale: 1.05 }}>
              <FaChalkboardTeacher className="icon" />
              <h3>📚 Learn & Explore</h3>
              <p>Workshops, lectures, and hands-on coding sessions.</p>
            </motion.div>
            <motion.div className="about-box" whileHover={{ scale: 1.05 }}>
              <FaTrophy className="icon" />
              <h3>🏆 Exciting Prizes</h3>
              <p>Showcase your skills and win amazing rewards!</p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Special Perks Section */}
      {isPageLoaded && (
        <motion.div
          className="about-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title">🔥 Special Perks Just for You!</h2>
          <div className="box-container">
            <motion.div className="about-box special-box" whileHover={{ scale: 1.05 }}>
              <FaTicketAlt className="icon" />
              <h3>🎫 Free Registration</h3>
              <p>No registration fee to participate!</p>
            </motion.div>
            <motion.div className="about-box special-box" whileHover={{ scale: 1.05 }}>
              <FaUtensils className="icon" />
              <h3>🍔 Free Food</h3>
              <p>Enjoy delicious meals throughout the event.</p>
            </motion.div>
            <motion.div className="about-box special-box" whileHover={{ scale: 1.05 }}>
              <FaBus className="icon" />
              <h3>🚌 Free Transport</h3>
              <p>We provide bus services for a comfortable journey.</p>
            </motion.div>
          </div>
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
          <motion.button className="about-register-btn" whileHover={{ scale: 1.1 }}>Register Now</motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default About;
