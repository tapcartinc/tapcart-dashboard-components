"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOptionBoxesWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledOptionBoxesWrapper = _styledComponents["default"].ul.withConfig({
  displayName: "styles__StyledOptionBoxesWrapper",
  componentId: "sc-1ryrcb7-0"
})(["display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;font-size:15px;text-transform:capitalize;border-radius:4px;", " ", ";"], _dashVariables.sofiaPro.regular, function (props) {
  return props.style ? props.style : null;
});

exports.StyledOptionBoxesWrapper = StyledOptionBoxesWrapper;