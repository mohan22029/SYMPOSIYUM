import React from "react";
import { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);
  const eventStaffCoordinators = [
    { name: "Dr G. Manikandan", email: "john.doe@ourspark.com", phone: "+123 456 7890" }
  
  ];

  const studentCoordinators = [
    { name: "Aravindh M", email: "arjithrock@ourspark.com", phone: "+123 456 7789" },
    { name: "Rohit Sudarsen G", email: "arjun.mitra@ourspark.com", phone: "+987 654 3210" },
    { name: "Kaviarasu S", email: "nika.prince@ourspark.com", phone: "+456 779 0123" },
    { name: "Lekhashree A", email: "andy.davis@ourspark.com", phone: "+321 654 0987" },
    { name: "Sri Siva Swathika S T", email: "anna.brown@ourspark.com", phone: "+111 222 3333" },
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
