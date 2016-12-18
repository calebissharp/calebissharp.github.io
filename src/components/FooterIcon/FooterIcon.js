import React, { Component } from 'react';
import './FooterIcon.css';

class FooterIcon extends Component {
  render() {
    return (
      <div className="FooterIcon">
        <a href={this.props.url} target="_blank" className="FooterIcon__link">
          <span className={`fa fa-${this.props.icon} FooterIcon__link__icon`}></span>
        </a>
      </div>
    );
  }
}

export default FooterIcon;
