import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title">
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Responsive personal portfolio built using HTML & CSS to showcase my skills, projects and resume.
          </p>
          <h4>Technology</h4>
          <span>HTML • CSS</span>
        </div>

        <div className="project-card">
          <h3>Quiz Application</h3>
          <p>
            Python-based quiz system using JSON for question storage.
          </p>
          <h4>Technology</h4>
          <span>Python • JSON</span>
        </div>

        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p>
            Hotel management application for customer and room management.
          </p>
          <h4>Technology</h4>
          <span>Python • SQL</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;