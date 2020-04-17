"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledErrors = exports.StyledDescription = exports.StyledLabel = exports.StyledFieldInfo = exports.StyledChildren = exports.StyledField = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _Typography = require("../../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledField = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledField",
  componentId: "sc-5ora60-0"
})(["background:white;min-height:78px;display:flex;align-items:center;justify-content:space-between;width:100%;padding:19px 24px;flex-wrap:wrap;", ";"], function (props) {
  return !props.lastField && "border-bottom: 1px solid ".concat(_dashVariables.colorPicker.gray25);
});

exports.StyledField = StyledField;

var StyledChildren = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledChildren",
  componentId: "sc-5ora60-1"
})(["padding:19px 24px;padding-left:5px;", ";", ";", ";", ";", ";", ";", ";"], function (props) {
  return props.fieldFlow === "vertical" && "width: 100%; padding: 0px 24px 19px 24px;";
}, function (props) {
  return props.hasToggle && "padding-left: 19px; width: 100%; padding-top: 0px";
}, function (props) {
  return !props.hasToggle && "display: flex";
}, function (props) {
  return props.hasToggle && !props.toggleState && "display: none";
}, function (props) {
  return props.hasToggle && props.toggleState && "display: flex";
}, function (props) {
  return props.flexWrap && "flex-wrap: wrap";
}, function (props) {
  return props.justifyContent && "justify-content: space-between";
});

exports.StyledChildren = StyledChildren;

var StyledFieldInfo = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFieldInfo",
  componentId: "sc-5ora60-2"
})(["padding:19px 24px;", ""], function (props) {
  return props.style ? props.style : null;
});

exports.StyledFieldInfo = StyledFieldInfo;
var StyledLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-5ora60-3"
})(["line-height:20px;margin-top:0px;margin-bottom:3px;"]);
exports.StyledLabel = StyledLabel;

var StyledDescription = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDescription",
  componentId: "sc-5ora60-4"
})(["color:", ";font-size:13px;line-height:18px;", " ", ";"], _dashVariables.colorPicker.gray, _dashVariables.sofiaPro.regular, function (props) {
  return props.errors && props.errors.length > 0 && "display: none";
});

exports.StyledDescription = StyledDescription;

var StyledErrors = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledErrors",
  componentId: "sc-5ora60-5"
})(["color:", ";font-size:13px;line-height:18px;", " span{display:block;}"], _dashVariables.colorPicker.red, _dashVariables.sofiaPro.regular);

exports.StyledErrors = StyledErrors;