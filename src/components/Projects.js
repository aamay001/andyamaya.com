import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Projects.css';
import * as actions from '../state/actions';
import {PROJECTS} from '../config/constants';

export class Projects extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'projects\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('[projects]'));
    }, 2000);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render () {
    return (
      <div className="projects-page"
      style={{
        display: this.props.showPage[PROJECTS] && this.state.okayToRender ? 'block' : 'none',
      }}>
      THE PROJECTS PAGE
    </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Projects);