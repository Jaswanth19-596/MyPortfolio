import React from 'react';
import styles from './../Education/Education.css';
import './../Experience/Experience.css';
import pnwlogo from './../../assests/images/pnwlogo.png';
import teclogo from './../../assests/images/teclogo.png';
import narayanalogo from './../../assests/images/narayanalogo.png';
import sscrplogo from './../../assests/images/sscrplogo.png';
import keerthibizpluslogo from './../../assests/images/keerthibizpluslogo.png';
import { MdWork } from 'react-icons/md';

function Experience() {
  const education = [
    {
      logo: keerthibizpluslogo,
      name: 'Software Engineer Intern',
      degree: 'Keerthi Bizplus4U IT Services Private Limited',
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

      {education.map((edu) => {
        return (
          <div className="experience">
            <div className="school-logo-container">
              <img
                className={`school-logo ${
                  edu.name.startsWith('N') || edu.name.startsWith('S')
                    ? 'large'
                    : ''
                } `}
                src={edu.logo}
                alt="pnw_logo"
              />
            </div>
            <div className="text-container">
              <h3 className="educationHeading">{edu.name}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="duration">{edu.duration}</p>
              <p className="country">{edu.country}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;