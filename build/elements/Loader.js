"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../utils/_variables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Loader = function Loader(props) {
  return /*#__PURE__*/_react["default"].createElement(LoaderWrapper, props);
};
exports.Loader = Loader;
var LoaderWrapper = _styledComponents["default"].span.withConfig({
  displayName: "Loader__LoaderWrapper",
  componentId: "sc-11230ix-0"
})(["text-indent:-9999em;width:20px;height:20px;border-radius:50%;background:", ";position:absolute;-webkit-animation:load3 1s infinite linear;animation:load3 1s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);&:before{width:50%;height:50%;background:", ";border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:\"\";}&:after{width:78%;height:78%;border-radius:50%;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;background:", ";}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.loaderBg ? props.loaderBg : _variables.colors.grayText;
}, function (props) {
  return props.color ? props.color : _variables.colors.blue;
}, function (props) {
  return props.innerColor ? props.innerColor : "white";
});