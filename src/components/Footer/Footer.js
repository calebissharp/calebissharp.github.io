import React from 'react';
import './Footer.css';

import FooterIcon from '../FooterIcon/FooterIcon';

const Footer = () => (
  <div className="Footer">
    <ul className="link-list">
      <li className="link-list__item">
        <FooterIcon url="https://github.com/calebissharp" icon="github" />
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

export default Footer;
