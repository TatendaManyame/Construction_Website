// src/App.jsx
import React from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from './components/WhyChooseUs';
import GrowthInsights from './components/GrowthInsights';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Services />
      <Projects />
      <WhyChooseUs />
      <GrowthInsights />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
