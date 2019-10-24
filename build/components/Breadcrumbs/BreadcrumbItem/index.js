"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbsItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../../elements/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbsItem = function BreadcrumbsItem(props) {
  return _react["default"].createElement(BreadcrumbsItemStyle, {
    onClick: props.onClick
  }, props.crumb, props.hasSeparator ? _react["default"].createElement(_Icon.Icon, {
    type: "arrow-right",
    style: {
      marginLeft: 20,
      height: 10
    },
    fill: "gray"
  }) : null, props.icon ? _react["default"].createElement("div", {
    style: {
      marginRight: 15
    }
  }, _react["default"].createElement(_Icon.Icon, {
    type: icon,
    style: {
      marginLeft: 20,
      height: 10
    }
  })) : null);
};

exports.BreadcrumbsItem = BreadcrumbsItem;

var BreadcrumbsItemStyle = _styledComponents["default"].li.withConfig({
  displayName: "BreadcrumbItem__BreadcrumbsItemStyle",
  componentId: "y4dmfk-0"
})(["height:100%;display:flex;flex-direction:row;align-items:center;padding-right:10px;padding-top:20px;padding-bottom:20px;font-family:CircularStd-Book;text-transform:uppercase;letter-spacing:0.5px;font-size:13px;margin-right:0px;margin-left:10px;color:#d8d8d8;&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
});