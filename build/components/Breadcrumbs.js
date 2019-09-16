"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Breadcrumbs(props) {
  return _react["default"].createElement(BreadcrumbsStyle, null, props.crumbs.map(function (item, index) {
    return _react["default"].createElement(BreadcrumbsItem, {
      key: item.crumb,
      onClick: item.onClick,
      crumb: item.crumb,
      icon: item.icon,
      selected: props.crumbs.length - 1 === index,
      hasSeparator: item.hasSeparator
    });
  }));
}

function BreadcrumbsItem(props) {
  return _react["default"].createElement(BreadcrumbsItemStyle, {
    onClick: props.onClick
  }, props.icon ? _react["default"].createElement("div", {
    style: {
      marginRight: 15
    }
  }, props.icon) : null, props.crumb, props.hasSeparator && _react["default"].createElement(_variables.Icon, {
    type: "arrow-right",
    style: {
      marginLeft: 20,
      height: 10
    },
    fill: "gray"
  }));
}

var BreadcrumbsStyle = _styledComponents["default"].ul.withConfig({
  displayName: "Breadcrumbs__BreadcrumbsStyle",
  componentId: "sc-17tmvgq-0"
})(["display:flex;align-items:center;flex-direction:row;width:100%;border-bottom:1px solid ", ";padding:0px;margin-top:0px;margin-bottom:0px;padding-left:20px;", ""], _variables.colors.lightgray, function (props) {
  return props.style ? props.style : null;
});

var BreadcrumbsItemStyle = _styledComponents["default"].li.withConfig({
  displayName: "Breadcrumbs__BreadcrumbsItemStyle",
  componentId: "sc-17tmvgq-1"
})(["height:100%;display:flex;flex-direction:row;align-items:center;padding-right:10px;padding-top:20px;padding-bottom:20px;font-family:CircularStd-Book;text-transform:uppercase;letter-spacing:0.5px;font-size:13px;margin-right:0px;margin-left:10px;color:#d8d8d8;&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
});