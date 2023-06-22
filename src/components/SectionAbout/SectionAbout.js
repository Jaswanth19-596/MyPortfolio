import React from "react";
import styles from "./SectionAbout.module.css";
// import croppedImage from "./../../images/cropped-image.jpg";
import image from "./../../assests/images/profile1-min.jpg";

const SectionAbout = (props) => {
  return (
    <section className="section-about">
      <div className={`container ${styles["about-container"]}`}>
        <div className={styles["image-container"]}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles["text-container"]}>
          <p className={styles["about-me-text"]}>About Me</p>
          <h1 className={styles["about-me-heading"]}>
            I'm <span> Jaswanth</span> , A Software Developer and Gamer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
