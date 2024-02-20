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
            I'm a Computer Science Engineer who wants to explore different fields of tech
             and I always strive to solve user problems. I love to develop websites
            I love problem solving, And I want to be a Competitive Programmer in the future.
          </p>
          <p className={'para'}>
            During my bachelor's I explored the fields of Web Development and App Development and
            now,during my Master's, I am exploring the the fields of Big Data, Machine Learning and
            Cloud Computing.
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
