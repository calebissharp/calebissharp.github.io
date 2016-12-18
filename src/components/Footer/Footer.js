import React, { Component } from 'react';
import './Footer.css';

import logo from '../../quantum-no-text-small-grayscale.svg';
import FooterIcon from '../FooterIcon/FooterIcon';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="link-list">
          <li className="link-list__item">
            <FooterIcon url="https://github.com/epicsharp" icon="github" />
          </li>
          <li className="link-list__item">
            <FooterIcon url="https://twitter.com/calebissharp" icon="twitter" />
          </li>
          <li className="link-list__item">
            <FooterIcon url="https://www.instagram.com/calebissharp" icon="instagram" />
          </li>
          <li className="link-list__item">
            <FooterIcon url="mailto:calebissharp@gmail.com" icon="envelope" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
