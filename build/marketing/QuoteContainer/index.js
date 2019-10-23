"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _Typography = require("../Typography");

var _variables = require("../../utils/_variables");

var _media = _interopRequireDefault(require("../../utils/_media"));

var _Typography2 = require("../../elements/Typography");

var _ThemeProvider = require("../../utils/ThemeProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var QuoteContainer = function QuoteContainer(props) {
  var sortText = function sortText(quote, highlighted) {
    if (!highlighted) {
      return _react["default"].createElement("span", {
        style: {
          color: 'white'
        }
      }, quote);
    }

    var fullSentence = []; // find highlighted text

    var highlightedText = quote.substr(quote.toLowerCase().indexOf(highlighted.toLowerCase()), highlighted.length); // find the start and end indexes of that highlighted text

    var startIdx = quote.indexOf(highlightedText);
    var endIdx = startIdx + highlighted.length; // find the part of the quote before and after the highlighted text

    var beforeHighlight = quote.slice(0, startIdx);
    var afterHighlight = quote.slice(endIdx); // push each segment into full sentence array

    fullSentence.push(beforeHighlight);
    fullSentence.push(highlightedText);
    fullSentence.push(afterHighlight); // map through fullSentence array and return content with appropriate color styles

    return fullSentence.map(function (textSegment, idx) {
      return _react["default"].createElement("span", {
        key: textSegment,
        style: {
          color: idx === 1 ? _variables.colors.green : 'white'
        }
      }, textSegment);
    });
  };

  return _react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement(QuoteContainerWrapper, props, _react["default"].createElement("img", {
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
  })), _react["default"].createElement(Context, null, _react["default"].createElement(QuoteText, null, "\u201C", sortText(props.children, props.highlighted), "\u201D"), _react["default"].createElement("div", {
    className: "contributer"
  }, _react["default"].createElement(_Typography2.Body, {
    color: "white"
  }, props.person, ", "), _react["default"].createElement(_Typography2.Body, {
    color: "white"
  }, "\xA0", props.position, " ")), _react["default"].createElement("img", {
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
  }))));
};

exports.QuoteContainer = QuoteContainer;

var QuoteContainerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__QuoteContainerWrapper",
  componentId: "sc-1jclz2n-0"
})(["background:", ";width:100%;display:flex;justify-content:center;.bg-image{position:absolute;width:20%;top:0;right:0;}"], _variables.colors.blue);

var StyledQuoteContainer = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__StyledQuoteContainer",
  componentId: "sc-1jclz2n-1"
})(["display:flex;padding:40px;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap;box-sizing:border-box;position:relative;max-width:1140px;", ""], _media["default"].xs(_templateObject()));

var ImageWrapper = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__ImageWrapper",
  componentId: "sc-1jclz2n-2"
})(["overflow:hidden;width:425px;height:475px;position:relative;border-radius:6px;.person{object-fit:cover;height:100%;z-index:1;}.left{position:absolute;top:-5px;left:-5px;width:30%;z-index:5;}.right{position:absolute;top:0px;right:-5px;width:10%;z-index:5;bottom:0px;height:100%;}", " ", " ", ""], _media["default"].lg(_templateObject2()), _media["default"].md(_templateObject3()), _media["default"].xs(_templateObject4()));

var QuoteText = (0, _styledComponents["default"])(_Typography.Header).withConfig({
  displayName: "QuoteContainer__QuoteText",
  componentId: "sc-1jclz2n-3"
})(["letter-spacing:0.3px;margin-bottom:30px;text-indent:-0.5em;font-style:none;font-weight:bold;color:white;"]);

var Context = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__Context",
  componentId: "sc-1jclz2n-4"
})(["padding:20px 0px;display:flex;flex-direction:column;justify-content:flex-start;width:50%;margin-left:60px;z-index:1;align-items:flex-start;img{margin-top:15px;object-fit:contain;height:25px;max-width:215px;}.contributer{color:white;font-size:18px;display:flex;flex-direction:row;align-items:center;}", ";"], _media["default"].md(_templateObject5()));

QuoteContainer.propTypes = {
  /**
  The person being quoted in the current QuoteContainer
  */
  person: _propTypes["default"].string.isRequired,

  /**
  The person being quoted's position/role in the current QuoteContainer
  */
  position: _propTypes["default"].string.isRequired,

  /**
  The person being quoted's brand logo in the current QuoteContainer
  */
  logo: _propTypes["default"].string.isRequired,

  /**
   Featured image in the left column of the component
  */
  image: _propTypes["default"].string.isRequired,

  /**
   The portion of the quote that is to be highlighted
  */
  highlighted: _propTypes["default"].string.isRequired,

  /**
   The child rendered inside of the QuoteContainer component is the quote
  */
  children: _propTypes.node.isRequired
};
QuoteContainer.defaultProps = {
  person: '',
  position: '',
  logo: '',
  image: '',
  highlighted: ''
}; // person="Person Sited"
// position="Person's Position"
// logo="https://www.zatista.com/sitemap/email-images/logo-placeholder.jpg"
// image="https://www.loxtonia.co.za/wp-content/uploads/2018/08/placeholder-person-man.png"
// highlighted="hightlighted text"