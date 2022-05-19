import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      path: '/home',
      name: 'Countries',
    },
    {
      id: 2,
      path: '/details',
      name: 'DETAILS',
    },
  ];

  return (
    <nav className="navbar fixed-top navbar-expand-lg} navbar-dark bg-primary">
      <h1 id="logo" className="navbar-brand">Countries of Europe</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="#navToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navToggler">
        <ul id="menu" className="navbar-nav mr-auto mt-2 mt-lg-0">
          {menuLinks.map((item) => (
            <li key={item.id} className="nav-item">
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
