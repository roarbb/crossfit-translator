import React, { Component } from 'react';
import Url from './utils/Url';
import CopyToClipboard from 'react-copy-to-clipboard';

class ShareButton extends Component {
  constructor(props) {
    super(props);

    this.url = new Url();
    this.state = {
      copied: false
    }
  }

  render() {
    if(this.props.input === "") {
      return (
        <span />
      )
    }

    const buttonClass = this.state.copied ? 'btn-success' : 'btn-secondary';
    const buttonText = this.state.copied ? 'Copied to clipboard!' : 'Copy this translation and share it';

    return(
      <div>
        <CopyToClipboard text={this._getShareUrl()}
          onCopy={() => this._copyButtonPressed()}>
          <button type="button" id="share-button" className={`btn ${buttonClass} float-xs-right`}>
            {buttonText}
          </button>
        </CopyToClipboard>
      </div>
    )
  }

  _getShareUrl() {
    return `${this.url.actualUrl.origin}?q=${window.btoa(this.props.input)}`;
  }

  _copyButtonPressed() {
    this.setState({copied: true});

    window.setTimeout(() => {
      this.setState({copied: false});
    }, 1500);
  }
}

export default ShareButton;
