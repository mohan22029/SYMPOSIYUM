import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom'; 
import videoBg from './../Assets/bg.mp4';

import vission from "./../Assets/vision-image.jpg";
import mission from "./../Assets/mission-image.jpg";

import bugBashImage from './../Assets/bugbash.jpg';
import mindMazeImage from './../Assets/mindmaze.jpg';
import mbbImage from './../Assets/mbb-image.jpg';
import ideaIgniteImage from './../Assets/ideaignite.jpg';
import pitchPerfectImage from './../Assets/pitchperfect.jpg';
import surpriseEventImage from './../Assets/supriseevent.jpg';


//import Header from './header';
//import Footer from './footer';

const Home = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  const eventsContainerRef = useRef(null);
  
  useEffect(() => {
    // Countdown Timer Logic
    const targetDate = new Date("March 17, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const scrollLeft = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const cardData = [
    {
      id: '4',
      title: 'Idea Ignite',
      description: 'Spark Ideas, Present Brilliance!',
      backText: ' Idea Ignite is not just a paper presentation competition.',
      image: ideaIgniteImage,
    },
    {
      id: '2',
      title: 'Mind Maze',
      description: 'Crack the Code, Conquer Logic!',
      backText: 'Mind Maze is designed to test your problem-solving skills and strategic thinking.',
      image: mindMazeImage,
    },
    {
      id: '1',
      title: 'Bug Bash',
      description: 'Debug, Fix, Dominate!',
      backText: 'Buck Bash is an electrifying level coding challenge designed to push your problem-solving abilities to the limit',
      image: bugBashImage, // Unique image for this card
    },
    {
      id: '5',
      title: 'Pitch Perfect',
      description: 'Innovate, Impress, Revolutionize!',
      backText: 'Every great idea starts with a spark can you turn yours into a revolution!',
      image: pitchPerfectImage,
    },
    {
      id: '3',
      title: 'Mystery Bucks Battle (Non-Tech)',
      description: 'Compete, Earn, Bid, Win Big!',
      backText: 'An interactive event where participants will face unexpected challenges, earn virtual money, and bid for exciting mystery rewards.',
      image: mbbImage,
    },
    {
      id: '6',
      title: 'Surprise Event',
      description: 'Expect the Unexpected!',
      backText: 'Discover the surprise!',
      image: surpriseEventImage,
    },
  ];

  /*
  useEffect(() => {
    // Header Visibility Logic
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  */

  /*
  useEffect(() => {
    // Header Visibility Logic
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
*/
  return (
    <div className="App">
      {/* Video Background */}
      
      <div className="video-background">
        <video autoPlay loop muted preload="auto">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      

      <section id="home" className="home">
        
          <h1 className="title">R.M.K. ENGINEERING COLLEGE</h1>
          <p className="subtitle">
            Proudly presents
          </p>
          <h1 className="title">AI DYNAMICA' 25</h1>
          <p className="subtitle">
            with the pride by the department of Artificial Intelligence and Data Science
          </p>
          <div className="countdown">
            <p><i className="fa-regular fa-calendar" style={{color: '#f39c12'}}></i> March 17, 2025</p>
            <div className="time">
              <span>{timeLeft.days}d</span> : 
              <span>{timeLeft.hours}h</span> : 
              <span>{timeLeft.minutes}m</span> : 
              <span>{timeLeft.seconds}s</span>
            </div>
            <div>
<button class="animated-button" onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">EXPLORE NOW</span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

            </div>
          </div>
        

      </section>

      <section id="vis&mis">
        <div className="vis-mis-container">
          <div className="vis-mis-content">
            <h1 className="vis-mis-title">Vision & Mission</h1>
            <div className="vm-content">
              <div className="vm-images">
                <img src={vission} alt="Vision"/>
                <img src={mission} alt="Mission"/>
              </div>
              <div className="vm-content-text">
                <h2>VISION</h2>
                <ul>
                  <li>To be the most preferred destination in the country for pursuing education in Engineering and its allied fields, at the undergraduate and post graduate levels, and for undertaking doctoral research.</li>
                  <li>To transform learners into achievers at the global level with the right attitude towards changing societal needs.</li>
                </ul>
                <h2>MISSION</h2>
                <ul>
                  <li>To develop the needed resources and infrastructure, and to establish a conducive ambience for the teaching- learning process.</li>
                  <li>To nurture in the students, professional and ethical values, and to instill in them a spirit of innovation and entrepreneurship.</li>
                  <li>To encourage in the students a desire for higher learning and research, to equip them to face the global challenges.</li>
                  <li>To provide opportunities for students to get the needed additional skills to make them industry ready.</li>
                  <li>To interact with industries and other organizations to facilitate transfer of knowledge and know-how.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="events">
        <div className="events-section">
          <h2 className="events-heading">Featured Events</h2>
          <div className="events-container">
            <button className="scroll-btn scroll-left" onClick={scrollLeft}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="card-container" ref={eventsContainerRef}>
              {cardData.map((card, index) => (
                <div 
                className="card"
                 key={index}
                 onClick={() => navigate(`/event/${card.id}`)}>
                  <div className="card-inner">
                    {/* Front Side */}
                    <div className="card-front">
                      <img src={card.image} alt={card.title} />
                      <div className="card-title">{card.title}</div>
                      <div className="card-description">{card.description}</div>
                    </div>
                    {/* Back Side */}
                    <div className="card-back">
                      <p>{card.backText}</p>
                      <a href="#next-section" className="card-link">Learn More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn scroll-right" onClick={scrollRight}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="r_r">
        <div className="r_r-container">
          <div className="r_r-content">
            <div className="r_r-title">Rules and Regulations</div>
            <div className="r_r-subtitle">To guarantee a seamless and equitable experience for every participant, kindly take time to read by these rules.</div>
            <div className="r_r-rules">
              <ul>
                <li>Students must bring their respective college ID card.</li>
                <li>Mobile phones are not allowed inside the campus.</li>
                <li>It is highly forbidden to use illegal narcotics, smoke, or drink. If any participant is discovered to be in possession of these things, the college will take the proper action.</li>
                <li>Your registered email address will receive a confirmation email for selection.</li>
                <li>Boys need to be clean-shaven and wear formal attire.</li>
                <li>Girls should wear formal attire.</li>
                <li>All participants must be present at the venue at least 30 minutes before the event starts.</li>
                <li>Participants must only use the college bus which will be available on March 17th.</li>
              </ul>
              <div className="bus-routes-link">
                <a href="/hospitality" className="route-btn">Bus Routes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      


      {/* Footer Section */}

      {/*<Footer />*/}

    </div>
  );
};

export default Home;
