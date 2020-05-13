"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOption = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledOption = _styledComponents["default"].li.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledOption",
  componentId: "ctuazj-0"
})(["height:120px;max-width:120px;min-width:120px;width:", ";margin-right:-1px;border:1px solid ", ";display:flex;flex-direction:column;background:white;", ";", ";justify-items:center;align-items:center;justify-content:center;color:", ";", ";", ";&:hover{cursor:pointer;}"], function (props) {
  return props.size ? props.size : "33.333%";
}, _dashVariables.colorPicker.border2, function (props) {
  return props.selectedOption && "background: ".concat(_dashVariables.colorPicker.lightBlue);
}, function (props) {
  return props.included && props.included.length && props.included[0].value === props.currentOption && "background: ".concat(_dashVariables.colorPicker.lightBlue);
}, _dashVariables.colorPicker.black, function (props) {
  return props.first && "border-radius: 3px 0px 0px 3px";
}, function (props) {
  return props.last && "border-radius: 0px 3px 3px 0px";
});

exports.StyledOption = StyledOption;