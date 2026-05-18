import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

const openGmail = () => {
  const email = 'madhajaswanth@gmail.com';
  const gmailComposeUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + encodeURIComponent(email);
  window.open(gmailComposeUrl, '_blank');
};

const openDiscord = () => {
  const discordUsername = 'jaswanth#1462';
  const discordComposeUrl = 'https://discord.com/channels/@me/' + encodeURIComponent(discordUsername);
  window.open(discordComposeUrl, '_blank');
};

const openLinkedin = () => {
  const url = 'https://www.linkedin.com/in/jaswanthmadha/';
  window.open(url, '_blank');
};

const openWhatsApp = () => {
  const phoneNumber = '2194665564';
  const whatsappUrl = 'https://wa.me/' + phoneNumber;
  window.open(whatsappUrl, '_blank');
};

const socialMediaHandles = [
  {
    icon: <MdEmail className={styles.icon} />,
    text: 'Email me at : madhajaswanth@gmail.com or Click',
    onClick: openGmail,
  },
  {
    icon: <FaDiscord className={styles.icon} />,
    text: 'Discord me at : jaswanth1462 or Click',
    onClick: openDiscord,
  },
  {
    icon: <FaInstagram className={styles.icon} />,
    text: 'DM me at : Jaswanth__m or Click',
  },
  {
    icon: <FaLinkedin className={styles.icon} />,
    text: 'Ping me at : jaswanthmadha or Click',
    onClick: openLinkedin,
  },
  {
    icon: <FaWhatsapp className={styles.icon} />,
    text: 'Text me at : +1 219 466 5564 or Click',
    onClick: openWhatsApp,
  },
];

const Contact = () => {
  return (
    <div className="container">
      <div className={styles.contactMeTextContainer}>
        <h3 className={styles.contactMeHeading}>GET IN TOUCH</h3>
        <p className={styles.contactMeDescription}>
          DROP ME A LINE // HIT ME UP // LET'S RAGE
        </p>

        <div className={styles.socialMediaContainer}>
          {socialMediaHandles.map((social, index) => (
            <div
              key={index}
              className={styles.socialMedia}
              onClick={social.onClick}
            >
              <div className={styles.socialMediaIconContainer}>
                {social.icon}
              </div>
              <p className={styles.socialMediaText}>{social.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
