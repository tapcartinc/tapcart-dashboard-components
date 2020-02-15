"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../elements/Icon");

var _dashVariables = require("../../utils/_dashVariables");

var _Typography = require("../../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageUploader = function ImageUploader(props) {
  var onDropHandler = function onDropHandler(files) {
    return props.handleImageUpload(files);
  };

  var className = props.className,
      placeholder = props.placeholder,
      value = props.value,
      label = props.label,
      handleImageUpload = props.handleImageUpload,
      dropzoneProps = _objectWithoutProperties(props, ["className", "placeholder", "value", "label", "handleImageUpload"]);

  return _react["default"].createElement(StyledImageInputWrapper, props, label && _react["default"].createElement(StyledLabel, null, label), _react["default"].createElement(StyledImageInput, null, _react["default"].createElement(_reactDropzone["default"], _extends({
    onDrop: onDropHandler
  }, dropzoneProps), function (_ref) {
    var getRootProps = _ref.getRootProps,
        getInputProps = _ref.getInputProps,
        isDragActive = _ref.isDragActive;
    console.log("getInputProps", getInputProps);
    return _react["default"].createElement(StyledImageInputHolder, getRootProps(), _react["default"].createElement("input", getInputProps()), value ? _react["default"].createElement(StyledImage, {
      src: value
    }) : _react["default"].createElement(StyledImagePlaceholder, null, _react["default"].createElement(_Icon.Icon, {
      type: "upload-cloud"
    }), _react["default"].createElement("p", null, placeholder ? placeholder : "Upload an image")));
  })));
};

exports.ImageUploader = ImageUploader;

var StyledImageInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ImageUploader__StyledImageInputWrapper",
  componentId: "sc-14ahekh-0"
})(["display:flex;flex-direction:column;align-items:flex-start;font-size:13px;padding-right:15px;", ""], _dashVariables.sofiaPro.regular);

var StyledLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "ImageUploader__StyledLabel",
  componentId: "sc-14ahekh-1"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";"], _dashVariables.colorPicker.black);

var StyledImageInputHolder = _styledComponents["default"].div.withConfig({
  displayName: "ImageUploader__StyledImageInputHolder",
  componentId: "sc-14ahekh-2"
})(["height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:3px;overflow:hidden;&:focus{outline:none;}"]);

var StyledImageInput = _styledComponents["default"].div.withConfig({
  displayName: "ImageUploader__StyledImageInput",
  componentId: "sc-14ahekh-3"
})(["width:320px;height:170px;border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px dashed ", ";"], _dashVariables.colorPicker.grayBlue);

var StyledImage = _styledComponents["default"].img.withConfig({
  displayName: "ImageUploader__StyledImage",
  componentId: "sc-14ahekh-4"
})(["background:", ";cursor:pointer;width:100%;height:auto;object-fit:cover;"], _dashVariables.colorPicker.offWhite);

var StyledImagePlaceholder = _styledComponents["default"].div.withConfig({
  displayName: "ImageUploader__StyledImagePlaceholder",
  componentId: "sc-14ahekh-5"
})(["background:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:11px;line-height:1.27;text-align:center;color:", ";cursor:pointer;height:100%;width:100%;p{padding:5px;}&:focus{outline:none;}"], _dashVariables.colorPicker.offWhite, _dashVariables.colorPicker.blue);