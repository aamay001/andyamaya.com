import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../state/actions';

export class EasyDeploy extends Component {
  componentDidMount() {
    this.props.dispatch(actions.showingPage());
    this.props.dispatch(actions.setHeaderText("get('easyDeploy');"));
    global.location = 'http://easydeploy.andyamaya.com';
  }

  render() {
    return (
      <div className="other-page">
      <p><span className="func">redirect</span>: <span className="literal"><a href="http://easydeploy.andyamaya.com" target="_blank" rel="noopener noreferrer">() <span className="arrow">=></span> {"http://easydeploy.andyamaya.com"}</a></span></p>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(EasyDeploy);