import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg} navbar-dark bg-primary">
    <h1 id="logo" className="navbar-brand">Countries of Europe</h1>
    <div className="icon flex-row">
      <FontAwesomeIcon icon={faGear} />
      <FontAwesomeIcon icon={faMicrophone} />
    </div>
  </nav>
);

export default Navbar;
