import React, {Component} from 'react';
import '../styles/LandingMenu.css';

import profile from '../config/profile';
const {landing} = profile;

export default class LandingMenu extends Component {
  state = {
    showMenuOptions: false,
  }

  onMouseEnter = e => {
    this.setState({
      showMenuOptions: true
    });
  }

  onMouseLeave = e => {
    this.setState({
      showMenuOptions: false
    });
  }

  onMenuOptionClicked = e => {

  }

  render() {
    const menuOptions = landing.menuOptions.map( (option, index) =>
      <li key={index}
        onClick={this.onMenuOptionClicked}
      >{option}</li>
    );

    return (
      <div className="portfolio-landing-menu">
        <div className="website-title"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{
            backgroundColor: this.state.showMenuOptions ? 'black' : undefined
          }}>
          <h1>
            <span className="first-Name">{landing.title.word1}</span> <span className="last-name">{landing.title.word2}</span>
          </h1>
          <em>{landing.phrase}</em>
        </div>
        <div className="collapsing-menu"
          style={{
            display: this.state.showMenuOptions ? 'block' : 'none'
          }}>
          <ul onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
            {menuOptions}
          </ul>
        </div>
      </div>
    )
  }
}