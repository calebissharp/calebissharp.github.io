import React, { Component } from 'react';
import './Footer.css';

import logo from '../../quantum-no-text-small-grayscale.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="link-list">
          <li className="link-list__item">
            <span className="fa fa-github link-list__item__icon"></span>
            <a href="https://github.com/epicsharp" className="link-list__item__link">epicsharp</a>
          </li>
          <li className="link-list__item">
            <span className="fa fa-twitter link-list__item__icon"></span>
            <a href="https://twitter.com/calebissharp" className="link-list__item__link">@calebissharp</a>
          </li>
        </ul>
        <img className="Footer__logo" src={logo} />
      </div>
    );
  }
}

export default Footer;
