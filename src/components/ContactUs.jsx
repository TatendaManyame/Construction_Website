import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Here you'd normally submit to a backend or API
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h4 className="contact-subtitle">Contact Us</h4>
          <h2 className="contact-title">
            Have a Project Idea? <span>Let's Talk!</span>
          </h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email *" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number *" onChange={handleChange} required />
            </div>
            <input type="text" name="subject" placeholder="Subject *" onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message *" rows="4" onChange={handleChange} required />
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>

        <div className="contact-right">
          <p><strong>Address</strong><br />2464 Royal Ln. Mesa, New Jersey 45463</p>
          <p><strong>Contact</strong><br />Phone: +0000 000-0000<br />Email: example@gmail.com</p>
          <p><strong>Open Time</strong><br />Mon - Fri: 10:00 - 20:00<br />Sat - Sun: 11:00 - 18:00</p>
          <p><strong>Stay Connected</strong></p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
