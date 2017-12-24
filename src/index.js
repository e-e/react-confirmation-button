import React, { Component } from 'react';
import styles from './styles/button.css';
console.log('styles: ', styles);

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false,
      clicked: false
    };

    this.buttonClassname = `${styles.button} ${styles.main}`;
    this.confirmClassname = `${styles.button} ${styles.confirm}`;
    this.cancelClassname = `${styles.button} ${styles.cancel}`;
    this.loadingClassname = `${styles.button} ${styles.cancel}`;
    if (
      typeof this.props.buttonClass === 'string' &&
      this.props.buttonClass.trim().length
    ) {
      this.buttonClassname = `${this.buttonClassname} ${
        this.props.buttonClass
      }`;
    }
    if (
      typeof this.props.confirmClass === 'string' &&
      this.props.confirmClass.trim().length
    ) {
      this.confirmClassname = `${this.confirmClassname} ${
        this.props.confirmClass
      }`;
    }
    if (
      typeof this.props.cancelClass === 'string' &&
      this.props.cancelClass.trim().length
    ) {
      this.cancelClassname = `${this.cancelClassname} ${
        this.props.cancelClass
      }`;
    }
    if (
      typeof this.props.loadingClass === 'string' &&
      this.props.loadingClass.trim().length
    ) {
      this.loadingClassname = `${this.loadingClassname} ${
        this.props.loadingClass
      }`;
    }

    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
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
  renderButton() {
    if (!!this.props.once && this.state.clicked) return null;
    if (this.state.confirming) return null;

    return (
      <button
        className={this.buttonClassname}
        onClick={() => this.setState({ confirming: true })}
      >
        {this.props.buttonText || 'Save'}
      </button>
    );
  }
  renderConfirm() {
    if (!!this.props.once && this.state.clicked) return null;
    if (!this.state.confirming) return null;

    return (
      <div className={styles.wrap}>
        <button className={this.confirmClassname} onClick={this.onConfirm}>
          {this.props.confirmText || 'Confirm'}
        </button>
        <button className={this.cancelClassname} onClick={this.onCancel}>
          {this.props.cancelText || 'Cancel'}
        </button>
      </div>
    );
  }

  renderDisabled() {
    if (!(this.state.clicked && !!this.props.once)) {
      return null;
    }
    return (
      <button className={`${styles.button} ${styles.main}`} disabled>
        {this.props.loadingText || 'Loading'}
      </button>
    );
  }
  render() {
    return (
      <div className={styles.all}>
        {this.renderButton()}
        {this.renderConfirm()}
        {this.renderDisabled()}
      </div>
    );
  }
}

export default ConfirmButton;
