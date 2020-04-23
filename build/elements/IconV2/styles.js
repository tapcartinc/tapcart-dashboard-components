"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSVG = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledSVG = _styledComponents["default"].svg.withConfig({
  displayName: "styles__StyledSVG",
  componentId: "sc-1c6974b-0"
})(["", " ", ";margin-left:", ";margin-right:", ";", ";"], function (props) {
  return props.circleIcon && "background: ".concat(_dashVariables.colorPicker.dullBlue, ";\n  border-radius: 50%;\n  padding: 5px;\n  overflow: visible;\n  -webkit-transform: scale(1.5);\n  -ms-transform: scale(1.5);\n  transform: scale(1.5);\n  margin: 0 auto;\n  height: 25px;\n  width: 25px;");
}, function (props) {
  return props.fill && "color: ".concat(props.fill, " ");
}, function (props) {
  return props.iconRight ? "10px" : "0px";
}, function (props) {
  return props.iconLeft ? "10px" : "0px";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledSVG = StyledSVG;