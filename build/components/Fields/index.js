"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fields = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Fields = function Fields(props) {
  var sectionHeader = props.sectionHeader,
      maxWidth = props.maxWidth,
      width = props.width,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldsWrapper, _extends({
    width: width,
    maxWidth: maxWidth
  }, props), sectionHeader && /*#__PURE__*/_react["default"].createElement(_styles.SectionHeader, null, sectionHeader), /*#__PURE__*/_react["default"].createElement(_styles.StyledFields, null, children));
};

exports.Fields = Fields;
Fields.propTypes = {
  /**
   * Header of entire parent field component containing inner fields
   */
  sectionHeader: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),

  /**
   *
   * Customizing width of current Fields section
   */
  width: _propTypes["default"].string,

  /**
   * Customizing max-width of current Fields section
   */
  maxWidth: _propTypes["default"].string,

  /**
   * Fields getting passed into the form section
   */
  children: _propTypes["default"].node
};