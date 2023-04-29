import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = ["html", "css", "php", "Data structures", "Java", "C"];

const Skills = () => {
  return (
    <ul className={styles["skills-list"]}>
      {skills.map((skill) => (
        <Skill skill={skill} key={skill} />
      ))}
    </ul>
  );
};

export default Skills;
