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
        <div className={`${styles.hamburger} ${showNav ? styles.hamburgerOpen : ''}`}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
      </button>

      <div className={`${styles.mobileOverlay} ${showNav ? styles.overlayOpen : ''}`} onClick={toggleNav}></div>
      
      <nav className={`${styles.mobileNav} ${showNav ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavContent}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.navBrand}>
              <div className={styles.navLogo}>J</div>
              <div className={styles.navTitle}>Navigation</div>
            </div>
          </div>

          <div className={styles.mobileNavBody}>
            <ul className={styles.mobileNavigationList}>
              <li className={styles.mobileNavItem}>
                <NavLink to="/" onClick={toggleNav} className={styles.mobileNavLink}>
                  <div className={styles.linkWrapper}>
                    <div className={styles.linkIcon}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <span className={styles.linkText}>Home</span>
                  </div>
                  <div className={styles.linkArrow}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </NavLink>
              </li>
              <li className={styles.mobileNavItem}>
                <NavLink to="/projects" onClick={toggleNav} className={styles.mobileNavLink}>
                  <div className={styles.linkWrapper}>
                    <div className={styles.linkIcon}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                      </svg>
                    </div>
                    <span className={styles.linkText}>Projects</span>
                  </div>
                  <div className={styles.linkArrow}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </NavLink>
              </li>
              <li className={styles.mobileNavItem}>
                <NavLink to="/contact" onClick={toggleNav} className={styles.mobileNavLink}>
                  <div className={styles.linkWrapper}>
                    <div className={styles.linkIcon}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className={styles.linkText}>Contact</span>
                  </div>
                  <div className={styles.linkArrow}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.mobileNavFooter}>
            <div className={styles.downloadSection}>
              <button 
                className={styles.mobileDownloadBtn}
                onClick={() => {
                  const resumeUrl = '/resume.pdf';
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Jaswanth_Mada_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  toggleNav();
                }}
              >
                <div className={styles.downloadIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                </div>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

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
