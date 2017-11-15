import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import {PROJECTS} from '../config/constants';
import profile from '../config/profile';
import Project from '../components/Project';
import '../styles/Projects.css';

const {projects} = profile;

export class Projects extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'projects\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.menuSelection(1))
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('[...projects]'));
    }, 1500);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render () {
    const projectList = projects.map((proj, index) => {
      return (
        <li key={index}>
          <Project project={proj} />
        </li>
      );
    });

    return (
      <div className="projects-page"
        onClick={e => e.stopPropagation() }
        style={{
          display: this.props.showPage[PROJECTS] && this.state.okayToRender ? 'block' : 'none',
        }}>
        <h2><span className="const">const</span> projects = {'['}</h2>
          <ul>{projectList}</ul>
        <h2>{'];'}</h2>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Projects);