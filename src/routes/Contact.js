import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import {CONTACT} from '../config/constants';
import profile from '../config/profile';
import '../styles/Contact.css';

const {contact} = profile;

export class Contact extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'contact\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.menuSelection(3))
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('{contact}'));
    }, 1500);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render() {
    return (
      <div className="contact-page"
        onClick={e => e.stopPropagation() }
        style={{
          display: this.props.showPage[CONTACT] && this.state.okayToRender ? 'block' : 'none'
        }}>
        <h2><span className="const">const</span> contact = {'{'}</h2>
        <p><span className="prop">message</span>: <span className="literal">'{contact.message}'</span>,</p>
        <p><span className="func">email</span>: <span className="literal"><a href={`mailto:${contact.email}`} >() <span className="arrow">=></span> {contact.email}</a></span>,</p>
        <p><span className="func">linkedIn</span>: <span className="literal"><a href={contact.linkedIn} target="_blank">() <span className="arrow">=></span> {contact.linkedIn}</a></span>,</p>
        <p><span className="func">gitHub</span>: <span className="literal"><a href={contact.gitHub} target="_blank">() <span className="arrow">=></span> {contact.gitHub}</a></span>,</p>
        <p><span className="func">twitter</span>: <span className="literal"><a href={contact.twitter} target="_blank">() <span className="arrow">=></span> {contact.twitter}</a></span>,</p>
        <p><span className="func">instagram</span>: <span className="literal"><a href={contact.instagram} target="_blank">() <span className="arrow">=></span> {contact.instagram}</a></span></p>
      <h2>{'};'}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Contact);