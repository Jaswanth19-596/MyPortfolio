import React from "react";
import styles from "./SectionUniversity.module.css";

const SectionUniversity = (props) => {
  return (
    <section>
      <div className={`container ${styles["section-universities"]}`}>
        <h3 className={styles.paragraph}>
          Marella Dhuvya is a Computer Science student attending Tirumala
          Engineering College, Narasaraopet
        </h3>
        <ul className={styles["navigation-list"]}>
          <li>Shouting</li>
          <li>Beating</li>
          <li>Sleeping</li>
          <li>Eating</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionUniversity;
