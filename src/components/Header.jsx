import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-row">
        {/* Left: Logo */}
        <div className="header-section logo">🏗️ ConstructPro</div>

        {/* Center: Social Icons */}
        <div className="header-section social-icons">
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Right: Toggle + Menu */}
        <div className="header-section right">
          <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          {menuOpen && (
            <ul className="menu-dropdown">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
