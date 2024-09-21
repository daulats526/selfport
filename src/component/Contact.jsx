import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/thedaulatsingh?igsh=MTRhdHd2NHE3c2k5OQ==" target="_blank" className="items insta">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/daulatsinghchauhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items linked">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items ">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.github.com/daulats526/" target="_blank" className="items  github ">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:daulats526@gmail.com"
            target="_blank"
            className="items mail"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;