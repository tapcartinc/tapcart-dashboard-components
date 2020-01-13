"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CardStyle = _styledComponents["default"].section.withConfig({
  displayName: "Card__CardStyle",
  componentId: "sc-1sk85c6-0"
})(["border-radius:3px;", " display:flex;flex-direction:column;align-items:center;width:", ";height:", ";", " &:hover{", ";cursor:pointer;}position:relative;max-width:400px;margin:20px;&::before{content:\"\";display:block;border:", ";height:100%;width:100%;position:absolute;border-radius:3px;}", ";"], _variables.boxShadow, function (props) {
  return props.columns ? "".concat(100 / props.columns, "%") : "33.333%";
}, function (props) {
  return props.height ? props.height : "300px";
}, _animations.transition, _animations.hover, function (props) {
  return props.selectedCard ? "2px solid ".concat(_variables.colors.blue) : "2px solid transparent";
}, function (props) {
  return props.style ? props.style : null;
});

var CardImage = _styledComponents["default"].img.withConfig({
  displayName: "Card__CardImage",
  componentId: "sc-1sk85c6-1"
})(["width:100%;object-fit:cover;height:75%;border-radius:3px 3px 0px 0px;"]);

var CardContent = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardContent",
  componentId: "sc-1sk85c6-2"
})(["width:100%;height:25%;display:flex;justify-content:center;align-items:center;border-radius:0px 0px 3px 3px;"]);

var SelectedIcon = _styledComponents["default"].div.withConfig({
  displayName: "Card__SelectedIcon",
  componentId: "sc-1sk85c6-3"
})(["position:absolute;top:0;transform:translateY(-10px);text-align:center;margin:0 auto;"]);

var Card = function Card(props) {
  return _react["default"].createElement(CardStyle, _extends({}, props, {
    onClick: props.onClick
  }), props.selectedCard && _react["default"].createElement(SelectedIcon, null, _react["default"].createElement(_Icon.Icon, {
    fill: "white",
    circleIcon: true,
    type: "checkmark",
    backgroundColor: "green",
    style: {
      height: "20px",
      width: "20px"
    }
  })), _react["default"].createElement(CardImage, {
    src: props.image
  }), _react["default"].createElement(CardContent, null, props.children));
};

exports.Card = Card;