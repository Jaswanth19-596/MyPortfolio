import Projects from '../Projects/Projects';
import './ProjectsSection.css';
import { useState } from 'react';

const frontendProjects = [
  {
    title: 'Online Fruit Store',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'HTML5/CSS',
      'REST APIs',
      'MVC Architecture',
    ],
    problem_outline:
      'Developed a full-stack e-commerce platform for an online fruit store, demonstrating proficiency in web development, database management, and API design.',
    problem:
      'The objective was to build a functional and scalable e-commerce website that allows users to browse and purchase fruits. This involved creating a user-friendly interface, a secure backend for managing inventory and user data, and a system for processing orders and payments. The core challenge was to design an efficient and reliable architecture that could handle all aspects of an online store.',
    approach:
      'Architected and built the application using the **Model-View-Controller (MVC)** design pattern to ensure organized, modular, and maintainable code. The front-end was developed with HTML and CSS for an intuitive user experience. The back-end was powered by **Node.js** and **Express.js** to handle server-side logic, and a **MongoDB** database was used to store product, user, and order information. A set of **RESTful APIs** were implemented to manage all **CRUD** (Create, Read, Update, Delete) operations, facilitating seamless communication between the front-end and back-end.',
    outcomes: [
      'Successfully launched a fully functional e-commerce website with essential features including user registration, login, product browsing, an interactive shopping cart, and a secure checkout process.',
      'Demonstrated a strong understanding of full-stack development by seamlessly integrating the front-end, back-end, and database layers.',
      'The use of the MVC architecture resulted in a highly organized and scalable codebase, prepared for future feature expansions.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/OnlineFruitStore',
  },
  {
    title: 'Natours - Frontend Web Development',
    technologies: [
      'HTML5',
      'CSS3',
      'Sass/SCSS',
      'JavaScript',
      'Responsive Web Design',
      'Flexbox & CSS Grid',
    ],
    problem_outline:
      'Developed a modern, visually stunning, and fully responsive frontend for a fictional tour company, demonstrating expertise in contemporary web design principles and development tools.',
    problem:
      'The objective was to build a professional-grade static website for a nature tour company, focusing entirely on the client-side user interface. The challenge was to create a clean, modern, and engaging design that provides an excellent user experience across all devices, from mobile phones to desktop computers, using only core frontend technologies.',
    approach:
      'Architected the website using semantic **HTML5** to ensure a strong and accessible structure. The styling was handled with advanced **CSS3** techniques and preprocessed with **Sass/SCSS** to create a modular and maintainable stylesheet. Implemented a fully responsive design using modern layout techniques like **Flexbox** and **CSS Grid** to guarantee a seamless viewing experience on any screen size. JavaScript was used to create subtle animations and interactive elements, such as a hamburger menu and modal pop-ups.',
    outcomes: [
      'Successfully delivered a professional-quality, static frontend website that is both aesthetically pleasing and highly functional.',
      'Showcased proficiency in core web development skills, including clean code organization, efficient use of CSS preprocessors, and a mastery of modern responsive design.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Natours-Frontend',
  },
  {
    title: 'Omnifood - Modern Web Design',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Web Design',
      'UI/UX Principles',
      'Modern Layouts',
    ],
    problem_outline:
      'Developed a modern, single-page website for a fictional AI-powered food delivery service, showcasing expertise in contemporary web design and user experience principles.',
    problem:
      "The objective was to create a professional-grade, static website that is fast, highly responsive, and visually appealing. The primary challenge was to design a user interface (UI) that effectively communicates the brand's value proposition and provides a seamless user experience across a wide range of devices, from mobile phones to high-resolution desktops.",
    approach:
      'Architected the website using clean, semantic **HTML5** for a well-structured foundation. The design was brought to life using advanced **CSS3** techniques, focusing on modern aesthetics, engaging animations, and fluid transitions. **Responsive Web Design** principles were rigorously applied, ensuring the layout and content adapt perfectly to any screen size. JavaScript was implemented to enhance user interaction, enabling features like smooth scrolling navigation and dynamic UI components.',
    outcomes: [
      'Successfully delivered a fully responsive and professional-quality website that is optimized for performance and user experience.',
      'Demonstrated a strong understanding of core frontend development, including clean code practices, modern design principles, and the creation of an engaging user interface.',
      'Showcased the ability to build a robust and aesthetically pleasing web presence that effectively promotes a product and service.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Omnifood',
  },
  {
    title: 'Burn Fitness Studio Website',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Web Design',
      'Modern UI/UX',
      'Animations',
    ],
    problem_outline:
      'Developed a modern, responsive, and visually dynamic website for a fitness studio to attract and engage new clients while showcasing its services and brand identity.',
    problem:
      "The objective was to design and build a professional-grade website that serves as the digital front door for a fitness studio. The challenge was to create an intuitive user interface (UI) and user experience (UX) that effectively communicates the studio's offerings, pricing, and brand message, while being accessible on all devices without compromising on aesthetic quality or performance.",
    approach:
      "Architected the website using clean, semantic **HTML5** to provide a solid and accessible structure. The design was styled with modern **CSS3** and incorporated fluid animations, smooth transitions, and a vibrant color palette to create an engaging user experience. **Responsive web design** principles were rigorously applied, utilizing techniques like Flexbox and media queries to ensure the site's layout and content adapted seamlessly to desktop, tablet, and mobile screens.",
    outcomes: [
      "Successfully delivered a fully functional and visually appealing static website that effectively showcases the fitness studio's services, trainers, and facilities.",
      'Demonstrated a strong command of core frontend development skills, including clean code organization and the implementation of a modern, responsive, and interactive user interface.',
      'The project highlights the ability to build a robust web presence that serves as an effective marketing tool for a business.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/BurnFitnessStudioWebsite',
  },
];

const fullStackProjects = [
  {
    title: 'Student Management System',
    technologies: [
      'Java',
      'Java Servlets',
      'JSP',
      'JDBC',
      'MVC Architecture',
      'MySQL',
      'Database Management',
    ],
    problem_outline:
      'Developed a comprehensive Student Management System to manage student records efficiently, using Java-based web technologies and a relational database.',
    problem:
      'The objective was to create a robust and user-friendly system for managing student data, including enrollment, grades, and personal information. The primary challenge was to design and implement a scalable system that could handle all **CRUD** (Create, Read, Update, Delete) operations securely and efficiently, while also providing a simple web interface for interaction.',
    approach:
      "Architected the system using the **Model-View-Controller (MVC)** design pattern to separate the application's logic, data handling, and user interface. The backend was built with **Java Servlets** to process requests and manage business logic, while **JSP (JavaServer Pages)** was used to render the dynamic web pages for the frontend. **JDBC (Java Database Connectivity)** was implemented to establish a connection with a **MySQL** database, ensuring persistent storage and retrieval of student data.",
    outcomes: [
      'Successfully delivered a fully functional web-based Student Management System with features for adding, viewing, updating, and deleting student records.',
      'Demonstrated a strong understanding of Java-based web development, including the use of Servlets, JSP, and JDBC for building an integrated, full-stack application.',
      'The project highlights proficiency in building secure and efficient database-driven web applications.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Student-Management-System',
  },
  {
    title: 'E-commerce Full-Stack Project',
    technologies: [
      'React.js',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'Full-Stack Development',
    ],
    problem_outline:
      'Engineered a complete, end-to-end e-commerce platform, demonstrating expertise in full-stack development, from a dynamic frontend to a robust, secure backend.',
    problem:
      'The objective was to design and build a fully functional e-commerce website capable of handling the entire shopping process, from browsing products to secure checkout. The challenge was to create a seamless user experience while developing a scalable and secure backend to manage product inventory, user authentication, and order processing.',
    approach:
      'Architected the application using a full-stack approach. The frontend was developed with **React.js** to build a dynamic and responsive user interface, utilizing **Redux** for efficient state management of the shopping cart and user data. The backend was built with **Node.js** and **Express.js**, implementing a comprehensive **RESTful API** to handle all server-side logic, including product management, user authentication, and order fulfillment. A **MongoDB** database was configured to persistently store all application data.',
    outcomes: [
      'Successfully delivered a complete e-commerce solution with core features such as user authentication, a dynamic shopping cart, a secure payment gateway, and an admin panel for product management.',
      'Showcased proficiency in connecting various technologies across the stack to build a complex, real-world application.',
      'The project highlights a strong foundation in modern web development principles, including modular design, API integration, and database management.',
    ],
    githubLink:
      'https://github.com/Jaswanth19-596/Ecommerce-Full-Stack-Project',
  },
  {
    title: 'Calendar Application',
    technologies: [
      'Java',
      'Object-Oriented Programming (OOP)',
      'Data Structures',
      'Algorithm Design',
      'Date & Time API',
    ],
    problem_outline:
      'Developed a command-line calendar application using Java, showcasing fundamental programming principles and mastery of date and time manipulation.',
    problem:
      'The objective was to create a robust and accurate calendar program that can display a calendar for any given month and year. The key challenges involved correctly calculating the starting day of the week for any month, handling leap years, and structuring the output in a clear, readable calendar format.',
    approach:
      'Designed and implemented the application following core **Object-Oriented Programming (OOP)** principles, creating a modular and scalable codebase. Utilized Java’s built-in **Date and Time API** to handle complex date calculations, including logic for leap years. The application was built with a user-friendly command-line interface that prompts the user for a month and year, then generates and displays the corresponding calendar.',
    outcomes: [
      'Successfully delivered a fully functional and accurate calendar application that correctly computes and displays dates for any given input.',
      'Demonstrated a strong foundation in Java programming, including **algorithm design** and the use of fundamental libraries for real-world problem-solving.',
      'The project highlights proficiency in logical problem-solving and the ability to create a clean and maintainable software solution.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Calendar-Java',
  },
  {
    title: 'Upcoming Contests Chrome Extension',
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Chrome Extension API',
      'Public APIs',
      'Web Development',
    ],
    problem_outline:
      'Developed a Chrome browser extension to provide competitive programmers with a convenient, real-time list of upcoming contests from various platforms, directly within their browser.',
    problem:
      'Competitive programmers often need to track upcoming contests across multiple online judges and platforms, which can be time-consuming and lead to missed opportunities. The objective was to build a user-friendly and automated solution that aggregates this information into a single, easily accessible interface within the browser, ensuring users never miss a contest.',
    approach:
      'Architected and built the browser extension using core web technologies. The user interface was designed with a minimalist aesthetic using **HTML5** and **CSS3** for a clean display of contest information. **JavaScript** was used to implement the core functionality, including making asynchronous calls to a public contest API to fetch real-time data. The extension was configured to run efficiently in the browser, providing a seamless user experience.',
    outcomes: [
      'Successfully delivered a fully functional Chrome extension that saves users time and helps them stay organized by providing a consolidated view of upcoming contests.',
      'Demonstrated a strong understanding of client-side web development and **API integration**, showcasing the ability to build practical and useful tools beyond traditional websites.',
      'The project highlights proficiency in building software for a specific user base and solving a common pain point within the competitive programming community.',
    ],
    githubLink:
      'https://github.com/Jaswanth19-596/Upcoming-Contests-Chrome-Extension',
  },
];

const dataScienceProjects = [
  {
    title: 'Mobile Price Prediction',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Sklearn'],
    problem_outline:
      'Smartphone pricing varies widely due to brand premiums, regional differences, and rapid depreciation, making it difficult for consumers and businesses to make informed pricing decisions.',
    problem:
      'Smartphone pricing is complex due to brand premiums (iPhones cost 2-3x more than similar Android devices), regional variations, and rapid price depreciation after launch. This creates challenges for consumers, retailers, and manufacturers in making informed pricing decisions. ',
    approach:
      'Built an end-to-end ML pipeline that scraped 5,000+ mobile phones from GSMArena using Scrapy, handled messy data through comprehensive cleaning and EDA, performed feature selection, and evaluated multiple regression models. Deployed the solution via an interactive Streamlit web application.',
    outcomes: [
      'Achieved an R² score of 0.63 (improved from initial 0.55) despite inherent market complexities. The deployed model successfully predicts mobile prices based on technical specifications, providing data-driven insights for pricing decisions while accounting for real-world factors like brand value and market timing that naturally limit prediction accuracy in this volatile domain.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596',
    liveLink: 'https://mobilepricepredictionbyjaswanth.streamlit.app/',
  },
  {
    title: 'Credit Card Fraud Detection',
    technologies: [
      'Machine Learning',
      'Class Imbalance',
      'Oversampling',
      'Undersampling',
    ],
    problem_outline:
      'Credit card fraud costs $24+ billion annually, but fraudulent transactions make up only 0.17% of all transactions. The challenge is detecting rare fraud patterns while avoiding false positives that disrupt legitimate customers.',
    problem:
      'Credit card fraud costs the global economy over $24 billion annually, with fraudulent transactions representing a critical threat to financial institutions and consumers. With fraud cases accounting for only 0.17% of all transactions (492 out of 284,807), traditional detection methods struggle with this extreme class imbalance. The challenge lies in building models that can accurately identify rare fraudulent patterns while minimizing false positives that disrupt legitimate customer transactions.',
    approach:
      'Developed a comprehensive machine learning pipeline addressing the unique challenges of highly imbalanced fraud detection. Implemented multiple sampling strategies including strategic undersampling (NearMiss) and synthetic oversampling (SMOTE) to optimize model performance while maintaining realistic evaluation on original imbalanced data.\
Conducted extensive feature analysis on 28 PCA-transformed variables, identifying key predictive features (V4: 0.7 correlation, V11: 0.68 correlation) through correlation analysis and outlier detection using IQR methods. Applied multiple classification algorithms with comprehensive hyperparameter optimization via RandomizedSearchCV and proper cross-validation using StratifiedShuffleSplit.\
Employed rigorous validation methodology using imlearn pipelines to prevent data leakage, ensuring sampling techniques were applied only during training while testing remained on original imbalanced distributions.',
    outcomes: [
      'Successfully developed a fraud detection system achieving 97.5% ROC-AUC score with Support Vector Classifier and 97.4% with Logistic Regression on real-world imbalanced data. The solution demonstrates excellent fraud detection capability with 92.4% recall, ensuring most fraudulent transactions are caught.\
Final Performance Achievements:\
SMOTE + Logistic Regression: 98% accuracy, 95% ROC-AUC on original imbalanced test data\
Fraud Detection Rate: 78% recall (4 out of 5 fraudulent transactions caught)\
Precision: 74% (when flagged as fraud, model is correct 74% of the time)\
F1-Score: 0.76 demonstrating optimal precision-recall balance\
Business Impact: Only 1 in 4 fraud alerts are false positives\
Technical Achievements:\
Proper handling of extreme class imbalance (99.8% vs 0.2%)\
Advanced correlation analysis revealing strongest predictive features\
Dimensionality reduction visualization (t-SNE) confirming model feasibility\
Comprehensive model comparison with learning curve analysis\
Production-ready validation methodology preventing overfitting\
    ',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Email-Spam-Classifier',
  },
  {
    title: 'Brain Tumor Classification with Fine-Tuned VGG16',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Transfer Learning',
      'Fine-Tuning',
      'Data Augmentation',
      'CNN',
    ],
    problem_outline:
      'Developed a deep learning model to accurately classify brain MRI scans, addressing the challenge of limited medical imaging data through an effective transfer learning pipeline.',
    problem:
      'Medical image classification often suffers from a scarcity of labeled data, making it difficult to train robust deep learning models from scratch. This project tackled this issue by building a system to classify MRI scans into four categories—glioma, meningioma, pituitary tumor, and no tumor—by leveraging pre-existing knowledge from a large-scale image dataset.',
    approach:
      "Implemented a comprehensive transfer learning strategy using a pre-trained VGG16 model as a feature extractor. The model was fine-tuned by unfreezing and retraining its top convolutional layers with a very low learning rate to adapt features to the specific nuances of brain MRI scans while preventing 'catastrophic forgetting.'\nUtilized a custom script to create a reproducible train-validation split and employed advanced data augmentation techniques (random flips, rotations, brightness/contrast) to expand the training dataset, making the model more robust to variations in the scans.\nIntegrated a strategic dropout layer to further mitigate overfitting and ensure the model learns generalized features.",
    outcomes: [
      'Successfully developed a classification model achieving an accuracy of 86.2% on the unseen test dataset.',
      "Provided a comprehensive evaluation using a confusion matrix and per-class precision and recall, offering granular insights into the model's performance and misclassification patterns.",
      'Demonstrated a full machine learning lifecycle, from data preprocessing and model architecture design to advanced training strategies and detailed evaluation, showcasing an effective approach to solving a medical image classification problem.',
    ],
    githubLink: 'https://github.com/your-username/brain-tumor-classifier',
  },
  {
    title: 'Credit Card Fraud Detection',
    technologies: [
      'Scikit-Learn',
      'NearMiss',
      'SMOTE',
      'Logistic Regression',
      'KNN',
      'Decision Trees',
      'PCA',
    ],
    problem_outline:
      'Developed a machine learning pipeline to detect fraudulent credit card transactions, addressing extreme class imbalance in a dataset of 284K transactions with only a 0.17% fraud rate[cite: 29].',
    problem:
      'Credit card fraud poses a significant financial threat, but fraud cases are extremely rare, making up just 0.17% of total transactions in the dataset analyzed[cite: 29]. The main challenge was to build a model that could accurately identify these rare fraudulent patterns while minimizing false positives that could inconvenience legitimate customers.',
    approach:
      "Addressed the class imbalance by implementing two distinct data-balancing techniques: **NearMiss** for undersampling and **SMOTE** for oversampling[cite: 30]. [cite_start]Performed data cleaning and preprocessing by applying IQR-based outlier removal and feature scaling[cite: 29]. [cite_start]Built and evaluated four different models—Logistic Regression, KNN, Decision Tree, and a Neural Network—using a nested cross-validation approach to ensure fair model evaluation[cite: 30, 31]. [cite_start]Used dimensionality reduction with **PCA** to visualize class separability and fraud clusters, which improved the project's interpretability and validation[cite: 33].",
    outcomes: [
      'Successfully achieved **91% recall** and **94% accuracy** with the Logistic Regression model on oversampled data[cite: 32].',
      'The Neural Network model achieved **99.9% accuracy** on the SMOTE-balanced data[cite: 32].',
      'Compared model performance using key metrics such as **ROC-AUC** and **precision-recall** to identify the most effective solution for fraud detection[cite: 31].',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Credit-Card-Fraud-Detection',
  },
  {
    title: 'Cat vs. Dog Classifier',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Matplotlib',
      'CNN',
      'Data Augmentation',
      'Binary Classification',
    ],
    problem_outline:
      'Developed a deep learning model to accurately distinguish between images of cats and dogs, a foundational computer vision binary classification task.',
    problem:
      'The task of classifying images of cats and dogs is a classic problem in computer vision that requires a model to learn and differentiate key features. The challenge involves building a robust model that can handle various image conditions such as different lighting, backgrounds, poses, and sizes, while avoiding overfitting to the training data.',
    approach:
      "Built a Convolutional Neural Network (CNN) architecture from scratch, featuring multiple convolutional and max-pooling layers for effective feature extraction, followed by dense layers for classification. Implemented extensive data augmentation techniques, including rotations, horizontal flips, zooming, and shifting, to artificially expand the dataset and improve the model's generalization capabilities on unseen images.\nUtilized binary cross-entropy as the loss function and the Adam optimizer for efficient training. The model's performance was monitored on a validation set to tune hyperparameters and prevent overfitting.",
    outcomes: [
      "Achieved a high classification accuracy of over 95% on the test set, demonstrating the model's ability to reliably differentiate between cats and dogs.",
      "The model's performance was validated using a confusion matrix and key metrics like precision, recall, and F1-score, confirming its robustness in correctly identifying both classes.",
    ],
    githubLink: 'https://github.com/Jaswanth19-596/CatvsDogClassifier',
  },
  {
    title: 'House Price Prediction',
    technologies: [
      'Python',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Regression',
    ],
    problem_outline:
      'Developed a machine learning model to accurately predict residential house prices using a variety of features, demonstrating a mastery of the end-to-end regression modeling pipeline.',
    problem:
      'The goal of this project was to predict the final price of residential homes based on a dataset containing numerous features such as size, location, number of bedrooms, and year built. The primary challenge involved handling a complex dataset with various data types, missing values, and the need to identify the most influential features for accurate price prediction.',
    approach:
      'Executed a complete data science pipeline, beginning with extensive **Exploratory Data Analysis (EDA)** and data cleaning to handle missing values and prepare features. Applied advanced preprocessing techniques, including one-hot encoding for categorical variables and feature scaling for numerical data, to optimize model performance. Trained and evaluated multiple regression models, including Linear Regression, Lasso, and Random Forest Regressor, to identify the most effective predictive algorithm.',
    outcomes: [
      "Achieved a high predictive accuracy with a final model boasting an **R-squared score of over 90%**, indicating a strong correlation between the model's predictions and the actual house prices.",
      'The project successfully identified key features that significantly influence house prices, providing valuable insights into the real estate market.',
      'Demonstrated proficiency in building and optimizing regression models for a complex, real-world predictive task.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/House_Price_Prediction',
  },
  {
    title: 'Email Spam Classifier',
    technologies: [
      'Python',
      'Scikit-Learn',
      'NLTK',
      'Pandas',
      'Natural Language Processing (NLP)',
      'TF-IDF',
    ],
    problem_outline:
      "Developed an NLP-based machine learning model to automatically classify emails as 'spam' or 'ham' (not spam), demonstrating proficiency in text data processing and supervised learning.",
    problem:
      'The proliferation of spam emails presents a significant challenge for users and email providers. The goal of this project was to build a robust classifier that can accurately identify and filter out unwanted emails in a real-time environment. The primary challenge was effectively preprocessing unstructured text data and creating meaningful features for a machine learning model to learn from.',
    approach:
      'Executed a complete data science lifecycle for a text classification problem. The approach included a multi-step text preprocessing pipeline: data cleaning, tokenization, stemming, and the removal of stopwords. Feature extraction was performed using **TF-IDF (Term Frequency-Inverse Document Frequency)** to convert the email text into numerical feature vectors. Trained and compared multiple supervised learning models, including **Naive Bayes**, **Support Vector Machine (SVM)**, and **Logistic Regression**, to find the optimal classifier.',
    outcomes: [
      "Achieved a high classification accuracy of **98%** and **99% precision**, highlighting the model's effectiveness in correctly identifying spam and minimizing false positives.",
      'Successfully demonstrated an end-to-end understanding of NLP techniques for text classification, from preprocessing raw text to building, training, and evaluating models with key metrics such as Precision, Recall, and F1-Score.',
      'The project showcased the ability to build an effective and scalable solution for a fundamental real-world problem in technology.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Email-Spam-Classifier',
  },
  {
    title: 'Recommendation Systems',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'Surprise',
      'Collaborative Filtering',
      'Content-Based Filtering',
      'Matrix Factorization',
    ],
    problem_outline:
      'Developed and implemented a recommendation system to provide personalized item suggestions to users, enhancing user experience and engagement by solving the cold-start problem and data sparsity challenges.',
    problem:
      "In an era of information overload, recommending relevant content to users is crucial for platforms like e-commerce sites and streaming services. The core problem is to build an intelligent system that can predict a user's preference for an item they have not yet seen, based on their past behavior and the behavior of other users, while effectively handling the 'cold start' problem for new users or items.",
    approach:
      "Engineered a hybrid recommendation system by combining two primary approaches. First, **Collaborative Filtering** was implemented using a technique like **Matrix Factorization** to identify user-item patterns and make predictions based on similar users' preferences. Second, a **Content-Based Filtering** approach was developed to recommend items with similar attributes (e.g., genre, director) to those a user previously enjoyed. The system was trained on a comprehensive movie dataset and evaluated using metrics such as **RMSE (Root Mean Squared Error)** to measure the accuracy of rating predictions.",
    outcomes: [
      "Achieved a highly accurate model with a low **RMSE** score, demonstrating the system's effectiveness in predicting user ratings for movies.",
      'Successfully addressed data sparsity and the cold-start problem by designing a hybrid system that provides meaningful recommendations even with limited user-item interaction data.',
      'Showcased the ability to build and deploy complex machine learning systems that drive business value by improving user personalization and engagement.',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Recommendation-Systems',
  },
];

const cloudProjects = [];

const ProjectsSection = function () {
  const [activeMainTab, setActiveMainTab] = useState('Projects');
  const [activeProjectTab, setActiveProjectTab] = useState(3);
  const [projects, setProjects] = useState(dataScienceProjects);
  const [animationKey, setAnimationKey] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainTabs = [
    'Projects',
    'Professional Experience',
    'Skills',
    'Education',
    'Competitive Coding',
    'Certifications',
  ];

  const toggleMainTab = (tabName) => {
    setActiveMainTab(tabName);
    setAnimationKey((prevKey) => prevKey + 1);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProjectTab = (id) => {
    setActiveProjectTab(id);
    let tempProjects = [];
    if (id === 1) tempProjects = frontendProjects;
    else if (id === 2) tempProjects = fullStackProjects;
    else if (id === 3) tempProjects = dataScienceProjects;
    else if (id === 4) tempProjects = cloudProjects;
    setProjects(tempProjects);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedExperience(null);
      setSelectedEducation(null);
      setSelectedProject(null);
      setIsModalClosing(false);
    }, 300);
  };

  const openEducationModal = (education) => {
    setSelectedEducation(education);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const renderContent = () => {
    if (activeMainTab === 'Projects') {
      return (
        <>
          <ul className="sub-tab-container">
            <li
              className={`sub-tab ${
                activeProjectTab === 3 ? 'active-sub-tab' : ''
              }`}
              onClick={() => toggleProjectTab(3)}
            >
              <p className="sub-project-type">DS/ML Projects</p>
            </li>
            <li
              className={`sub-tab ${
                activeProjectTab === 2 ? 'active-sub-tab' : ''
              }`}
              onClick={() => toggleProjectTab(2)}
            >
              <p className="sub-project-type">Full Stack Projects</p>
            </li>

            <li
              className={`sub-tab ${
                activeProjectTab === 1 ? 'active-sub-tab' : ''
              }`}
              onClick={() => toggleProjectTab(1)}
            >
              <p className="sub-project-type">Frontend Projects</p>
            </li>
          </ul>
          <div className="projects-container">
            <Projects
              key={animationKey}
              projects={projects}
              onProjectClick={openProjectModal}
            />
          </div>

          {selectedProject && (
            <div
              className={`modal-overlay ${isModalClosing ? 'closing' : ''}`}
              onClick={closeModal}
            >
              <div
                className={`modal-content ${isModalClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Problem</h3>
                  <p className="modal-section-text">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Approach</h3>
                  <p className="modal-section-text">
                    {selectedProject.approach}
                  </p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Outcomes</h3>
                  <ul className="modal-outcomes-list">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="modal-outcome-item">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link-btn"
                    >
                      View Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link-btn"
                  >
                    View on GitHub
                  </a>
                  <button className="modal-close-btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    if (activeMainTab === 'Professional Experience') {
      const experiences = [
        {
          title: 'Machine Learning Engineer',
          company: 'Accessifiers',
          duration: 'Aug 2025 – Current • Chicago, United States • Remote',
          problem:
            'Supply chain teams were slowed by manual workflows and recurring IT issues that impacted throughput and user experience.',
          approach:
            'Automated supply chain workflows using scripts & workflow tools; delivered Tier 2 support (setup, troubleshooting, hardware configuration, staff training); collaborated across teams to design scalable IT solutions.',
          outcomes: [
            'Operational efficiency improved by ~30%',
            'Reduced manual tasks and recurring tickets',
            'Ensured smoother IT operations and user satisfaction',
          ],
        },
        {
          title: 'Software Engineer Intern',
          company: 'Keerthi Bizplus4U IT Services Limited • Internship',
          duration:
            'May 2023 – July 2023 • 2 mos • Hyderabad, Telangana, India • Remote',
          problem:
            'Security posture needed improvement across threat detection, compliance visibility, and response readiness.',
          approach:
            'Developed security monitoring tools and dashboards; implemented threat detection algorithms; created compliance reporting systems; conducted security assessments and vulnerability testing.',
          outcomes: [
            'Enhanced threat detection capabilities by 45%',
            'Improved compliance reporting accuracy',
            'Reduced security incident response time by 60%',
          ],
        },
      ];

      return (
        <div className="experience-section">
          <div className="projects-container experience-container">
            {experiences.map((experience, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{experience.title}</h3>

                <div className="experience-meta">
                  <p className="company-name">{experience.company}</p>
                  <p className="duration-location">{experience.duration}</p>
                </div>

                {/* <div className="problem-section">
                  <h4 className="section-label">Problem</h4>
                  <p className="problem-text">{experience.problem.substring}</p>
                </div> */}

                {/* <button
                  className="view-details-btn"
                  onClick={() => openModal(experience)}
                >
                  View details
                </button> */}
              </div>
            ))}
          </div>

          {selectedExperience && (
            <div
              className={`modal-overlay ${isModalClosing ? 'closing' : ''}`}
              onClick={closeModal}
            >
              <div
                className={`modal-content ${isModalClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2 className="modal-title">
                    {selectedExperience.title} — {selectedExperience.company}
                  </h2>
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                </div>

                <p className="modal-duration">{selectedExperience.duration}</p>

                <div className="modal-section">
                  <h3 className="modal-section-title">Problem</h3>
                  <p className="modal-section-text">
                    {selectedExperience.problem}
                  </p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Approach</h3>
                  <p className="modal-section-text">
                    {selectedExperience.approach}
                  </p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Outcomes</h3>
                  <ul className="modal-outcomes-list">
                    {selectedExperience.outcomes.map((outcome, index) => (
                      <li key={index} className="modal-outcome-item">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="modal-close-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (activeMainTab === 'Education') {
      const educations = [
        {
          title: 'Purdue University Northwest, Indiana',
          degree: 'Master of Science – MS, Computer Science',
          duration: 'Aug 2023 – Aug 2025',
          description:
            'Coursework & skills: Applied Machine Learning · Deep Learning · Big Data · Algorithm Analysis · SQL',
          coursework:
            'Advanced coursework in Computer Science focusing on Machine Learning, Deep Learning, and Software Engineering.',
          skills: [
            'Machine Learning',
            'Databases',
            'Software Engineering',
            'Algorithm Analysis (Big-O)',
            'SQL',
            'Data Structures',
            'System Design',
          ],
          achievements: [
            'Represented Purdue in ICPC and IEEE global coding competitions',
            'Secured 1st place in One Day App Development Challenge',
            'Specialized in Machine Learning & Deep Learning',
          ],
        },
        {
          title: 'Tirumala Engineering College, Andhra Pradesh',
          degree:
            'Bachelor of Technology – BTech, Computer Science & Engineering',
          duration: 'Aug 2019 – Jun 2023 · CGPA 8',
          description:
            'Coursework & Skills : Data Structures & Algorithms · Databases · React Js · Node Js · SQL · MongoDB',
          coursework:
            'Comprehensive undergraduate program covering fundamental computer science concepts and practical application development.',
          skills: [
            'Computer Science Fundamentals',
            'SQL',
            'Programming Languages',
            'Software Development',
            'Database Systems',
            'Web Development',
          ],
          achievements: [
            'Graduated with CGPA 8.0',
            'Completed multiple projects in core CS areas',
            'Strong foundation in database systems and SQL',
          ],
        },
      ];

      return (
        <div className="education-section">
          <div
            className="projects-container education-container"
            key={`education-${animationKey}`}
          >
            {educations.map((education, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{education.title}</h3>

                <div className="education-meta">
                  <p className="degree-name">{education.degree}</p>
                  <p className="duration-location">{education.duration}</p>
                </div>

                <div className="problem-section">
                  <p className="problem-text">{education.description}</p>
                </div>

                <button
                  className="view-details-btn"
                  onClick={() => openEducationModal(education)}
                >
                  View details
                </button>
              </div>
            ))}
          </div>

          {selectedEducation && (
            <div
              className={`modal-overlay ${isModalClosing ? 'closing' : ''}`}
              onClick={closeModal}
            >
              <div
                className={`modal-content ${isModalClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2 className="modal-title">{selectedEducation.title}</h2>
                  <button className="modal-close" onClick={closeModal}>
                    ×
                  </button>
                </div>

                <p className="modal-duration">{selectedEducation.degree}</p>
                <p className="modal-duration">{selectedEducation.duration}</p>

                <div className="modal-section">
                  <h3 className="modal-section-title">Coursework</h3>
                  <p className="modal-section-text">
                    {selectedEducation.coursework}
                  </p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Skills & Technologies</h3>
                  <div className="tech-tags">
                    {selectedEducation.skills.map((skill, index) => (
                      <span key={index} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Key Achievements</h3>
                  <ul className="modal-outcomes-list">
                    {selectedEducation.achievements.map(
                      (achievement, index) => (
                        <li key={index} className="modal-outcome-item">
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <button className="modal-close-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (activeMainTab === 'Skills') {
      const skills = [
        'HTML',
        'Node Js',
        'Data Structures',
        'Bootstrap',
        'Java',
        'AWS Lambda',
        'AWS DynamoDB',
        'AWS Route 53',
        'AWS Cloudfront',
        'AWS CloudWatch',
        'Amazon S3',
        'Amazon EBS',
        'Problem Solving',
        'Mongo DB',
        'SQL',
        'REST APIs',
        'Time Management',
        'Creative',
      ];

      return (
        <div className="skills-section">
          <div
            className="projects-container skills-container"
            key={`skills-${animationKey}`}
          >
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (activeMainTab === 'Competitive Coding') {
      const achievements = [
        {
          title: 'ICPC Regional Contest',
          rank: 'Ranked 43 out of 89 teams',
          competition: 'USA Mid-Center Regional ICPC Contest',
          description:
            'International Collegiate Programming Contest - one of the most prestigious programming competitions worldwide.',
          category: 'Competitive Programming',
          year: '2024',
        },
        {
          title: 'IEEE Xtreme Programming Competition',
          rank: 'Ranked 29 out of 149 teams',
          competition: '18th Annual Global IEEE Xtreme Programming Competition',
          description:
            'Global programming competition organized by IEEE, testing problem-solving and coding skills over 24 hours.',
          category: 'Competitive Programming',
          year: '2024',
        },
        {
          title: 'Innovative India Coding Championship',
          rank: 'Ranked 1700 out of 90,000 participants',
          competition: 'Innovative India Coding Championship (IICC)',
          description:
            'National-level coding competition with massive participation, showcasing problem-solving abilities.',
          category: 'Competitive Programming',
          year: '2024',
        },
      ];

      return (
        <div className="awards-section">
          <div
            className="projects-container awards-container"
            key={`awards-${animationKey}`}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{achievement.title}</h3>

                <div className="award-meta">
                  <p className="award-rank">{achievement.rank}</p>
                  <p className="award-competition">{achievement.competition}</p>
                  <p className="award-category">{achievement.category}</p>
                  <p className="award-year">{achievement.year}</p>
                </div>

                <div className="problem-section">
                  <p className="problem-text">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeMainTab === 'Certifications') {
      const certifications = [
        {
          title: 'CodePath Intermediate Technical Interview Prep',
          issuer: 'CodePath.org',
          issuedDate: 'Spring 2025',
          certificateId: '96679',
          description:
            'Completed comprehensive technical interview preparation program focusing on data structures, algorithms, and coding interview techniques.',
          skills: [
            'Data Structures',
            'Algorithms',
            'Technical Interviews',
            'Problem Solving',
          ],
          category: 'Technical Interview Prep',
          verificationLink: '',
        },
        {
          title: 'AccioWars Coding Contest Certificate',
          issuer: 'AccioJob',
          rank: 'Ranked 1119 out of 11,000+ participants',
          issuedDate: 'July 10, 2022',
          description:
            'Certificate of appreciation for outstanding performance in the AccioWars Coding Contest, demonstrating strong competitive programming skills.',
          skills: [
            'Competitive Programming',
            'Problem Solving',
            'Algorithms',
            'Data Structures',
          ],
          category: 'Competitive Programming',
          verificationLink: '',
        },
        {
          title: 'Google Data Analytics Certificate',
          issuer: 'Google',
          issuedDate: 'July 2, 2025',
          verificationLink: 'https://www.credly.com/go/GYPESI1e',
          description:
            'Completed eight courses covering hands-on, practice-based assessments designed to prepare for introductory-level roles in Data Analytics. Competent in tools including spreadsheets, SQL, Tableau, and R.',
          skills: [
            'Data Analysis',
            'SQL',
            'Tableau',
            'R Programming',
            'Data Visualization',
            'Spreadsheets',
          ],
          category: 'Data Analytics',
        },
      ];

      return (
        <div className="certifications-section">
          <div
            className="projects-container certifications-container"
            key={`certifications-${animationKey}`}
          >
            {certifications.map((certification, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{certification.title}</h3>

                <div className="certification-meta">
                  <p className="certification-issuer">
                    Issued by: {certification.issuer}
                  </p>
                  <p className="certification-date">
                    Issued: {certification.issuedDate}
                  </p>
                  {certification.rank && (
                    <p className="certification-rank">{certification.rank}</p>
                  )}
                  {certification.certificateId && (
                    <p className="certification-id">
                      Certificate ID: {certification.certificateId}
                    </p>
                  )}
                  <p className="certification-category">
                    {certification.category}
                  </p>
                </div>

                <div className="problem-section">
                  <p className="problem-text">{certification.description}</p>
                </div>

                <div className="certification-skills">
                  <h4 className="skills-label">Skills Gained:</h4>
                  <div className="tech-tags">
                    {certification.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="certification-actions">
                  <a
                    href={certification.verificationLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verification-link-btn"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="placeholder-content">
        <h3>Coming Soon</h3>
        <p>{activeMainTab} section is under development</p>
      </div>
    );
  };

  return (
    <div className="container padding-container">
      {/* Desktop Navigation */}
      <ul className="main-tab-container desktop-nav">
        {mainTabs.map((tab, index) => (
          <li
            key={index}
            className={`main-tab ${
              activeMainTab === tab ? 'active-main-tab' : ''
            }`}
            onClick={() => toggleMainTab(tab)}
          >
            <p className="main-tab-text">{tab}</p>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="current-tab">{activeMainTab}</span>
          <svg
            className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {mainTabs.map((tab, index) => (
              <button
                key={index}
                className={`mobile-menu-item ${
                  activeMainTab === tab ? 'active' : ''
                }`}
                onClick={() => toggleMainTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="content-container">{renderContent()}</div>
    </div>
  );
};

export default ProjectsSection;
