import React, { PropTypes } from 'react';
import './FooterIcon.css';

const FooterIcon = ({ url, icon }) => (
  <div className="FooterIcon">
    <a href={url} target="_blank" className="FooterIcon__link">
      <span className={`fa fa-${icon} FooterIcon__link__icon`}></span>
    </a>
  </div>
);

FooterIcon.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string,
};

export default FooterIcon;
