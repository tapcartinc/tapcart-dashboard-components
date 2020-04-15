"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = require("../../elements/Typography");

var _Toggle = _interopRequireDefault(require("../../components/Toggle"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Field = function Field(props) {
  var label = props.label,
      description = props.description,
      lastField = props.lastField,
      fieldFlow = props.fieldFlow,
      hasToggle = props.hasToggle,
      toggleState = props.toggleState,
      setToggleState = props.setToggleState,
      errors = props.errors,
      flexWrap = props.flexWrap,
      justifyContent = props.justifyContent;
  return /*#__PURE__*/_react["default"].createElement(StyledField, _extends({
    lastField: lastField,
    fieldFlow: fieldFlow,
    hasChildren: props.children
  }, props, {
    hasToggle: hasToggle
  }), label && /*#__PURE__*/_react["default"].createElement(StyledFieldInfo, props, /*#__PURE__*/_react["default"].createElement(StyledLabel, null, label), /*#__PURE__*/_react["default"].createElement(StyledDescription, {
    errors: errors
  }, description), errors && errors.length > 0 && /*#__PURE__*/_react["default"].createElement(StyledErrors, {
    errors: errors
  }, errors.map(function (error) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: error
    }, error);
  }))), hasToggle && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "19px 24px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Toggle["default"], {
    type: "basic",
    id: "toggle",
    toggleState: toggleState,
    onChange: setToggleState
  })), props.children && /*#__PURE__*/_react["default"].createElement(StyledChildren, {
    justifyContent: justifyContent,
    flexWrap: flexWrap,
    toggleState: toggleState,
    hasToggle: hasToggle,
    fieldFlow: fieldFlow
  }, props.children));
};

exports.Field = Field;

var StyledField = _styledComponents["default"].div.withConfig({
  displayName: "Field__StyledField",
  componentId: "sc-1c9u2up-0"
})(["background:white;min-height:78px;display:flex;", ";", " ", " ", ";"], function (props) {
  return !props.lastField && "border-bottom: 1px solid ".concat(_dashVariables.colorPicker.gray25);
}, function (props) {
  return props.fieldFlow === "horizontal" && "flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap;";
}, function (props) {
  return !props.hasChildren && "flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap;";
}, function (props) {
  return props.fieldFlow === "vertical" && "flex-direction: column; align-items: flex-start; justify-content: flex-start; flex-wrap: wrap";
});

var StyledChildren = _styledComponents["default"].div.withConfig({
  displayName: "Field__StyledChildren",
  componentId: "sc-1c9u2up-1"
})(["padding:19px 24px;padding-left:5px;", ";", ";", ";", ";", ";", ";", ";"], function (props) {
  return props.fieldFlow === "vertical" && "width: 100%; padding: 0px 24px 19px 24px;";
}, function (props) {
  return props.hasToggle && "padding-left: 19px; width: 100%; padding-top: 0px";
}, function (props) {
  return !props.hasToggle && "display: flex";
}, function (props) {
  return props.hasToggle && !props.toggleState && "display: none";
}, function (props) {
  return props.hasToggle && props.toggleState && "display: flex";
}, function (props) {
  return props.flexWrap && "flex-wrap: wrap";
}, function (props) {
  return props.justifyContent && "justify-content: space-between";
});

var StyledFieldInfo = _styledComponents["default"].div.withConfig({
  displayName: "Field__StyledFieldInfo",
  componentId: "sc-1c9u2up-2"
})(["padding:19px 24px;", ""], function (props) {
  return props.style ? props.style : null;
});

var StyledLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "Field__StyledLabel",
  componentId: "sc-1c9u2up-3"
})(["line-height:20px;margin-top:0px;margin-bottom:3px;"]);

var StyledDescription = _styledComponents["default"].div.withConfig({
  displayName: "Field__StyledDescription",
  componentId: "sc-1c9u2up-4"
})(["color:", ";font-size:13px;line-height:18px;", " ", ";"], _dashVariables.colorPicker.gray, _dashVariables.sofiaPro.regular, function (props) {
  return props.errors && props.errors.length > 0 && "display: none";
});

var StyledErrors = _styledComponents["default"].div.withConfig({
  displayName: "Field__StyledErrors",
  componentId: "sc-1c9u2up-5"
})(["color:", ";font-size:13px;line-height:18px;", " span{display:block;}"], _dashVariables.colorPicker.red, _dashVariables.sofiaPro.regular);