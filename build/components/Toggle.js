"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = Toggle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Toggle(props) {
  return /*#__PURE__*/_react["default"].createElement(ToggleWrapper, _extends({
    style: {
      margin: 5
    }
  }, props), /*#__PURE__*/_react["default"].createElement(ToggleInput, {
    type: "checkbox",
    id: "toggle",
    checked: props.value,
    onChange: props.onToggle,
    name: props.name,
    autoComplete: "off"
  }), /*#__PURE__*/_react["default"].createElement(ToggleLabel, _extends({
    htmlFor: "toggle"
  }, props)));
}

var ToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Toggle__ToggleWrapper",
  componentId: "sc-1dk212y-0"
})(["position:relative;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

var ToggleLabel = _styledComponents["default"].label.withConfig({
  displayName: "Toggle__ToggleLabel",
  componentId: "sc-1dk212y-1"
})(["position:absolute;top:0;left:0;width:40px;height:18px;border-radius:15px;background:", ";cursor:pointer;&::after{content:\"\";display:block;border-radius:50%;width:18px;height:18px;transform:scale(1.15);background:", ";border:1px solid ", ";box-shadow:1px 3px 3px 1px rgba(0,0,0,0.08);transition:0.2s;}"], function (props) {
  return props.value ? _variables.colors.highlightblue : _variables.colors.gray;
}, function (props) {
  return props.value ? _variables.colors.blue : "white";
}, _variables.colors.gray);

var ToggleInput = _styledComponents["default"].input.withConfig({
  displayName: "Toggle__ToggleInput",
  componentId: "sc-1dk212y-2"
})(["opacity:0;z-index:1;border-radius:15px;width:40px;height:18px;&:checked + ", "{background:", ";&::after{content:\"\";display:block;border-radius:50%;width:18px;height:18px;transform:scale(1.15);border:1px solid transparent;margin-left:20px;transition:0.2s;border:1px solid #373aaf;}}"], ToggleLabel, _variables.colors.highlightblue);