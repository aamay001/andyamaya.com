import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Menu.css';
import * as actions from '../state/actions';
import profile from '../config/profile'
const {landing} = profile;

export class Menu extends Component {
  onMenuOptionClicked = e => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    if (e.currentTarget.nodeName === 'LI' && this.props.showMenuOptions) {
      const selection = parseInt(e.currentTarget.value, 10);
      this.props.dispatch(actions.menuSelection(selection));
    }
  }

  onMouseEnter = e => {
    this.props.dispatch(actions.showMenu());
  }

  onMouseLeave = e => {
    this.props.dispatch(actions.hideMenu());
  }

  render() {
    const menuOptions = landing.menuOptions.map( (option, index) =>
      <li key={index}
        value={index}
        className="menu-option"
        onClick={this.onMenuOptionClicked}
      >{option}</li>
    );

    return (

          <div className="collapsing-menu"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              display: (this.props.showMenuOptions ? 'block' : 'none')
            }}>
            <ul>
              {menuOptions}
            </ul>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  showMenuOptions: state.showMenuOptions,
  showingPage: state.showingPage,
  headerText: state.headerText
});

export default connect(mapStateToProps)(Menu);