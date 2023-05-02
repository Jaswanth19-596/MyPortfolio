import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${styles.footer}`}>
        <div className={styles["footer-text"]}>
          <p className={styles.thanks}>Thanks for visiting!</p>
          <p className={styles.copyright}>
            By Jaswanth - Founder and CEO of nothing
          </p>
        </div>
        <ul className={styles.iconlist}>
          <li>
            <FaFacebook className={styles.icon} />
          </li>
          <li>
            <FaInstagram className={styles.icon} />
          </li>
          <li>
            <FaMailBulk className={styles.icon} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
