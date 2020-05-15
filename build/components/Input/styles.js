"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCharCount = exports.StyledInputWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledInputWrapper",
  componentId: "sc-1blhqu6-0"
})(["position:relative;width:100%;", ";.input-style{border-radius:3px;color:", ";width:100%;", ";background:", ";padding:10px 14px;letter-spacing:0.25px;", " &::placeholder{color:", ";", "}&:focus{outline:none;}font-size:14px;", ";font-weight:400;transition:all 0.2s ease-in;", ";", ";}"], function (props) {
  return props.width && "width: ".concat(props.width);
}, _swatches.swatches.black, function (props) {
  return props.errors ? "border: 1px solid ".concat(_swatches.swatches.red) : "border: 1px solid ".concat(_swatches.swatches.grayBlue);
}, function (props) {
  return props.hasInput ? "#ffffff" : _swatches.swatches.offWhite;
}, _dashVariables.sofiaPro.regular, _swatches.swatches.gray, _dashVariables.sofiaPro.regular, function (props) {
  return props.fontSize && "font-size: ".concat(props.fontSize, "px");
}, function (props) {
  return props.disabled && "color: ".concat(_swatches.swatches.grayBlue);
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledInputWrapper = StyledInputWrapper;

var StyledCharCount = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledCharCount",
  componentId: "sc-1blhqu6-1"
})(["position:absolute;text-align:right;right:10px;bottom:13px;color:", ";", " font-size:14px;transition:top 0.1s ease 0s;", ""], function (props) {
  return props.hasInput ? _swatches.swatches.blue : _swatches.swatches.gray;
}, function (props) {
  return props.charCountHit && "color: ".concat(_swatches.swatches.red, ";");
}, _dashVariables.sofiaPro.regular);

exports.StyledCharCount = StyledCharCount;