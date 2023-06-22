import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = [
  "html",
  "css",
  "Javascript",
  "React Js",
  "Node Js",
  "Data structures",
  "Bootstrap",
   "Java",
  "Problem Solving",
  "Mongo DB",
  "SQL",
  "REST API's",
  "Python",
  "Git",
  "Github",
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
