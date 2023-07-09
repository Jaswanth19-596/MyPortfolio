import React from 'react';
import styles from './Projects.module.css';
import Project from '../Project/Project';
import NatoursImage from './../../assests/images/Natours-min.JPG';
import RecipeDetailsImage from './../../assests/images/RecipeDetails-min.JPG';
import OmnifoodImage from './../../assests/images/omnifood-min.JPG';
import CartifyImage from './../../assests/images/cartify.PNG';

const projects = [
  {
    image: CartifyImage,
    title: 'ECartify',
    githubLink: 'https://github.com/Jaswanth19-596/Ecommerce-Frontend',
    projectLink: 'https://ecartify.netlify.app',
    color: '#366880',
    description:
      'A full stack web application which is developed using React JS,Node Js, Express Js and Mongo DB.A fully fledged application that can perform all the activities that are generally performed by a ECOMMERCE applications like AMAZON , FLIPKART',
  },
  {
    image: NatoursImage,
    title: 'Natours',
    first: true,

    githubLink: 'https://github.com/Jaswanth19-596/Natours-Frontend',
    projectLink: 'https://tours96.netlify.app/',
    color: '#74cf92',
    description:
      'Natours is a fully responsive webpage which is developed by using HTML CSS & SASS. This Webpage is full of animations and transitions.',
  },
  {
    image: OmnifoodImage,
    title: 'Omnifood',
    color: '#e67f22',
    githubLink: 'https://github.com/Jaswanth19-596/Omnifood',
    projectLink: 'https://omnifood96.netlify.app/',
    description:
      'Omnifood is a responsive webpage which is developed by using HTMl & CSS. This is my first webpage',
  },
  {
    image: RecipeDetailsImage,
    title: 'Forkify',
    first: true,

    color: '#f6a184',
    projectLink: 'https://recipedetails-jas.netlify.app/',
    githubLink: 'https://github.com/Jaswanth19-596/Forkify-Project',
    description:
      'Forkify is an webpage which uses an API to fetch the recipes from Forkify API. The recipes which are being fetched are displayed in a beautiful interface. The Required ingredients are listed at one place',
  },
];

const Projects = () => {
  return (
    <div className={`container`}>
      <h3 className="heading-tertiary u-center-text u-margin-bottom-large">
        Featured Projects
      </h3>

      <div className={styles['projects-container']}>
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
