"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerStyle",
  componentId: "qvg48t-0"
})(["border-radius:3px;", ";background:", ";width:", ";", ""], _variables.boxShadow, function (props) {
  if (props.bgColor) {
    return (0, _functions.getColors)(props.bgColor);
  } else {
    return "white";
  }
}, function (props) {
  return props.columns ? "".concat(100 / props.columns, "%") : "100%";
}, function (props) {
  return props.style ? props.style : null;
});

var Container = function Container(_ref) {
  var props = _extends({}, _ref);

  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(ContainerStyle, props, props.children));
};

exports.Container = Container;