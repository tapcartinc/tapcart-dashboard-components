"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = require("../utils/_theme");

var _styledComponents = require("styled-components");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import GlobalStyle from './_global';
// <GlobalStyle {...props.global} />

/**
 * Use `ThemeProvider` to wrap sections of content with specific styling in the marketing site. This component provides a theme to all React components underneath itself via the context API.
 *
 * In order to access styles from the ThemeProvider the children must be wrapped in a `Section` component immediately inside of the ThemeProvider component.
 */
var ThemeProvider = function ThemeProvider(props) {
  var theme = _objectSpread({}, _theme.base, {}, props.theme);

  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(_react["default"].Fragment, null, props.children));
};

exports.ThemeProvider = ThemeProvider;
ThemeProvider.propTypes = {
  theme: _propTypes["default"].oneOf(["base", "invert(base)", "neutral", "offWhite", "gradient(fgColor, bgColor)"]),
  children: _propTypes.node.isRequired
};
ThemeProvider.defaultProps = {
  theme: _theme.base
};