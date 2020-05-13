"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdownHeader = exports.StyledClickableDropdown = exports.StyledDropDownSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledDropDownSection = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDropDownSection",
  componentId: "xp71bd-0"
})(["", ";position:relative;display:inline-block;overflow:visible;width:auto;", ""], function (props) {
  return props.disabled && "display: none;";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledDropDownSection = StyledDropDownSection;

var StyledClickableDropdown = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledClickableDropdown",
  componentId: "xp71bd-1"
})(["margin:0px;list-style:none;width:200px;", " padding:0px;color:", ";position:absolute;z-index:1;visibility:hidden;opacity:0;top:", ";", " ", " transition:all 0.2s ease-in-out;", " ", " ", ";", ";ul{background:white;width:195px;border-radius:3px;overflow:hidden;", ";", ";box-shadow:", ";}"], _dashVariables.sofiaPro.medium, _dashVariables.colorPicker.blue, function (props) {
  return props.top ? props.top : "0";
}, function (props) {
  return props.direction === "right" && "\n  right: 0;\n  ";
}, function (props) {
  return props.direction === "left" && "\n  left: 0;\n  ";
}, function (props) {
  return props.direction === "right" && props.open && "\n  visibility: visible; opacity: 1; right: -200px;\n  ";
}, function (props) {
  return props.direction === "left" && props.open && "\n  visibility: visible; opacity: 1; left: -200px;\n  ";
}, function (props) {
  return props.style ? props.style : null;
}, function (props) {
  return props.disabled && "display: none";
}, function (props) {
  return props.direction === "right" && "margin-left: 5px";
}, function (props) {
  return props.direction === "left" && "margin-right: 5px";
}, _variables.boxShadow.medium);

exports.StyledClickableDropdown = StyledClickableDropdown;

var StyledDropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDropdownHeader",
  componentId: "xp71bd-2"
})(["position:relative;z-index:5;&:hover{cursor:pointer;", ";}", ";"], function (props) {
  return props.disabled && "cursor: default";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledDropdownHeader = StyledDropdownHeader;