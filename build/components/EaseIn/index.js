"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaseIn = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EaseIn = function EaseIn(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledEaseIn, {
    easedIn: props.easedIn
  }, props.children);
};
exports.EaseIn = EaseIn;
var StyledEaseIn = _styledComponents["default"].div.withConfig({
  displayName: "EaseIn__StyledEaseIn",
  componentId: "sc-11ff83p-0"
})(["height:auto;width:auto;opacity:0;transition:opacity ease-in 0.5s;", ""], function (props) {
  return props.easedIn && "\n  opacity: 1;\n";
});