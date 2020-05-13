"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelV2 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LabelV2 = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "LabelV2",
  componentId: "sc-5m2zwq-0"
})(["color:", ";font-size:", ";line-height:1.5;margin-bottom:7px;-webkit-font-smoothing:antialiased;letter-spacing:normal;", ""], function (props) {
  return props.errors ? _swatches.swatches.red : _swatches.swatches.black;
}, function (props) {
  return props.fontSize ? props.fontSize : "14px";
}, _dashVariables.circularStd.book);

exports.LabelV2 = LabelV2;