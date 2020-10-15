import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header>
      <button onClick={onLogout}>Logout</button>
      <h1>Business Card Maker</h1>
    </header>
  );
};

export default Header;
