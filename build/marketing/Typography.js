"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterLink = exports.Subheader = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _styledComponents["default"].h1.withConfig({
  displayName: "Typography__Header",
  componentId: "sc-1bwqgjv-0"
})(["font-family:\"CircularStd-Bold\";font-size:48px;line-height:58px;margin-bottom:15px;margin-top:20px;text-align:", ";color:", ";", ""], function (props) {
  return props.layout ? props.layout.text : "left";
}, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return props.theme.header;
  }
}, function (props) {
  return props.style ? props.style : null;
});

exports.Header = Header;

var Subheader = _styledComponents["default"].p.withConfig({
  displayName: "Typography__Subheader",
  componentId: "sc-1bwqgjv-1"
})(["font-size:26px;line-height:36px;margin-bottom:30px;text-align:", ";", ";color:", ";", ""], function (props) {
  return props.layout ? props.layout.text : "left";
}, _variables.sofia.sofiaRegular, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return props.theme.subtext;
  }
}, function (props) {
  return props.style ? props.style : null;
});

exports.Subheader = Subheader;

var FooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Typography__FooterLink",
  componentId: "sc-1bwqgjv-2"
})(["", ";font-size:18px;line-height:2;color:", ";", ""], _variables.sofia.sofiaMedium, _variables.colors.black, function (props) {
  return props.style ? props.style : null;
});

exports.FooterLink = FooterLink;