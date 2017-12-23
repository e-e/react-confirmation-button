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

__webpack_require__(2);

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
      clicked: false
    };
    return _this;
  }

  _createClass(ConfirmButton, [{
    key: 'renderButton',
    value: function renderButton() {
      var _this2 = this;

      if (this.state.clicked) return null;
      return _react2.default.createElement(
        'div',
        {
          className: 'confirm-button-button confirm-button-main',
          onClick: function onClick() {
            return _this2.setState({ clicked: true });
          }
        },
        this.props.buttonText || 'Save'
      );
    }
  }, {
    key: 'renderConfirm',
    value: function renderConfirm() {
      var _this3 = this;

      if (!this.state.clicked) return null;
      return _react2.default.createElement(
        'div',
        { className: 'confirm-button-confirm-wrap' },
        _react2.default.createElement(
          'div',
          {
            className: 'confirm-button-button confirm-button-confirm',
            onClick: this
          },
          this.props.confirmText || 'Confirm'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'confirm-button-button confirm-button-cancel',
            onClick: function onClick() {
              return _this3.setState({ clicked: false });
            }
          },
          this.props.cancelText || 'Cancel'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'confirm-button' },
        this.renderButton(),
        this.renderConfirm()
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".src-styles-button__confirm-button--1Eq7D {\n  display: flex;\n  border: 1px solid #cc4b37;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-styles-button__confirm-button-button--2RdWp {\n  box-sizing: border-box;\n  padding: 5px 15px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.src-styles-button__confirm-button-button--2RdWp:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.src-styles-button__confirm-button-main--1Ce9I {\n  color: #cc4b37;\n}\n\n.src-styles-button__confirm-button-confirm-wrap--3T4UY {\n  display: flex;\n  flex-direction: row;\n}\n\n.src-styles-button__confirm-button-confirm--29S25 {\n  color: #cc4b37;\n  padding: 5px 5px;\n}\n\n.src-styles-button__confirm-button-cancel--1RCLz {\n  color: gray;\n  padding: 5px 5px;\n}\n", ""]);

// exports
exports.locals = {
	"confirm-button": "src-styles-button__confirm-button--1Eq7D",
	"confirm-button-button": "src-styles-button__confirm-button-button--2RdWp",
	"confirm-button-main": "src-styles-button__confirm-button-main--1Ce9I",
	"confirm-button-confirm-wrap": "src-styles-button__confirm-button-confirm-wrap--3T4UY",
	"confirm-button-confirm": "src-styles-button__confirm-button-confirm--29S25",
	"confirm-button-cancel": "src-styles-button__confirm-button-cancel--1RCLz"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);