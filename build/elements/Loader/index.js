"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledLoaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Loader__StyledLoaderWrapper",
  componentId: "sc-1nlsaug-0"
})(["text-indent:-9999em;width:25px;height:25px;border-radius:50%;background:red;background:", ";position:absolute;-webkit-animation:load3 0.85s infinite linear;animation:load3 0.85s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);&:before{width:50%;height:50%;background:#ffffff;border-radius:100% 0px 0px 0px;background:", ";position:absolute;top:0;left:0;content:\"\";}&:after{width:18px;height:18px;border-radius:100px;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;background:", ";}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.loaderColors.bg;
}, function (props) {
  return props.loaderColors.fg;
}, function (props) {
  return props.loaderColors.bg;
});

var Loader = function Loader(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledLoaderWrapper, {
    loaderColors: props.loaderColors
  });
}; // TODO: add proptypes
// bg color for when on colored bgs
// {fg: and bg: }


exports.Loader = Loader;