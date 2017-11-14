import React, {Component} from 'react';
import '../styles/Title.css';
import {connect} from 'react-redux';
import TypedHeader from './TypedHeader';
import * as actions from '../state/actions';
import profile from '../config/profile'
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

  onClickTitle = e => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    setTimeout(() => {
      if( this.props.showingPage ) {
        this.props.dispatch(actions.setHeaderText(landing.title));
        this.props.dispatch(actions.noSelection());
        return;
      } else if ( !this.props.showMenuOptions ) {
        this.props.dispatch(actions.showMenu());
      }
    }, 500);
  }

  onMouseEnter = e => {
    this.props.dispatch(actions.showMenu());
  }

  onMouseLeave = e => {
    this.props.dispatch(actions.hideMenu());
  }

  render() {
    return (
      <div className={`portfolio-landing-menu ${this.props.showingPage ? 'page-shown' : undefined}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClickTitle}>
        <div className={`website-title`}
          style={{
            backgroundColor: this.props.showMenuOptions ? 'black' : undefined
          }}>
          <TypedHeader strings={[this.props.headerText]}/>
          <em>{landing.phrase}</em>
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

export default connect(mapStateToProps)(Title);