"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _media = _interopRequireDefault(require("../../utils/_media"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ContainerWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerWrapper",
  componentId: "sc-1yn4lrp-0"
})(["box-sizing:border-box;position:relative;padding-left:45px;padding-top:35px;padding-right:45px;max-width:1440px;margin:0 auto;width:100%;", ";", ""], function (props) {
  return props.paddingTop && "padding-top: ".concat(props.paddingTop);
}, function (props) {
  return props.style ? props.style : null;
});
var Container = function Container(props) {
  return /*#__PURE__*/_react["default"].createElement(ContainerWrapper, props);
};
exports.Container = Container;