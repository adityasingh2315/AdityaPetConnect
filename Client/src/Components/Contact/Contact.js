import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>

        <i className="fa fa-envelope"></i>
        <a className="mail-links" href="mailto:ks3406800@gmail.com">
          ks3406800@gmail.com
        </a>
        <br />
        <a className="mail-links" href="mailto:lci2023003@iiitl.ac.in">
          lci2023003@iiitl.ac.in
        </a>

        <i className="fa fa-linkedin"></i>
        <a
          className="mail-links"
          href="https://www.linkedin.com/in/aditya-singh-46bb5a2a3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          User Name: Aditya Singh
        </a>

        <i className="fa fa-github"></i>
        <a
          className="mail-links"
          href="https://github.com/adityasingh2315"
          target="_blank"
          rel="noopener noreferrer"
        >
          adityasingh2315
        </a>

        <i className="fa fa-instagram"></i>
        <a
          className="mail-links"
          href="https://www.instagram.com/adit47484/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @adit47484
        </a>

        <i className="fa fa-phone"></i>
        <a className="mail-links" href="tel:+917858937955">
          +91 7858937955
        </a>

        <i className="fa fa-whatsapp"></i>
        <a
          className="mail-links"
          href="https://wa.me/917858937955"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on WhatsApp
        </a>
      </div>

      <div className="contactUs-pic">
        <img src={developerPng} alt="Aditya Singh Profile" />
      </div>
    </div>
  );
};

export default Contact;
