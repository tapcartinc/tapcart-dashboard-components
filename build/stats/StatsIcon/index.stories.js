"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsIcon = exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("./index");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _lib = require("../../../lib");
var _dashVariables = require("../../utils/_dashVariables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledIcons = _styledComponents["default"].ul.withConfig({
  displayName: "indexstories__StyledIcons",
  componentId: "sc-ixbmz6-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;", ";"], _dashVariables.sofiaPro.medium);
var StyledIcon = _styledComponents["default"].li.withConfig({
  displayName: "indexstories__StyledIcon",
  componentId: "sc-ixbmz6-1"
})(["display:flex;flex-direction:column;align-items:center;width:65px;margin:25px;text-align:center;line-height:14px;font-size:12px;", " svg{margin-bottom:10px;}"], function (props) {
  return props.whiteIcon && "background: ".concat(_lib.colorPicker.blue, "; border-radius: 3px; color: white; padding: 10px;");
});
var _default = {
  component: _index.StatsIcon,
  title: "Stats/StatsIcon"
};
exports["default"] = _default;
var statsIcon = function statsIcon() {
  return /*#__PURE__*/_react["default"].createElement(StyledIcons, null, /*#__PURE__*/_react["default"].createElement(StyledIcon, null, /*#__PURE__*/_react["default"].createElement(_index.StatsIcon, {
    type: "orders"
  }), "orders"), /*#__PURE__*/_react["default"].createElement(StyledIcon, null, /*#__PURE__*/_react["default"].createElement(_index.StatsIcon, {
    type: "session"
  }), "session"), /*#__PURE__*/_react["default"].createElement(StyledIcon, null, /*#__PURE__*/_react["default"].createElement(_index.StatsIcon, {
    type: "conversion"
  }), "conversion"));
};
exports.statsIcon = statsIcon;