"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ThemeProvider = require("../../utils/ThemeProvider");

var _theme = require("../../utils/_theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledButtons = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__StyledButtons",
  componentId: "fs2xko-0"
})(["display:flex;align-items:center;.second-btn{margin-left:20px;height:100px;width:300px;display:flex;align-items:center;border-radius:3px;justify-content:center;background:", ";}"], _dashVariables.colorPicker.blue);

var StyledRollingBall = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "indexstories__StyledRollingBall",
  componentId: "fs2xko-1"
})(["display:block;width:30px;height:30px;background:#ffb0de;border-radius:50%;background:-webkit-radial-gradient(25px 25px,circle,#ffb0de,#ff66b6);background:-moz-radial-gradient(25px 25px,circle,#ffb0de,#ff66b6);background:radial-gradient(25px 25px,circle,#ffb0de,#ff66b6);", " -webkit-transition:all 1s ease;transition:all 1s ease;position:absolute;left:-50px;bottom:20px;@-ms-keyframes spin{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}@-moz-keyframes moveLeftToRight{0%{left:-100px;}100%{left:100%;}}@-ms-keyframes moveLeftToRight{0%{left:-100px;}100%{left:100%;}}@keyframes moveLeftToRight{0%{left:-100px;}100%{left:100%;}}@-webkit-keyframes moveLeftToRight{0%{left:-100px;}100%{left:100%;}}"], function (props) {
  return props.className === "rolling" && "-webkit-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;\n  -moz-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;\n  -ms-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;\n  animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;";
});

(0, _react2.storiesOf)("Examples|Components/Button", module).add("Basic", function () {
  var _useState = (0, _react.useState)("blue"),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var changeColor = function changeColor() {
    if (color === "blue") {
      return setColor("green");
    } else {
      return setColor("blue");
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_index.Button, {
    color: color,
    onClick: changeColor,
    onChange: function onChange() {
      return setToggle(!toggle);
    }
  }, "Click here");
}).add("with knobs", function () {
  var _useState3 = (0, _react.useState)({
    className: "static"
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var label = "Button Colors";
  var options = ["blue", "green", "red", "gray", "white"];
  var defaultValue = "blue";
  var colorValue = (0, _addonKnobs.select)(label, options, defaultValue);

  var triggerBall = function triggerBall() {
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        className: "rolling"
      });
    });
    resetClass();
  };

  var resetClass = function resetClass() {
    setTimeout(function () {
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          className: "static"
        });
      });
    }, 5000);
  };

  return /*#__PURE__*/_react["default"].createElement(StyledButtons, null, /*#__PURE__*/_react["default"].createElement(StyledRollingBall, {
    className: state.className
  }), /*#__PURE__*/_react["default"].createElement(_index.Button, {
    isLoading: (0, _addonKnobs["boolean"])("isLoading", false),
    isDisabled: (0, _addonKnobs["boolean"])("isDisabled", false),
    thin: (0, _addonKnobs["boolean"])("thin", false),
    plainText: (0, _addonKnobs["boolean"])("plainText", false),
    color: colorValue,
    onClick: triggerBall,
    invert: (0, _addonKnobs["boolean"])("invert", false)
  }, (0, _addonKnobs.text)("btnOneText", "Click me :D")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "second-btn"
  }, /*#__PURE__*/_react["default"].createElement(_index.Button, {
    isLoading: (0, _addonKnobs["boolean"])("isLoading", false),
    isDisabled: (0, _addonKnobs["boolean"])("isDisabled", false),
    thin: (0, _addonKnobs["boolean"])("thin", false),
    plainText: (0, _addonKnobs["boolean"])("plainText", false),
    color: "white",
    onClick: triggerBall,
    invert: (0, _addonKnobs["boolean"])("invert", false)
  }, (0, _addonKnobs.text)("btnTwoText", "No, click me!"))));
}).addDecorator(_addonKnobs.withKnobs).add("wrapped in ThemeProvider", function () {
  return /*#__PURE__*/_react["default"].createElement(StyledButtons, null, /*#__PURE__*/_react["default"].createElement(_ThemeProvider.ThemeProvider, {
    theme: _theme.base
  }, /*#__PURE__*/_react["default"].createElement(_index.Button, {
    onClick: (0, _addonActions.action)("button-click"),
    color: "green"
  }, "Marketing Button")));
});