import { useState, useEffect } from "react";
import "./header.css";
import "./hospitality.css";
//import BUS from "../Assets/bus-routres.pdf"

const Hospitality = () => {
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  const handleDirectionsClick = () => {
    const destination = encodeURIComponent("RMK Engineering College, Kavarapettai, Tamil Nadu, India");
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <>
      <div className="ho-hospitality-container">
        <h1 className="ho-title">Welcome to RMK Engineering College</h1>
        <p className="ho-description">
          Find all the hospitality details for your visit. Below is the location map and bus routes for easy navigation.
        </p>

        {/* Combined Container */}
        <div className="ho-combined-container">
          {/* Bus Route Section */}
          <div className="ho-bus-route">
            <h2>Bus Route Details</h2>
            <ul className="ho-bus-instructions">
              <li>📌 Ensure you carry your College ID Card for verification.</li>
              <li>📌 Keep a printed/email confirmation of your event registration.</li>
              <li>📌 Arrive at the designated bus stop at least 15 minutes early.</li>
              <li>📌 Follow the Formal Dress Code.</li>
            </ul>
            <p>Click the button below to view the detailed bus routes.</p>
            <button className="ho-bus-btn" onClick={() => window.open("https://drive.google.com/file/d/1jtGgXYyJw16EuWEZKCsc9roRgRgvs-UF/view?usp=sharing ", "_blank")}>
              View Bus Routes (PDF)
            </button>
          </div>

          {/* Map Section */}
          <div className="ho-map-container">
            <iframe
              title="RMK Engineering College Map"
              src="https://www.google.com/maps/embed/v1/place?q=RMK+Engineering+College,+Kavarapettai,+Tamil+Nadu,+India&key=AIzaSyA-S3DIud4-b9h9dVs4hnlVBGMfr_TtHx0"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <button className="ho-directions-btn" onClick={handleDirectionsClick}>
              Get Directions
            </button>

            {showDirections && (
              <div className="ho-directions">
                <p>🛣 **Step 1:** Enter "RMK Engineering College" on Google Maps.</p>
                <p>🛣 **Step 2:** Follow NH16 towards Gummidipoondi.</p>
                <p>🛣 **Step 3:** Take the exit toward Kavarapettai.</p>
                <p>🛣 **Step 4:** Follow the signboards to reach the college.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospitality;
