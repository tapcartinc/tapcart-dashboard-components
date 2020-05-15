"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _swatches = require("../../utils/_swatches");

var _Label = require("../../elements/Label");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(_ref) {
  var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, ["innerRef"]);

  var errors = props.errors,
      label = props.label,
      value = props.value,
      name = props.name,
      placeholder = props.placeholder,
      maxLength = props.maxLength,
      disabled = props.disabled,
      width = props.width,
      fontSize = props.fontSize,
      type = props.type;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      bounce = _useState2[0],
      setBounce = _useState2[1];

  var bounceFunc = function bounceFunc() {
    if (!maxLength) return;

    if (value.length === maxLength) {
      return setBounce(true);
    }
  };

  var unbounceFunc = function unbounceFunc() {
    if (!maxLength) return;
    return setBounce(false);
  };

  var bounceStyle = {};

  if (bounce) {
    bounceStyle["top"] = "-3px";
    bounceStyle["color"] = _swatches.swatches.red;
    bounceStyle["position"] = "relative";
    bounceStyle["marginLeft"] = "-17px";
    bounceStyle["transition"] = "transform 1s ease 0s";
  }

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledInputWrapper, {
    fontSize: fontSize,
    width: width,
    disabled: disabled,
    errors: errors,
    hasInput: value && value.length >= 1
  }, label && /*#__PURE__*/_react["default"].createElement(_Label.Label, {
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
    disabled: disabled
  }, props)), maxLength && /*#__PURE__*/_react["default"].createElement(_styles.StyledCharCount, {
    charCountHit: props.value.length === props.maxLength,
    bounce: bounce,
    hasInput: value && value.length >= 1
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: bounceStyle
  }, props.value ? props.value.length : 0), "/", props.maxLength));
};

exports.Input = Input;
Input.propTypes = {
  /**
   * state value for input
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * useful for multiple inputs using the same onChange handler (e.target.name: e.target.value)
   */
  name: _propTypes["default"].string,

  /**
   * placeholder text if state value is empty
   */
  placeholder: _propTypes["default"].string,

  /**
   * onChange handler
   */
  onChange: _propTypes["default"].func,

  /**
   * label to be shown above input value; helpful to use this as a prop of the input value because the error handling is in one component
   * an good reference example for the label prop is the "error" story
   */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /**
   * ex: email, password, etc
   */
  type: _propTypes["default"].string,

  /**
   * custom font size
   */
  fontSize: _propTypes["default"].number,

  /**
   * Errors that can be passed into the component for error message handling and error styling
   */
  errors: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].bool]),

  /**
   * Maximum character amount a user can use in the input
   */
  maxLength: _propTypes["default"].number,

  /**
   * Prevents user from changing the current input component and has disabled styling
   */
  disabled: _propTypes["default"].bool,

  /**
   * Custom width for component
   */
  width: _propTypes["default"].string
};
Input.defaultProps = {
  width: "100%",
  disabled: false
};