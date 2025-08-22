import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';

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
      {/* <div className={styles['brand-container']}>
        <p className={styles['logo-container']}>MJ</p>
        <div className={styles.title}>
          <p className={styles['title--main']}>Mada Jaswanth</p>
          <p className={styles['title--sub']}>Software Developer</p>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
