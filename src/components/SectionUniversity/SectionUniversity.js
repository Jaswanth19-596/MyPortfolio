import React from "react";
import styles from "./SectionUniversity.module.css";

const SectionUniversity = (props) => {
  return (
    <section>
      <div className={`container ${styles["section-universities"]}`}>
        <h3 className={styles.paragraph}>
          Mada Jaswanth is a Computer Science student attending Purdue
          University, Northwest.
        </h3>
        <ul className={styles["navigation-list"]}>
          <li>Coding</li>
          <li>Gaming</li>
          <li>Trees</li>
          <li>Animals</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionUniversity;
