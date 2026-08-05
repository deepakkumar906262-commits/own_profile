import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact <span>Me</span></h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;