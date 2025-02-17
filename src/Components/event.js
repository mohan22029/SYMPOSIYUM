import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";
import backgroundVideoMp4 from "../Assets/event.mp4";
import backgroundImage from "../Assets/b.jpg"; // Lightweight placeholder image

import bugBashImage from "../Assets/bugbash.jpg";
import mindMazeImage from './../Assets/mindmaze.jpg';
import mbbImage from './../Assets/mbb-image.jpg';
import ideaIgniteImage from './../Assets/ideaignite.jpg';
import pitchPerfectImage from './../Assets/pitchperfect.jpg';
import surpriseEventImage from './../Assets/supriseevent.jpg';

const events = [
  { id: 1, title: "BUG BASH", image: bugBashImage },
  { id: 2, title: "MIND MAZE", image: mindMazeImage },
  { id: 3, title: "MYSTERY BUSKS BATTLE", image: mbbImage },
  { id: 4, title: "IDEA IGNITE", image: ideaIgniteImage },
  { id: 5, title: "PITCH PERFECT", image: pitchPerfectImage },
  { id: 6, title: "SURPRISE EVENT", image: surpriseEventImage },
];

function Event() {
  const navigate = useNavigate();
  
  return (
    <div className="page-event-page">
      {/* Background Video with Smooth Fade-In Effect */}
      
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto" 
          className="background-video"
        // Set video loaded once it's playable
          poster={backgroundImage}
        >
        
          <source src={backgroundVideoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     

      {/* Header */}
      <header className="page-event-header"></header>

      {/* Title Section */}
      <div className="page-event-title-box">
        <h1 className="page-event-title">Upcoming Events</h1>
      </div>

      {/* Event Grid Wrapper */}
      <div className="page-event-wrapper">
        <div className="page-event-container">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="page-event-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => navigate(`/event/${event.id}`)}
            >
              <div className="page-event-image-container">
                <img src={event.image} alt={event.title} className="page-event-image" />
              </div>
              <div className="page-event-footer">
                <span className="page-event-title-text">{event.title}</span>
                <span className="page-event-arrow">➜</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
