import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Top CTA Bar */}
      <div className="footer-cta-bar">
        <div className="footer-container">
          <h3 className="cta-title">Let's Connect there</h3>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-column brand-info">
          <div className="footer-logo">
             <span className="logo-text">ConstructPro</span>
                </div>

            <p className="brand-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-column navigation">
            <h4 className="column-title">Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column contact-details">
            <h4 className="column-title">Contact</h4>
            <p>Call Us: <a href="tel:+0001234567">(000) 123-4567</a></p>
            <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
            <p>Address: 123 Main St, New York, NY 10001, USA</p>
          </div>

          <div className="footer-column newsletter">
            <h4 className="column-title">Get the latest information</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" aria-label="Enter your email for newsletter" />
              <button type="submit" className="newsletter-submit-button" aria-label="Subscribe">
                &rarr; {/* Right arrow */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-container">
          <p className="copyright-text">&copy; 2025 Conztru. All Rights Reserved.</p>
          <p className="terms-privacy-links">
            <a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;