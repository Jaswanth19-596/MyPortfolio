import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = [
  "html",
  "css",
  "javascript",
  "React",
  "Node js",
  "Express Js",
  "Problem solving",
  "Data structures",
  "Java",
  "Responsive Design",
];

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