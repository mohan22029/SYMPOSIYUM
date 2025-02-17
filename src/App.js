import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import Home from "./Components/home.js";
import Hospitality from "./Components/hospitality";
import Contact from "./Components/contact.js";
import About from "./Components/about.js";
import Event from "./Components/event.js";
import Event1 from "./Components/event1.js";
import Event2 from "./Components/event2.js";
import Event3 from "./Components/event3.js";
import Event4 from "./Components/event4.js";
import Event5 from "./Components/event5.js";
import Event6 from "./Components/event6.js";
import Loader from "./Components/Loader"; // Import Lava Lamp Preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Check if there's a video and wait for it to load
    const video = document.querySelector("video");
    if (video) {
      video.onloadeddata = handleLoad;
    }

    // Ensure preloader disappears when everything is loaded
    window.onload = handleLoad;

    // Fallback timeout in case loading event doesn't trigger
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className={`preloader ${loading ? "" : "hide"}`}>
            <Loader />
          </div>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/hospitality" element={<Hospitality />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/event" element={<Event />} />
              <Route path="/event/1" element={<Event1 />} />
              <Route path="/event/2" element={<Event2 />} />
              <Route path="/event/3" element={<Event3 />} />
              <Route path="/event/4" element={<Event4 />} />
              <Route path="/event/5" element={<Event5 />} />
              <Route path="/event/6" element={<Event6 />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
