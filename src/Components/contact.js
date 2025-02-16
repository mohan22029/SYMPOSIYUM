import React from "react";
import { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);
  const eventStaffCoordinators = [
    { name: "Dr. G. Manikandan M.E., Ph.D.", email: "gmk.ad@rmkec.ac.in", phone: "+91 9444749744" }
  
  ];

  const studentCoordinators = [
    { name: "Aravindh M", email: "arav22001.ad@rmkec.ac.in", phone: "+91 9361118410" },
    { name: "Rohit Sudarsen G", email: "groh22013.ad@rmkec.ac.in", phone: "+91 9176012600" },
    { name: "Kaviyarasu S", email: "kavi22022.ad@rmkec.ac.in", phone: "+91 9360670658" },
    { name: "Lekhashree A", email: "lekh22026.ad@rmkec.ac.in", phone: "+91 6382535923" },
    { name: "Sri Siva Swathika S T", email: "sris22052.ad@rmkec.ac.in", phone: "+91 7418676790 " },
  ];
  const websiteDevelopers = [
    { name: "Mohan Raj M A", email: "mohan2020.a@rmkec.ac.in", linkedin: "https://linkedin.com/in/mohan-raj" },
    { name: "Hare Ram C", email: "hare22015.a@rmkec.ac.in", linkedin: "https://linkedin.com/in/hare-ram" },
  ];

  return (
    <div className="contact-page">
      <h1 className="title"> STAFF COORDINATOR</h1>
      <div className="coordinator-list">
        {eventStaffCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index}>
            <h3>{coordinator.name}</h3>
            <p>Email: <a href={`mailto:${coordinator.email}`}>{coordinator.email}</a></p>
            <p>Phone: <a href={`tel:${coordinator.phone}`}>{coordinator.phone}</a></p>
          </div>
        ))}
      </div>

      <h1 className="title">STUDENT COORDINATORS</h1>
      <div className="coordinator-list">
        {studentCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index}>
            <h3>{coordinator.name}</h3>
            <p>Email: <a href={`mailto:${coordinator.email}`}>{coordinator.email}</a></p>
            <p>Phone: <a href={`tel:${coordinator.phone}`}>{coordinator.phone}</a></p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Contact;
