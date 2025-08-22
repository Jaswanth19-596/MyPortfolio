import React from 'react';
import styles from './SectionAbout.module.css';
import image from './../../assests/images/profile1-min.png';

const SectionAbout = (props) => {
  return (
    <section className="section-about">
      <div className={`container ${styles['about-container']}`}>
        <div className={styles['text-container']}>
          <h1 className={styles['about-me-heading']}>Jaswanth Mada</h1>
          <p className={styles['about-me-subheading']}>
            ML Engineer @ Accessifiers | ICPC Regionalist | CS Graduate Student
            @ Purdue University Northwest (2025)
          </p>
          <div className={styles['about-me-paragraph']}>
            AI/ML Engineer and Full-Stack Developer skilled in Python, Java,
            JavaScript, and AWS. Experienced in deploying ML models and building
            scalable web apps to deliver impactful, data-driven solutions.
            <div className={styles['about-me-button-container']}>
              <button className={styles['about-me-button']}>
                madhajaswanth@gmail.com
              </button>
              <button className={styles['about-me-button']}>Linkedin</button>
              <button className={styles['about-me-button']}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
