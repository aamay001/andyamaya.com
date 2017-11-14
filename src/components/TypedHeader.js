import React, {Component} from 'react';
import {connect} from 'react-redux';
import Typed from 'typed.js';
import '../styles/TypedHeader.css'

export class TypedHeader extends Component {
  typed = undefined

  componentDidMount() {
    const options = this.setOptions(this.props);
    this.typed = new Typed(this.el, options);
  }

  componentWillReceiveProps(nextProps) {
    this.typed.destroy();
    const options = this.setOptions(nextProps);
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  setOptions(props) {
    const {strings} = props;
    return {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
  }

  render() {
    return (
      <div className="wrap">
        <h1>
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </h1>
      </div>
    );
  }
}

TypedHeader.defaultProps = {
  string: []
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(TypedHeader);