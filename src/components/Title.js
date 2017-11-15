import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import TypedHeader from './TypedHeader';
import * as actions from '../state/actions';
import {ROUTES} from '../config/constants';
import profile from '../config/profile'
import '../styles/Title.css';

const {landing} = profile;

export class Title extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setHeaderText(landing.title));
  }

  shouldComponentUpdate(nextProps){
    return nextProps.headerText !== this.props.headerText ||
      ( !nextProps.showingPage && this.props.showingPage && nextProps.showMenuOptions !== this.props.showMenuOptions ) ||
      ( this.props.showingPage !== nextProps.showingPage );
  }

  onClickTitle = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      if( this.props.showingPage ) {
        this.props.dispatch(actions.setHeaderText(landing.title));
        this.props.dispatch(actions.noSelection());
        this.props.history.push(ROUTES.LANDING);
        return;
      } else if ( !this.props.showMenuOptions ) {
        this.props.dispatch(actions.showMenu());
      }
    }, 500);
  }

  onMouseEnter = e => {
    e.stopPropagation();
    this.props.dispatch(actions.showMenu());
  }

  onMouseLeave = e => {
    e.stopPropagation();
    this.props.dispatch(actions.hideMenu());
  }

  render() {
    return (
      <div className={`portfolio-landing-menu ${this.props.showingPage ? 'page-shown' : ''}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={e => e.stopPropagation()}
        onTouchEnd={e => e.stopPropagation()}
        onClick={this.onClickTitle}>
        <div className={`website-title`}
          style={{
            backgroundColor: this.props.showMenuOptions ? 'black' : undefined
          }}>
          <TypedHeader strings={[this.props.headerText]}/>
          <em>'<span className="literal">{landing.phrase}</span>';</em>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  headerText: state.headerText,
  showMenuOptions: state.showMenuOptions,
  showingPage: state.showingPage
});

export default withRouter(connect(mapStateToProps)(Title));