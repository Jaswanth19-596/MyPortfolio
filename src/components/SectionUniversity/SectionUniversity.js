import React, { useEffect, useState } from 'react';
import styles from './SectionUniversity.css';

const SectionUniversity = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActiveTab((activeTab + 1) % 5);
    }, 1000);
  }, [activeTab]);

  return (
    <section>
      <div className={`container section-universities`}>
        <h3 className={'paragraph'}>
          AI/ML Engineer and Full-Stack Developer skilled in Python, Java,
          JavaScript, and AWS. Experienced in deploying ML models and building
          scalable web apps to deliver impactful, data-driven solutions.
        </h3>
        <ul className={'navigation-list'}>
          <li className={`${activeTab === 1 ? 'active-tab' : ''}`}>Coding</li>
          <li className={`${activeTab === 2 ? 'active-tab' : ''}`}>Gaming</li>
          <li className={`${activeTab === 3 ? 'active-tab' : ''}`}>Trees</li>
          <li className={`${activeTab === 4 ? 'active-tab' : ''}`}>Animals</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionUniversity;
