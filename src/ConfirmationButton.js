import React, { Component } from 'react';

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false,
      clicked: false
    };

    this.wrapClassname = '';
    this.buttonWrapClassname = '';
    this.buttonClassname = '';
    this.confirmClassname = '';
    this.cancelClassname = '';
    this.loadingClassname = '';
    if (
      typeof this.props.wrapClass === 'string' &&
      this.props.wrapClass.trim().length
    ) {
      this.wrapClassname = `${this.wrapClassname} ${
        this.props.wrapClass
      }`.trim();
    }
    if (
      typeof this.props.buttonClass === 'string' &&
      this.props.buttonClass.trim().length
    ) {
      this.buttonClassname = `${this.buttonClassname} ${
        this.props.buttonClass
      }`.trim();
    }
    if (
      typeof this.props.confirmClass === 'string' &&
      this.props.confirmClass.trim().length
    ) {
      this.confirmClassname = `${this.confirmClassname} ${
        this.props.confirmClass
      }`.trim();
    }
    if (
      typeof this.props.cancelClass === 'string' &&
      this.props.cancelClass.trim().length
    ) {
      this.cancelClassname = `${this.cancelClassname} ${
        this.props.cancelClass
      }`.trim();
    }
    if (
      typeof this.props.loadingClass === 'string' &&
      this.props.loadingClass.trim().length
    ) {
      this.loadingClassname = `${this.loadingClassname} ${
        this.props.loadingClass
      }`.trim();
    }

    this.onConfirm = this.onConfirm.bind(this);
    this.onConfirmClicked = this.onConfirmClicked.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  componentDidMount() {}
  onConfirm() {
    const confirm =
      typeof this.props.onConfirm === 'function'
        ? this.props.onConfirm
        : () => {
            throw new Error(
              "[react-confirmation-button]: You must provide an 'onConfirm' function."
            );
          };
    confirm();
    this.setState({ confirming: false, clicked: true });
  }
  onCancel() {
    const cancel =
      typeof this.props.onCancel === 'function'
        ? this.props.onCancel
        : () => {};
    cancel();
    this.setState({ confirming: false });
  }
  onConfirmClicked() {
    this.setState({ confirming: true });
  }
  renderButton() {
    if (!!this.props.once && this.state.clicked) return null;
    if (this.state.confirming) return null;

    return (
      <button className={this.buttonClassname} onClick={this.onConfirmClicked}>
        {this.props.buttonText || 'Save'}
      </button>
    );
  }
  renderConfirm() {
    if (!!this.props.once && this.state.clicked) return null;
    if (!this.state.confirming) return null;

    return [
      <button
        className={this.confirmClassname}
        onClick={this.onConfirm}
        key="confirm"
      >
        {this.props.confirmText || 'Confirm'}
      </button>,
      <button
        className={this.cancelClassname}
        onClick={this.onCancel}
        key="cancel"
      >
        {this.props.cancelText || 'Cancel'}
      </button>
    ];
  }

  renderDisabled() {
    if (!(this.state.clicked && !!this.props.once)) {
      return null;
    }
    return (
      <button className={`${this.buttonClassname}`} disabled>
        {this.props.loadingText || 'Loading'}
      </button>
    );
  }
  render() {
    return (
      <div className={this.wrapClassname}>
        {this.renderButton()}
        {this.renderConfirm()}
        {this.renderDisabled()}
      </div>
    );
  }
}

export default ConfirmButton;