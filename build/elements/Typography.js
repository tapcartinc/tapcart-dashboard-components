"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports.placeholder = exports.Body = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _dashVariables = require("../utils/_dashVariables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//////////
// HEADERS
//////////
var H1 = _styledComponents["default"].h1.attrs({
  className: "h1"
}).withConfig({
  displayName: "Typography__H1",
  componentId: "sc-1g2eju0-0"
})(["font-size:25px;color:", ";font-family:CircularStd-Book,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;line-height:35px;", ""], function (props) {
  return props.color ? props.color : _variables.colors.blue;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H1 = H1;

var H2 = _styledComponents["default"].h2.withConfig({
  displayName: "Typography__H2",
  componentId: "sc-1g2eju0-1"
})(["font-size:15px;color:", ";text-transform:uppercase;font-family:CircularStd-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;", ""], _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

exports.H2 = H2;

var H3 = _styledComponents["default"].h3.attrs({
  className: "h3"
}).withConfig({
  displayName: "Typography__H3",
  componentId: "sc-1g2eju0-2"
})(["font-size:20px;color:", ";font-family:CircularStd-Book,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;", ""], _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

exports.H3 = H3;

var H4 = _styledComponents["default"].h4.withConfig({
  displayName: "Typography__H4",
  componentId: "sc-1g2eju0-3"
})(["font-size:15px;color:", ";text-transform:uppercase;font-family:CircularStd-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H4 = H4;

var H5 = _styledComponents["default"].h5.withConfig({
  displayName: "Typography__H5",
  componentId: "sc-1g2eju0-4"
})(["font-size:15px;color:", ";font-family:CircularStd-Book,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H5 = H5;
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

var Body = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Body",
  componentId: "sc-1g2eju0-5"
})(["-webkit-font-smoothing:antialiased;font-size:", ";line-height:26px;color:", ";", ";font-weight:400;margin-top:5px;margin-bottom:5px;", ""], function (props) {
  if (props.fontSize) {
    return props.fontSize;
  } else {
    return "16px";
  }
}, function (props) {
  return props.color ? props.color : "#000000";
}, _dashVariables.sofiaPro.regular, function (props) {
  return props.style ? props.style : null;
});

exports.Body = Body;