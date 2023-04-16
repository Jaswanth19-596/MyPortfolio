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
            <Link to="" className={styles["visit"]}>
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
        <p className={styles["project-description"]}>
          Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally
        </p>
        <Link
          style={{ color: `${props.color}` }}
          to=""
          className={styles["link"]}
        >
          View Website
        </Link>
      </div>
    </div>
  );
};

export default Project;
