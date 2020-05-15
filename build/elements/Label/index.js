"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = _styledComponents["default"].div.attrs({
  className: "p"
}).withConfig({
  displayName: "Label",
  componentId: "sc-1vw921w-0"
})(["color:", ";font-size:", ";line-height:1.5;margin-bottom:7px;-webkit-font-smoothing:antialiased;letter-spacing:normal;", ""], function (props) {
  return props.errors ? _swatches.swatches.red : _swatches.swatches.black;
}, function (props) {
  return props.fontSize ? props.fontSize : "14px";
}, _dashVariables.circularStd.book);

exports.Label = Label;