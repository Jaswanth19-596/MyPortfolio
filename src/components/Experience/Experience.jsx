import React from 'react';
import styles from './../Education/Education.css';
import './../Experience/Experience.css';
import pnwlogo from './../../assests/images/pnwlogo.png';
import teclogo from './../../assests/images/teclogo.png';
import narayanalogo from './../../assests/images/narayanalogo.png';
import sscrplogo from './../../assests/images/sscrplogo.png';
import keerthibizpluslogo from './../../assests/images/keerthibizpluslogo.png';
import accessifierslogo from './../../assests/images/accessifiers.png';
import { MdWork } from 'react-icons/md';

function Experience() {
  const experience = [
    {
      logo: accessifierslogo,
      name: 'Machine Learning Engineer',
      company: 'Accessifiers',
      duration: 'Aug 2025 - Now',
      country: 'United States',
    },
    {
      logo: keerthibizpluslogo,
      name: 'Software Engineer Intern',
      company: 'Keerthi Bizplus4U IT Services Private Limited',
      duration: 'May 2023 - June 2023',
      country: 'India',
    },
  ];

  return (
    <div className="experience-container">
      <div className="logo-container">
        <MdWork className="work-icon" />
        <h4 className="heading-fourth">Career</h4>
      </div>
      <div className="education-wrapper">
        {experience.map((exp) => {
          return (
            <div className="experience">
              <div className="school-logo-container">
                <img
                  className={`school-logo-long ${
                    exp.name.startsWith('N') || exp.name.startsWith('S')
                      ? 'large'
                      : ''
                  } `}
                  src={exp.logo}
                  alt="pnw_logo"
                />
              </div>
              <div className="text-container">
                <h3 className="educationHeading">{exp.name}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="country">{exp.country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
