import React from "react";
import styles from "./Projects.module.css";
import Project from "../Project/Project";
import ConverseAIImage from "./../../assests/images/converseAI.jpg";
import OnlineVotingSystemImage from "./../../assests/images/onlinevotingproject.jpg";

const projects = [
  { image: ConverseAIImage, title: "Converse AI", color: "#74cf92" },
  {
    image: OnlineVotingSystemImage,
    title: "Omnifood",
    first: true,
    color: "#e67f22",
  },
];

const Projects = () => {
  return (
    <div className={`container`}>
      <h3 className="heading-tertiary u-center-text u-margin-bottom-large">
        Featured Projects
      </h3>

      <div className={styles["projects-container"]}>
        {projects.map((project) => (
          <Project
            key={project.image}
            title={project.title}
            image={project.image}
            first={project.first}
            color={project.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
