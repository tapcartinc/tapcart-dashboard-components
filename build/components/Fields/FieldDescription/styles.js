"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDescription = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledDescription = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDescription",
  componentId: "sc-1w0oqmf-0"
})(["color:", ";font-size:13px;line-height:18px;", " ", ";"], _dashVariables.colorPicker.gray, _dashVariables.sofiaPro.regular, function (props) {
  return props.errors && props.errors.length > 0 && "display: none";
});

exports.StyledDescription = StyledDescription;