import React, { Component } from 'react';
import './styles/App.css';
import {connect} from 'react-redux';
import * as actions from './state/actions';

import Title from './components/Title';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import * as constants from './config/constants';
import profile from './config/profile';

export class App extends Component {
  onClick = e => {
    e.stopPropagation();
    if (this.props.showingPage) {
      this.props.dispatch(actions.setHeaderText(profile.landing.title));
      this.props.dispatch(actions.noSelection());
    }
  }

  render() {
    return (
        <div className="App" onClick={this.onClick}>
          <Title />
          <p style={{
            display: !this.props.showMenuOptions && !this.props.showingPage ? 'block': 'none',
            marginTop: '-20px'
          }}>touch above to open commands</p>
          { this.props.showMenuOptions ? <Menu /> : '' }
          { this.props.showPage[constants.ABOUT] ? <About /> :
            this.props.showPage[constants.PROJECTS] ? <Projects /> :
            this.props.showPage[constants.CONTACT] ? <Contact /> :
            this.props.showPage[constants.RESUME] ? <Resume /> : '' }
          <Footer />
        </div>
    );
  }
}


const mapStateToProps = state => ({
  showingPage: state.showingPage,
  showPage: state.showPage,
  showMenuOptions: state.showMenuOptions
});

export default connect(mapStateToProps)(App);
