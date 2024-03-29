"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fields = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _dashVariables = require("../../utils/_dashVariables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Fields = function Fields(props) {
  var sectionHeader = props.sectionHeader,
    width = props.width,
    children = props.children;
  return /*#__PURE__*/_react["default"].createElement(StyledFieldsWrapper, _extends({
    width: width
  }, props), sectionHeader && /*#__PURE__*/_react["default"].createElement(SectionHeader, null, sectionHeader), /*#__PURE__*/_react["default"].createElement(StyledFields, null, children));
};
exports.Fields = Fields;
var StyledFieldsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Fields__StyledFieldsWrapper",
  componentId: "sc-g2n3ju-0"
})(["display:flex;flex-direction:column;max-width:800px;margin:0 auto;width:100%;margin-bottom:10px;align-items:flex-start;", ";", ";", ";", ";"], function (props) {
  return props.maxWidth && "max-width: ".concat(props.maxWidth);
}, function (props) {
  return props.padding && "padding: ".concat(props.padding);
}, function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.style ? props.style : null;
});
var StyledFields = _styledComponents["default"].div.withConfig({
  displayName: "Fields__StyledFields",
  componentId: "sc-g2n3ju-1"
})(["border-radius:3px;width:100%;border:1px solid ", ";"], _dashVariables.colorPicker.gray25);
var SectionHeader = _styledComponents["default"].h3.withConfig({
  displayName: "Fields__SectionHeader",
  componentId: "sc-g2n3ju-2"
})(["font-size:18px;line-height:22px;color:", ";", " margin-bottom:8px;margin-top:32px;"], _dashVariables.colorPicker.blue, _dashVariables.circularStd.medium);