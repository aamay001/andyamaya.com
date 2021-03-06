import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ABOUT, PAGE_DELAY} from '../config/constants';
import * as actions from '../state/actions';
import profile from '../config/profile';
import '../styles/About.css'

const {about} = profile;

export class About extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'about\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.menuSelection(0))
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('{about}'));
    }, PAGE_DELAY);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render() {
    return (
        <div className="about-page" onClick={ e => e.stopPropagation() }
          style={{
            display: this.props.showPage[ABOUT] && this.state.okayToRender ? 'block' : 'none',
          }}>
          <h2><span className="const">const</span> about = {'{'}</h2>
            <p><span className="prop">firstName</span>: <span className="literal">'{about.firstName}'</span>,</p>
            <p><span className="prop">lastName</span>: <span className="literal">'{about.lastName}'</span>,</p>
            <p><span className="prop">location</span>: <span className="literal">'{about.location}'</span>,</p>
            <p><span className="prop">brief</span>: <span className="literal">'{about.brief}'</span></p>
          <h2>{'};'}</h2>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(About);
