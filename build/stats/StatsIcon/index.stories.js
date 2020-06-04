"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledIcons = _styledComponents["default"].ul.withConfig({
  displayName: "indexstories__StyledIcons",
  componentId: "ixbmz6-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;", ";"], _dashVariables.sofiaPro.medium);

var StyledIcon = _styledComponents["default"].li.withConfig({
  displayName: "indexstories__StyledIcon",
  componentId: "ixbmz6-1"
})(["display:flex;flex-direction:column;align-items:center;width:65px;margin:25px;text-align:center;line-height:14px;font-size:12px;", " svg{margin-bottom:10px;}"], function (props) {
  return props.whiteIcon && "background: ".concat(_lib.colorPicker.blue, "; border-radius: 3px; color: white; padding: 10px;");
});

var _default = {
  component: _index.StatsIcon,
  title: "Stats/StatsIcon"
};
exports["default"] = _default;

var statsIcon = function statsIcon() {
  return _react["default"].createElement(StyledIcons, null, _react["default"].createElement(StyledIcon, null, _react["default"].createElement(_index.StatsIcon, {
    type: "orders"
  }), "orders"), _react["default"].createElement(StyledIcon, null, _react["default"].createElement(_index.StatsIcon, {
    type: "session"
  }), "session"), _react["default"].createElement(StyledIcon, null, _react["default"].createElement(_index.StatsIcon, {
    type: "conversion"
  }), "conversion"));
};

exports.statsIcon = statsIcon;