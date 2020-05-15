"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Icon = require("../../elements/Icon");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageUploader = function ImageUploader(props) {
  var className = props.className,
      placeholder = props.placeholder,
      value = props.value,
      label = props.label,
      handleImageUpload = props.handleImageUpload,
      name = props.name,
      handleRef = props.handleRef,
      dropzoneProps = _objectWithoutProperties(props, ["className", "placeholder", "value", "label", "handleImageUpload", "name", "handleRef"]);

  var childRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    handleRef && handleRef(childRef);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledImageInputWrapper, _extends({
    className: className
  }, props), label && /*#__PURE__*/_react["default"].createElement(_styles.StyledLabel, null, label), /*#__PURE__*/_react["default"].createElement(_styles.StyledImageInput, _extends({
    hasValue: value
  }, props), /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], _extends({
    ref: childRef,
    onDrop: function onDrop(files) {
      return handleImageUpload(files, name);
    }
  }, dropzoneProps), function (_ref) {
    var getRootProps = _ref.getRootProps,
        getInputProps = _ref.getInputProps,
        isDragActive = _ref.isDragActive;
    return /*#__PURE__*/_react["default"].createElement(_styles.StyledImageInputHolder, _extends({}, getRootProps(), props), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), value ? /*#__PURE__*/_react["default"].createElement(_styles.StyledImage, {
      src: value
    }) : /*#__PURE__*/_react["default"].createElement(_styles.StyledImagePlaceholder, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      type: "upload-cloud"
    }), /*#__PURE__*/_react["default"].createElement("p", null, placeholder ? placeholder : "Upload an image")));
  })));
};

exports.ImageUploader = ImageUploader;
ImageUploader.propTypes = {
  /**
   * Allows you to pass a css classname to component for styling
   * Classname adjusts the style of the wrapper containing the entire component
   */
  className: _propTypes["default"].string,

  /**
   * Placeholder text inside of the empty image box
   */
  placeholdeR: _propTypes["default"].string,

  /**
   * This value should be the string that contains the url value for the image will be null if the value has not been set.
   */
  value: _propTypes["default"].any,

  /**
   * Useful if the ImageUploader component has is labeled consistently with the field labels throughout the merchant dashboard
   */
  label: _propTypes["default"].string,

  /**
   * Function that gets called when user selects an image file
   */
  handleImageUpload: _propTypes["default"].func,

  /**
   * Often used when the function that sets the value in the parent component sets the value for other fields as well
   * Lets the function know to correlate the (event target) name of the field with the correct value
   */
  name: _propTypes["default"].string,

  /** Function that sets the inner ref for the react dropzone component
   * Reference the component's docs for more details
   */
  handleRef: _propTypes["default"].func
};