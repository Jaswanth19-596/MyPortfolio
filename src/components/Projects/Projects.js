import React from 'react';
import styles from './Projects.module.css';
import Project from '../Project/Project';

const Projects = (props) => {
  const { projects } = props;

  if (projects.length === 0) {
    return <h2>On the way !!</h2>;
  }

  return (
    <div className={`container`}>
      <div className={styles['projects-container']}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            first={project.first}
            color={project.color}
            github={project.githubLink}
            project={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
