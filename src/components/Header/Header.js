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
      className={`${styles.header} ${showNav && styles.navopen}`}
    >
      <div className={styles.brandContainer}>
        <div className={styles.logoContainer}>
          J
        </div>
        <div>
          <div className={styles.titleMain}>Jaswanth</div>
          <div className={styles.titleSub}>PORTFOLIO</div>
        </div>
      </div>

      <nav className={styles.desktopNav}>
        <ul className={styles.navigationList}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button 
        className={styles.mobileMenuButton}
        onClick={toggleNav}
      >
        <span className={showNav ? styles.closeIcon : styles.menuIcon}>
          {showNav ? '✕' : '☰'}
        </span>
      </button>

      {showNav && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavigationList}>
            <li>
              <NavLink to="/" onClick={toggleNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleNav}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleNav}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      )}

      <button className={styles.resumeButton} onClick={() => {
        // You can replace this with your actual resume file path
        const resumeUrl = '/resume.pdf'; // Place your resume.pdf in the public folder
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Jaswanth_Mada_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}>
        Download Resume
      </button>
    </header>
  );
};

export default Header;
