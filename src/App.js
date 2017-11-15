import React, { Component } from 'react';
import './styles/App.css';
import {connect} from 'react-redux';
import * as actions from './state/actions';
import { Route, withRouter } from 'react-router-dom';

import Title from './components/Title';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Other from './components/Other';
import Footer from './components/Footer';

import * as constants from './config/constants';
import profile from './config/profile';

const {ROUTES} = constants;

export class App extends Component {
  onClick = e => {
    e.stopPropagation();
    if (this.props.showMenuOptions) {
      this.props.dispatch(actions.hideMenu());
    }
    else if (this.props.showingPage) {
      this.props.dispatch(actions.setHeaderText(profile.landing.title));
      this.props.dispatch(actions.noSelection());
      this.props.history.push(ROUTES.LANDING);
    }
  }

  render() {
    return (
        <div className="App" onClick={this.onClick}>
          <Title />
          <p style={{
            display: !this.props.showMenuOptions && !this.props.showingPage ? 'block': 'none',
            marginTop: '-20px',
            color: 'aqua'
          }}>touch above to open commands</p>
          { this.props.showMenuOptions ? <Menu /> : '' }
          <Route exact path={ROUTES.ABOUT} component={About}/>
          <Route exact path={ROUTES.PROJECTS} component={Projects}/>
          <Route exact path={ROUTES.CONTACT} component={Contact}/>
          <Route exact path={ROUTES.OTHER} component={Other}/>
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

export default withRouter(connect(mapStateToProps)(App));
