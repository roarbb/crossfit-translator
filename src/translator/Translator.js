import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import ShareButton from './ShareButton'
import Url from './utils/Url';

class Translator extends Component {
  constructor(props) {
    super(props);

    let originalInput = ""

    this.url = new Url();

    if(this.url.params.q) {
      try {
        originalInput = window.atob(this.url.params.q);
      } catch(error) {
        console.log('Failed to decode url string');
      }
    }

    this.state = {
      input: originalInput
    };
  }

  render() {
    return(
      <div className="row Translator-box">
        <div className="col-sm-6">
          <Input value={this.state.input} handleChange={this.handleChange.bind(this)} />
        </div>
        <div className="col-sm-6">
          <Output input={this.state.input} />
          <ShareButton input={this.state.input} />
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
}

export default Translator;
