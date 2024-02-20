import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import React, { useState, useRef, useEffect } from 'react';
import LoadingSpinner from './../LoadingSpinner/LoadingSpinner';
import ContactMeImage from './../../assests/images/contact-me-final.png';
import { FcApproval, FcCancel } from 'react-icons/fc';
import { Link } from 'react-router-dom';
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
  // Replace 'PHONE_NUMBER' with the phone number you want to start the chat with (including country code)
  var phoneNumber = '2194665564';
  
  // Construct the WhatsApp URL
  var whatsappUrl = 'https://wa.me/' + phoneNumber;

  // Open WhatsApp in a new tab
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
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isMessageValid, setisMessageValid] = useState(false);

  const [isNameVisited, setIsNameVisited] = useState(false);
  const [isEmailVisited, setIsEmailVisited] = useState(false);
  const [isMessageVisited, setIsMessageVisited] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const [active, setActive] = useState(0);

  const changeActive = () => {
    setActive((active + 1) % 5);
  };

  useEffect(() => {
    setTimeout(() => {
      changeActive();
    }, 1000);
  }, [active]);

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    setIsLoading(true);
    console.log(e);
    emailjs
      .sendForm(
        'service_zfvriac',
        'template_d9sebc8',
        form.current,
        'RFMf-l38qADeDnHLi'
      )
      .then(
        (result) => {
          setIsLoading(false);
          setEmailSent(true);
        },
        (error) => {
          setError(true);
          setIsLoading(false);
        }
      );
  }

  const nameBlurHandler = (e) => {
    if (e.target.value.length >= 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
    setIsNameVisited(true);
  };

  const nameChangeHandler = (e) => {
    nameBlurHandler(e);
  };

  const emailBlurHandler = (e) => {
    if (e.target.value.length >= 12 && e.target.value.endsWith('@gmail.com')) {
      setisEmailValid(true);
    } else {
      setisEmailValid(false);
    }
    setIsEmailVisited(true);
  };

  const emailChangeHandler = (e) => {
    emailBlurHandler(e);
  };

  const messageBlurHandler = (e) => {
    if (e.target.value.split(' ').length >= 2) {
      setisMessageValid(true);
    } else {
      setisMessageValid(false);
    }
    setIsMessageVisited(true);
  };

  const messageChangeHandler = (e) => {
    messageBlurHandler(e);
  };

  return (
    <div className="container">
      <div className="top-container">
        <div className="contact-me-text-container">
          <h3 className="contact-me-heading">Let's Talk</h3>
          <p className="contact-me-description">
            It's crazy how we stopped using Pigeons to communicate. We can also do that, but I would prefer one of the following:
          </p>

          <div className="social-media-container">
            {socialMediaHandles.map((social, index) => {
              return (
                <div
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

        <div className="contact-me-image-container">
          <img
            className="contact-me-image"
            src={ContactMeImage}
            alt="contact-me"
          />
        </div>
      </div>

      {error && (
        <div className={styles['new-container']}>
          <p className={styles['email-fail']}>
            Email cannot be sent due to some issue
            <FcCancel />
          </p>
          <p className={styles['email-fail-sub']}>
            You can contact me at madhajaswanth@gmail.com
          </p>
        </div>
      )}

      {!error && isLoading && (
        <div className={styles['new-container']}>
          {!emailSent && <LoadingSpinner />}
        </div>
      )}

      {!error && !isLoading && emailSent && (
        <div className={styles['new-container']}>
          <p className={styles['email-success']}>
            Email Received Successfully <FcApproval />
          </p>
          <p className={styles['email-success-sub']}>
            I will try to get back to you as soon as possible
          </p>
        </div>
      )}

      {!error && !isLoading && !emailSent && (
        <form action="" ref={form} className={styles.form} onSubmit={sendEmail}>
          <h3
            className={`${styles.heading} heading-tertiary u-center-text u-margin-bottom-medium`}
          >
            Contact
          </h3>
          <p className={`u-center-text ${styles['para']}`}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>

          <div className={styles['input__group']}>
            <label htmlFor="fullname" className={styles.label}>
              FullName
            </label>
            <input
              type="text"
              id="fullname"
              className={styles.input}
              name="fullname"
              placeholder="Fullname"
              onBlur={nameBlurHandler}
              onChange={nameChangeHandler}
            />
            {!isNameValid && isNameVisited && (
              <p className={styles.invalidText}>*invalid name</p>
            )}
          </div>
          <div className={styles['input__group']}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              name="email"
              placeholder="Email"
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
            />
            {!isEmailValid && isEmailVisited && (
              <p className={styles.invalidText}>*invalid email</p>
            )}
          </div>
          <div className={styles['input__group']}>
            <label htmlFor="fullname" className={`${styles.label}`}>
              Message
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="8"
              className={styles.textarea}
              onBlur={messageBlurHandler}
              onChange={messageChangeHandler}
            ></textarea>
            {!isMessageValid && isMessageVisited && (
              <p className={styles.invalidText}>
                *Enter a message of atleast 2 words
              </p>
            )}
          </div>
          <div className="button-container">
            <button
              className={styles.button}
              type="submit"
              disabled={!isNameValid || !isEmailValid || !isMessageValid}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
