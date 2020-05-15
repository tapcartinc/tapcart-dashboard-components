"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownHeader = exports.ClickableDropdownItem = exports.ClickableDropdown = exports.DDWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _swatches = require("../../utils/_swatches");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DDWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__DDWrapper",
  componentId: "sc-137rftf-0"
})(["position:relative;z-index:100;", ";", ";z-index:100;", ";"], function (props) {
  return props.position === "right" && "\n  position: absolute;\n  right: 10px";
}, function (props) {
  return props.position === "left" && "\n  position: absolute;\n  left: 10px";
}, function (props) {
  return props.style ? props.style : null;
});

exports.DDWrapper = DDWrapper;

var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "styles__ClickableDropdown",
  componentId: "sc-137rftf-1"
})(["margin:0px;border-radius:3px;list-style:none;box-shadow:", ";position:absolute;padding:0px;z-index:1;background:white;width:218px;", " ", " ", ";", ""], _dashVariables.boxShadow.medium, function (props) {
  return props.position === "right" && "right: 0;";
}, function (props) {
  return props.position === "left" && "left: 0;";
}, function (props) {
  return props.style ? props.style : null;
}, _dashVariables.sofiaPro.regular);

exports.ClickableDropdown = ClickableDropdown;

var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "styles__ClickableDropdownItem",
  componentId: "sc-137rftf-2"
})(["font-size:15px;background:white;border-bottom:1px solid ", ";", " display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:10px 17px;&:hover{cursor:pointer;background:", ";}", " ", ";"], _swatches.swatches.textEmpty, function (props) {
  return props.lastItem && "border-bottom: none;";
}, _swatches.swatches.lightBlue, _dashVariables.sofiaPro.medium, function (props) {
  return props.style ? props.style : null;
});

exports.ClickableDropdownItem = ClickableDropdownItem;

var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__DropdownHeader",
  componentId: "sc-137rftf-3"
})(["width:37px;height:100%;z-index:100;&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
});

exports.DropdownHeader = DropdownHeader;