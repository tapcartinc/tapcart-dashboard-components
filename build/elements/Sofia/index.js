"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sofia = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _dash = require("../../utils/dash");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sofia = _styledComponents["default"].p.withConfig({
  displayName: "Sofia",
  componentId: "tw9s1x-0"
})(["-webkit-font-smoothing:antialiased;letter-spacing:", ";margin-bottom:", ";margin-top:", ";font-size:", ";line-height:", ";text-transform:", ";color:", ";", ";", ";", ";", ""], function (props) {
  return props.letterSpacing ? props.letterSpacing : "normal";
}, function (props) {
  return props.marginBottom ? props.marginBottom : "5px";
}, function (props) {
  return props.marginTop ? props.marginTop : "5px";
}, function (props) {
  return props.fontSize ? props.fontSize : "13px";
}, function (props) {
  return props.lineHeight ? props.lineHeight : "normal";
}, function (props) {
  return props.textTransform;
}, function (props) {
  return props.color ? props.color : _swatches.swatches.gray;
}, function (props) {
  return props.light ? _dash.sofiaPro.light : props.regular ? _dash.sofiaPro.regular : props.medium ? _dash.sofiaPro.medium : props.bold ? _dash.sofiaPro.bold : _dash.sofiaPro.medium;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});

exports.Sofia = Sofia;
Sofia.propTypes = {
  letterSpacing: _propTypes["default"].string,
  marginBottom: _propTypes["default"].string,
  marginTop: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  lineHeight: _propTypes["default"].string,
  textTransform: _propTypes["default"].string,
  color: _propTypes["default"].string,
  light: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  medium: _propTypes["default"].bool,
  bold: _propTypes["default"].bold
};