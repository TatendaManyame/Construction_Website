import React, { useState, useEffect } from 'react';
import { FaHome, FaBuilding, FaHammer } from 'react-icons/fa'; // Assuming react-icons is installed
import './Services.css'; // Make sure to create this CSS file

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateIn(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      icon: <FaHome />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 2,
      title: "Commercial Construction",
      icon: <FaBuilding />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 3,
      title: "Renovations and Remodeling",
      icon: <FaHammer />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    }
  ];

  return (
    <section className={`services-section ${animateIn ? 'fade-in' : ''}`}>
      <div className="services-container">
        <h1 className={`services-title ${animateIn ? 'fade-in' : ''}`}>
          Services That Fit Your Needs
        </h1>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''} ${animateIn ? 'slide-up-in' : ''}`}
              style={{ '--animation-delay': `${index * 0.1}s` }} /* Custom prop for staggered animation */
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h2 className="service-card-title">{service.title}</h2> {/* Changed to service-card-title to avoid conflict */}
              <p className="service-description">{service.description}</p>
              <a
                href="#"
                className="service-link"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;