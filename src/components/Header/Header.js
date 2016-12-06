import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header__title">Caleb Sharp</h1>
        <p className="Header__subtitle">Programmer, thinker, and all-around Potato&trade;</p>
      </div>
    );
  }
}

export default Header;
