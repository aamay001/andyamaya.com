import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Title from './components/Title';
import Menu from './components/Menu';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Other from './routes/Other';
import Footer from './components/Footer';

import * as constants from './config/constants';
import * as actions from './state/actions';
import profile from './config/profile';
import './styles/App.css';

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
