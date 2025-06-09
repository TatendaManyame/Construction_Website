import React from 'react';
import './WhyChooseUs.css';
import { FaTools, FaUsersCog, FaClock, FaAward } from 'react-icons/fa';

const features = [
  {
    icon: <FaTools />,
    title: "Advanced Technology",
    description: "We use cutting-edge technology to deliver the best results efficiently.",
  },
  {
    icon: <FaUsersCog />,
    title: "Expert Team",
    description: "Our team of professionals brings years of experience to every project.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "We pride ourselves on delivering projects on time without compromise.",
  },
  {
    icon: <FaAward />,
    title: "Award Winning",
    description: "Recognized for excellence in design and construction execution.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="whychooseus-section">
      <div className="whychooseus-container">
        {/* Left Section */}
        <div className="whychooseus-left">
          <h4 className="whychooseus-subtitle">Why Choose Us</h4>
          <h2 className="whychooseus-title">
            <span className="blue-text">Building Trust,</span>{" "}
            <span className="orange-text">Delivering Excellence</span>
          </h2>
          <video
            className="whychooseus-video"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            poster="https://via.placeholder.com/800x450?text=Video+Loading..."
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section */}
        <div className="whychooseus-right">
          {features.map((feature, index) => (
            <div key={index} className="whychooseus-feature">
              <div className="icon">{feature.icon}</div>
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
