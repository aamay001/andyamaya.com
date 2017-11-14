import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Resume.css';
import {RESUME} from '../config/constants';
import * as actions from '../state/actions';

export class Resume extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'resume\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('{resume}'));
    }, 2000);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render() {
    return (
      <div className="resume-page"
        style={{
          display: this.props.showPage[RESUME] && this.state.okayToRender ? 'block' : 'none'
        }}>
        RESUME PAGE
      </div>
    )
  };
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Resume);