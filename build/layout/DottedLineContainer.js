"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DottedLineContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DottedLineContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "DottedLineContainer__DottedLineContainerStyle",
  componentId: "sc-1tvbn42-0"
})(["border-radius:3px;width:100%;border:1px ", " dashed;background:", ";", ""], _variables.colors.blue50, _variables.colors.offwhite, function (props) {
  return props.style ? props.style : null;
});

var DottedLineContainer = function DottedLineContainer(_ref) {
  var props = _extends({}, _ref);

  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(DottedLineContainerStyle, props, props.children));
};

exports.DottedLineContainer = DottedLineContainer;