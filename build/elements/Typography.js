"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = exports.input = exports.Sofia = exports.Label = exports.Header = exports.Description = exports.Circular = exports.Body = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../utils/_variables");
var _dashVariables = require("../utils/_dashVariables");
var _functions = require("../utils/_functions");
var _propTypes = _interopRequireWildcard(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//////////
// HEADERS
//////////
var Header = _styledComponents["default"].h1.attrs({
  className: "h1"
}).withConfig({
  displayName: "Typography__Header",
  componentId: "sc-iyq6bj-0"
})(["font-size:25px;color:", ";font-weight:500;font-style:normal;", " -webkit-font-smoothing:antialiased;line-height:29px;letter-spacing:normal;text-transform:capitalize;", ";", ";", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.blue;
}, _dashVariables.circularStd.medium, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});
exports.Header = Header;
var Description = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "Typography__Description",
  componentId: "sc-iyq6bj-1"
})(["-webkit-font-smoothing:antialiased;font-size:13px;font-weight:normal;font-style:normal;line-height:18px;letter-spacing:normal;color:", ";", ";", ";", " ", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, _dashVariables.sofiaPro.regular, function (props) {
  return props.style ? props.style : null;
});
exports.Description = Description;
var Body = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "Typography__Body",
  componentId: "sc-iyq6bj-2"
})(["", " margin-top:8px;margin-bottom:8px;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;line-height:1.5;letter-spacing:normal;color:", ";", ";", ";", ""], _dashVariables.circularStd.book, function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.black;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});
exports.Body = Body;
var Label = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Label",
  componentId: "sc-iyq6bj-3"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";", ""], function (props) {
  return props.errors ? _variables.colors.red : "#000000";
}, function (props) {
  return props.style ? props.style : null;
});
exports.Label = Label;
var Sofia = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Sofia",
  componentId: "sc-iyq6bj-4"
})(["-webkit-font-smoothing:antialiased;letter-spacing:normal;margin-bottom:", ";margin-top:", ";font-size:", ";line-height:", ";color:", ";", ";", ";", ";", ""], function (props) {
  return props.marginBottom ? props.marginBottom : "5px";
}, function (props) {
  return props.marginTop ? props.marginTop : "5px";
}, function (props) {
  return props.fontSize ? props.fontSize : "13px";
}, function (props) {
  return props.lineHeight ? props.lineHeight : "normal";
}, function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.light ? _dashVariables.sofiaPro.light : props.regular ? _dashVariables.sofiaPro.regular : props.medium ? _dashVariables.sofiaPro.medium : props.bold ? _dashVariables.sofiaPro.bold : _dashVariables.sofiaPro.medium;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});
exports.Sofia = Sofia;
var Circular = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Circular",
  componentId: "sc-iyq6bj-5"
})(["-webkit-font-smoothing:antialiased;letter-spacing:normal;margin-bottom:", ";margin-top:", ";font-size:", ";line-height:", ";color:", ";", ";", ";", ";", ""], function (props) {
  return props.marginBottom ? props.marginBottom : "5px";
}, function (props) {
  return props.marginTop ? props.marginTop : "5px";
}, function (props) {
  return props.fontSize ? props.fontSize : "13px";
}, function (props) {
  return props.lineHeight ? props.lineHeight : "normal";
}, function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.book ? _dashVariables.circularStd.book : props.medium ? _dashVariables.circularStd.medium : props.bold ? _dashVariables.circularStd.bold : _dashVariables.circularStd.book;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});
exports.Circular = Circular;
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