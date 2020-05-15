"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickDropdownOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ClickDropdownOption = function ClickDropdownOption(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, props.children);
};

exports.ClickDropdownOption = ClickDropdownOption;
ClickDropdownOption.propTypes = {
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};