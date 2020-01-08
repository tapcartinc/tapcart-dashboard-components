"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hero = _styledComponents["default"].section.withConfig({
  displayName: "Hero",
  componentId: "sc-2udokn-0"
})(["width:100%;display:flex;flex-direction:", ";justify-content:", ";justify-items:", ";text-align:", ";min-height:800px;align-items:center;background:", ";margin:0px;position:relative;"], function (props) {
  return props.layout ? props.layout.direction : "row";
}, function (props) {
  return props.layout ? props.layout.justify : "flex-start";
}, function (props) {
  return props.layout ? props.layout.justify : "flex-start";
}, function (props) {
  return props.layout ? props.layout.textAlign : "left";
}, function (props) {
  return props.bgColor ? props.bgColor : props.theme ? props.theme.bg : "white";
});

exports.Hero = Hero;
// layout / centered, leftAlign
// overflowHidden / bool
// minHeight / number
// autoHeight
// tombstone / bool
// padding / number
// gradient bg? ( reference MobileCheckout component ) / bool
// above fold / bool
Hero.propTypes = {
  layout: _propTypes["default"].string,
  overflowHidden: _propTypes["default"].bool,
  minHeight: _propTypes["default"].number,
  contentHeight: _propTypes["default"].bool,
  tombstone: _propTypes["default"].bool,
  aboveFold: _propTypes["default"].bool,
  children: _propTypes.node.isRequired
};
Hero.defaultProps = {
  layout: "leftAlign",
  overflowHidden: false,
  minHeight: "800px",
  contentHeight: false,
  tombstone: false,
  aboveFold: false
};