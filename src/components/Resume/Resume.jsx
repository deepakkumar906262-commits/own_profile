import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="resume-box">
        <h3>Professional Summary</h3>
        <p>
          Bachelor of Computer Applications (BCA) student with knowledge of Python, C, C++, HTML, CSS,
          JavaScript, React, Django, SQL, MySQL, MongoDB and Git & GitHub.
        </p>
        <p>
          Passionate about building responsive web applications, Python projects and learning modern software development.
        </p>

        <a href="/assets/images/Deepak_Kumar_Resume.pdf" className="btn" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;