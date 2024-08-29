// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import './todo.css';
import imghead from './images/logo.png';

function Header({ toggleSidebar, toggleTheme }) {
  return (
    <div className="con">
      <header className="header">
        <div className="header-left">
          {/* Hamburger (three-line) menu icon */}
          <FontAwesomeIcon
            icon={faBars}
            className="menu-icon"
            onClick={toggleSidebar}
            role="button"
            aria-label="Toggle sidebar"
            style={{ cursor: 'pointer' }}
          />
          <img src={imghead} alt="Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
          <FontAwesomeIcon icon={faThLarge} style={{ cursor: 'pointer' }} />
          {/* Check if this is clickable */}
          <FontAwesomeIcon
            icon={faMoon}
            className="menu-icon"
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle sidebar"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
