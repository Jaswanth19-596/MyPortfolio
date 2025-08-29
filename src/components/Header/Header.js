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
      \
    </header>
  );
};

export default Header;
