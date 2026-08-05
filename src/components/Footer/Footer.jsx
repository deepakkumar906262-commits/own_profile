import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-social">
        <a href="https://github.com/deepakkumar906262-commits" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/deepak-kumar-64a89839a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:deepakkumarbscc9062@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>© 2026 Deepak Kumar | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;