"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledClickableDropdownItem = exports.StyledClickableDropdown = exports.StyledChild = exports.StyledDropdownWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledDropdownWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDropdownWrapper",
  componentId: "sc-1lyt2as-0"
})(["display:inline-block;width:auto;height:auto;position:relative;&:hover{cursor:pointer;}"]);

exports.StyledDropdownWrapper = StyledDropdownWrapper;

var StyledChild = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledChild",
  componentId: "sc-1lyt2as-1"
})(["position:relative;z-index:5;", ""], function (props) {
  return props.open && props.hoverBorder ? "box-shadow:  0 0 0  2px ".concat(_dashVariables.colorPicker.blue, "; border-radius: 3px;") : "box-shadow: 0 0 0 2px transparent; border-radius: 3px;";
});

exports.StyledChild = StyledChild;

var StyledClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "styles__StyledClickableDropdown",
  componentId: "sc-1lyt2as-2"
})(["margin:0px;list-style:none;background:white;width:200px;", ";padding:0px;color:", ";box-shadow:", ";position:absolute;letter-spacing:0.25px;z-index:1;", " ", " ", " transition:all 0.1s ease-in-out;", ";"], _dashVariables.circularStd.book, _dashVariables.colorPicker.black, _variables.boxShadow.medium, function (props) {
  return props.open ? "margin-top: 0px;" : "margin-top: -10px;";
}, function (props) {
  return props.open ? "opacity: 1;" : "opacity: 0;";
}, function (props) {
  return props.open ? "visibility: visible;" : "visibility: hidden;";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledClickableDropdown = StyledClickableDropdown;

var StyledClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "styles__StyledClickableDropdownItem",
  componentId: "sc-1lyt2as-3"
})(["padding:10px;font-size:14px;display:flex;flex-direction:row;align-items:center;transition:all 0.1s ease-in-out;", ";color:", ";padding:18px 14px;&:hover{cursor:pointer;transition:all 0.1s ease-in-out;color:", ";}", ";", ";"], _dashVariables.circularStd.book, _dashVariables.colorPicker.black, _dashVariables.colorPicker.blue, function (props) {
  return !props.lastOption && "border-bottom: 1px solid ".concat(_dashVariables.colorPicker.lightGray);
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledClickableDropdownItem = StyledClickableDropdownItem;