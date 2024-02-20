import React, { useEffect, useState } from "react";
import styles from "./Footer.css";
import { saveAs } from "file-saver";

const Footer = () => {

  const [applyClass, setApplyClass] = useState(true);

  const saveFile = ()=>{
    const pdfURL = './Jaswanth_Resume.pdf';
    saveAs(pdfURL, 'Jaswanth_Resume.pdf');
  }

  useEffect(()=>{
    setTimeout(()=>{
      setApplyClass(!applyClass)
    }, 1000);
  }, [applyClass])

  console.log(applyClass)

  return (
    <footer>
      <div className={`container footer`}>
        <div className={`footer-text`}>
          <p className={`thanks`}>Thanks for visiting!</p>
        </div>
        <div>
          <button className={`downloadbutton ${applyClass ? 'fadeout-class' : ''}`} onClick={saveFile}>Download Resume</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
