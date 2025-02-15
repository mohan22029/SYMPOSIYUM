import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { app } from "./firebase"; // Import Firebase instance

import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import Home from "./Components/home.js";
import Hospitality from "./Components/hospitality";
import Contact from "./Components/contact.js";
import About from './Components/about.js';
import Event from "./Components/event.js";
import Event1 from "./Components/event1.js";
import Event2 from "./Components/event2.js";
import Event3 from "./Components/event3.js";
import Event4 from "./Components/event4.js";
import Event5 from "./Components/event5.js";
import Event6 from "./Components/event6.js";

function App() {
  // Check Firebase initialization
  useEffect(() => {
    console.log("Firebase Initialized:", app);
  }, []);

  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
