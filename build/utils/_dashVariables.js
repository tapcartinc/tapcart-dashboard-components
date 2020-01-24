"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashSubheader = exports.DashHeader = exports.colorPicker = exports.circularStd = exports.sofiaPro = void 0;

var _media = _interopRequireDefault(require("./_media"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("./_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sofiaPro = {
  black: "font-family: \"SofiaPro-Black\";\n\tsrc: url(\"/fonts/SofiaPro-Black.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-Black.woff\") format(\"woff\");\n\tfont-weight: 900;\n\tfont-style: normal;\n  font-display: swap;",
  regular: "font-family: \"SofiaPro\";\n\tsrc: url(\"/fonts/SofiaPro-Regular.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-Regular.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n  font-display: swap;",
  blackItalic: "\n  font-family: \"SofiaPro-BlackItalic\";\n\tsrc: url(\"/fonts/SofiaPro-BlackItalic.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-BlackItalic.woff\") format(\"woff\");\n\tfont-weight: 900;\n\tfont-style: italic;\n  font-display: swap;\n  ",
  light: "\n  font-family: \"SofiaPro-Light\";\n\tsrc: url(\"/fonts/SofiaPro-Light.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-Light.woff\") format(\"woff\");\n\tfont-weight: 300;\n\tfont-style: normal;\n  font-display: swap;",
  semiBold: "\n  font-family: \"SofiaPro-SemiBold\";\n\tsrc: url(\"/fonts/SofiaPro-SemiBold.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-SemiBold.woff\") format(\"woff\");\n\tfont-weight: 600;\n\tfont-style: normal;\n\tfont-display: swap;\n  ",
  bold: "font-family: \"SofiaPro-Bold\";\n\tsrc: url(\"/fonts/SofiaPro-Bold.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-Bold.woff\") format(\"woff\");\n\tfont-weight: bold;\n\tfont-style: normal;\n  font-display: swap;",
  medium: "\n  font-family: \"SofiaPro-Medium\";\n\tsrc: url(\"/fonts/SofiaPro-Medium.woff2\") format(\"woff2\"), url(\"/fonts/SofiaPro-Medium.woff\") format(\"woff\");\n\tfont-weight: 500;\n\tfont-style: normal;\n\tfont-display: swap;"
};
exports.sofiaPro = sofiaPro;
var circularStd = {
  black: "font-family: \"CircularStd-Black\";\n\tsrc: url(\"/fonts/CircularStd-Black.woff\") format(\"woff\"), url(\"/fonts/CircularStd-Black.woff2\") format(\"woff2\");\n\tfont-weight: 800;\n\tfont-style: normal;\n\tfont-display: swap;",
  blackItalic: "font-family: \"CircularStd-BlackItalic\";\n\tsrc: url(\"/fonts/CircularStd-BlackItalic.woff\") format(\"woff\"),\n\t\turl(\"/fonts/CircularStd-BlackItalic.woff2\") format(\"woff2\");\n\tfont-weight: 800;\n\tfont-style: italic;\n\tfont-display: swap;",
  bold: "font-family: \"CircularStd-Bold\";\n\tsrc: url(\"/fonts/CircularStd-Bold.woff\") format(\"woff\"), url(\"/fonts/CircularStd-Bold.woff2\") format(\"woff2\");\n\tfont-weight: bold;\n\tfont-style: normal;\n\tfont-display: swap;",
  medium: "font-family: \"CircularStd-Medium\";\n\tsrc: url(\"/fonts/CircularStd-Medium.woff\") format(\"woff\"), url(\"/fonts/CircularStd-Medium.woff2\") format(\"woff2\");\n\tfont-weight: 500;\n\tfont-style: normal;\n\tfont-display: swap;",
  book: "font-family: \"CircularStd-Book\";\n\tsrc: url(\"/fonts/CircularStd-Book.woff\") format(\"woff\"), url(\"/fonts/CircularStd-Book.woff2\") format(\"woff2\");\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-display: swap;",
  mediumItalic: "font-family: \"CircularStd-MediumItalic\";\n\tsrc: url(\"/fonts/CircularStd-MediumItalic.woff\") format(\"woff2\"),\n\t\turl(\"/fonts/CircularStd-MediumItalic.woff\") format(\"woff2\");\n\tfont-weight: 500;\n\tfont-style: italic;\n\tfont-display: swap;"
};
exports.circularStd = circularStd;
var colorPicker = {
  gray50: "#d8d8d8",
  gray25: "#efefef",
  blue: "#373AAF",
  grayBlue: "#BAC4E0",
  lightBlue: "#E3EFFD",
  offWhite: "#FCFEFF",
  modalBg: "#FBFBFB",
  black: "#000000",
  gray: "#A1A8B9",
  warmGray: "#D8D8D8",
  lightGray: "#F0F2F5",
  green100: "#1BDFBA",
  green50: "#E0FBF6",
  androidGreen: "#A3C73B",
  red: "#DF4F4E",
  yellow: "#F6B343"
};
exports.colorPicker = colorPicker;

var DashHeader = _styledComponents["default"].h1.withConfig({
  displayName: "_dashVariables__DashHeader",
  componentId: "tteq5l-0"
})(["font-family:CircularStd-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;-webkit-font-smoothing:antialiased;font-size:25px;line-height:31px;margin-bottom:5px;z-index:3;letter-spacing:0.5px;text-transform:capitalize;-webkit-font-smoothing:antialiased;color:", ";", ""], function (props) {
  return props.color ? props.color : _variables.colors.blue;
}, function (props) {
  return props.style ? props.style : null;
});

exports.DashHeader = DashHeader;

var DashSubheader = _styledComponents["default"].p.withConfig({
  displayName: "_dashVariables__DashSubheader",
  componentId: "tteq5l-1"
})(["font-family:CircularStd-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-size:15px;line-height:21px;letter-spacing:0.25px;z-index:3;-webkit-font-smoothing:antialiased;color:", ";", ""], function (props) {
  return props.color ? props.color : _variables.colors.grayText;
}, function (props) {
  return props.style ? props.style : null;
});

exports.DashSubheader = DashSubheader;