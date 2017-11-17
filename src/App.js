import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import Title from './components/Title';
import Menu from './components/Menu';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Other from './routes/Other';
import Footer from './components/Footer';

import * as constants from './config/constants';
import './styles/App.css';

const {ROUTES} = constants;

export class App extends Component {
  render() {
    return (
        <div className="App"
          onTouchStart={e => e.stopPropagation()}
          onTouchEnd={e => e.stopPropagation()}>
          <Title />
          <p style={{
            display: !this.props.showMenuOptions && !this.props.showingPage ? 'block': 'none',
            marginTop: '-20px',
            color: 'aqua'
          }}>touch above to open commands</p>
          { this.props.showMenuOptions ? <Menu /> : '' }
          <Switch>
          <Route exact path={ROUTES.ABOUT} component={About}/>
          <Route exact path={ROUTES.PROJECTS} component={Projects}/>
          <Route exact path={ROUTES.CONTACT} component={Contact}/>
          <Route exact path={ROUTES.OTHER} component={Other}/>
          <Route component={() => ''} />
          </Switch>
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
