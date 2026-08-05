import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-title">
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-container">
        <div className="skill">
          <div className="skill-info">
            <span>Python</span>
            <span>10%</span>
          </div>
          <div className="progress-bar">
            <div className="python"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>HTML</span>
            <span>15%</span>
          </div>
          <div className="progress-bar">
            <div className="html"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>CSS</span>
            <span>20%</span>
          </div>
          <div className="progress-bar">
            <div className="css"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>JavaScript</span>
            <span>25%</span>
          </div>
          <div className="progress-bar">
            <div className="javascript"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>React</span>
            <span>30%</span>
          </div>
          <div className="progress-bar">
            <div className="react"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>Django</span>
            <span>35%</span>
          </div>
          <div className="progress-bar">
            <div className="django"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>SQL / MySQL</span>
            <span>45%</span>
          </div>
          <div className="progress-bar">
            <div className="sql"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <span>MongoDB</span>
            <span>45%</span>
          </div>
          <div className="progress-bar">
            <div className="mongodb"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;