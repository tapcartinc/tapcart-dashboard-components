"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swatches = require("../../utils/_swatches");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Description = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "Description",
  componentId: "sc-17f7a1w-0"
})(["color:", ";font-size:", ";line-height:18px;", " -webkit-font-smoothing:antialiased;letter-spacing:normal;"], _swatches.swatches.gray, function (props) {
  return props.fontSize ? props.fontSize : "13px";
}, _dashVariables.circularStd.book);

exports.Description = Description;