import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actions from '../state/actions';
import {ROUTES} from '../config/constants';
import profile from '../config/profile'
import '../styles/Menu.css';

const {landing} = profile;

export class Menu extends Component {

  onMenuOptionClicked = e => {
    e.stopPropagation();
    const index = e.currentTarget.value;
    if ( index >= 0 ) {
      const selection = parseInt(index, 10);
      this.props.dispatch(actions.menuSelection(selection));
      this.props.history.push(Object.keys(ROUTES)[selection].toLocaleLowerCase());
    }
  }

  render() {
    const menuOptions = landing.menuOptions.map( (option, index) =>
      <li key={index}
        value={index}
        className="menu-option"
        onClick={this.onMenuOptionClicked}
        onTouchStart={e => e.stopPropagation()}
        onTouchEnd={e => e.stopPropagation()}
      >fetch(<span className="literal">'{option}'</span>);</li>
    );
    return (
      <div className="collapsing-menu">
        <ul>
          {menuOptions}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showingPage: state.showingPage,
  headerText: state.headerText,
});

export default connect(mapStateToProps)(withRouter(Menu));