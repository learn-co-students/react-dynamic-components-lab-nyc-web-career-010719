import React, { Component } from 'react';

export default class ColorBox extends Component {

  renderColorBoxBasedOnOpacity = () => {
    if(this.props.opacity >= 0.2){
      return <ColorBox opacity={this.props.opacity-.1}/>
    } else return null
  }
  render() {
    return(
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.renderColorBoxBasedOnOpacity()}
      </div>

  )}

}

// renderColorBoxBasedOnOpacity = () => {
//   if(this.props.opacity >= 0.2){
//     return <ColorBox opacity={this.props.opacity-.1}/>
//   } else return null
// }
