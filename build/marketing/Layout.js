"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hero = _styledComponents["default"].section.withConfig({
  displayName: "Layout__Hero",
  componentId: "pze9na-0"
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