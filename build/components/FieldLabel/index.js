"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FieldLabel = function FieldLabel(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldLabel, props, props.children);
};

exports.FieldLabel = FieldLabel;