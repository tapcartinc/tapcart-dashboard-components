"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

var _media = _interopRequireDefault(require("../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "ContainerBox__ContainerStyle",
  componentId: "sc-1iq8jc5-0"
})(["border-radius:3px;box-shadow:", ";background:", ";width:", ";", ";", ";", ""], _variables.boxShadow.boxShadow, function (props) {
  return props.bg ? (0, _functions.getColors)(props.bg) : 'white';
}, function (props) {
  return props.columns ? "".concat(100 / props.columns - 1.5, "%") : '100%';
}, _media["default"].md(_templateObject(), function (props) {
  return props.tablet ? "".concat(100 / props.tablet - 1.5, "%") : '100%';
}), _media["default"].smxs(_templateObject2(), function (props) {
  return props.mobile ? "".concat(100 / props.mobile, "%") : '100%';
}), function (props) {
  return props.style ? props.style : null;
});

var ContainerBox = function ContainerBox(props) {
  return _react["default"].createElement(ContainerStyle, props, props.children);
};

exports.ContainerBox = ContainerBox;