"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _swatches = require("../../utils/_swatches");

var _animations = require("../../utils/_animations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getColor = function getColor(color) {
  console.log("color", color);

  switch (color) {
    case "blue":
      return _swatches.swatches.blue;

    case "green":
      return _swatches.swatches.green;

    case "red":
      return _swatches.swatches.red;

    case "white":
      return "#FFFFFF";

    case "gray":
      return _swatches.swatches.gray;

    default:
      return null;
  }
};

var StyledButtonWrapper = _styledComponents["default"].button.attrs(function (props) {
  return {
    className: props.className,
    themeExists: Object.entries(props.theme).length > 0
  };
}).withConfig({
  displayName: "styles__StyledButtonWrapper",
  componentId: "jpp4hr-0"
})(["text-transform:uppercase;outline:none;line-height:1.5;letter-spacing:1px;font-size:14px;display:flex;justify-items:center;justify-content:center;align-items:center;position:relative;", " &:hover{", ";cursor:pointer;}padding:", ";", ";background:", ";", ";color:", ";border-color:", ";border-width:", ";border-style:solid;border-radius:3px;", ";", " ", " a{font-size:14px;color:", ";text-decoration:none;box-shadow:none;", " ", ";", ";}", " ", ";"], _animations.transition, _animations.btnHover, function (props) {
  return props.themeExists ? "12px 20px" : "8px 16px";
}, function (props) {
  return props.thin && "padding-top: 8px; padding-bottom: 8px";
}, function (props) {
  return props.color ? getColor(props.color) : props.themeExists ? props.theme.fg : _swatches.swatches.blue;
}, function (props) {
  return props.invert && "background: transparent";
}, function (props) {
  return (props.color === "white" || props.themeExists && props.theme.fg === "#FFFFFF") && !props.plainText && !props.invert ? _swatches.swatches.blue : !props.invert && !props.plainText ? "#FFFFFF" : props.color ? getColor(props.color) : _swatches.swatches.blue;
}, function (props) {
  return !props.invert ? "transparent" : props.color ? getColor(props.color) : "transparent";
}, function (props) {
  return props.plainText ? "0px" : "1px";
}, function (props) {
  return props.plainText && "color: ".concat(function (props) {
    return props.color;
  }, "; background: transparent;padding-left: 0px; padding-right: 0px");
}, function (props) {
  return props.style && props.style;
}, _dashVariables.sofiaPro.medium, function (props) {
  return !props.invert && !props.plainText ? "#FFFFFF" : props.color ? getColor(props.color) : _swatches.swatches.blue;
}, _dashVariables.sofiaPro.medium, function (props) {
  return props.plainText && "color: ".concat(function (props) {
    return props.color;
  });
}, function (props) {
  return props.isDisabled && "color: ".concat(_swatches.swatches.gray);
}, function (props) {
  return props.isDisabled && "background: ".concat(_swatches.swatches.gray, ";\n    color: ").concat(_swatches.swatches.disabledState, ";\n    border: 1px solid transparent;\n    box-shadow: none;\n    &:hover {\n      cursor: default;\n      transform: translateY(0px);\n    }");
}, function (props) {
  return props.isDisabled && props.plainText && "color: ".concat(_swatches.swatches.gray, "; background: transparent");
});

exports.StyledButtonWrapper = StyledButtonWrapper;