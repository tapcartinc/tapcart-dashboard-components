"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _layout = require("../../utils/_layout");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _media = _interopRequireDefault(require("../../utils/_media"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", ";\n    ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-height: 800px;\n  ", ";\n  ", "\n  ", "\n\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Hero__HeroWrapper",
  componentId: "sc-2udokn-0"
})(["width:100%;display:flex;flex-direction:", ";justify-content:", ";justify-items:", ";text-align:", ";min-height:", ";align-items:center;background:", ";margin:0px;position:relative;", ";", ";", " ", " ", " ", " ", ""], function (props) {
  return props.layout ? props.layout.direction : "row";
}, function (props) {
  return props.layout ? props.layout.justify : "flex-start";
}, function (props) {
  return props.layout ? props.layout.justify : "flex-start";
}, function (props) {
  return props.layout ? props.layout.textAlign : "left";
}, function (props) {
  return props.minHeight ? "".concat(props.minHeight, "px") : "800px";
}, function (props) {
  return props.bgColor ? props.bgColor : props.theme ? props.theme.bg : "white";
}, function (props) {
  return props.contentHeight && "min-height: 1px";
}, function (props) {
  return props.overflowHidden && "overflow: hidden";
}, function (props) {
  return props.tombstone && "padding-left: 20px;\n    padding-right: 20px;\n    h1 {margin-top: -150px;}\n  ";
}, function (props) {
  return props.aboveFold && "min-height: 500px;\n    height: 70vh;\n    margin-bottom: 30px;";
}, _media["default"].md(_templateObject(), function (props) {
  return props.contentHeight && "min-height: 1px";
}, function (props) {
  return props.minHeightMd && "min-height: ".concat(props.minHeightMd, "px;");
}, function (props) {
  return props.aboveFold && "min-height: 500px;";
}, function (props) {
  return props.tombstone && "padding-left: 20px;\n    padding-right: 20px;\n    h1 {margin-top: -250px;}\n  ";
}), _media["default"].sm(_templateObject2(), function (props) {
  return props.aboveFold && "min-height: 550px;\n    height: 550px;";
}, function (props) {
  return props.tombstone && "h1 {margin-top: -325px}";
}, function (props) {
  return props.contentHeight && "min-height: 1px";
}), _media["default"].xs(_templateObject3(), function (props) {
  return props.tombstone && "h1 {margin-top: -350px}";
}));
/**
 * Use `Hero` to contain sections of content in the marketing site.
 *
 * `Hero` is a crucial component in the generic and consistent layout of the marketing pages. For the themeing and alignment of each element to work the `Hero` component must wrap the content.
 */


var Hero = function Hero(props) {
  return _react["default"].createElement(HeroWrapper, props);
};

exports.Hero = Hero;
Hero.propTypes = {
  /**
   Aligns the content (specifically text) on the page.
  */
  // layout: PropTypes.shape({
  //   textAlign: PropTypes.string,
  //   direction: PropTypes.string,
  //   justify: PropTypes.string
  // }),
  layout: _propTypes["default"].object,

  /**
   Useful for images / content that bleeds over of the section or off of the layout
  */
  overflowHidden: _propTypes["default"].bool,

  /**
  Allows a custom height to be set to the particular segment of content
  */
  minHeight: _propTypes["default"].number,

  /**
  Sets the minimum height to 1px allow the content to control the overall height of the section
  */
  contentHeight: _propTypes["default"].bool,

  /**
   Creates overlay effect of content below the current section
  */
  tombstone: _propTypes["default"].bool,
  aboveFold: _propTypes["default"].bool,
  children: _propTypes.node.isRequired
};
Hero.defaultProps = {
  layout: _layout.leftAlign,
  overflowHidden: false,
  minHeight: 800,
  contentHeight: false,
  tombstone: false,
  aboveFold: false
};