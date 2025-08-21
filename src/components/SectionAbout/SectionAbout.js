import React from 'react';
import styles from './SectionAbout.module.css';
import image from './../../assests/images/profile1-min.png';

const SectionAbout = (props) => {
  return (
    <section className="section-about">
      <div className={`container ${styles['about-container']}`}>
        <div className={styles['image-container']}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles['text-container']}>
          <p className={styles['about-me-text']}>About Me</p>
          <h1 className={styles['about-me-heading']}>
            I'm <span> Jaswanth</span>. A Graduate Student from Purdue
            University Northwest.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
