import React, { Component } from 'react';
import Processor from './utils/Processor'


class Output extends Component {
  constructor(props) {
    super(props);

    this._setOutput();
    this.processor = new Processor();
  }

  componentWillReceiveProps(props) {
    this.output = props.input;

    this._setOutput(props.input);

    this.processor.transformations.forEach(transformation => {
      this.output = this.processor[transformation](this.output);
    });
  }

  _setOutput(input = "") {
    if(input === "") {
      this.output = "&laquo; Paste your workout description there.";
    }
  }

  render() {
    return(
      <div>
        <div id="output-box" dangerouslySetInnerHTML={{__html: this.output}} />
      </div>
    )
  }
}

export default Output;
