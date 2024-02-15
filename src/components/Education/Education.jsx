import React from 'react';
import './Education.css';
import pnwlogo from './../../assests/images/pnwlogo.png';
import teclogo from './../../assests/images/teclogo.png';
import narayanalogo from './../../assests/images/narayanalogo.png';
import sscrplogo from './../../assests/images/sscrplogo.png';
import { IoSchool } from 'react-icons/io5';

function Education() {
  const education = [
    {
      logo: pnwlogo,
      name: 'Purdue University Northwest',
      degree: "Master's in Computer science",
      duration: 'Aug 2023 - May 2025',
      country: 'United States',
    },
    {
      logo: teclogo,
      name: 'Tirumala Engineering College',
      degree: "Bachelor's in Computer science",
      country: 'India',
      duration: 'Aug 2019 - May 2023',
    },
    {
      logo: narayanalogo,
      name: 'Narayana Junior College',
      degree: 'High School',
      country: 'India',
      duration: 'June 2017 - May 2019',
    },
    {
      logo: sscrplogo,
      name: 'Sadineni Chowdaraiah Public School',
      degree: 'Schooling',
      country: 'India',
      duration: 'June 2012 - May 2017',
    },
  ];

  return (
    <div className="education-container">
      <div className="logo-container">
        <IoSchool className="work-icon" />
        <h4 className="heading-fourth">Education</h4>
      </div>

      <div className="education-wrapper">
        {education.map((edu) => {
          return (
            <div className="education">
              <div className="school-logo-container">
                <img className={`school-logo`} src={edu.logo} alt="pnw_logo" />
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
    </div>
  );
}

export default Education;
