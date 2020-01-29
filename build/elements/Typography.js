"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports.placeholder = exports.Body = exports.Description = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _dashVariables = require("../utils/_dashVariables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//////////
// HEADERS
//////////
var Header = _styledComponents["default"].h1.attrs({
  className: "h1"
}).withConfig({
  displayName: "Typography__Header",
  componentId: "iyq6bj-0"
})(["font-size:25px;color:", ";font-weight:500;font-style:normal;font-family:CircularStd-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;line-height:29px;letter-spacing:normal;text-transform:capitalize;", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.blue;
}, function (props) {
  return props.style ? props.style : null;
});

exports.Header = Header;

var Description = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "Typography__Description",
  componentId: "iyq6bj-1"
})(["font-family:CircularStd-Book,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:normal;font-style:normal;line-height:18px;letter-spacing:normal;color:", ";", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.style ? props.style : null;
});

exports.Description = Description;

var Body = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "Typography__Body",
  componentId: "iyq6bj-2"
})(["font-family:CircularStd-Book,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:normal;line-height:18px;letter-spacing:normal;color:", ";", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.black;
}, function (props) {
  return props.style ? props.style : null;
});

exports.Body = Body;
var placeholder = {
  fontSize: "18px",
  color: "#DBE1EF",
  fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontStyle: "normal"
};
exports.placeholder = placeholder;
var input = {
  color: _variables.colors.black,
  fontSize: "15px",
  fontFamily: "CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: "normal",
  fontStyle: "normal"
};
exports.input = input;