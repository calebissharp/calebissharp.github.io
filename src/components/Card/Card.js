import React, { Component, PropTypes } from 'react';
import './Card.css';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="Card">
        <div className="Card__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
