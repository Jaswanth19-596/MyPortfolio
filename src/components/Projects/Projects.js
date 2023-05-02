import React from "react";
import styles from "./Projects.module.css";
import Project from "../Project/Project";
import NatoursImage from "./../../assests/images/Natours.JPG";
import OmnifoodImage from "./../../assests/images/omnifood.JPG";
import RecipeDetailsImage from "./../../assests/images/RecipeDetails.JPG";

const projects = [
  {
    image: NatoursImage,
    title: "Natours",
    githubLink: "https://github.com/Jaswanth19-596/Natours-Frontend",
    projectLink: "https://tours96.netlify.app/",
    color: "#74cf92",
    description:
      "Natours is a fully responsive webpage which is developed by using HTML CSS & SASS. This Webpage is full of animations and transitions.",
  },
  {
    image: OmnifoodImage,
    title: "Omnifood",
    first: true,
    color: "#e67f22",
    githubLink: "https://github.com/Jaswanth19-596/Omnifood",
    projectLink: "https://omnifood96.netlify.app/",
    description:
      "Omnifood is a responsive webpage which is developed by using HTMl & CSS. This is my first webpage",
  },
  {
    image: RecipeDetailsImage,
    title: "Forkify",
    color: "#f6a184",
    projectLink: "https://recipedetails-jas.netlify.app/",
    githubLink: "https://github.com/Jaswanth19-596/Forkify-Project",
    description:
      "Forkify is an webpage which uses an API to fetch the recipes from Forkify API. The recipes which are being fetched are displayed in a beautiful interface. The Required ingredients are listed at one place",
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
