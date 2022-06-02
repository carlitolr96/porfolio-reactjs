import React from "react";
import "./footer.css";
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="/#" class="footer__logo">
        CROALS
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/">
          <FiInstagram />
        </a>
        <a href="https://www.twitter.com/">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carlos Rivera. All righs reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
