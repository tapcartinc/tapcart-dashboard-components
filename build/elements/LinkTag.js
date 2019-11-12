"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkTag = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = ["primary", "primary--reversed", "secondary", "transparent--blue", "transparent--green", "transparent--red", "transparent--white", "save", "save--reversed", "delete", "delete--reversed", "inverted", "inverted--reversed", "secondary--green"];

var LinkTag = _styledComponents["default"].a.attrs(function (props) {
  var type = options.includes(props.type) ? props.type : "primary";
  return {
    type: type
  };
}).withConfig({
  displayName: "LinkTag",
  componentId: "sc-1ekbqos-0"
})(["border-radius:3px;flex-direction:row;align-items:center;justify-items:center;font-size:14px;", ";text-transform:uppercase;line-height:1.5;letter-spacing:1px;padding-top:12px;padding-bottom:12px;z-index:3;padding-right:", ";padding-left:", ";outline:none;border:none;", " &:hover{", ";cursor:pointer;}", " a{font-size:14px;", ";", " text-decoration:none;box-shadow:none;}img{margin-right:4px;margin-left:4px;}position:relative;display:flex;justify-content:center;", " ", ";", ""], _variables.sofia.sofiaMedium, function (props) {
  return props.type.includes("transparent") ? "0px" : "20px";
}, function (props) {
  return props.type.includes("transparent") ? "0px" : "20px";
}, _animations.transition, _animations.hover, function (props) {
  return (0, _functions.getColors)(props.type);
}, _variables.sofia.sofiaMedium, function (props) {
  return (0, _functions.getColors)(props.type);
}, function (props) {
  return props.isDisabled && "background: ".concat(_variables.colors.darkgray, "; color: ").concat(_variables.colors.gray, "; border: none; box-shadow: none;\n    &:hover{\n      cursor: default;\n      transform: translateY(0px)\n    }\n    ");
}, function (props) {
  return props.mobileHide ? "display: none" : "display: flex";
}, function (props) {
  return props.style ? props.style : null;
});

exports.LinkTag = LinkTag;