"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteContainer = exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Typography = require("../marketing/Typography");

var _variables = require("../utils/_variables");

var _media = _interopRequireDefault(require("../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    margin: 0 auto;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 300px;\n  height: 350px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 325px;\n  height: 375px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 40px 0px;\n  max-width: 100%;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = _styledComponents["default"].section.withConfig({
  displayName: "Layout__Hero",
  componentId: "pze9na-0"
})(["width:100%;display:flex;flex-direction:", ";justify-content:", ";justify-items:", ";text-align:", ";min-height:900px;align-items:center;background:", ";margin:0px;"], function (props) {
  return props.layout ? props.layout.direction : 'row';
}, function (props) {
  return props.layout ? props.layout.justify : 'flex-start';
}, function (props) {
  return props.layout ? props.layout.justify : 'flex-start';
}, function (props) {
  return props.layout ? props.layout.textAlign : 'left';
}, function (props) {
  return props.bgColor ? props.bgColor : props.theme.bg;
});

exports.Hero = Hero;

var QuoteContainer = function QuoteContainer(props) {
  return _react["default"].createElement(QuoteContainerWrapper, props, _react["default"].createElement("img", {
    className: "bg-image",
    src: "https://i.imgur.com/zkEi123.png",
    alt: "blob"
  }), _react["default"].createElement(StyledQuoteContainer, null, _react["default"].createElement(ImageWrapper, null, _react["default"].createElement("img", {
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
  }))), _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "green-path",
    viewBox: "0 0 1440 13.8"
  }, _react["default"].createElement("title", null, "Path 9"), _react["default"].createElement("path", {
    d: "M1440,150.8c-22.5-.8-103.1-1.6-142.1-2.3-43.9-.9-201.2-2.6-238.5-2.2s-142.9,1.3-200.3,4.8-88.6,2.1-129,3.4-190.2.9-246.3,1.3-170.3-1.3-213.7-1.7-112.9-.4-142-.9c-25.9-.3-109.8-1.8-128.1-2.1V160H1440Z",
    transform: "translate(0 -146.2)",
    fill: "#1bdfba"
  })));
};

exports.QuoteContainer = QuoteContainer;

var QuoteContainerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Layout__QuoteContainerWrapper",
  componentId: "pze9na-1"
})(["background:", ";width:100%;display:flex;justify-content:center;.bg-image{position:absolute;width:20%;top:0;right:0;}"], _variables.colors.blue);

var StyledQuoteContainer = _styledComponents["default"].div.withConfig({
  displayName: "Layout__StyledQuoteContainer",
  componentId: "pze9na-2"
})(["display:flex;padding:40px;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap;box-sizing:border-box;position:relative;max-width:1140px;", ""], _media["default"].xs(_templateObject()));

var ImageWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Layout__ImageWrapper",
  componentId: "pze9na-3"
})(["overflow:hidden;width:425px;height:475px;position:relative;border-radius:6px;.person{object-fit:cover;height:100%;z-index:1;}.left{position:absolute;top:-5px;left:-5px;width:30%;z-index:5;}.right{position:absolute;top:0px;right:-5px;width:10%;z-index:5;bottom:0px;height:100%;}", " ", " ", ""], _media["default"].lg(_templateObject2()), _media["default"].md(_templateObject3()), _media["default"].xs(_templateObject4()));

var QuoteText = (0, _styledComponents["default"])(_Typography.Header).withConfig({
  displayName: "Layout__QuoteText",
  componentId: "pze9na-4"
})(["letter-spacing:0.3px;color:white;margin-bottom:30px;text-indent:-0.5em;span{color:#1bdfba;}"]);

var Context = _styledComponents["default"].div.withConfig({
  displayName: "Layout__Context",
  componentId: "pze9na-5"
})(["padding:20px 0px;display:flex;flex-direction:column;justify-content:flex-start;width:50%;margin-left:60px;z-index:1;align-items:flex-start;img{margin-top:20px;object-fit:contain;}.contributer{color:white;font-size:18px;line-height:28px;display:flex;flex-direction:row;&__person{", " margin-right:5px;}&__position{", "}}", ";"], _variables.sofia.sofiaSemiBold, _variables.sofia.sofiaLight, _media["default"].md(_templateObject5()));