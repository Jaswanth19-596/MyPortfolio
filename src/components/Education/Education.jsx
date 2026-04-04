import React from 'react';
import sharedStyles from '../../styles/education-shared.module.css';
import styles from './Education.module.css';
import pnwlogo from '../../assets/images/pnwlogo.png';
import teclogo from '../../assets/images/teclogo.png';
import narayanalogo from '../../assets/images/narayanalogo.png';
import sscrplogo from '../../assets/images/sscrplogo.png';
import { IoSchool } from 'react-icons/io5';

const EDUCATION_DATA = [
  {
    logo: pnwlogo,
    name: 'Purdue University Northwest',
    degree: "Master's in Computer Science - AI/ML Track",
    duration: 'Sept 2023 - June 2026',
    country: 'United States',
  },
  {
    logo: teclogo,
    name: 'Tirumala Engineering College',
    degree: "Bachelor's in Computer Science",
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

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={sharedStyles.logoContainer}>
        <IoSchool className={sharedStyles.workIcon} />
        <h4 className="heading-fourth">Education</h4>
      </div>

      <div className={sharedStyles.educationWrapper}>
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.name} className={styles.education}>
            <div className={sharedStyles.schoolLogoContainer}>
              <img
                className={sharedStyles.schoolLogoWide}
                src={edu.logo}
                alt={`${edu.name} logo`}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={sharedStyles.educationHeading}>{edu.name}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={sharedStyles.duration}>{edu.duration}</p>
              <p className={sharedStyles.country}>{edu.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
