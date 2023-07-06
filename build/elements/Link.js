"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../utils/_variables");
var _dashVariables = require("../utils/_dashVariables");
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _animations = require("../utils/_animations");
var _excluded = ["label"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var options = ["blue", "green", "red", "black", "gray"];
var getColor = function getColor(color) {
  switch (color) {
    case "blue":
      return _variables.colors.blue;
    case "green":
      return _dashVariables.colorPicker.green100;
    case "red":
      return _variables.colors.red;
    case "black":
      return "#000000";
    case "gray":
      return _variables.colors.grayText;
    default:
      break;
  }
};
var StyledLinkWrapper = _styledComponents["default"].button.withConfig({
  displayName: "Link__StyledLinkWrapper",
  componentId: "sc-1mt1euk-0"
})(["", ";line-height:1.5;letter-spacing:0.5px;z-index:3;outline:none;border:none;", " &:hover{", ";cursor:pointer;}", ";font-family:\"SofiaPro-Medium\";src:url(\"/fonts/SofiaPro-Medium.woff2\") format(\"woff2\"),url(\"/fonts/SofiaPro-Medium.woff\") format(\"woff\");font-weight:400;font-style:normal;font-display:swap;font-size:14px;text-decoration:", ";text-transform:", ";color:", ";", ""], _dashVariables.sofiaPro.regular, _animations.transition, _animations.hover, _variables.sofia.sofiaRegular, function (props) {
  return props.underline && "underline";
}, function (props) {
  return props.caps && "uppercase";
}, function (props) {
  return props.color ? getColor(props.color) : _variables.colors.blue;
}, function (props) {
  return props.style ? props.style : null;
});
var Link = function Link(_ref) {
  var label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(StyledLinkWrapper, props, props.children);
};
exports.Link = Link;
Link.propTypes = {
  color: _propTypes["default"].string
};
Link.defaultProps = {
  type: "blue"
};