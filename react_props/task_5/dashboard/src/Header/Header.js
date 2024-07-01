import React from 'react';
import './Header.css';
import logo from './holberton-logo.jpg'

function Header() {
  return (
    <header className="Header">
      {/* Header content goes here */}
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
