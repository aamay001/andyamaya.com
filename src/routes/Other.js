import React, {Component} from 'react';
import {connect} from 'react-redux';

import {OTHER, PAGE_DELAY} from '../config/constants';
import * as actions from '../state/actions';
import profile from '../config/profile';
import '../styles/Other.css';

const {other} = profile;

export class Other extends Component {
  state = {
    okayToRender: false
  }

  componentDidMount() {
    this.props.dispatch(actions.notShowingPage());
    this.props.dispatch(actions.setHeaderText('fetch(\'other\');'));
    setTimeout(() => {
      this.setState({okayToRender:true});
      this.props.dispatch(actions.menuSelection(2))
      this.props.dispatch(actions.showingPage());
      this.props.dispatch(actions.setHeaderText('{other}'));
    }, PAGE_DELAY);
  }

  componentWillUnmount() {
    this.setState({
      okayToRender: false
    });
  }

  render() {
    return (
      <div className="other-page"
        onClick={e => e.stopPropagation() }
        style={{
          display: this.props.showPage[OTHER] && this.state.okayToRender ? 'block' : 'none'
        }}>
        <h2><span className="const">const</span> {other.varName} = {'{'}</h2>
        <p><span className="prop">image</span>: <span className="literal"><img src={other.image} alt={other.imageAlt}/></span>,</p>
        <p><span className="prop">message</span>: <span className="literal">{other.message}</span>,</p>
        <p><span className="prop">type</span>: <span className="literal">{other.type}</span>,</p>
        <p><span className="prop">{other.otherString1VarName}</span>: <span className="literal">{other.otherString1}</span>,</p>
        <p><span className="func">website</span>: <span className="literal"><a href={other.website} target="_blank">() <span className="arrow">=></span> {other.website}</a></span>,</p>
        <p><span className="func">{other.otherString2VarName}</span>: <span className="literal"><a href={other.otherString2} target="_blank">() <span className="arrow">=></span> {other.otherString2}</a></span></p>
        <h2>{'};'}</h2>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  showPage: state.showPage
});

export default connect(mapStateToProps)(Other);