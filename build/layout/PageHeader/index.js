"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = require("../../elements/Typography");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PageHeader = function PageHeader(props) {
  var header = props.header,
      description = props.description,
      children = props.children,
      childrenStyles = props.childrenStyles;
  return _react["default"].createElement(StyledPageHeader, props, _react["default"].createElement(StyledPageHeaderMain, null, _react["default"].createElement(_Typography.Header, {
    style: {
      fontSize: 18,
      lineHeight: 1.28
    }
  }, header), _react["default"].createElement(StyledBody, props, description)), _react["default"].createElement(StyledPageHeaderChildren, {
    childrenStyles: childrenStyles
  }, children));
};

exports.PageHeader = PageHeader;

var StyledPageHeader = _styledComponents["default"].div.withConfig({
  displayName: "PageHeader__StyledPageHeader",
  componentId: "wiz6to-0"
})(["display:flex;align-items:flex-start;justify-content:space-between;width:100%;padding-bottom 0px;margin:0 auto;", ";"], function (props) {
  return props.style ? props.style : null;
});

var StyledPageHeaderMain = _styledComponents["default"].div.withConfig({
  displayName: "PageHeader__StyledPageHeaderMain",
  componentId: "wiz6to-1"
})(["display:flex;flex-direction:column;text-align:left;justify-content:flex-start;align-items:flex-start;margin-right:30px;"]);

var StyledPageHeaderChildren = _styledComponents["default"].div.withConfig({
  displayName: "PageHeader__StyledPageHeaderChildren",
  componentId: "wiz6to-2"
})(["", ""], function (props) {
  return props.childrenStyles ? childrenStyles : null;
});

var StyledBody = _styledComponents["default"].div.withConfig({
  displayName: "PageHeader__StyledBody",
  componentId: "wiz6to-3"
})(["margin-top:8px;margin-bottom:8px;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;line-height:1.5;letter-spacing:normal;color:", ";", ";", ";", ""], function (props) {
  return props.color ? props.color : _dashVariables.colorPicker.black;
}, function (props) {
  return props.align === "center" && "text-align: center";
}, function (props) {
  return props.align === "left" && "text-align: left";
}, function (props) {
  return props.style ? props.style : null;
});