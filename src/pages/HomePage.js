import React from 'react';
import SectionAbout from './../components/SectionAbout/SectionAbout';
import SectionUniversity from './../components/SectionUniversity/SectionUniversity';
import About from './../components/About/About';
import Projects from './../components/ProjectsSection/ProjectsSection';
import Contact from './../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <SectionAbout />
      <SectionUniversity />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
