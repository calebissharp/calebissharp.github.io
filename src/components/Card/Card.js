import React, { Component, PropTypes } from 'react';
import './Card.css';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="Card">
        <h3 className="Card__title">{this.props.title}</h3>
      </div>
    );
  }
}

export default Card;
