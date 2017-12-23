import React, { Component } from 'react';
import styles from './styles/button.css';
console.log('styles: ', styles);

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.onConfirm = this.onConfirm.bind(this);
  }
  renderButton() {
    if (this.state.clicked) return null;
    return (
      <div
        className={`${styles.button} ${styles.main}`}
        onClick={() => this.setState({ clicked: true })}
      >
        {this.props.buttonText || 'Save'}
      </div>
    );
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
    this.setState({ clicked: false });
  }
  renderConfirm() {
    if (!this.state.clicked) return null;
    return (
      <div className={styles.wrap}>
        <div
          className={`${styles.button} ${styles.confirm}`}
          onClick={this.onConfirm}
        >
          {this.props.confirmText || 'Confirm'}
        </div>
        <div
          className={`${styles.button} ${styles.cancel}`}
          onClick={() => this.setState({ clicked: false })}
        >
          {this.props.cancelText || 'Cancel'}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.all}>
        {this.renderButton()}
        {this.renderConfirm()}
      </div>
    );
  }
}

export default ConfirmButton;
