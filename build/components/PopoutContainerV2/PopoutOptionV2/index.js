"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoutOptionV2 = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../../elements/Icon");

var _styles = require("./styles");

var _Typography = require("../../../elements/Typography");

var _dashVariables = require("../../../utils/_dashVariables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _PopoutContainerV = require("../../PopoutContainerV2");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PopoutOptionV2 = function PopoutOptionV2(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      iconColor = _ref.iconColor,
      label = _ref.label,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_PopoutContainerV.PopoutContainerContext),
      open = _useContext.open,
      disabled = _useContext.disabled;

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledPopoutOptionWrapper, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: icon,
    fill: iconColor ? iconColor : _dashVariables.colorPicker.blue,
    iconRight: true,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    className: "popout-option-children"
  }, children));
};

exports.PopoutOptionV2 = PopoutOptionV2;
PopoutOptionV2.propTypes = {
  /**
   * Icon displayed to the left of the label
   */
  icon: _propTypes["default"].string,

  /**
   * Color of icon
   */
  iconColor: _propTypes["default"].string,

  /**
   * Label/text for the option
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Useful for PopoutOptions that require components such as segmented control, range, etc.
   */
  children: _propTypes["default"].node
};
PopoutOptionV2.defaultProps = {
  iconColor: _dashVariables.colorPicker.blue
};