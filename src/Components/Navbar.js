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
    <nav className="navbar flex-row">
      <h1 id="logo" className="blueText">Countries of Europe</h1>
      <ul id="menu" className="navmenu flex-row">
        {menuLinks.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
