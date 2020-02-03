"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../../elements/Icon");

var _variables = require("../../../utils/_variables");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _media = _interopRequireDefault(require("../../../utils/_media"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var crumb = _ref.crumb,
      icon = _ref.icon,
      onClick = _ref.onClick,
      active = _ref.active,
      index = _ref.index;
  return _react["default"].createElement(StyledCrumb, null, index !== 0 ? _react["default"].createElement(_Icon.Icon, {
    type: "arrow-right",
    iconLeft: true,
    iconRight: true,
    fill: active ? _dashVariables.colorPicker.gray : _dashVariables.colorPicker.blue
  }) : null, _react["default"].createElement(BreadcrumbsItemStyle, {
    onClick: onClick,
    active: active
  }, icon ? _react["default"].createElement(_Icon.Icon, {
    type: icon,
    iconLeft: true,
    fill: _dashVariables.colorPicker.blue,
    style: {
      height: 18,
      marginRight: 15,
      marginTop: 2
    }
  }) : null, _react["default"].createElement("span", null, crumb)));
};

exports.BreadcrumbsItem = BreadcrumbsItem;

var BreadcrumbsItemStyle = _styledComponents["default"].li.withConfig({
  displayName: "BreadcrumbItem__BreadcrumbsItemStyle",
  componentId: "nuqiaq-0"
})(["height:100%;display:flex;flex-direction:row;align-items:center;padding-right:10px;padding-top:10px;padding-bottom:10px;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;text-transform:uppercase;line-height:1.6;letter-spacing:1px;font-size:14px;margin-right:0px;margin-left:10px;line-height:34px;color:", ";span{margin-left:-5px;height:100%;}transition:all 0.2s ease-in-out;", " ", ";"], function (props) {
  return props.active ? _dashVariables.colorPicker.gray : _dashVariables.colorPicker.blue;
}, function (props) {
  return !props.active && "  &:hover {\n  transform: translateY(-2px);\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}";
}, function (props) {
  return props.style ? props.style : null;
});

var StyledCrumb = _styledComponents["default"].div.withConfig({
  displayName: "BreadcrumbItem__StyledCrumb",
  componentId: "nuqiaq-1"
})(["align-items:center;display:flex;"]);