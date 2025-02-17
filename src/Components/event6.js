import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event1.css"; 
import eventImage from "../Assets/event6.png";
import bgVideo from "../Assets/event1.mp4"; // 🎥 Add background video path
import { FaArrowLeft } from "react-icons/fa";

function Event1() {
 const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* 🎥 Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔥 Overlay for readability */}
      <div className="overlay"></div>

      {/* 🔥 Header */}
      <header className="event-header">
        <h2></h2>
      </header>

      {/* 🔙 Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon" /> Back to Events
        </button>
      </div>

      {/* 🎟️ Event Content */}
      <div className="event-content">
        <img src={eventImage} alt="Event Poster" className="event-poster" />
        <div className="event-info">
          <h1 className="event-title">SURPRISE EVENT🎁</h1>
          <ul className="event-description">
           
            <li>📌 Time: 11:00 AM - 12:00 PM</li>
            <li>📌 Venue: New Block</li>

            <li>📌An unexpected and thrilling event with exciting challenges and rewards</li>
          </ul>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeym79enEQ_FrmCsmOepX7hRo-MzXuk4Gs86d9_SgMYC4w6vQ/viewform?usp=sharing " target="_blank">
  <button className="register-button">📝 Register Now</button>
</a>
        </div>
      </div>
    </div>
  );
}
export default Event1;
