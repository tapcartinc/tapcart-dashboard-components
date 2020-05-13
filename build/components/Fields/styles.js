"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = exports.StyledFields = exports.StyledFieldsWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFieldsWrapper",
  componentId: "sc-1lugzlr-0"
})(["display:flex;flex-direction:column;max-width:800px;margin:0 auto;width:100%;margin-bottom:10px;align-items:flex-start;", ";", ";", ";", ";"], function (props) {
  return props.maxWidth && "max-width: ".concat(props.maxWidth);
}, function (props) {
  return props.padding && "padding: ".concat(props.padding);
}, function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledFieldsWrapper = StyledFieldsWrapper;

var StyledFields = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFields",
  componentId: "sc-1lugzlr-1"
})(["border-radius:3px;width:100%;border:1px solid ", ";"], _dashVariables.colorPicker.gray25);

exports.StyledFields = StyledFields;

var SectionHeader = _styledComponents["default"].h3.withConfig({
  displayName: "styles__SectionHeader",
  componentId: "sc-1lugzlr-2"
})(["font-size:18px;line-height:22px;color:", ";", " margin-bottom:8px;margin-top:32px;"], _dashVariables.colorPicker.blue, _dashVariables.circularStd.medium);

exports.SectionHeader = SectionHeader;