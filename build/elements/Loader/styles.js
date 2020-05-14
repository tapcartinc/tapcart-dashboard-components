"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLoaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledLoaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledLoaderWrapper",
  componentId: "sc-16zq9sq-0"
})(["text-indent:-9999em;", ";border-radius:50%;background:", ";position:absolute;-webkit-animation:load3 0.85s infinite linear;animation:load3 0.85s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);&:before{width:50%;height:50%;background:#ffffff;border-radius:100% 0px 0px 0px;background:", ";position:absolute;top:0;left:0;content:\"\";}&:after{width:18px;height:18px;", " border-radius:100px;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;background:", ";", ";}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.size ? "height: ".concat(props.size, "px; width: ").concat(props.size, "px;") : "height: 25px; width: 25px";
}, function (props) {
  return props.loaderColors.bg;
}, function (props) {
  return props.loaderColors.fg;
}, function (props) {
  var diameter = 18;

  if (props.size) {
    diameter = Math.trunc(props.size / 1.3);
  }

  return "height: ".concat(diameter, "px; width: ").concat(diameter, "px;");
}, function (props) {
  return props.loaderColors.bg;
}, function (props) {
  return props.parentBgColor && "background: ".concat(props.parentBgColor);
});

exports.StyledLoaderWrapper = StyledLoaderWrapper;