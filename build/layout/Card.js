"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _excluded = ["onClick"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CardWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-q4rj6f-0"
})(["box-shadow:", ";position:relative;height:300px;width:100%;margin:15px 0;", ";", ";", ";"], _variables.boxShadow.medium, function (props) {
  return props.columns && "\n  width: ".concat(100 / props.columns - 1.9, "%\n  ");
}, function (props) {
  return props.customWidth && "width: ".concat(customWidth);
}, function (props) {
  return props.customHeight && "width: ".concat(customHeight);
});
var CardStyle = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardStyle",
  componentId: "sc-q4rj6f-1"
})(["border-radius:3px;display:flex;flex-direction:column;align-items:center;position:relative;height:100%;width:100%;transition:0.2s ease all;cursor:pointer;", ";", ";"], function (props) {
  return props.bgColor && "background: ".concat(props.bgColor);
}, function (props) {
  return props.style ? props.style : null;
});
var CardImage = _styledComponents["default"].img.withConfig({
  displayName: "Card__CardImage",
  componentId: "sc-q4rj6f-2"
})(["width:100%;object-fit:cover;object-position:top;height:78%;border-radius:3px 3px 0px 0px;"]);
var CardContent = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardContent",
  componentId: "sc-q4rj6f-3"
})(["width:100%;height:22%;padding:14px;border-radius:0px 0px 3px 3px;"]);
var Card = function Card(props) {
  var onClick = props.onClick,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(CardWrapper, _extends({}, rest, {
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement(CardStyle, rest, /*#__PURE__*/_react["default"].createElement(CardImage, {
    src: props.image
  }), /*#__PURE__*/_react["default"].createElement(CardContent, null, props.children)));
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
  Adding background color to the card; default renders transparently
  */
  bgColor: _propTypes["default"].string,
  /**
  The content in the bottom portion of the card
  */
  children: _propTypes["default"].node
};
Card.defaultProps = {};

//   /**
// The conditional to de
// */
// currentCard: PropTypes.bool,

// border: ${props =>
//   props.currentCard ? `2px solid ${colors.blue}` : "2px solid transparent"};