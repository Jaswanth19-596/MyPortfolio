import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/jaswanthmadha/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/Jaswanth19-596',
      label: 'GitHub'
    },
    {
      icon: <MdEmail />,
      href: 'mailto:madhajaswanth@gmail.com',
      label: 'Email'
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/jaswanth__m',
      label: 'Instagram'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider}></div>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} Jaswanth Mada. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with ❤️ using React & Modern Web Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
