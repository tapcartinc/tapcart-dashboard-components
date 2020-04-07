"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _Typography = require("../../elements/Typography");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = function Textarea(_ref) {
  var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, ["innerRef"]);

  var errors = props.errors,
      label = props.label,
      value = props.value,
      name = props.name,
      placeholder = props.placeholder,
      maxLength = props.maxLength;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      bounce = _useState2[0],
      setBounce = _useState2[1];

  var bounceFunc = function bounceFunc() {
    if (value.length === maxLength) {
      return setBounce(true);
    }
  };

  var unbounceFunc = function unbounceFunc() {
    return setBounce(false);
  };

  var bounceStyle = {};

  if (bounce) {
    bounceStyle["top"] = "-3px";
    bounceStyle["color"] = _dashVariables.colorPicker.red;
    bounceStyle["position"] = "relative";
    bounceStyle["transition"] = "top 0.1s ease 0s";
  }

  return _react["default"].createElement(StyledTextareaWrapper, _extends({
    errors: errors
  }, props, {
    hasInput: value && value.length >= 1
  }), label && _react["default"].createElement(StyledLabel, {
    errors: errors
  }, errors ? errors[0] : label), _react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, _react["default"].createElement("textarea", _extends({
    className: "input-style",
    ref: innerRef,
    value: value,
    name: name,
    onKeyPress: bounceFunc,
    onKeyUp: unbounceFunc,
    onChange: props.onChange,
    placeholder: placeholder,
    errors: errors ? errors.length >= 0 : undefined
  }, props)), maxLength && _react["default"].createElement(StyledCharCount, {
    hasInput: value && value.length >= 1,
    charCountHit: props.value.length === props.maxLength,
    bounce: bounce
  }, _react["default"].createElement("span", {
    style: bounceStyle
  }, props.value ? props.value.length : 0), "/", props.maxLength)));
};

exports.Textarea = Textarea;
Textarea.propTypes = {
  value: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].string
};
Textarea.defaultProps = {
  name: ""
};

var StyledTextareaWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Textarea__StyledTextareaWrapper",
  componentId: "eqovuw-0"
})(["position:relative;width:100%;.input-style{border-radius:3px;", ";background:", ";padding:8px 17px;line-height:18px;letter-spacing:0.25px;color:#000000;width:100%;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;&::placeholder{font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;color:", ";}&:focus{outline:none;}font-size:14px;font-weight:400;transition:border 200ms ease;min-height:125px;overflow-y:scroll;resize:none;", ";}", ";"], function (props) {
  return props.errors ? "border: 1px solid ".concat(_dashVariables.colorPicker.red) : "border: 1px solid ".concat(_dashVariables.colorPicker.grayBlue);
}, function (props) {
  return props.hasInput ? "#ffffff" : _dashVariables.colorPicker.offWhite;
}, _dashVariables.colorPicker.gray, function (props) {
  return props.height && "height: ".concat(props.height);
}, function (props) {
  return props.style ? props.style : null;
});

var StyledCharCount = _styledComponents["default"].div.withConfig({
  displayName: "Textarea__StyledCharCount",
  componentId: "eqovuw-1"
})(["position:absolute;text-align:right;right:6px;bottom:8px;color:", ";", " font-size:14px;transition:top 0.5s ease 0s;"], function (props) {
  return props.hasInput ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.charCountHit && "color: ".concat(_dashVariables.colorPicker.red, ";");
});

var StyledLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "Textarea__StyledLabel",
  componentId: "eqovuw-2"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";"], function (props) {
  return props.errors ? _variables.colors.red : "#000000";
});