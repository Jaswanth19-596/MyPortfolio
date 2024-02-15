import Projects from '../Projects/Projects';
import './ProjectsSection.css';
import NatoursImage from './../../assests/images/Natours-min.JPG';
import RecipeDetailsImage from './../../assests/images/RecipeDetails-min.JPG';
import OmnifoodImage from './../../assests/images/omnifood-min.JPG';
import CartifyImage from './../../assests/images/cartify.PNG';
import CreditCardImage from './../../assests/images/creditcard.jfif';
import EmailSpamImage from './../../assests/images/emailspam.png';
import { useEffect, useState } from 'react';

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
    image: CreditCardImage,
    title: 'Credit Card Fraud Detection',
    githubLink: 'https://github.com/Jaswanth19-596/Credit-Card-Fraud-Detection/',
    projectLink: 'https://github.com/Jaswanth19-596/Credit-Card-Fraud-Detection/',
    color: '#366880',
    description:
    'This project aims to detect fraudulent credit card transactions using machine learning techniques. It utilizes a dataset containing transactions made by credit cards in September 2013 by European cardholders. The dataset presents transactions that occurred in two days, where we have 492 frauds out of 284,807 transactions.'
  },
  {
    image: EmailSpamImage,
    title: 'Email Spam Detection',
    githubLink: 'https://github.com/Jaswanth19-596/Email-Spam-Classifier',
    projectLink: 'https://github.com/Jaswanth19-596/Email-Spam-Classifier',
    color: '#366880',
    description:
    'This project is a simple Email/SMS Spam Classifier built using natural language processing (NLP) techniques to classify messages as spam or not spam (ham).'
  },
];

const cloudProjects = [];

const ProjectsSection = function () {
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState(frontendProjects);
  const [animationKey, setAnimationKey] = useState(0);

  const toggleTab = (id) => {
    setActiveTab(id);
    let tempProjects = [];
    if (id === 1) tempProjects = frontendProjects;
    else if (id === 2) tempProjects = fullStackProjects;
    else if (id === 3) tempProjects = dataScienceProjects;
    else if (id === 4) tempProjects = cloudProjects;
    setProjects(tempProjects);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="container padding-container">
      <h3 className="heading-tertiary u-center-text u-margin-bottom-large">
        Featured Projects
      </h3>
      <ul className="tab-container">
        <li
          className={`tab ${activeTab === 1 ? 'active-tab1' : ''}`}
          onClick={() => {
            toggleTab(1);
          }}
        >
          <p className='project-type'>Frontend Projects</p>
        </li>
        <li
          className={`tab ${activeTab === 2 ? 'active-tab1' : ''}`}
          onClick={() => {
            toggleTab(2);
          }}
        >
          <p className='project-type'>Full Stack Projects</p>
  
        </li>
        <li
          className={`tab ${activeTab === 3 ? 'active-tab1' : ''}`}
          onClick={() => {
            toggleTab(3);
          }}
        >
          <p className='project-type'>DS/ML Projects</p>
        </li>
        <li
          className={`tab ${activeTab === 4 ? 'active-tab1' : ''}`}
          onClick={() => {
            toggleTab(4);
          }}
        >
          <p className='project-type'>Cloud Projects</p>
        </li>
      </ul>

      <div className="projects-container">
      <Projects key={animationKey} projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsSection;
