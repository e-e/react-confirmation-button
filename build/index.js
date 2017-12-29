module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmButton = function (_Component) {
  _inherits(ConfirmButton, _Component);

  function ConfirmButton(props) {
    _classCallCheck(this, ConfirmButton);

    var _this = _possibleConstructorReturn(this, (ConfirmButton.__proto__ || Object.getPrototypeOf(ConfirmButton)).call(this, props));

    _this.state = {
      confirming: false,
      clicked: false
    };

    _this.wrapAllClassname = '';
    _this.buttonWrapClassname = '';
    _this.buttonClassname = '';
    _this.confirmClassname = '';
    _this.cancelClassname = '';
    _this.loadingClassname = '';
    if (typeof _this.props.buttonClass === 'string' && _this.props.buttonClass.trim().length) {
      _this.buttonClassname = _this.buttonClassname + ' ' + _this.props.buttonClass;
    }
    if (typeof _this.props.confirmClass === 'string' && _this.props.confirmClass.trim().length) {
      _this.confirmClassname = _this.confirmClassname + ' ' + _this.props.confirmClass;
    }
    if (typeof _this.props.cancelClass === 'string' && _this.props.cancelClass.trim().length) {
      _this.cancelClassname = _this.cancelClassname + ' ' + _this.props.cancelClass;
    }
    if (typeof _this.props.loadingClass === 'string' && _this.props.loadingClass.trim().length) {
      _this.loadingClassname = _this.loadingClassname + ' ' + _this.props.loadingClass;
    }

    _this.onConfirm = _this.onConfirm.bind(_this);
    _this.onConfirmClicked = _this.onConfirmClicked.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    return _this;
  }

  _createClass(ConfirmButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'onConfirm',
    value: function onConfirm() {
      var confirm = typeof this.props.onConfirm === 'function' ? this.props.onConfirm : function () {
        throw new Error("[react-confirmation-button]: You must provide an 'onConfirm' function.");
      };
      confirm();
      this.setState({ confirming: false, clicked: true });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      var cancel = typeof this.props.onCancel === 'function' ? this.props.onCancel : function () {};
      cancel();
      this.setState({ confirming: false });
    }
  }, {
    key: 'onConfirmClicked',
    value: function onConfirmClicked() {
      this.setState({ confirming: true });
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      if (!!this.props.once && this.state.clicked) return null;
      if (this.state.confirming) return null;

      return _react2.default.createElement(
        'button',
        { className: this.buttonClassname, onClick: this.onConfirmClicked },
        this.props.buttonText || 'Save'
      );
    }
  }, {
    key: 'renderConfirm',
    value: function renderConfirm() {
      if (!!this.props.once && this.state.clicked) return null;
      if (!this.state.confirming) return null;

      return _react2.default.createElement(
        'div',
        { className: this.buttonWrapClassname },
        _react2.default.createElement(
          'button',
          { className: this.confirmClassname, onClick: this.onConfirm },
          this.props.confirmText || 'Confirm'
        ),
        _react2.default.createElement(
          'button',
          { className: this.cancelClassname, onClick: this.onCancel },
          this.props.cancelText || 'Cancel'
        )
      );
    }
  }, {
    key: 'renderDisabled',
    value: function renderDisabled() {
      if (!(this.state.clicked && !!this.props.once)) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        { className: '' + this.buttonClassname, disabled: true },
        this.props.loadingText || 'Loading'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.wrapAllClassname },
        this.renderButton(),
        this.renderConfirm(),
        this.renderDisabled()
      );
    }
  }]);

  return ConfirmButton;
}(_react.Component);

exports.default = ConfirmButton;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);