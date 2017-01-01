import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import ShareButton from './ShareButton'

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return(
      <div className="row Translator-box">
        <div className="col-sm-6">
          <Input handleChange={this.handleChange.bind(this)} />
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
