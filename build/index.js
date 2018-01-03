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
    _this.allClassNames = ['wrapClass', 'buttonClass', 'mainClass', 'confirmClass', 'cancelClass', 'loadingClass', 'disabledClass'];

    _this.initClasses();

    _this.onConfirm = _this.onConfirm.bind(_this);
    _this.onConfirmClicked = _this.onConfirmClicked.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    return _this;
  }

  _createClass(ConfirmButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'initClasses',
    value: function initClasses() {
      var _this2 = this;

      this.allClassNames.forEach(function (name) {
        _this2[name] = '';
        if (typeof _this2.props[name] === 'string' && _this2.props[name].trim().length) {
          _this2[name] = (_this2[name] + ' ' + _this2.props[name]).trim();
        }
      });
    }
  }, {
    key: 'outputClasses',
    value: function outputClasses() {
      return [].slice.call(arguments).reduce(function (classStr, className) {
        return (classStr + ' ' + className).trim();
      });
    }
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
        {
          className: this.outputClasses(this.buttonClass, this.mainClass),
          onClick: this.onConfirmClicked
        },
        this.props.buttonText || 'Save'
      );
    }
  }, {
    key: 'renderConfirm',
    value: function renderConfirm() {
      if (!!this.props.once && this.state.clicked) return null;
      if (!this.state.confirming) return null;

      return [_react2.default.createElement(
        'button',
        {
          className: this.outputClasses(this.buttonClass, this.confirmClass),
          onClick: this.onConfirm,
          key: 'confirm'
        },
        this.props.confirmText || 'Confirm'
      ), _react2.default.createElement(
        'button',
        {
          className: this.outputClasses(this.buttonClass, this.cancelClass),
          onClick: this.onCancel,
          key: 'cancel'
        },
        this.props.cancelText || 'Cancel'
      )];
    }
  }, {
    key: 'renderDisabled',
    value: function renderDisabled() {
      if (!(this.state.clicked && !!this.props.once)) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        {
          className: this.outputClasses(this.buttonClass, this.disabledClass),
          disabled: true
        },
        this.props.loadingText || 'Loading'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.wrapClass },
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