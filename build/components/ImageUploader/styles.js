"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledImagePlaceholder = exports.StyledImage = exports.StyledImageInput = exports.StyledImageInputHolder = exports.StyledLabel = exports.StyledImageInputWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _TypographyOld = require("../../elements/TypographyOld");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledImageInputWrapper = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledImageInputWrapper",
  componentId: "wf7b98-0"
})(["display:flex;flex-direction:column;align-items:flex-start;font-size:13px;padding-right:5px;", ""], _dashVariables.sofiaPro.regular);

exports.StyledImageInputWrapper = StyledImageInputWrapper;
var StyledLabel = (0, _styledComponents["default"])(_TypographyOld.Body).withConfig({
  displayName: "styles__StyledLabel",
  componentId: "wf7b98-1"
})(["margin-bottom:7px;font-weight:400;font-style:normal;font-display:swap;font-size:14px;line-height:1.5;letter-spacing:normal;color:", ";"], _dashVariables.colorPicker.black);
exports.StyledLabel = StyledLabel;

var StyledImageInputHolder = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledImageInputHolder",
  componentId: "wf7b98-2"
})(["height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:3px;", ";overflow:hidden;&:focus{outline:none;}"], function (props) {
  return props.borderRadius && "border-radius: ".concat(props.borderRadius);
});

exports.StyledImageInputHolder = StyledImageInputHolder;

var StyledImageInput = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledImageInput",
  componentId: "wf7b98-3"
})(["width:320px;min-height:170px;height:auto;border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px dashed ", ";", ";transition:all 0.2s ease;", ";", ";", ";&:hover{cursor:pointer;box-shadow:0 0 0 2px ", ";}"], _dashVariables.colorPicker.grayBlue, function (props) {
  return props.hasValue && "border: 1px solid ".concat(_dashVariables.colorPicker.lightGray);
}, function (props) {
  return props.borderRadius && "border-radius: ".concat(props.borderRadius);
}, function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.height && "height: ".concat(props.height);
}, _dashVariables.colorPicker.blue);

exports.StyledImageInput = StyledImageInput;

var StyledImage = _styledComponents["default"].img.withConfig({
  displayName: "styles__StyledImage",
  componentId: "wf7b98-4"
})(["background:", ";cursor:pointer;width:100%;height:100%;object-fit:cover;"], _dashVariables.colorPicker.offWhite);

exports.StyledImage = StyledImage;

var StyledImagePlaceholder = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledImagePlaceholder",
  componentId: "wf7b98-5"
})(["background:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:11px;line-height:1.27;text-align:center;color:", ";cursor:pointer;height:100%;width:100%;min-height:170px;p{padding:5px;}&:focus{outline:none;}"], _dashVariables.colorPicker.offWhite, _dashVariables.colorPicker.blue);

exports.StyledImagePlaceholder = StyledImagePlaceholder;