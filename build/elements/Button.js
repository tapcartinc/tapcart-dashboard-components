"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _functions = require("../utils/_functions");
var _variables = require("../utils/_variables");
var _dashVariables = require("../utils/_dashVariables");
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _animations = require("../utils/_animations");
var _excluded = ["label"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var options = ["primary", "primary--reversed", "secondary", "transparent--blue", "transparent--green", "transparent--red", "transparent--white", "transparent--gray", "save", "save--reversed", "delete", "delete--reversed", "inverted", "inverted--reversed", "secondary--green", "submit", "gray--reversed", "gray"];
var StyledButtonWrapper = _styledComponents["default"].button.attrs(function (props) {
  var kind = options.includes(props.kind) ? props.kind : "primary";
  return {
    kind: kind
  };
}).withConfig({
  displayName: "Button__StyledButtonWrapper",
  componentId: "sc-mktk3o-0"
})(["border-radius:3px;flex-direction:row;align-items:center;justify-items:center;font-size:14px;font-style:normal;font-family:SofiaPro-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:500;text-transform:uppercase;line-height:1.5;letter-spacing:1px;padding-top:12px;padding-bottom:12px;z-index:3;outline:none;border:none;", " &:hover{", ";cursor:pointer;}", " ", " a{font-size:14px;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;", ";font-family:SofiaPro-Medium,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:500;", " text-decoration:none;box-shadow:none;}img{margin-right:4px;margin-left:4px;}position:relative;display:flex;justify-content:center;", " padding-right:", ";padding-left:", ";", ";", ";", ""], _animations.transition, _animations.hover, function (props) {
  return (0, _functions.getColors)(props.kind);
}, function (props) {
  return props.stacked && "flex-direction: column; align-items: center; text-transform: none;";
}, _dashVariables.sofiaPro.medium, function (props) {
  return (0, _functions.getColors)(props.kind);
}, function (props) {
  return props.isDisabled && "background: ".concat(_dashVariables.colorPicker.gray, "; color: ").concat(_dashVariables.colorPicker.lightGray, "; border: none; box-shadow: none;\n    &:hover{\n      cursor: default;\n      transform: translateY(0px)\n    }\n    ");
}, function (props) {
  return props.kind.includes("transparent") ? "0px" : "16px";
}, function (props) {
  return props.kind.includes("transparent") ? "0px" : "16px";
}, function (props) {
  return props.thin && "padding: 8px 16px";
}, function (props) {
  return props.mobileHide ? "display: none" : "display: flex";
}, function (props) {
  return props.style ? props.style : null;
});
var Button = function Button(_ref) {
  var label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(StyledButtonWrapper, props, props.isLoading && !props.isDisabled ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Loader, props), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: "transparent"
    }
  }, props.children)) : props.children);
};
exports.Button = Button;
var Loader = _styledComponents["default"].span.withConfig({
  displayName: "Button__Loader",
  componentId: "sc-mktk3o-1"
})(["text-indent:-9999em;width:20px;height:20px;border-radius:50%;background:", ";position:absolute;-webkit-animation:load3 1s infinite linear;animation:load3 1s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);&:before{width:50%;height:50%;background:", ";border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:\"\";}&:after{width:78%;height:78%;border-radius:50%;content:\"\";margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;background:", ";}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.kind ? (0, _functions.getColors)(props.kind).background === "transparent" ? "#D8D8D8" : "rgba(255, 255, 255, 0.2)" : "white";
}, function (props) {
  return props.kind ? (0, _functions.getColors)(props.kind).color : "white";
}, function (props) {
  return props.kind ? (0, _functions.getColors)(props.kind).background === "transparent" ? "white" : (0, _functions.getColors)(props.kind).background : "white";
});
Button.propTypes = {
  /**
   * options: "primary",
  "primary--reversed",
  "secondary",
  "transparent--blue",
  "transparent--green",
  "transparent--red",
  "transparent--white",
  "transparent--gray",
  "save",
  "save--reversed",
  "delete",
  "delete--reversed",
  "inverted",
  "inverted--reversed",
  "secondary--green",
  "submit",
  "gray--reversed",
  "gray"
   */
  kind: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  /**
   * Reduces vertical padding of button
   */
  thin: _propTypes["default"].bool,
  children: _propTypes.node.isRequired
};
Button.defaultProps = {
  kind: "primary",
  isLoading: false,
  isDisabled: false
};