import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

const Footer = () => (
  <footer className="fixed-bottom bg-dark" id="footer">
    <div className="flex-row">
      <div>
        <p>&copy; Mesi 2022</p>
      </div>
      <div className="social flex-row">
        <p><a href="https://www.facebook.com/emese.molnar.397/" aria-label="fb"><FontAwesomeIcon icon={faFacebookF} /></a></p>
        <p><a href="https://github.com/Mesi21" aria-label="gh"><FontAwesomeIcon icon={faGithub} /></a></p>
        <p><a href="https://www.linkedin.com/in/emesemesimolnar/" aria-label="LNk"><FontAwesomeIcon icon={faLinkedin} /></a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
