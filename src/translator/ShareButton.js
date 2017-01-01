import React, { Component } from 'react';

class ShareButton extends Component {
  render() {
    if(this.props.input === "") {
      return (
        <span />
      )
    }

    return(
      <button type="button" id="share-button" className="btn btn-secondary float-xs-right">
        Share this translation
      </button>
    )
  }
}

export default ShareButton;
