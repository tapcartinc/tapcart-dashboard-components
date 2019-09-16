"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _Typography = require("../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(_ref) {
  var value = _ref.value,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["value", "name", "label", "placeholder", "icon"]);

  return _react["default"].createElement("form", {
    onSubmit: props.onSubmit,
    style: props.style
  }, label && _react["default"].createElement(_Typography.Generic, {
    style: {
      marginBottom: 10
    }
  }, label), _react["default"].createElement(InputStyle, _extends({
    value: value,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }, props)));
}

var InputStyle = _styledComponents["default"].input.withConfig({
  displayName: "Input__InputStyle",
  componentId: "sc-1bkiiiy-0"
})(["border-radius:3px;border:1px ", " solid;background:", ";width:", ";padding:15px 20px;letter-spacing:0.25px;", ",&:hover{cursor:pointer;}&::placeholder{", "}&:focus{outline:none;}font-weight:400;", ";"], _variables.colors.bluegray, _variables.colors.offwhite, function (props) {
  return props.size ? props.size : "100%";
}, _Typography.input, _Typography.placeholder, function (props) {
  return props.style ? props.style : null;
});