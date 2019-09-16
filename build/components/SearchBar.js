"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _Typography = require("../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SearchBar(_ref) {
  var value = _ref.value,
      name = _ref.name,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["value", "name", "placeholder"]);

  return _react["default"].createElement("form", _extends({
    onSubmit: props.onChange
  }, props), _react["default"].createElement(SearchContainer, props, _react["default"].createElement(_Icon.Icon, {
    type: "search",
    style: {
      position: "absolute",
      left: 0,
      top: 14
    }
  }), _react["default"].createElement(Input, _extends({}, props, {
    value: value,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }))));
}

var SearchContainer = _styledComponents["default"].div.withConfig({
  displayName: "SearchBar__SearchContainer",
  componentId: "sc-189wnvo-0"
})(["display:flex;flex-direction:row;align-items:center;border-bottom:1px solid ", ";max-width:400px;position:relative;", ""], _variables.colors.gray25, function (props) {
  return props.style ? props.style : null;
});

var Input = _styledComponents["default"].input.withConfig({
  displayName: "SearchBar__Input",
  componentId: "sc-189wnvo-1"
})(["border-radius:3px;border:none;background:transparent;width:100%;padding-top:15px;padding-bottom:15px;padding-left:5px;padding-right:5px;letter-spacing:1px;", ",&:hover{cursor:auto;}&::placeholder{", "}&:focus{outline:none;}font-weight:400;margin-left:10px;", ""], _Typography.input, _Typography.placeholder, function (props) {
  return props.style ? props.style : null;
});