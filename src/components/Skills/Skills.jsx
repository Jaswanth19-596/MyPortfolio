import styles from './Skills.module.css';

const Skills = ({ skills, opposite }) => {
  return (
    <ul className={`${styles.skills} ${opposite ? styles.opposite : ''}`}>
      {skills.map((skill) => (
        <li key={skill} className={styles.skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
