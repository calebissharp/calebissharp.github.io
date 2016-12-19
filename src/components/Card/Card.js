import React, { PropTypes } from 'react';
import './Card.css';

const Card = ({ children }) => (
  <div className="Card">
    <div className="Card__content">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
