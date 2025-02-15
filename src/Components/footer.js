/*import "./footer.css"
import fb from "./../Assets/el1.png";
import twitter from "./../Assets/el2.png";
import linkedin from "./../Assets/el3.png";
import insta from "./../Assets/el4.png";
*/

import "./footer.css";

const Footer = () => {
    return (
      <footer className="text-white py-8 px-4" style={{ backgroundColor: "#140c1b" }}>
        <div className="footer_padding">
          <div className="footer_container">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold">AI DYNAMICA'25</h2>
                <p className="text-sm text-gray-400">Some description about the event.</p>
                <div className="footer-icons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-envelope"></i>
                </div>
            </div>
            <div className="footer_links-2">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Hospitality</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Event</a></li>
                  <li><a href="#" className="hover:text-white">Gallery</a></li>
                  <li><a href="#" className="hover:text-white">Rules</a></li>
                </ul>
            </div>
            <div className="col-span-3">
              <h2>Contact Us</h2>
              <p><i class="fa-solid fa-location-dot"></i> RMK Engineering College,Kavaraipettai, Gummudipoondi, Tamil Nadu, 601206</p>
              <p><i class="fa-solid fa-envelope"></i> aidynamica@rmkec.ac.in</p>
              <p><i class="fa-solid fa-phone-volume"></i> +91 99650 03942 </p>   
            </div>
          </div>


            {/* Third Div - Footer Below */}
          <div className="footer_below flex flex-col justify-between text-center md:text-left">
            <div className="footer_copyright text-sm text-gray-400">
              @2025 AIDS DEPT. All rights reserved.
            </div>
            <div className="footer_built text-sm text-gray-400 mt-2 md:mt-0">
              Website built by: <span className="text-white">Hare Ram, Mohan Raj</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  