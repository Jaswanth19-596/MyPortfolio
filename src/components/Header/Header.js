import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { FaGripLines, FaWindowClose } from "react-icons/fa";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header
      className={`container ${styles.header} ${styles.responsive} ${
        showNav && styles.navopen
      }`}
    >
      <div className={styles["brand-container"]}>
        <p className={styles["logo-container"]}>MJ</p>
        <div className={styles.title}>
          <p className={styles["title--main"]}>Mada Jaswanth</p>
          <p className={styles["title--sub"]}>Software Developer</p>
        </div>
      </div>

      <ul className={styles["navigation-list"]}>
        <li>
          <NavLink
            to=""
            onClick={toggleNav}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            onClick={toggleNav}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            onClick={toggleNav}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contact"
            onClick={toggleNav}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            Contact
          </NavLink>
        </li>
        <button className={styles["button"]}>
          <FaWindowClose className={styles["close-icon"]} onClick={toggleNav} />
        </button>
      </ul>
      <FaGripLines className={styles["menu-icon"]} onClick={toggleNav} />
    </header>
  );
};

export default Header;
