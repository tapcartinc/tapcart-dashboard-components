"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _BreadcrumbItem = require("./BreadcrumbItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Breadcrumbs(props) {
  return _react["default"].createElement(BreadcrumbsStyle, null, props.crumbs.map(function (item, index) {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_BreadcrumbItem.BreadcrumbsItem, {
      key: item.crumb,
      onClick: item.onClick,
      crumb: item.crumb,
      icon: item.icon,
      selected: props.crumbs.length - 1 === index,
      hasSeparator: item.hasSeparator
    }));
  }));
}

var BreadcrumbsStyle = _styledComponents["default"].ul.withConfig({
  displayName: "Breadcrumbs__BreadcrumbsStyle",
  componentId: "z4mcfa-0"
})(["display:flex;align-items:center;flex-direction:row;width:100%;border-bottom:1px solid ", ";padding:0px;margin-top:0px;margin-bottom:0px;padding-left:20px;", ""], _variables.colors.lightgray, function (props) {
  return props.style ? props.style : null;
});