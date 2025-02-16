import "./footer.css";
import flogo from "./../Assets/Ad-logo.png";

const Footer = () => {
    return (
      <footer className="text-white py-8 px-4" style={{ backgroundColor: "#140c1b" }}>
        <div className="footer_padding">
          <div className="footer_container">
            <div className="col-span-1">
              <div className="footer-logo">
                <img src={flogo} alt="logo" />
              </div>
              <p className="text-sm text-gray-400">AI Dynamica - A revolution in AI-driven innovation.</p>
              <div className="footer-icons">
                <a href="https://www.instagram.com/ai_dynamica/?hl=en" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/rmkec-ads-69681a21b/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:aidynamica@rmkec.ac.in">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="footer_links-2">
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/event" className="hover:text-white">Event</a></li>    
                <li><a href="/hospitality" className="hover:text-white">Hospitality</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-3">
              <h2>Contact Us</h2>
              <p><i className="fa-solid fa-location-dot"></i> RMK Engineering College, Kavaraipettai, Gummudipoondi, Tamil Nadu, 601206</p>
              <p><i className="fa-solid fa-envelope"></i> aidynamica@rmkec.ac.in</p>
              <p><i className="fa-solid fa-phone-volume"></i> +91 93611 18410 </p>   
            </div>
          </div>

          {/* "Designed By" Section - Added Below Contact */}
          <div className="designed_by_container">
            <h2 className="text-lg font-semibold text-center">Designed By:</h2>
            <div className="designer-boxes">
              <a href="https://www.linkedin.com/in/mohanraj-ma/" target="_blank" rel="noopener noreferrer" className="designer-box">
                MOHAN RAJ M A
              </a>
              <a href="https://www.linkedin.com/in/hare-ram14/" target="_blank" rel="noopener noreferrer" className="designer-box">
                HARE RAM C
              </a>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer_below flex flex-col justify-between text-center md:text-left">
            <div className="footer_copyright text-sm text-gray-400">
              @2025 AIDS DEPT. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
