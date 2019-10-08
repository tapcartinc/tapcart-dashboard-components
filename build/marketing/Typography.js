"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterLink = exports.Subheader = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

var _media = _interopRequireDefault(require("../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 28px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 38px;\n  line-height: 48px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].h1.withConfig({
  displayName: "Typography__Header",
  componentId: "sc-1bwqgjv-0"
})(["font-family:CircularStd;font-weight:bold;font-style:normal;font-size:48px;line-height:58px;margin-bottom:15px;margin-top:20px;color:", ";", ";", ""], function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return props.theme ? props.theme.header : _variables.colors.black;
  }
}, _media["default"].lg(_templateObject()), function (props) {
  return props.style ? props.style : null;
});

exports.Header = Header;

var Subheader = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Subheader",
  componentId: "sc-1bwqgjv-1"
})(["font-size:26px;line-height:36px;margin-bottom:30px;", ";color:", ";", ";", ""], _variables.sofia.sofiaRegular, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return props.theme ? props.theme.subtext : _variables.colors.black;
  }
}, _media["default"].sm(_templateObject2()), function (props) {
  return props.style ? props.style : null;
});

exports.Subheader = Subheader;

var FooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Typography__FooterLink",
  componentId: "sc-1bwqgjv-2"
})(["", ";font-size:18px;line-height:28px;color:", ";", ""], _variables.sofia.sofiaMedium, _variables.colors.black, function (props) {
  return props.style ? props.style : null;
});

exports.FooterLink = FooterLink;