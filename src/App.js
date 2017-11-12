import React, { Component } from 'react';
import './App.css';

import LandingMenu from './components/LandingMenu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingMenu />
        <Footer />
      </div>
    );
  }
}

export default App;
