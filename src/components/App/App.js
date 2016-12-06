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
        <div className="App__content">
          <Grid>
            <Row>
              <Col sm={6}>
                <Card title="About me" />
              </Col>
              <Col sm={6}>
                <Card title="What I can do" />
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
