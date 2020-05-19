"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P3 = exports.P2 = exports.P1 = exports.H2 = exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _swatches = require("../../utils/_swatches");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//////////
// HEADERS
//////////
var H1 = _styledComponents["default"].h1.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "Typography__H1",
  componentId: "sc-192nk0z-0"
})(["font-size:", ";color:", ";-webkit-font-smoothing:antialiased;line-height:", ";letter-spacing:normal;", ";", ";", " font-family:CircularStd-Bold,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;"], function (props) {
  return props.fontSize ? "".concat(props.fontSize, "px") : "46px";
}, function (props) {
  return props.theme && props.theme.header && !props.color ? props.theme.header : props.color ? props.color : _swatches.swatches.blue;
}, function (props) {
  return props.lineHeight ? "".concat(props.lineHeight, "px") : "54px";
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});

exports.H1 = H1;

var H2 = _styledComponents["default"].h2.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "Typography__H2",
  componentId: "sc-192nk0z-1"
})(["font-size:", ";color:", ";-webkit-font-smoothing:antialiased;line-height:", ";letter-spacing:normal;", ";", ";", " font-family:CircularStd-Bold,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;"], function (props) {
  return props.fontSize ? "".concat(props.fontSize, "px") : "40px";
}, function (props) {
  return props.theme && props.theme.header && !props.color ? props.theme.header : props.color ? props.color : _swatches.swatches.blue;
}, function (props) {
  return props.lineHeight ? "".concat(props.lineHeight, "px") : "48px";
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
}); //////////
// BODY FONTS
//////////


exports.H2 = H2;

var P1 = _styledComponents["default"].p.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "Typography__P1",
  componentId: "sc-192nk0z-2"
})(["font-size:", ";color:", ";-webkit-font-smoothing:antialiased;line-height:", ";letter-spacing:normal;", ";", ";", " font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;"], function (props) {
  return props.fontSize ? "".concat(props.fontSize, "px") : "22px";
}, function (props) {
  return props.theme && props.theme.subtext && !props.color ? props.theme.subtext : props.color ? props.color : _swatches.swatches.black;
}, function (props) {
  return props.lineHeight ? "".concat(props.lineHeight, "px") : "30px";
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});

exports.P1 = P1;

var P2 = _styledComponents["default"].p.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "Typography__P2",
  componentId: "sc-192nk0z-3"
})(["font-size:", ";color:", ";-webkit-font-smoothing:antialiased;line-height:", ";letter-spacing:normal;", ";", ";", " font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;"], function (props) {
  return props.fontSize ? "".concat(props.fontSize, "px") : "18px";
}, function (props) {
  return props.theme && props.theme.body && !props.color ? props.theme.body : props.color ? props.color : _swatches.swatches.black;
}, function (props) {
  return props.lineHeight ? "".concat(props.lineHeight, "px") : "26px";
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});

exports.P2 = P2;

var P3 = _styledComponents["default"].p.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "Typography__P3",
  componentId: "sc-192nk0z-4"
})(["font-size:", ";color:", ";-webkit-font-smoothing:antialiased;line-height:", ";letter-spacing:normal;", ";", ";", " font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;"], function (props) {
  return props.fontSize ? "".concat(props.fontSize, "px") : "15px";
}, function (props) {
  return props.theme && props.theme.body && !props.color ? props.theme.body : props.color ? props.color : _swatches.swatches.gray;
}, function (props) {
  return props.lineHeight ? "".concat(props.lineHeight, "px") : "23px";
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});

exports.P3 = P3;