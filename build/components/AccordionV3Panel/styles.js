"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabelChildren = exports.StyledStep = exports.StyledPanelInnerChildren = exports.StyledPanelChildrenWrapper = exports.StyledPanelLabel = exports.StyledPanelWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPanelWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelWrapper",
  componentId: "sc-1ew6v6b-0"
})(["padding:0px 30px 0px 15px;border-radius:3px;background:white;", ";", ";", ";", ";"], function (props) {
  return props.spacing ? "margin-bottom: ".concat(props.spacing, "px") : "margin-bottom: 8px";
}, function (props) {
  return props.includeBorder && props.isOpen ? "border: 2px solid ".concat(_dashVariables.colorPicker.blue) : "border: 2px solid ".concat(_dashVariables.colorPicker.textEmpty);
}, function (props) {
  return props.includeBorder && props.error && "border: 2px solid ".concat(_dashVariables.colorPicker.red);
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledPanelWrapper = StyledPanelWrapper;

var StyledPanelLabel = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelLabel",
  componentId: "sc-1ew6v6b-1"
})(["cursor:pointer;transition:0.5s;display:flex;justify-content:flex-start;align-items:center;text-align:left;min-height:35px;", ";", ";"], function (props) {
  return props.panelHeight && "height: ".concat(props.panelHeight, "px");
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledPanelLabel = StyledPanelLabel;

var StyledPanelChildrenWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelChildrenWrapper",
  componentId: "sc-1ew6v6b-2"
})(["", ""], function (props) {
  return props.isOpen ? "\n      max-height: 100rem;\n      transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n      transition-duration: 0.5s;\n      transition-property: max-height;\n" : "max-height: 0;\n      overflow: hidden;\n      text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n      transition-duration: 0.5s;\n      transition-property: max-height;\n      z-index: 1;\n      position: relative;\n  ";
});

exports.StyledPanelChildrenWrapper = StyledPanelChildrenWrapper;

var StyledPanelInnerChildren = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelInnerChildren",
  componentId: "sc-1ew6v6b-3"
})(["padding-bottom:25px;", ""], function (props) {
  return props.isOpen ? "\n    opacity: 1;\n    transform: translateY(0);\n    transition-delay: 0.2s;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n\n" : "opacity: 0;\n    transform: translateY(-1rem);\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.2s;\n  transition-property: opacity, transform;\n\n";
});

exports.StyledPanelInnerChildren = StyledPanelInnerChildren;

var StyledStep = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledStep",
  componentId: "sc-1ew6v6b-4"
})(["transition:0.2s all ease-in-out;background:", ";height:26px;width:26px;border-radius:50px;color:white;font-size:14px;display:flex;align-items:center;justify-content:center;margin-right:15px;", ""], function (props) {
  return props.stepComplete ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.blue;
}, function (props) {
  return props.error && "background: ".concat(_dashVariables.colorPicker.red, ";");
});

exports.StyledStep = StyledStep;

var StyledLabelChildren = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledLabelChildren",
  componentId: "sc-1ew6v6b-5"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;"]);

exports.StyledLabelChildren = StyledLabelChildren;