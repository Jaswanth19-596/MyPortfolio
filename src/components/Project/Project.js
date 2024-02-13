import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";
import { FaExternalLinkSquareAlt, FaGithubSquare } from "react-icons/fa";

const Project = (props) => {
  return (
    <div className={`${styles["row"]} u-margin-bottom-large`}>
      <div className={`${styles["image-container"]} ${styles["card"]}`}>
        <div className={`${styles["card-side"]} ${styles["card-front"]}`}>
          <img
            src={props.image}
            alt="project"
            className={styles["project-image"]}
          />
        </div>

        <div className={`${styles["card-side"]} ${styles["card-back"]}`}>
          <div
            style={{
              backgroundImage: `linear-gradient(${props.color},${props.color})`,
            }}
            className={styles["card-back-inside"]}
          >
            <Link to={props.github} className={styles["visit"]} target="_blank">
              <FaGithubSquare className={styles["github-icon"]} />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${props.first && styles.first} ${styles["text-container"]}`}
      >
        <p className={styles["project-title"]} style={{ color: props.color }}>
          {props.title}
        </p>
        <p className={styles["project-description"]}>{props.description.slice(0,250)}...</p>
        <Link
          style={{ color: `${props.color}` }}
          to={props.project}
          className={styles["link"]}
          target="_blank"
        >
          View Website
        </Link>
      </div>
    </div>
  );
};

export default Project;
