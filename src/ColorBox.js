import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // return (
      // <div className="color-box" style={{opacity: 2}}>
      if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: 1}}>
        <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
      } else {
        return (null)
      }
    }
  }
