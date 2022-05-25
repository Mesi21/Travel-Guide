import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

const Footer = () => (
  <footer className="fixed-bottom bg-dark" id="footer">
    <div>
      <div>
        <p>&copy; Mesi 2022</p>
        <p><FontAwesomeIcon icon={faFacebookF} /></p>
      </div>
    </div>
  </footer>
);

export default Footer;
