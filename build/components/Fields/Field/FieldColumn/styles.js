"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldColumn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldColumn = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledFieldColumn",
  componentId: "hmqw51-0"
})(["width:50%;.flex-end{justify-content:flex-end;}", ";", ""], function (props) {
  return props.stretch && "width: 100%";
}, function (props) {
  return props.style;
});

exports.StyledFieldColumn = StyledFieldColumn;