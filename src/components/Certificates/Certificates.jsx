import React from 'react';
import './Certificates.css';

const Certificates = () => {
  return (
    <section id="certificate">
      <div className="section-title">
        <h2>Certificates</h2>
      </div>

      <div className="certificate-container">
        <div className="certificate-card">
          <h3>Python</h3>
          <p>Coursera & IIT Patna</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_python-coursera-iitpatna-activity-7472333774169464832-mMQZ" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>

        <div className="certificate-card">
          <h3>CRUD Operations</h3>
          <p>MongoDB</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_mongodb-databasemanagement-softwaredevelopment-activity-7471742576614846464-79wp" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>

        <div className="certificate-card">
          <h3>Bihar AI Summit 2026</h3>
          <p>AiForViksitBihar</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_biharaisummit2026-artificialintelligence-activity-7477426536854433792-Tgu8" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>

        <div className="certificate-card">
          <h3>PHP & MySQL</h3>
          <p>Spoken Tutorial, IIT Bombay</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_php-mysql-backenddeveloper-activity-7410686798223405056-XoqB" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>

        <div className="certificate-card">
          <h3>C++ Training</h3>
          <p>Spoken Tutorial, IIT Bombay</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_cpp-programming-iitbombay-activity-7410338778969731073-BwKg" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>

        <div className="certificate-card">
          <h3>C Programming</h3>
          <p>Spoken Tutorial, IIT Bombay</p>
          <a href="https://www.linkedin.com/posts/deepak-kumar-64a89839a_cprogramming-spokentutorial-iitbombay-activity-7410296940292317184-mNin" target="_blank" rel="noopener noreferrer" className="cert-view">
            View on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;