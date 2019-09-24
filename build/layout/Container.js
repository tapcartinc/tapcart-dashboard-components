"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

var _media = _interopRequireDefault(require("../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerStyle",
  componentId: "qvg48t-0"
})(["border-radius:3px;", ";background:", ";width:", ";", ""], _variables.boxShadow, function (props) {
  return props.bg ? (0, _functions.getColors)(props.bg) : "white";
}, function (props) {
  return props.columns ? "".concat(100 / props.columns - 5, "%") : "100%";
}, function (props) {
  return props.style ? props.style : null;
});

var Container = function Container(props) {
  return _react["default"].createElement(ContainerStyle, props, props.children);
};

exports.Container = Container;