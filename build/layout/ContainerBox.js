"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

var _media = _interopRequireDefault(require("../utils/_media"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "ContainerBox__ContainerStyle",
  componentId: "sc-6gsxbi-0"
})(["border-radius:3px;box-shadow:", ";background:", ";height:", ";", ";", " ", ""], function (props) {
  return props.boxShadow ? props.boxShadow : _variables.boxShadow.medium;
}, function (props) {
  return props.bg ? props.bg : "white";
}, function (props) {
  return props.customHeight && "".concat(props.customHeight, "px");
}, function (props) {
  return props.padding && "padding: ".concat(props.padding, "px");
}, function (props) {
  return props.customWidth ? "width: ".concat(props.customWidth, "px;") : props.columns ? "width: ".concat(100 / props.columns - 1.5, "%") : "width: 100%;";
}, function (props) {
  return props.style ? props.style : null;
});

var ContainerBox = function ContainerBox(props) {
  return /*#__PURE__*/_react["default"].createElement(ContainerStyle, props, props.children);
};

exports.ContainerBox = ContainerBox;
ContainerBox.propTypes = {
  bg: _propTypes["default"].string,
  customHeight: _propTypes["default"].number,
  customWidth: _propTypes["default"].number,
  columns: _propTypes["default"].number,
  padding: _propTypes["default"].number,
  boxShadow: _propTypes["default"].string,
  children: _propTypes["default"].node
};
ContainerBox.defaultProps = {
  bg: "white"
};