"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledBreadcrumbWrapper, _extends({
    className: className
  }, rest, {
    style: style
  }), /*#__PURE__*/_react["default"].createElement(_styles.StyledBreadcrumbList, null, children));
}

Breadcrumbs.propTypes = {
  /**
   * Classname that can be added for css to the entire Breadcrumb wrapper
   */
  className: _propTypes["default"].string,

  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: _propTypes["default"].node
};