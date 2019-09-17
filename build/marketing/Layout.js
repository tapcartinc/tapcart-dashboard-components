"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteContainer = exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Typography = require("../marketing/Typography");

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hero = _styledComponents["default"].section.withConfig({
  displayName: "Layout__Hero",
  componentId: "pze9na-0"
})(["width:100%;display:flex;flex-direction:", ";justify-content:", ";text-align:", ";min-height:720px;align-items:center;background:", ";"], function (props) {
  return props.layout ? props.layout.direction : "row";
}, function (props) {
  return props.layout ? props.layout.justify : "flex-start";
}, function (props) {
  return props.layout ? props.layout.text : "left";
}, function (props) {
  return props.bgColor ? props.bgColor : props.theme.bg;
});

exports.Hero = Hero;

var QuoteContainer = function QuoteContainer(props) {
  return _react["default"].createElement(QuoteContainerWrapper, props, _react["default"].createElement("img", {
    className: "bg-image",
    src: "https://i.imgur.com/zkEi123.png",
    alt: "blob"
  }), _react["default"].createElement(ImageWrapper, null, _react["default"].createElement("img", {
    src: "https://i.imgur.com/KUWgSbr.png",
    className: "left",
    alt: "oval"
  }), _react["default"].createElement("svg", {
    className: "right",
    width: "13px",
    height: "472px",
    viewBox: "0 0 13 472",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("g", {
    id: "Pricing-Page",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    id: "2.1-expanded",
    transform: "translate(-512.000000, -4221.000000)",
    fill: "#1BDFBA"
  }, _react["default"].createElement("g", {
    id: "Quote",
    transform: "translate(0.000000, 4174.000000)"
  }, _react["default"].createElement("g", {
    id: "Image",
    transform: "translate(100.000000, 47.000000)"
  }, _react["default"].createElement("path", {
    d: "M141,264 L724,264 L724,300.696386 C551.385637,306.160644 435.392928,306.160644 376.021875,300.696386 C319.812707,295.523135 240.60271,300.696386 148.10271,294.89729 C144.979679,294.701498 142.612109,296.63453 141,300.696386 L141,264 Z",
    id: "Path-9",
    transform: "translate(432.500000, 284.397290) rotate(90.000000) translate(-432.500000, -284.397290) "
  })))))), _react["default"].createElement("img", {
    alt: "person",
    className: "person",
    src: props.image
  })), _react["default"].createElement(Context, null, _react["default"].createElement(QuoteText, null, "\"", props.children, "\""), _react["default"].createElement("div", {
    className: "contributer"
  }, _react["default"].createElement("div", {
    className: "contributer__person"
  }, props.person, ", "), _react["default"].createElement("div", {
    className: "contributer__position"
  }, " ", props.position)), _react["default"].createElement("img", {
    src: props.logo,
    alt: "quote"
  })));
};

exports.QuoteContainer = QuoteContainer;

var QuoteContainerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Layout__QuoteContainerWrapper",
  componentId: "pze9na-1"
})(["background:", ";width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:40px;position:relative;.bg-image{position:absolute;width:20%;top:0;right:0;}"], _variables.colors.blue);

var ImageWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Layout__ImageWrapper",
  componentId: "pze9na-2"
})(["overflow:hidden;width:425px;height:475px;position:relative;border-radius:6px;.person{object-fit:cover;height:100%;z-index:1;}.left{position:absolute;top:-5px;left:-5px;width:30%;z-index:5;}.right{position:absolute;top:0px;right:-5px;width:10%;z-index:5;bottom:0px;height:100%;}"]);

var QuoteText = (0, _styledComponents["default"])(_Typography.Header).withConfig({
  displayName: "Layout__QuoteText",
  componentId: "pze9na-3"
})(["letter-spacing:0.3px;color:white;margin-bottom:30px;text-indent:-0.5em;span{color:#1bdfba;}"]);

var Context = _styledComponents["default"].div.withConfig({
  displayName: "Layout__Context",
  componentId: "pze9na-4"
})(["padding:40px;display:flex;flex-direction:column;justify-items:flex-start;width:40%;margin-left:60px;z-index:1;img{margin-top:20px;width:100px;}.contributer{color:white;font-size:18px;line-height:28px;display:flex;flex-direction:row;&__person{", " margin-right:5px;}&__position{", "}}"], _variables.sofia.sofiaSemiBold, _variables.sofia.sofiaLight);