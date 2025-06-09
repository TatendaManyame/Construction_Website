import React, { useState, useEffect, useRef } from 'react';
import './Projects.css'; // Make sure to create this CSS file

const Projects = () => { // Renamed from ProjectsCarousel
  const [animateIn, setAnimateIn] = useState(false);
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // --- REPLACE THESE WITH YOUR ACTUAL PROJECT IMAGE URLs ---
  const projectImages = [
    'https://as2.ftcdn.net/v2/jpg/00/68/63/23/1000_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6CAbSPWv1RzXoBnBKigWSSQr46NHbDOVuMOqmdiE7aw-EIMVFcNU0C0xOqntyZWYP_4&usqp=CAU',
    'https://t4.ftcdn.net/jpg/03/27/36/89/240_F_327368959_mtPycLpm6gMfrAOMnfLPYsV4FVepfAnH.jpg',
    'https://t4.ftcdn.net/jpg/01/61/22/09/240_F_161220982_yc4BxBSqdv7cOmMItGZmNtjSZkOE62Hv.jpg',
    'https://t4.ftcdn.net/jpg/02/49/04/93/240_F_249049329_BpYUPt5TGST3qTTfOJVpTakAdCLFzcg1.jpg',
    'https://t4.ftcdn.net/jpg/02/68/22/57/240_F_268225711_8eSYAQWXKKwWV6J3sMEgGnj3O654d1Lb.jpg',
    // Add more images as needed for the carousel effect
  ];
  // --- END REPLACE ---

  const projectsData = [
    { id: 1, name: "Financial Tombstones", image: projectImages[0] },
    { id: 2, name: "Maintenance Office", image: projectImages[1] },
    { id: 3, name: "820 Wenzel Lane", image: projectImages[2] },
    { id: 4, name: "One Bennett Park", image: projectImages[3] },
    { id: 5, name: "665 S. Glenwood Street", image: projectImages[4] },
    { id: 6, name: "172 N Jean Street", image: projectImages[5] },
  ];

  // Duplicate projectsData for a smoother "infinite" scroll illusion
  const duplicatedProjectsData = [...projectsData, ...projectsData];

  // Auto-scrolling logic
  useEffect(() => {
    setAnimateIn(true); // Trigger initial fade-in

    const startScrolling = () => {
      if (!scrollRef.current) return;

      scrollIntervalRef.current = setInterval(() => {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        const cardWidth = scrollRef.current.children[0].offsetWidth + 30; // Card width + gap

        // If at the end of the content (or nearing the end of the first duplicate set)
        // Jump back to the beginning of the second set for infinite illusion
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0; // Reset to start
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 3000); // Adjust scroll interval (e.g., every 3 seconds)
    };

    const stopScrolling = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    // Initial start
    startScrolling();

    // Pause on hover, resume on leave
    const carouselElement = scrollRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopScrolling);
      carouselElement.addEventListener('mouseleave', startScrolling);
    }

    // Cleanup interval and event listeners on component unmount
    return () => {
      stopScrolling();
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopScrolling);
        carouselElement.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className={`projects-section ${animateIn ? 'fade-in' : ''}`}>
      <div className="projects-bg-animation"></div>
      <div className="projects-container">
        <h1 className={`projects-title ${animateIn ? 'fade-in' : ''}`}>
          Our Latest Creations
        </h1>

        <div className="projects-wrapper">
          <div className="projects-scroll" ref={scrollRef}>
            {duplicatedProjectsData.map((project, index) => (
              <div
                key={`${project.id}-${index}`} // Unique key for duplicated items
                className={`project-card ${animateIn ? 'slide-up-in' : ''}`}
                style={{ '--animation-delay': `${(index % projectsData.length) * 0.08}s` }} /* Staggered animation for initial load */
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-overlay"></div>
                </div>
                <h2 className="project-name">{project.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;