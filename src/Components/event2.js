import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event2.css"; 
import eventImage from "../Assets/event2.png";
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
    <h1 className="event-title">MIND MAZE – The Ultimate Logic Challenge! 🔥 </h1>
    <ul className="event-description">
      <h3 className="event-title" >Time: 11:00 AM - 12:30 PM</h3>
      <h3 className="event-title" >Venue:New Block NB311</h3>
      
    </ul>
    
    {/* New Content */}
  

    <div className="event-description">
  
  <p>A battle of wits, deception, and problem-solving! Mind Maze pushes your logical reasoning and strategic thinking to the limits through two intense rounds:</p>

  <h3>Round 1: Deception Detect</h3>
  
  <h3>Round 2: Logic Builder</h3>
  
<ul className="cont">
<h2 className="tt">Participation Requirements:</h2>
  <li>📊 Basic Knowledge in Data Visualization</li>
  <li>💻 Laptop Required        </li>
  <li>🧠 Basic Understanding of Computational Problems</li>
</ul>

</div>


<a href="https://docs.google.com/forms/d/e/1FAIpQLSd5Esfr9dewE11V2M8TUfstKveiCmOIpqqteLlOMh_8qannAg/viewform?usp=dialog " target="_blank">
  <button className="register-button">📝 Register Now</button>
</a>
  </div>
</div>

    </div>
  );
}
export default Event1;
