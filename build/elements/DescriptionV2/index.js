"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionV2 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../SwatchesV2/index");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DescriptionV2 = _styledComponents["default"].p.attrs({
  className: "p"
}).withConfig({
  displayName: "DescriptionV2",
  componentId: "sc-1t1t3r1-0"
})(["color:", ";font-size:", ";line-height:18px;", " -webkit-font-smoothing:antialiased;letter-spacing:normal;"], _index.swatches.gray, function (props) {
  return props.fontSize ? props.fontSize : "13px";
}, _dashVariables.circularStd.book);

exports.DescriptionV2 = DescriptionV2;