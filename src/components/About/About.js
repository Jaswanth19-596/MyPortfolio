import React from "react";
import Skills from "../Skills/Skills";
import styles from "./About.module.css";

const About = () => {
  return (
    <section>
      <div className={`container ${styles["about-me-container"]}`}>
        <h3
          className={`heading-tertiary u-center-text u-margin-bottom-large ${styles.heading}`}
        >
          About Me
        </h3>
        <div className={styles["grid-left-container"]}>
          <h4 className="heading-fourth u-margin-bottom-medium">
            Get to know me
          </h4>
          <p className={styles.para}>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p className={styles.para}>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
          </p>
          <p className={styles.para}>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className={styles["grid-right-container"]}>
          <h4 className="heading-fourth u-margin-bottom-medium">My Skills</h4>
          <div className={styles["skills-container"]}>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
