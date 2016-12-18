import React, { Component, PropTypes } from 'react';
import './Container.css';

class Container extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.any),
  }

  render() {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    );
  }
}

export default Container;
