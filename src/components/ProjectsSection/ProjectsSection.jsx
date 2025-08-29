import Projects from '../Projects/Projects';
import './ProjectsSection.css';
import NatoursImage from './../../assests/images/Natours-min.JPG';
import RecipeDetailsImage from './../../assests/images/RecipeDetails-min.JPG';
import OmnifoodImage from './../../assests/images/omnifood-min.JPG';
import CartifyImage from './../../assests/images/cartify.PNG';
import CreditCardImage from './../../assests/images/creditcard.jfif';
import EmailSpamImage from './../../assests/images/emailspam.png';
import { useState } from 'react';

const frontendProjects = [
  {
    title: 'AI Virtual Assistant for Customer Support',
    technologies: ['Python', 'NLP', 'APIs', 'Automation'],
    problem:
      'Customers faced delays in resolution due to manual support workflows and inconsistent query handling.',
    approach:
      'Built an intelligent chatbot using NLP libraries and machine learning models to understand customer queries and provide automated responses. Integrated with existing CRM systems through APIs for seamless workflow automation.',
    outcomes: [
      'Reduced customer response time by 70%',
      'Achieved 85% query resolution accuracy',
      'Decreased support staff workload by 40%',
    ],
    githubLink: 'https://github.com/Jaswanth19-596',
    liveLink: 'https://ai-customer-support-demo.herokuapp.com',
  },
  {
    title: 'College Enquiry Chatbot',
    technologies: ['NLP', 'Web', 'Automation'],
    problem:
      'Students and parents struggled to access admission details; staff time was consumed by repetitive queries.',
    approach:
      'Developed a web-based chatbot with natural language processing capabilities to handle common admission queries. Integrated with college database to provide real-time information about courses, fees, and admission requirements.',
    outcomes: [
      'Handled 500+ daily queries automatically',
      'Reduced staff workload by 60%',
      'Improved information accessibility for students',
    ],
    githubLink: 'https://github.com/Jaswanth19-596',
    liveLink: 'https://college-chatbot-demo.netlify.app',
  },
  {
    title: 'Snake Game in C++',
    technologies: ['C++', 'Algorithms', 'Game Loop'],
    problem:
      'Needed a complete game to demonstrate algorithms, data structures, and event-loop design.',
    approach:
      'Implemented the classic Snake game using C++ with focus on efficient algorithms, proper data structure usage, and smooth game loop mechanics. Used object-oriented programming principles for clean code architecture.',
    outcomes: [
      'Demonstrated proficiency in C++ programming',
      'Implemented efficient collision detection algorithms',
      'Created smooth 60 FPS gameplay experience',
    ],
    githubLink: 'https://github.com/Jaswanth19-596',
  },
];

const fullStackProjects = [
  {
    title: '"WeCare" Website (Doctor Appointment System)',
    technologies: ['Full-Stack', 'Web', 'Scheduling'],
    problem:
      'Patients struggled to book appointments efficiently, and healthcare providers needed better patient management systems.',
    approach:
      'Developed a complete healthcare appointment booking system with separate interfaces for patients and healthcare providers. Implemented scheduling algorithms, patient management features, and secure authentication systems.',
    outcomes: [
      'Streamlined appointment booking process',
      'Improved patient management efficiency by 50%',
      'Reduced scheduling conflicts and no-shows',
    ],
    githubLink: 'https://github.com/Jaswanth19-596/Ecommerce-Frontend',
    liveLink: 'https://wecare-appointments.vercel.app',
  },
];

const dataScienceProjects = [
  {
    title: 'Mobile Price Prediction',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Sklearn'],
    problem:
      'Smartphone pricing is complex due to brand premiums (iPhones cost 2-3x more than similar Android devices), regional variations, and rapid price depreciation after launch. This creates challenges for consumers, retailers, and manufacturers in making informed pricing decisions.',
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
];

const cloudProjects = [];

const ProjectsSection = function () {
  const [activeMainTab, setActiveMainTab] = useState('Projects');
  const [activeProjectTab, setActiveProjectTab] = useState(1);
  const [projects, setProjects] = useState(frontendProjects);
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
    'Honors & Awards',
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

                <div className="problem-section">
                  <h4 className="section-label">Problem</h4>
                  <p className="problem-text">{experience.problem}</p>
                </div>

                <button
                  className="view-details-btn"
                  onClick={() => openModal(experience)}
                >
                  View details
                </button>
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
