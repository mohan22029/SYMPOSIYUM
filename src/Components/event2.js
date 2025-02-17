import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event1.css"; 
import eventImage from "../Assets/event2.jpg";
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
    <h1 className="event-title">Mind Maze – The Ultimate Logic Challenge!</h1>
    <ul className="event-description">
      <h1 className="event-title" >Time: 10:00 AM - 5:00 PM</h1>
      <h1 className="event-title" >Venue:New Block NB11</h1>
      
    </ul>
    
    {/* New Content */}
  

    <div className="event-description">
  
  <p>A battle of wits, deception, and problem-solving! Mind Maze pushes your logical reasoning and strategic thinking to the limits through two intense rounds:</p>

  <h3>Round 1: Deception Detect</h3>

  <h3>Round 2: Logic Builder</h3>
</div>


    <button className="register-button">📝 Register Now</button>
  </div>
</div>

    </div>
  );
}
export default Event1;
