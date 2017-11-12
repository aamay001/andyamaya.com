import React, {Component} from 'react';
import '../styles/LandingMenu.css';

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

  render() {
    return (
      <div className="portfolio-landing-menu">
        <div className="website-title"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}>
          <h1>
            <span className="first-Name">Andy</span> <span className="last-name">Amaya</span>
          </h1>
          <em>Full Stack JavaScript Developer</em>
        </div>
        <div className="collapsing-menu"
          style={{
            display: this.state.showMenuOptions ? 'block' : 'none'
          }}
        >
          <ul onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}