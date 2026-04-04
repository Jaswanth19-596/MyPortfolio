import React from 'react';
import sharedStyles from '../../styles/education-shared.module.css';
import styles from './Experience.module.css';
import accessifierslogo from '../../assets/images/accessifiers.png';
import keerthibizpluslogo from '../../assets/images/keerthibizpluslogo.png';
import { MdWork } from 'react-icons/md';

const EXPERIENCE_DATA = [
  {
    logo: accessifierslogo,
    name: 'AI/ML Engineer',
    company: 'Techstack',
    duration: 'Sept 2023 - Present',
    country: 'United States',
    logoSize: 'normal',
  },
  {
    logo: keerthibizpluslogo,
    name: 'ML Engineer Intern',
    company: 'Keerthi Bizplus4U IT Services Private Limited',
    duration: 'May 2023 - July 2023',
    country: 'India',
    logoSize: 'large',
  },
];

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <div className={sharedStyles.logoContainer}>
        <MdWork className={sharedStyles.workIcon} />
        <h4 className="heading-fourth">Career</h4>
      </div>
      <div className={sharedStyles.educationWrapper}>
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.name} className={styles.experience}>
            <div className={sharedStyles.schoolLogoContainer}>
              <img
                className={`${sharedStyles.schoolLogoLong} ${
                  exp.logoSize === 'large' ? sharedStyles.large : ''
                }`}
                src={exp.logo}
                alt={`${exp.company} logo`}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={sharedStyles.educationHeading}>{exp.name}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={sharedStyles.duration}>{exp.duration}</p>
              <p className={sharedStyles.country}>{exp.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
