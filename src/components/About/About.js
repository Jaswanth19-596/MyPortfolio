import React from 'react';
import Skills from '../Skills/Skills';
import Education from './../Education/Education';
import Experience from './../Experience/Experience';
import './About.css';

const About = () => {
  const coreskills = [
    'html',
    'css',
    'Javascript',
    'React Js',
    'Node Js',
    'Data structures',
    'Bootstrap',
    'Java',
    'Problem Solving',
    'Mongo DB',
    'SQL',
    "REST API's",
    'Python',
    'Git',
    'Github',
  ];

  const AWSSkills = [
    'AWS EC2',
    'AWS lambda',
    'AWS DynamoDB',
    'AWS Route 53',
    'AWS Cloudfront',
    'AWS CloudWatch',
    'Amazon S3',
    'Amazon EBS',
  ];

  const MLSkills = [
    'Communication skills',
    'Time Management',
    'Creative',
    'Problem Solving',
  ];

  return (
    <section>
      <div className={`container about-me-container`}>
        <h3
          className={`heading-tertiary u-center-text u-margin-bottom-large heading`}
        >
          About Me
        </h3>
        <div className={'grid-left-container'}>
          <h4 className="heading-fourth u-margin-bottom-medium">
            Get to know me
          </h4>
          <p className={'para'}>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p className={'para'}>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
          </p>
          <p className={'para'}>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className={'grid-right-container'}>
          <h4 className="heading-fourth u-margin-bottom-medium">My Skills</h4>
          <div className={'skills-container'}>
            <Skills skills={coreskills} opposite={false} />
            <Skills skills={coreskills} opposite={false} />
          </div>
          <div className={'skills-container'}>
            <Skills skills={AWSSkills} opposite={true} />
            <Skills skills={AWSSkills} opposite={true} />
          </div>
          <div className={'skills-container'}>
            <Skills skills={MLSkills} opposite={false} />
            <Skills skills={MLSkills} opposite={false} />
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
