import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link from react-router-dom
import logo3 from "./../Assets/rmkeclogo.gif";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img src={logo3} alt="Logo" className="logo left-logo" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/home" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/event" className="nav-link" onClick={toggleMenu}>
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hospitality" className="nav-link" onClick={toggleMenu}>
              Hospitality
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
