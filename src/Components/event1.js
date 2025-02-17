import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./event1.css"; 
import eventImage from "../Assets/event1.png";
import bgVideo from "../Assets/event1.mp4"; // 🎥 Add background video path
import { FaArrowLeft } from "react-icons/fa";

function Event1() {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // ✅ Close useEffect properly

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
    <h1 className="event-title">🔥BUG BASH – Debugging Challenge!🔥</h1>
    <ul className="event-description">
      <h1 className="event-title" >Time: 10:30 AM - 12:00 PM</h1>
      <h1 className="event-title" >Venue:New Block NB310</h1>
      
    </ul>
    
    {/* New Content */}
  

    <div className="event-description">
  
  <p>Spot errors, fix code, and prove your debugging mastery in this electrifying two-level challenge! 🛠💡 Speed through Rapid Fire Debugging, then battle buggy code in Code Revival—only the best will survive!  
  </p>
  <h4>💻 Ready to rise as the ultimate debugger? Register now and claim your victory! </h4>
</div>


<a href="https://docs.google.com/forms/d/e/1FAIpQLSeym79enEQ_FrmCsmOepX7hRo-MzXuk4Gs86d9_SgMYC4w6vQ/viewform?usp=sharing " target="_blank">
  <button className="register-button">📝 Register Now</button>
</a>

  </div>
</div>

    </div>
  );
}

export default Event1;
