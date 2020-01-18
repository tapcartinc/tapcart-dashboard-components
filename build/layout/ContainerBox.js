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

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyle = _styledComponents["default"].section.withConfig({
  displayName: "ContainerBox__ContainerStyle",
  componentId: "sc-1iq8jc5-0"
})(["border-radius:3px;padding:", ";box-shadow:", ";background:", ";height:", ";", ";", ";", ""], function (props) {
  return props.customPadding ? props.customPadding : "20px";
}, function (props) {
  return props.boxShadow ? props.boxShadow : _variables.boxShadow.medium;
}, function (props) {
  return props.bg ? props.bg : "white";
}, function (props) {
  return props.customHeight && "".concat(props.customHeight, "px");
}, function (props) {
  return props.customWidth ? "width: ".concat(props.customWidth, "px;") : props.columns ? "width: ".concat(100 / props.columns - 1.5, "%") : "width: 100%;";
}, _media["default"].md(_templateObject(), function (props) {
  return props.customPaddingMd ? props.customPaddingMd : "20px";
}, function (props) {
  return props.customWidthMd ? "width: ".concat(props.customWidthMd, "px;") : props.mobileColumns ? "width: ".concat(100 / props.mobileColumns - 1.5, "%") : "width: 100%;";
}), function (props) {
  return props.style ? props.style : null;
});

var ContainerBox = function ContainerBox(props) {
  return _react["default"].createElement(ContainerStyle, props, props.children);
};

exports.ContainerBox = ContainerBox;
ContainerBox.propTypes = {
  bg: _propTypes["default"].string,
  customHeight: _propTypes["default"].number,
  customWidth: _propTypes["default"].number,

  /**
   * creates automatic width dependig on the amount of columns there are
   */
  columns: _propTypes["default"].number,
  customWidthMd: _propTypes["default"].number,

  /**
   * creates automatic width dependig on the amount of columns there are for tablet and mobile breakpoints
   */
  mobileColumns: _propTypes["default"].number,
  customPadding: _propTypes["default"].string,
  customPaddingMd: _propTypes["default"].string,
  boxShadow: _propTypes["default"].string,
  children: _propTypes["default"].node
};
ContainerBox.defaultProps = {
  bg: "white",
  boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.05),\n  0 2px 20px 0 rgba(0, 0, 0, 0.025),\n  0 2px 30px 0 rgba(0, 0, 0, 0.025)"
}; // ${media.smxs`
//  ${props => props.mobile && `width: ${100 / props.mobile}%;`}
// `};