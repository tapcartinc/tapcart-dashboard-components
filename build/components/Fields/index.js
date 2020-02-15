"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fields = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Fields = function Fields(props) {
  var sectionHeader = props.sectionHeader,
      children = props.children;
  return _react["default"].createElement(StyledFieldsWrapper, null, sectionHeader && _react["default"].createElement(SectionHeader, null, sectionHeader), _react["default"].createElement(StyledFields, null, children));
};

exports.Fields = Fields;

var StyledFieldsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Fields__StyledFieldsWrapper",
  componentId: "g2n3ju-0"
})(["display:flex;flex-direction:column;width:720px;margin:0 auto;margin-bottom:10px;align-items:flex-start;"]);

var StyledFields = _styledComponents["default"].div.withConfig({
  displayName: "Fields__StyledFields",
  componentId: "g2n3ju-1"
})(["border-radius:3px;width:100%;border:1px solid ", ";overflow:hidden;"], _dashVariables.colorPicker.gray25);

var SectionHeader = _styledComponents["default"].h3.withConfig({
  displayName: "Fields__SectionHeader",
  componentId: "g2n3ju-2"
})(["font-size:18px;line-height:22px;color:", ";", " margin-bottom:8px;margin-top:32px;"], _dashVariables.colorPicker.blue, _dashVariables.circularStd.medium);