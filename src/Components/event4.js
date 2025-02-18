import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event1.css"; 
import eventImage from "../Assets/event4.png";
import bgVideo from "../Assets/event1.mp4"; // 🎥 Add background video path
import { FaArrowLeft } from "react-icons/fa";
import Image_Background from"./../Assets/eventplace.png"

function Event1() {
 const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-container">
      {/* 🎥 Background Video */}
      <video
       autoPlay loop
        muted 
        playsInline
        preload="auto"
        className="background-video"
        poster={Image_Background}
        >
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
    <h1 className="event-title">🔥 Idea Ignite: Where Innovation Meets Expression!🔥 </h1>
    <ul className="event-description">
      <h1 className="event-title" >Time: 10:00 AM - 11:30 AM</h1>
      <h1 className="event-title" >Venue:New Block NB306</h1>
      
    </ul>
    
    {/* New Content */}
  

    <div className="event-description">
  
  <p>

Turn your ideas into impact! 🌟 Present groundbreaking concepts through posters & papers, captivate judges, and compete with the brightest minds. 🚀  

 </p>
  <h4>💡 Ready to ignite change? Register now and let your innovation shine! 🎤✨
 </h4>
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
