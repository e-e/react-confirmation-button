import React, { Component } from 'react';

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false,
      clicked: false
    };
    this.allClassNames = [
      'wrapClass',
      'buttonClass',
      'mainClass',
      'confirmClass',
      'cancelClass',
      'loadingClass',
      'disabledClass'
    ];

    this.initClasses();

    this.onConfirm = this.onConfirm.bind(this);
    this.onConfirmClicked = this.onConfirmClicked.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  componentDidMount() {}
  initClasses() {
    this.allClassNames.forEach(name => {
      this[name] = '';
      if (
        typeof this.props[name] === 'string' &&
        this.props[name].trim().length
      ) {
        this[name] = `${this[name]} ${this.props[name]}`.trim();
      }
    });
  }
  outputClasses() {
    return [].slice.call(arguments).reduce((classStr, className) => {
      return `${classStr} ${className}`.trim();
    });
  }
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
      <button
        className={this.outputClasses(this.buttonClass, this.mainClass)}
        onClick={this.onConfirmClicked}
      >
        {this.props.buttonText || 'Save'}
      </button>
    );
  }
  renderConfirm() {
    if (!!this.props.once && this.state.clicked) return null;
    if (!this.state.confirming) return null;

    return [
      <button
        className={this.outputClasses(this.buttonClass, this.confirmClass)}
        onClick={this.onConfirm}
        key="confirm"
      >
        {this.props.confirmText || 'Confirm'}
      </button>,
      <button
        className={this.outputClasses(this.buttonClass, this.cancelClass)}
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
      <button
        className={this.outputClasses(this.buttonClass, this.disabledClass)}
        disabled
      >
        {this.props.loadingText || 'Loading'}
      </button>
    );
  }
  render() {
    return (
      <div className={this.wrapClass}>
        {this.renderButton()}
        {this.renderConfirm()}
        {this.renderDisabled()}
      </div>
    );
  }
}

export default ConfirmButton;
