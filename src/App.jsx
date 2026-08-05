import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'; 
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Roadmap from './components/Roadmap/Roadmap';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Roadmap />
      <Resume />
      <Skills />
      <Projects />
      <Certificates />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;