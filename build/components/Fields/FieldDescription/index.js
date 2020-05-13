"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldDescription = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FieldDescription = function FieldDescription(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledDescription, {
    errors: props.errors
  }, props.children);
};

exports.FieldDescription = FieldDescription;