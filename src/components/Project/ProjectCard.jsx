import React from 'react';
import styles from './Project.module.css';

const Project = (props) => {
  return (
    <div className={styles['project-card']}>
      <h3 className={styles['project-title']}>{props.title}</h3>

      <div className={styles['tech-tags']}>
        {props.technologies &&
          props.technologies.map((tech, index) => (
            <span key={index} className={styles['tech-tag']}>
              {tech}
            </span>
          ))}
      </div>

      <div className={styles['problem-section']}>
        <h4 className={styles['section-label']}>Problem</h4>
        <p className={styles['problem-text']}>{props.problem}</p>
      </div>

      <button
        className={styles['view-details-btn']}
        onClick={props.onProjectClick}
      >
        View details
      </button>
    </div>
  );
};

export default Project;
