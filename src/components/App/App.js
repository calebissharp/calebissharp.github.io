import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import logo from '../../logo.svg';
import './App.css';

import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__content"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
