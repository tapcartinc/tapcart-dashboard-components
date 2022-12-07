"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../utils/_variables");
var _Typography = require("../elements/Typography");
var _dashVariables = require("../utils/_dashVariables");
var _excluded = ["innerRef"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Input = function Input(_ref) {
  var innerRef = _ref.innerRef,
    props = _objectWithoutProperties(_ref, _excluded);
  var errors = props.errors,
    label = props.label,
    value = props.value,
    name = props.name,
    placeholder = props.placeholder,
    maxLength = props.maxLength,
    disabled = props.disabled,
    width = props.width,
    type = props.type,
    minHeight = props.minHeight;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    bounce = _useState2[0],
    setBounce = _useState2[1];
  var bounceFunc = function bounceFunc() {
    if (value.length === maxLength) {
      return setBounce(true);
    }
  };
  var unbounceFunc = function unbounceFunc() {
    return setBounce(false);
  };
  var bounceStyle = {};
  if (bounce) {
    bounceStyle["top"] = "-3px";
    bounceStyle["color"] = _dashVariables.colorPicker.red;
    bounceStyle["position"] = "relative";
    bounceStyle["marginLeft"] = "-17px";
    bounceStyle["transition"] = "transform 1s ease 0s";
  }
  return /*#__PURE__*/_react["default"].createElement(StyledInputWrapper, {
    width: width,
    disabled: disabled,
    errors: errors,
    hasInput: value && value.length >= 1,
    minHeight: minHeight
  }, label && /*#__PURE__*/_react["default"].createElement(StyledLabel, {
    errors: errors && errors.length >= 0
  }, errors && errors.length >= 0 ? errors[0] : label), /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: "input-style",
    ref: innerRef,
    value: value,
    type: type,
    name: name,
    onKeyPress: bounceFunc,
    onKeyUp: unbounceFunc,
    onChange: props.onChange,
    placeholder: placeholder,
    disabled: disabled,
    errors: errors ? errors.length >= 0 : undefined
  }, props)), maxLength && /*#__PURE__*/_react["default"].createElement(StyledCharCount, {
    charCountHit: props.value.length === props.maxLength,
    bounce: bounce,
    hasInput: value && value.length >= 1,
    minHeight: minHeight
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: bounceStyle
  }, props.value ? props.value.length : 0), "/", props.maxLength));
};
exports.Input = Input;
Input.propTypes = {
  value: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  minHeight: _propTypes["default"].string
};
Input.defaultProps = {
  name: ""
};
var StyledInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Input__StyledInputWrapper",
  componentId: "sc-l316i3-0"
})(["position:relative;width:100%;", ";.input-style{border-radius:3px;", ";background:", ";padding:10px 20px;letter-spacing:0.25px;color:#000000;width:100%;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;&::placeholder{font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;color:", ";}&:focus{outline:none;}font-size:14px;font-weight:400;transition:all 0.2s ease-in;", ";", ";", ";}"], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.errors ? "border: 1px solid ".concat(_variables.colors.red) : "border: 1px solid ".concat(_dashVariables.colorPicker.grayBlue);
}, function (props) {
  return props.hasInput ? "#ffffff" : _dashVariables.colorPicker.offWhite;
}, _dashVariables.colorPicker.gray, function (props) {
  return props.minHeight && "min-height: ".concat(props.minHeight);
}, function (props) {
  return props.disabled && "color: ".concat(_dashVariables.colorPicker.grayBlue);
}, function (props) {
  return props.style ? props.style : null;
});
var StyledCharCount = _styledComponents["default"].div.withConfig({
  displayName: "Input__StyledCharCount",
  componentId: "sc-l316i3-1"
})(["position:absolute;text-align:right;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;right:10px;bottom:", ";color:", ";", " font-size:14px;transition:top 0.1s ease 0s;"], function (props) {
  return props.minHeight ? "calc((" + props.minHeight + "* .5) - 7px)" : "13px";
}, function (props) {
  return props.hasInput ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.gray;
}, function (props) {
  return props.charCountHit && "color: ".concat(_dashVariables.colorPicker.red, ";");
});
var StyledLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "Input__StyledLabel",
  componentId: "sc-l316i3-2"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";"], function (props) {
  return props.errors ? _variables.colors.red : "#000000";
});