import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Deepak Kumar</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificate">Certificate</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;