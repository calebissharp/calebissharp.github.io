import React, { PropTypes } from 'react';
import './Container.css';

const Container = ({ children }) => (
  <div className="Container">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
