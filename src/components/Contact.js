import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Contact.css';
import * as actions from '../state/actions';
import {CONTACT} from '../config/constants';

export class Contact extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'contact\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('{contact}'));
    }, 2000);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render() {
    return (
      <div className="contact-page"
        style={{
          display: this.props.showPage[CONTACT] && this.state.okayToRender ? 'block' : 'none'
        }}>
        CONTACT PAGE
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Contact);