"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldColumn = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FieldColumn = function FieldColumn(_ref) {
  var children = _ref.children,
      className = _ref.className,
      index = _ref.index,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldColumn, {
    stretch: children.props.stretch,
    className: className,
    style: style,
    index: index
  }, children);
};

exports.FieldColumn = FieldColumn;