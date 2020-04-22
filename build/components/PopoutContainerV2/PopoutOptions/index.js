"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopoutOptions = function PopoutOptions(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledPopOutOptionsList, null, children);
};

var _default = PopoutOptions;
exports["default"] = _default;