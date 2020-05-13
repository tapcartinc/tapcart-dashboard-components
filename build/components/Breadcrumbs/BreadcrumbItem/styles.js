"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBreadcrumb = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBreadcrumb = _styledComponents["default"].li.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledBreadcrumb",
  componentId: "sc-100mugb-0"
})(["height:100%;display:flex;flex-direction:row;align-items:center;padding-right:10px;padding-top:10px;padding-bottom:7px;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;text-transform:uppercase;line-height:1.6;letter-spacing:1px;font-size:14px;margin-right:0px;margin-left:0px;line-height:34px;color:", ";a{color:", ";text-decoration:none;display:flex;flex-direction:row;align-items:center;}span{margin-left:-5px;height:100%;}transition:all 0.2s ease-in-out;", " ", ";"], function (props) {
  return props.active ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.active ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.gray;
}, function (props) {
  return !props.active && "  &:hover {\ntransform: translateY(-2px);\ntransition: all 0.2s ease-in-out;\ncursor: pointer;\n}";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledBreadcrumb = StyledBreadcrumb;