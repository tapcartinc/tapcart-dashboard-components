"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltipWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _variables = require("../../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTooltipWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledTooltipWrapper",
  componentId: "sc-1xoxof4-0"
})(["height:14px;width:14px;position:relative;cursor:pointer;margin:8px;svg{transition:0.3s ease;}&:hover .tooltip{", ";}.tooltip{padding:10px;position:absolute;width:auto;white-space:pre;max-width:418px;box-shadow:", ";border-radius:3px;background-color:#fff;top:", ";left:50%;transform:translateX(-50%);transform-style:preserve-3d;z-index:200;display:none;font-size:13px;padding:8px 15px;line-height:1.46;&:after{content:\"\";position:absolute;display:block;width:10px;height:10px;transform-origin:50% 50%;transform:rotate(45deg) translateX(-50%);background-color:#fff;left:50%;bottom:-6px;z-index:400;}&:before{content:\"\";display:block;position:absolute;width:10px;height:10px;transform-origin:50% 50%;transform:rotate(45deg) translateX(-50%) translateZ(-1px);background-color:#fff;left:50%;bottom:-4px;z-index:-1;box-shadow:", ";}}"], function (props) {
  return props.open && "display: block;";
}, _variables.boxShadow.small, function (props) {
  return props.top;
}, _variables.boxShadow.small);

exports.StyledTooltipWrapper = StyledTooltipWrapper;