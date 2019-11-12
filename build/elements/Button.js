"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _functions = require("../utils/_functions");

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _animations = require("../utils/_animations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var options = ['primary', 'primary--reversed', 'secondary', 'transparent--blue', 'transparent--green', 'transparent--red', 'transparent--white', 'save', 'save--reversed', 'delete', 'delete--reversed', 'inverted', 'inverted--reversed', 'secondary--green'];

var StyledButton = _styledComponents["default"].button.attrs(function (props) {
  var type = options.includes(props.type) ? props.type : 'primary';
  return {
    type: type
  };
}).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-12aqe4e-0"
})(["border-radius:3px;flex-direction:row;align-items:center;justify-items:center;font-size:14px;", ";text-transform:uppercase;line-height:1.5;letter-spacing:1px;padding-top:12px;padding-bottom:12px;z-index:3;padding-right:", ";padding-left:", ";outline:none;border:none;", " &:hover{", ";cursor:pointer;}", " a{font-size:14px;", ";", " text-decoration:none;box-shadow:none;}img{margin-right:4px;margin-left:4px;}position:relative;display:flex;justify-content:center;", " ", ";", ""], _variables.sofia.sofiaMedium, function (props) {
  return props.type.includes('transparent') ? '0px' : '20px';
}, function (props) {
  return props.type.includes('transparent') ? '0px' : '20px';
}, _animations.transition, _animations.hover, function (props) {
  return (0, _functions.getColors)(props.type);
}, _variables.sofia.sofiaMedium, function (props) {
  return (0, _functions.getColors)(props.type);
}, function (props) {
  return props.isDisabled && "background: ".concat(_variables.colors.darkgray, "; color: ").concat(_variables.colors.gray, "; border: none; box-shadow: none;\n    &:hover{\n      cursor: default;\n      transform: translateY(0px)\n    }\n    ");
}, function (props) {
  return props.mobileHide ? "display: none" : "display: flex";
}, function (props) {
  return props.style ? props.style : null;
});

var Button = function Button(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return _react["default"].createElement(StyledButton, props, props.isLoading && !props.isDisabled ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Loader, props), _react["default"].createElement("div", {
    style: {
      color: 'transparent'
    }
  }, props.children)) : props.children);
};

exports.Button = Button;

var Loader = _styledComponents["default"].span.withConfig({
  displayName: "Button__Loader",
  componentId: "sc-12aqe4e-1"
})(["text-indent:-9999em;width:20px;height:20px;border-radius:50%;background:", ";position:absolute;-webkit-animation:load3 1s infinite linear;animation:load3 1s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);&:before{width:50%;height:50%;background:", ";border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:'';}&:after{width:78%;height:78%;border-radius:50%;content:'';margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;background:", ";}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.type ? (0, _functions.getColors)(props.type).background === 'transparent' ? '#D8D8D8' : 'rgba(255, 255, 255, 0.2)' : 'white';
}, function (props) {
  return props.type ? (0, _functions.getColors)(props.type).color : 'white';
}, function (props) {
  return props.type ? (0, _functions.getColors)(props.type).background === 'transparent' ? 'white' : (0, _functions.getColors)(props.type).background : 'white';
});

Button.propTypes = {
  type: _propTypes["default"].oneOf(options),
  isLoading: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  children: _propTypes.node.isRequired
};
Button.defaultProps = {
  type: 'primary',
  isLoading: false,
  isDisabled: false
};