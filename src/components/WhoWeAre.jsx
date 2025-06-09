import React from 'react';
import './WhoWeAre.css';

// --- REPLACE THESE WITH YOUR ACTUAL IMAGE URLs ---
const constructionHandshakeURL = 'https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Placeholder
const arrowRightIconURL = 'https://raw.githubusercontent.com/iconic/open-iconic/master/svg/arrow-right.svg'; // Example: From Open Iconic


const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="who-we-are-content">
          <p className="section-subtitle">Who We Are</p>
          <h1 className="section-title">
            Crafting Excellence <br /> in Every Project
          </h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="section-actions">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-icon">
              <img src={arrowRightIconURL} alt="Arrow Right" />
            </button>
          </div>
        </div>

        <div className="who-we-are-bottom">
          <div className="image-card">
            <img src={constructionHandshakeURL} alt="Construction Handshake" className="handshake-image" />
            <div className="experience-badge">
              25+ <span className="years-text">Years <br /> of Experience</span>
            </div>
          </div>

          <div className="mission-card">
            <p className="mission-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mission-footer">
              <h3 className="mission-title">Our Mission</h3>
              <button className="btn btn-icon btn-dark">
                <img src={arrowRightIconURL} alt="Arrow Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;