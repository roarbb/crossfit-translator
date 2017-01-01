import React, { Component } from 'react';

class Input extends Component {
  render() {
    return(
      <textarea autoFocus value={this.props.value} id="input-box" className="Translator-input form-control" onChange={this.props.handleChange} />
    )
  }
}

export default Input;
