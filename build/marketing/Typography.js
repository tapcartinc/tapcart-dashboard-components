"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarketingFooterLink = exports.MarketingNavLink = exports.MarketingSubHeading = exports.MarketingHeading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MarketingHeading = _styledComponents["default"].h1.withConfig({
  displayName: "Typography__MarketingHeading",
  componentId: "sc-1bwqgjv-0"
})(["font-family:\"CircularStd-Bold\";font-size:48px;line-height:1.15;margin-bottom:20px;text-align:", ";color:", ";", ""], function (props) {
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

exports.MarketingHeading = MarketingHeading;

var MarketingSubHeading = _styledComponents["default"].p.withConfig({
  displayName: "Typography__MarketingSubHeading",
  componentId: "sc-1bwqgjv-1"
})(["font-size:26px;line-height:1.15;margin-bottom:20px;text-align:", ";", ";color:", ";", ""], function (props) {
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

exports.MarketingSubHeading = MarketingSubHeading;

var MarketingNavLink = _styledComponents["default"].span.withConfig({
  displayName: "Typography__MarketingNavLink",
  componentId: "sc-1bwqgjv-2"
})(["", ";font-size:20px;letter-spacing:0.8px;color:#ffffff;", ""], _variables.sofia.sofiaMedium, function (props) {
  return props.style ? props.style : null;
});

exports.MarketingNavLink = MarketingNavLink;

var MarketingFooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Typography__MarketingFooterLink",
  componentId: "sc-1bwqgjv-3"
})(["", ";font-size:18px;line-height:2;color:", ";", ""], _variables.sofia.sofiaMedium, _variables.colors.black, function (props) {
  return props.style ? props.style : null;
});

exports.MarketingFooterLink = MarketingFooterLink;