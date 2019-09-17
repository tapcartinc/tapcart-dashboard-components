"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports.placeholder = exports.Paragraph = exports.Generic = exports.Body = exports.Subtext = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//////////
// HEADERS
//////////
var font = _styledComponents["default"].p.withConfig({
  displayName: "Typography__font",
  componentId: "sc-1g2eju0-0"
})(["font-size:15px font-family:\"CircularStd-Medium\";"]);

var H1 = _styledComponents["default"].h1.attrs({
  className: "h1"
}).withConfig({
  displayName: "Typography__H1",
  componentId: "sc-1g2eju0-1"
})(["font-size:25px;color:", ";font-family:\"CircularStd-Book\";line-height:35px;", ""], function (props) {
  return props.color ? props.color : _variables.colors.blue;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H1 = H1;

var H2 = _styledComponents["default"].h2.withConfig({
  displayName: "Typography__H2",
  componentId: "sc-1g2eju0-2"
})(["font-size:15px;color:", ";text-transform:uppercase;font-family:\"CircularStd-Medium\";", ""], _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

exports.H2 = H2;

var H3 = _styledComponents["default"].h3.attrs({
  className: "h3"
}).withConfig({
  displayName: "Typography__H3",
  componentId: "sc-1g2eju0-3"
})(["font-size:20px;color:", ";font-family:\"CircularStd-Book\";", ""], _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

exports.H3 = H3;

var H4 = _styledComponents["default"].h4.withConfig({
  displayName: "Typography__H4",
  componentId: "sc-1g2eju0-4"
})(["font-size:15px;color:", ";text-transform:uppercase;font-family:\"CircularStd-Medium\";", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H4 = H4;

var H5 = _styledComponents["default"].h5.withConfig({
  displayName: "Typography__H5",
  componentId: "sc-1g2eju0-5"
})(["font-size:15px;color:", ";font-family:\"CircularStd-Book\";", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, function (props) {
  return props.style ? props.style : null;
});

exports.H5 = H5;
var Subtext = (0, _styledComponents["default"])(font).withConfig({
  displayName: "Typography__Subtext",
  componentId: "sc-1g2eju0-6"
})(["color:", ";font-size:15px;", ";", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, _variables.sofia.sofiaRegular, function (props) {
  return props.style ? props.style : null;
});
exports.Subtext = Subtext;
var Body = (0, _styledComponents["default"])(font).withConfig({
  displayName: "Typography__Body",
  componentId: "sc-1g2eju0-7"
})(["color:", ";font-size:15px;", ";letter-spacing:0.2px;line-height:23px;", ""], function (props) {
  return props.color ? props.color : _variables.colors.black;
}, _variables.sofia.sofiaRegular, function (props) {
  return props.style ? props.style : null;
});
exports.Body = Body;
var placeholder = {
  fontSize: "15px",
  color: "#DBE1EF",
  fontFamily: "Sofia Pro",
  fontWeight: 500,
  fontStyle: "normal"
};
exports.placeholder = placeholder;
var input = {
  color: _variables.colors.black,
  fontSize: "15px",
  fontFamily: "CircularStd-Book",
  fontWeight: "normal",
  fontStyle: "normal"
};
exports.input = input;

var Generic = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Generic",
  componentId: "sc-1g2eju0-8"
})(["font-size:", ";letter-spacing:0.3px;font-weight:400;color:", ";font-family:CircularStd-Book;margin-top:5px;margin-bottom:5px;", ""], function (props) {
  if (props.fontSize) {
    return props.fontSize;
  } else {
    return "15px";
  }
}, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return _variables.colors.black;
  }
}, function (props) {
  return props.style ? props.style : null;
});

exports.Generic = Generic;

var Paragraph = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Paragraph",
  componentId: "sc-1g2eju0-9"
})(["font-size:", ";", ";letter-spacing:0.3px;color:", ";margin-top:5px;line-height:20px;margin-bottom:5px;", ";"], function (props) {
  if (props.fontSize) {
    return props.fontSize;
  } else {
    return "15px";
  }
}, _variables.sofia.sofiaRegular, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return _variables.colors.black;
  }
}, function (props) {
  return props.style ? props.style : null;
});

exports.Paragraph = Paragraph;