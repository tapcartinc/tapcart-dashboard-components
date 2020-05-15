"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextareaWrapper = exports.StyledCharCount = exports.StyledLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _Label = require("../../elements/Label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTextareaWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledTextareaWrapper",
  componentId: "sc-1qsfz6j-0"
})(["position:relative;width:100%;", ";.input-style{border-radius:3px;", ";background:", ";padding:8px 17px;line-height:18px;letter-spacing:0.25px;color:#000000;width:100%;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;&::placeholder{font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;color:", ";}&:focus{outline:none;}font-size:14px;", ";font-weight:400;transition:border 200ms ease;min-height:125px;overflow-y:scroll;resize:none;", ";}", ";"], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.errors ? "border: 1px solid ".concat(_swatches.swatches.red) : "border: 1px solid ".concat(_swatches.swatches.grayBlue);
}, function (props) {
  return props.hasInput ? "#ffffff" : _swatches.swatches.offWhite;
}, _swatches.swatches.gray, function (props) {
  return props.fontSize && "font-size: ".concat(fontSize, "px");
}, function (props) {
  return props.height && "height: ".concat(props.height, "px");
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledTextareaWrapper = StyledTextareaWrapper;

var StyledCharCount = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledCharCount",
  componentId: "sc-1qsfz6j-1"
})(["position:absolute;text-align:right;right:6px;bottom:8px;color:", ";", " font-size:14px;transition:top 0.5s ease 0s;"], function (props) {
  return props.hasInput ? _swatches.swatches.blue : _swatches.swatches.gray;
}, function (props) {
  return props.charCountHit && "color: ".concat(_swatches.swatches.red, ";");
});

exports.StyledCharCount = StyledCharCount;
var StyledLabel = (0, _styledComponents["default"])(_Label.Label).withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-1qsfz6j-2"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";"], function (props) {
  return props.errors ? _swatches.swatches.red : "#000000";
});
exports.StyledLabel = StyledLabel;