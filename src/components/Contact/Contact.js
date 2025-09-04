import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact2.css';


const openGmail = ()=>{
  const email = "madhajaswanth@gmail.com";
  const gmailComposeUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + encodeURIComponent(email)
  window.open(gmailComposeUrl, '_blank');
}

const openDiscord = ()=>{
  const discordUsername = "jaswanth#1462";
  var discordComposeUrl = 'https://discord.com/channels/@me/' + encodeURIComponent(discordUsername);
  window.open(discordComposeUrl, '_blank')
}

const openLinkedin = ()=>{
  const url = 'https://www.linkedin.com/in/jaswanthmadha/';
  window.open(url, '_blank')
}

const openWhatsApp = ()=> {
  var phoneNumber = '2194665564';
  var whatsappUrl = 'https://wa.me/' + phoneNumber;
  window.open(whatsappUrl, '_blank');
}

const socialMediaHandles = [
  {
    icon: <MdEmail className="icon" />,
    text: `Email me at : madhajaswanth@gmail.com or Click`,
    url: '',
    onClick : openGmail
  },
  {
    icon: <FaDiscord className="icon" />,
    text: `Discord me at : jaswanth1462 or Click`,
    url: '',
    onClick : openDiscord
  },
  {
    icon: <FaInstagram className="icon" />,
    text: 'DM me at : Jaswanth__m or Click',
    url: '',
  },
  {
    icon: <FaLinkedin className="icon" />,
    text: `Ping me at : jaswanthmadha or Click`,
    url: 'https://www.linkedin.com/in/jaswanthmadha/',
    onClick : openLinkedin
  },
  {
    icon: <FaWhatsapp className="icon" />,
    text: `Text me at : +1 219 466 5564 or Click`,
    onClick : openWhatsApp
  },
];

const Contact = () => {
  const [active, setActive] = useState(0);

  const changeActive = () => {
    setActive((active + 1) % 5);
  };

  useEffect(() => {
    setTimeout(() => {
      changeActive();
    }, 1000);
  }, [active]);


  return (
    <div className="container">
      <div className="contact-me-text-container">
        <h3 className="contact-me-heading">Let's Talk</h3>
        <p className="contact-me-description">
          It's crazy how we stopped using Pigeons to communicate. We can also do that, but I would prefer one of the following:
        </p>

        <div className="social-media-container">
          {socialMediaHandles.map((social, index) => {
            return (
              <div
                key={index}
                className={`social-media ${active === index ? 'active' : ''}`}
                onClick={social.onClick}
              >
                <div className="social-media-icon-container">
                  {social.icon}
                </div>
                <p className="social-media-text">{social.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
