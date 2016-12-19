import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import './App.css';

import Header from '../Header/Header';
import Card from '../Card/Card';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

const about = `
  # About me

  My name is Caleb Sharp, I'm 14, and I'm a developer. Creating software is
  a very dear passion of mine. I also enjoy skiing and mountain biking, and work
  best with a cup of coffee (or maybe 5) in front of me.
  Some people might paint pictures, or take photographs, but I have found that
  my best art is created on the blank canvas of technology. I'm well versed in many
  programming languages, such as JavaScript, Ruby, and HTML/CSS. They are my brushes.
  JavaScript is probably my most used, as I make lots of things that are web-based.
  Of the many JS libraries out there, I've been using the dynamic duo of React+Redux
  a lot recently. Using these tools I am able to create interactive and intuitive
  user experiences, as well as deliver an aesthetically pleasing design.

  ------------------------------------------------------------------------------

  #### TL;DR
  I like developing software with JS and have an addiction to coffee.
`;

const portfolio = `
  # What I've made

  * As of right now, this site is the only (real) thing that I have to prove my skills with.
    It was made from scratch with React.
    If would be great if you gave me a chance to show you what I can do! You can
    send any inquiries to my email at [calebissharp@gmail.com](mailto:calebissharp@gmail.com)
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__content">
          <Container>
            <Card>
              <Markdown source={about} />
            </Card>
            <Card>
              <Markdown source={portfolio} />
            </Card>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
