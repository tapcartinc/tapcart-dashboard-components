"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Searchbar = Searchbar;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../elements/Icon");

var _styles = require("./styles");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Searchbar(_ref) {
  var innerRef = _ref.innerRef,
      center = _ref.center,
      name = _ref.name,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["innerRef", "center", "name", "placeholder"]);

  var checkEnter = function checkEnter(e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledForm, _extends({
    onSubmit: props.onChange,
    center: center,
    onKeyPress: checkEnter
  }, props), /*#__PURE__*/_react["default"].createElement(_styles.SearchContainer, props, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "search",
    style: {
      position: "absolute",
      left: 0,
      top: 14
    }
  }), /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
    onFocus: props.onFocus,
    ref: innerRef,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }))));
}

Searchbar.propTypes = {
  width: _propTypes["default"].string,
  center: _propTypes["default"].bool,
  innerRef: _propTypes["default"].oneOfType([
  /**
   *  Either a function
   */
  _propTypes["default"].func,
  /**
   * Or the instance of a DOM native element (see the note about SSR)
   */
  _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,

  /**
   * Allows for custom font sizing
   */
  fontSize: _propTypes["default"].number
};
Searchbar.defaultProps = {
  width: "420px",
  center: false
};