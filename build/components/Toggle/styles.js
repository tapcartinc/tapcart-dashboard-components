"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToggleInput = exports.StyledToggleWrapper = exports.StyledToggleLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledToggleLabel = _styledComponents["default"].label.withConfig({
  displayName: "styles__StyledToggleLabel",
  componentId: "sc-1j3i9xu-0"
})(["position:relative;width:64px;height:32px;cursor:pointer;height:32px;box-shadow:0 0 0 1px ", ";border-radius:3px;background:", ";transition:0.2s;&:hover{cursor:pointer;}&::after{content:\"\";display:block;width:33px;height:34px;border-radius:3px;border:1px solid ", ";background:white;box-shadow:0 2px 10px 0 rgba(0,0,0,0.11);-webkit-transition:0.2s;transition:0.2s;position:absolute;&:hover{cursor:pointer;}", ";}"], function (props) {
  return props.toggleState ? props.backgroundOn : props.border;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.backgroundOff;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.border;
}, function (props) {
  return !props.toggleState ? "left: -1px; top: -1px;" : "right: -1px; top: -1px;";
});

exports.StyledToggleLabel = StyledToggleLabel;

var StyledToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledToggleWrapper",
  componentId: "sc-1j3i9xu-1"
})(["position:relative;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

exports.StyledToggleWrapper = StyledToggleWrapper;

var StyledToggleInput = _styledComponents["default"].input.withConfig({
  displayName: "styles__StyledToggleInput",
  componentId: "sc-1j3i9xu-2"
})(["opacity:0;z-index:1;width:64px;height:32px;transition:0.2s;position:absolute;&:hover{cursor:pointer;}&:checked{transition:0.2s;&::after{content:\"\";display:block;width:32px;height:32px;margin-left:34px;left:0px;transition:0.2s;}}"]);

exports.StyledToggleInput = StyledToggleInput;