import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event1.css"; 
import eventImage from "../Assets/event3.png";
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
    <h1 className="event-title">💰MYSTERY BUCKS BATTLE – Bid, Win & Conquer!🎲✨</h1>
    <ul className="event-description">
      <h1 className="event-title" >Time: 10:30 AM - 12:00 PM</h1>
      <h1 className="event-title" >Venue:New Block NB305</h1>
      
    </ul>
    
    {/* New Content */}
  

    <div className="event-description">
  
  <p>Test your strategy, luck, and teamwork in this high-stakes bidding showdown! 💵 Earn virtual bucks, outplay opponents in mystery challenges, and bid for exciting rewards in the ultimate auction. </p>
  <h4>🔥 Ready to risk it all for glory? Register now and let the battle begin! </h4>
</div>


<a href="https://docs.google.com/forms/d/e/1FAIpQLScPb9La2cm_XEqcG9fYeGuubHZRCMjnlDaYwMGNATKiHRNe0w/viewform?usp=dialog  " target="_blank">
  <button className="register-button">📝 Register Now</button>
</a>
  </div>
</div>

    </div>
  );
}

export default Event1;
