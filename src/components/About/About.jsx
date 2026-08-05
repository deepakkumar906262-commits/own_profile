// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section id="about">
//       <div className="section-title">
//         <h2>About <span>Me</span></h2>
//       </div>

//       <div className="about-container">
//         <div className="about-image">
//           <img src="/assets/deep.png" alt="Deepak Kumar" />
//         </div>

//         <div className="about-content">
//           <h3>Python Developer & Full Stack Developer</h3>
//           <p>
//             Hello! I'm <strong>Deepak Kumar</strong>, currently pursuing a Bachelor of Computer Applications (BCA).
//             I enjoy building modern websites, Python applications, and database-driven projects.
//           </p>
//           <p>
//             I continuously improve my programming skills by learning Data Structures & Algorithms, Web Development,
//             Database Management Systems and Backend Development.
//           </p>

//           <div className="about-info">
//             <div>
//               <h4>Name</h4>
//               <span>Deepak Kumar</span>
//             </div>
//             <div>
//               <h4>Degree</h4>
//               <span>BCA Student</span>
//             </div>
//             <div>
//               <h4>Email</h4>
//               <span>deepakkumarbscc9062@gmail.com</span>
//             </div>
//             <div>
//               <h4>Location</h4>
//               <span>Bihar, India</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import './About.css';
import deepImg from '../../assets/deep.png';

const About = () => {
  return (
    <section id="about">
      <div className="section-title">
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={deepImg} alt="Deepak Kumar" />
        </div>

        <div className="about-content">
          <h3>Python Developer & Full Stack Developer</h3>
          <p>
            Hello! I'm <strong>Deepak Kumar</strong>, currently pursuing a Bachelor...
          </p>
          <p>
            I continuously improve my programming skills by learning Data Structures...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;