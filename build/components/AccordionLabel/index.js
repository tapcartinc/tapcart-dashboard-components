"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AccordionLabel = function AccordionLabel(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledAccordionLabel, null, props.children);
};

exports.AccordionLabel = AccordionLabel;