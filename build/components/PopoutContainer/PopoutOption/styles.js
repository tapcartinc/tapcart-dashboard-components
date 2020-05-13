"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopoutOptionWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPopoutOptionWrapper = _styledComponents["default"].li.withConfig({
  displayName: "styles__StyledPopoutOptionWrapper",
  componentId: "sc-17cep2c-0"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:12px 14px 12px 14px;display:flex;align-items:center;border-bottom:1px solid ", ";font-size:14px;color:", ";", " text-transform:capitalize;&:hover{cursor:pointer;}", ";.popout-option-children{margin-left:auto;}"], _dashVariables.colorPicker.lightGray, _dashVariables.colorPicker.black, _dashVariables.sofiaPro.medium, function (props) {
  return props.lastIndex && "border-bottom: 0px";
});

exports.StyledPopoutOptionWrapper = StyledPopoutOptionWrapper;