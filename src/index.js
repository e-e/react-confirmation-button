import React, { Component } from 'react';
import './styles/button.css';

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  renderButton() {
    if (this.state.clicked) return null;
    return (
      <div
        className="confirm-button-button confirm-button-main"
        onClick={() => this.setState({ clicked: true })}
      >
        {this.props.buttonText || 'Save'}
      </div>
    );
  }
  renderConfirm() {
    if (!this.state.clicked) return null;
    return (
      <div className="confirm-button-confirm-wrap">
        <div
          className="confirm-button-button confirm-button-confirm"
          onClick={this}
        >
          {this.props.confirmText || 'Confirm'}
        </div>
        <div
          className="confirm-button-button confirm-button-cancel"
          onClick={() => this.setState({ clicked: false })}
        >
          {this.props.cancelText || 'Cancel'}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="confirm-button">
        {this.renderButton()}
        {this.renderConfirm()}
      </div>
    );
  }
}

export default ConfirmButton;
