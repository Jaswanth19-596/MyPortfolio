import styles from "./Skill.module.css";

const Skill = (props) => {
  return <div className={styles.skill}>{props.skill}</div>;
};

export default Skill;
