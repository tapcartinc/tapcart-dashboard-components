"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSecondaryControlStyle = exports.StyledSegmentedControlStyle = exports.StyledSegmentedControlTabs = exports.StyledFieldTab = exports.StyledFieldSegmentedControlTabs = exports.StyledFieldSegmentedControl = exports.StyledTab = exports.StyledSecondaryTab = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldSegmentedControl = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFieldSegmentedControl",
  componentId: "u938f3-0"
})(["height:38px;border-radius:3px;background:", ";width:100%;overflow:hidden;text-align:center;margin:auto;border:1px solid ", ";text-transform:uppercase;", ""], function (props) {
  return props.bgColor ? props.bgColor : "transparent";
}, _dashVariables.colorPicker.blue, _dashVariables.sofiaPro.regular);

exports.StyledFieldSegmentedControl = StyledFieldSegmentedControl;

var StyledFieldSegmentedControlTabs = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFieldSegmentedControlTabs",
  componentId: "u938f3-1"
})(["width:100%;display:flex;flex-direction:row;justify-items:space-between;"]);

exports.StyledFieldSegmentedControlTabs = StyledFieldSegmentedControlTabs;

var StyledFieldTab = _styledComponents["default"].label.withConfig({
  displayName: "styles__StyledFieldTab",
  componentId: "u938f3-2"
})(["flex:1;height:38px;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;z-index:1;font-size:14px;letter-spacing:1px;", ";", " ", ";input{visibility:hidden;width:100%;height:100%;border:1px solid ", ";margin:0;position:absolute;}"], function (props) {
  return !props.firstIndex && "border-left: 1px solid ".concat(_dashVariables.colorPicker.blue);
}, _dashVariables.sofiaPro.regular, function (props) {
  return props.current === props.htmlFor ? "\n    background: ".concat(_dashVariables.colorPicker.blue, ";\n    color: #ffffff;\n  ") : "color: ".concat(_dashVariables.colorPicker.blue);
}, _dashVariables.colorPicker.black);

exports.StyledFieldTab = StyledFieldTab;

var StyledSegmentedControlTabs = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledSegmentedControlTabs",
  componentId: "u938f3-3"
})(["width:100%;display:flex;flex-direction:row;justify-items:space-between;box-shadow:inset 0 0 0 1px ", ";", ""], _dashVariables.colorPicker.grayBlue, _dashVariables.sofiaPro.regular);

exports.StyledSegmentedControlTabs = StyledSegmentedControlTabs;

var StyledSegmentedControlStyle = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledSegmentedControlStyle",
  componentId: "u938f3-4"
})(["margin:auto;overflow:hidden;height:100%;display:flex;flex-direction:row;justify-items:space-between;width:100%;", ";", ""], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledSegmentedControlStyle = StyledSegmentedControlStyle;

var StyledSecondaryControlStyle = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledSecondaryControlStyle",
  componentId: "u938f3-5"
})(["margin:0px;max-width:450px;overflow:hidden;display:flex;flex-direction:row;min-height:42px;", ""], function (props) {
  return props.style ? props.style : null;
});

exports.StyledSecondaryControlStyle = StyledSecondaryControlStyle;

var StyledTab = _styledComponents["default"].label.withConfig({
  displayName: "styles__StyledTab",
  componentId: "u938f3-6"
})(["color:", ";font-size:15px;flex:1;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;z-index:1;padding:15px 0px;text-transform:uppercase;letter-spacing:0.5px;", " ", ";&:hover{cursor:pointer;}input{visibility:hidden;width:100%;height:100%;border:1px solid ", ";margin:0;position:absolute;}"], _dashVariables.colorPicker.black, _dashVariables.sofiaPro.regular, function (props) {
  return props.current === props.htmlFor && "background: ".concat(_dashVariables.colorPicker.blue, ";\n    color: #ffffff;\n    border-radius: 3px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);");
}, _dashVariables.colorPicker.black);

exports.StyledTab = StyledTab;

var StyledSecondaryTab = _styledComponents["default"].label.withConfig({
  displayName: "styles__StyledSecondaryTab",
  componentId: "u938f3-7"
})(["flex:1;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;z-index:1;padding:10px;letter-spacing:0.5px;color:", ";font-size:14px;width:100%;transition:ease-out 0.2s;border:1px solid transparent;", " &:hover{cursor:pointer;}input{visibility:hidden;width:100%;height:100%;border:1px solid ", ";margin:0;position:absolute;}", ""], _dashVariables.colorPicker.grayBlue, function (props) {
  return props.current === props.htmlFor && "background: #ffffff;\n    color: ".concat(_dashVariables.colorPicker.blue, ";\n    border-radius: 3px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);\n    opacity: 1;\n    border: 1px solid ").concat(_dashVariables.colorPicker.blue, ";\n    ");
}, _dashVariables.colorPicker.black, _dashVariables.sofiaPro.regular);

exports.StyledSecondaryTab = StyledSecondaryTab;