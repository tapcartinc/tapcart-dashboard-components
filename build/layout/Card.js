"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dashVariables = require("../utils/_dashVariables");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CardWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardWrapper",
  componentId: "q4rj6f-0"
})(["box-shadow:", ";position:relative;height:300px;width:100%;margin:15px 0;", ";", ";", ";"], _variables.boxShadow.medium, function (props) {
  return props.columns && "\n  width: ".concat(100 / props.columns - 1.9, "%\n  ");
}, function (props) {
  return props.customWidth && "width: ".concat(customWidth);
}, function (props) {
  return props.customHeight && "width: ".concat(customHeight);
});

var CardStyle = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardStyle",
  componentId: "q4rj6f-1"
})(["border-radius:3px;display:flex;flex-direction:column;align-items:center;position:relative;height:100%;width:100%;transition:0.2s ease all;cursor:pointer;&:hover{}", ";"], function (props) {
  return props.style ? props.style : null;
});

var CardImage = _styledComponents["default"].img.withConfig({
  displayName: "Card__CardImage",
  componentId: "q4rj6f-2"
})(["width:100%;object-fit:cover;object-position:top;height:78%;border-radius:3px 3px 0px 0px;"]);

var CardContent = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardContent",
  componentId: "q4rj6f-3"
})(["width:100%;height:22%;padding:14px;border-radius:0px 0px 3px 3px;"]);

var Card = function Card(props) {
  return _react["default"].createElement(CardWrapper, _extends({}, props, {
    onClick: props.onClick
  }), _react["default"].createElement(CardStyle, props, _react["default"].createElement(CardImage, {
    src: props.image
  }), _react["default"].createElement(CardContent, null, props.children)));
};

exports.Card = Card;
Card.propTypes = {
  /**
  The path to the image that fills the top / focus of the card
  */
  image: _propTypes["default"].string,

  /**
  Function being called when the card is clicked on
  */
  onClick: _propTypes["default"].func,

  /**
  The content in the bottom portion of the card
  */
  children: _propTypes["default"].node
};
Card.defaultProps = {}; //   /**
// The conditional to de
// */
// currentCard: PropTypes.bool,
// border: ${props =>
//   props.currentCard ? `2px solid ${colors.blue}` : "2px solid transparent"};