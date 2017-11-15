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
    return (
      <div className="projects-page"
        onClick={e => e.stopPropagation() }
        style={{
          display: this.props.showPage[PROJECTS] && this.state.okayToRender ? 'block' : 'none',
        }}>
        <h2><span className="const">const</span> projects = {'['}</h2>
        <a href="https://stackshare.io/aamay001/imnext">
          <img src="https://camo.githubusercontent.com/333ecd8760aa792893418cd5b3d835e696359cda/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f746563682d737461636b2d3036393066612e7376673f7374796c653d666c6174"
            alt="StackShare"
            data-canonical-src="https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat"
            style={{maxWidth:'10%'}} />
        </a>
        <h2>{'];'}</h2>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Projects);