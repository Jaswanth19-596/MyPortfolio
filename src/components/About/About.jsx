import React from 'react';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import { skillsData } from '../../data/skillsData';
import './About.css';

const About = () => {
  return (
    <section>
      <div className="container about-me-container">
        <div className="grid-left-container">
          <h4 className="heading-fourth u-margin-bottom-medium">
            Get to know me
          </h4>
          <p className="para">
            I'm a Computer Science Engineer who wants to explore different
            fields of tech and I always strive to solve user problems. I love to
            develop websites I love problem solving, And I want to be a
            Competitive Programmer in the future.
          </p>
          <p className="para">
            During my bachelor's I explored the fields of Web Development and
            App Development and now,during my Master's, I am exploring the the
            fields of Big Data, Machine Learning and Cloud Computing.
          </p>
          <p className="para">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className="grid-right-container">
          <h4 className="heading-fourth u-margin-bottom-medium">My Skills</h4>
          <div className="skills-container">
            <Skills skills={skillsData.programmingCoreML} opposite={false} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.agenticAI} opposite={true} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.llmsRetrieval} opposite={false} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.dataModeling} opposite={true} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.backendAPIs} opposite={false} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.cloudDeployment} opposite={true} />
          </div>
          <div className="skills-container">
            <Skills skills={skillsData.devopsCICD} opposite={false} />
          </div>
        </div>
      </div>
      <div className="container">
        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default About;
