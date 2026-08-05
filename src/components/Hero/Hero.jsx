import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

// Direct Image & Resume Imports from src/assets
import deepImg from '../../assets/deep.png';
import resumePdf from '../../assets/Deepak_Kumar_Resume.pdf';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>Hello, It's Me</h3>
        <h1>Deepak Kumar</h1>
        <h2>BCA Student | Python Developer | Full Stack Developer</h2>
        <p>
          Passionate Bachelor of Computer Applications (BCA) student with strong knowledge of Python,
          HTML, CSS, JavaScript, React, Django, SQL, MySQL, MongoDB, and Data Structures & Algorithms.
        </p>

        <div className="buttons">
          <a href={resumePdf} className="btn" download="Deepak_Kumar_Resume.pdf">
            Download Resume
          </a>
          <a href="#contact" className="btn2">
            Contact Me
          </a>
        </div>

        <div className="social">
          <a href="https://github.com/deepakkumar906262-commits" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/deepak-kumar-64a89839a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:deepakkumarbscc9062@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+919801470108">
            <FaPhone />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-border">
          <img src={deepImg} alt="Deepak Kumar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;