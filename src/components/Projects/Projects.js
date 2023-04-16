import React from "react";
import styles from "./Projects.module.css";
import Project from "../Project/Project";
import NatoursImage from "./../../assests/images/Natours.JPG";
import OmnifoodImage from "./../../assests/images/omnifood.JPG";
import RecipeDetailsImage from "./../../assests/images/RecipeDetails.JPG";

const projects = [
  { image: NatoursImage, title: "Natours", color: "#74cf92" },
  { image: OmnifoodImage, title: "Omnifood", first: true, color: "#e67f22" },
  { image: RecipeDetailsImage, title: "Recipe Details", color: "#f6a184" },
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
