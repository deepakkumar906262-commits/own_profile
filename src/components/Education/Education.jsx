import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <div className="section-title">
        <h2>Education</h2>
      </div>

      <div className="timeline">
        <div className="timeline-box">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <h4>Cimage College</h4>
          <span>2024 - 2027</span>
          <p>
            Learning Python, Full Stack Development, Database Management, Data Structures & Algorithms,
            Operating Systems, Computer Networks and Software Engineering.
          </p>
        </div>

        <div className="timeline-box">
          <h3>Intermediate</h3>
          <h4>L.S. College</h4>
          <span>2022 - 2024</span>
        </div>

        <div className="timeline-box">
          <h3>High School</h3>
          <h4>SRT School</h4>
          <span>2021 - 2022</span>
        </div>
      </div>
    </section>
  );
};

export default Education;