"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProTip = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProTip = function ProTip(props) {
  return /*#__PURE__*/_react["default"].createElement(ProTipStyle, props, /*#__PURE__*/_react["default"].createElement("span", null, "Pro Tip:"), /*#__PURE__*/_react["default"].createElement("span", null, props.tip), props.children);
};

exports.ProTip = ProTip;

var ProTipStyle = _styledComponents["default"].div.withConfig({
  displayName: "ProTip__ProTipStyle",
  componentId: "sc-13584oz-0"
})(["font-size:15px;", ";display:flex;flex-direction:column;align-items:center;justify-items:center;line-height:20px;padding:10px;border:1px solid ", ";border-radius:3px;"], _variables.sofia.sofiaItalic, _variables.colors.green);