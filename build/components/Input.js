"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputStyle = _styledComponents["default"].input.withConfig({
  displayName: "Input__InputStyle",
  componentId: "sc-1bkiiiy-0"
})(["border-radius:3px;", ";background:", ";padding:10px 20px;letter-spacing:0.25px;width:100%;", ";&::placeholder{color:", ";}&:focus{outline:none;}font-size:18px;font-weight:400;transition:border 200ms ease;", ";"], function (props) {
  return props.error ? "border: 1px solid ".concat(_variables.colors.red) : "border: 1px solid ".concat(_variables.colors.blue50);
}, _variables.colors.offwhite, _variables.sofia.sofiaRegular, _variables.colors.blue25, function (props) {
  return props.style ? props.style : null;
});

var Input = function Input(_ref) {
  var value = _ref.value,
      name = _ref.name,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["value", "name", "placeholder"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(InputStyle, _extends({
    value: value,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }, props)));
};

exports.Input = Input;
Input.propTypes = {
  error: _propTypes["default"].bool,
  value: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
Input.defaultProps = {
  error: false,
  name: ''
};