import Projects from '../Projects/Projects';
import './ProjectsSection.css';
import NatoursImage from './../../assests/images/Natours-min.JPG';
import RecipeDetailsImage from './../../assests/images/RecipeDetails-min.JPG';
import OmnifoodImage from './../../assests/images/omnifood-min.JPG';
import CartifyImage from './../../assests/images/cartify.PNG';
import { useState } from 'react';

const frontendProjects = [
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

const fullStackProjects = [
  {
    image: CartifyImage,
    title: 'ECartify',
    githubLink: 'https://github.com/Jaswanth19-596/Ecommerce-Frontend',
    projectLink: 'https://ecartify.netlify.app',
    color: '#366880',
    description:
      'A full stack web application which is developed using React JS,Node Js, Express Js and Mongo DB.A fully fledged application that can perform all the activities that are generally performed by a ECOMMERCE applications like AMAZON , FLIPKART',
  },
];

const dataScienceProjects = [
  {
    image: CartifyImage,
    title: 'ECartify',
    githubLink: 'https://github.com/Jaswanth19-596/Ecommerce-Frontend',
    projectLink: 'https://ecartify.netlify.app',
    color: '#366880',
    description:
      'A full stack web application which is developed using React JS,Node Js, Express Js and Mongo DB.A fully fledged application that can perform all the activities that are generally performed by a ECOMMERCE applications like AMAZON , FLIPKART',
  },
];

const cloudProjects = [];

const ProjectsSection = function () {
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState(frontendProjects);

  const toggleTab = (id) => {
    setActiveTab(id);
    let tempProjects = [];
    if (id === 1) tempProjects = frontendProjects;
    else if (id === 2) tempProjects = fullStackProjects;
    else if (id === 3) tempProjects = dataScienceProjects;
    else if (id === 4) tempProjects = cloudProjects;
    setProjects(tempProjects);
  };
  return (
    <div className="container">
      <h3 className="heading-tertiary u-center-text u-margin-bottom-large">
        Featured Projects
      </h3>
      <ul className="tab-container">
        <li
          className={`tab ${activeTab === 1 ? 'active-tab' : ''}`}
          onClick={() => {
            toggleTab(1);
          }}
        >
          Frontend Projects
        </li>
        <li
          className={`tab ${activeTab === 2 ? 'active-tab' : ''}`}
          onClick={() => {
            toggleTab(2);
          }}
        >
          Full Stack Projects
        </li>
        <li
          className={`tab ${activeTab === 3 ? 'active-tab' : ''}`}
          onClick={() => {
            toggleTab(3);
          }}
        >
          Data Science/Machine Learning Projects
        </li>
        <li
          className={`tab ${activeTab === 4 ? 'active-tab' : ''}`}
          onClick={() => {
            toggleTab(4);
          }}
        >
          Cloud Computing Projects
        </li>
      </ul>

      <div className="projects-container">
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsSection;
