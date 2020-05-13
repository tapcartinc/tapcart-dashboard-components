"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _FieldColumn = require("./FieldColumn");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Field = function Field(props) {
  var label = props.label,
      description = props.description,
      lastField = props.lastField,
      toggleState = props.toggleState,
      setToggleState = props.setToggleState,
      errors = props.errors,
      flexWrap = props.flexWrap,
      justifyContent = props.justifyContent,
      stretch = props.stretch,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledField, {
    lastField: lastField
  }, children.map(function (child, index) {
    return _react["default"].cloneElement( /*#__PURE__*/_react["default"].createElement(_FieldColumn.FieldColumn, {
      children: child,
      key: "".concat(index),
      index: index
    }));
  }));
};

exports.Field = Field;
Field.propTypes = {
  /**
   * Add to the last child Field of the Fields parent component
   * Removes the bottom border style
   */
  lastField: _propTypes["default"].bool,

  /**
   * Makes the current field a ToggleField
   */
  toggleState: _propTypes["default"].bool,

  /**
   * Used to receive errors object coming off of the FormWithErrors component
   */
  errors: _propTypes["default"].object,

  /**
   * Allows field children to break to a new line/wrap
   */
  flexWrap: _propTypes["default"].bool,

  /**
   * Alignment prop for children that separates the children inside of the field component
   */
  justifyContent: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
Field.defaultProps = {};