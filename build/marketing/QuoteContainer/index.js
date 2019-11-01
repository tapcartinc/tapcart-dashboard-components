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

var _sizes = require("../../utils/_sizes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\nflex-direction: column;\nalign-items: flex-start;\n\n.mobile-hide {\n  display: none;\n}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    margin: 0 auto;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 300px;\n  height: 350px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 325px;\n  height: 375px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 40px 0px;\n  max-width: 100%;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 25px;\n  padding-right: 25px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 3em;\n  padding-right: 3em;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n  "]);

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

  return _react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement(QuoteContainerWrapper, props, _react["default"].createElement(StyledBlob, {
    width: "255px" // height="168px"
    // viewBox="0 0 255 168"
    ,
    viewBox: "0 0 238 140.3",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("title", null, "top-right"), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M180,140.3h2.6c18.7-.3,37.5-5.1,55.4-13v-87a243.5,243.5,0,0,1-27.2,60.3A250.5,250.5,0,0,1,180,140.3Z",
    style: {
      fill: '#02018c',
      opacity: '.3'
    }
  }), _react["default"].createElement("path", {
    d: "M210.8,100.6A243.5,243.5,0,0,0,238,40.3V34.8a243.7,243.7,0,0,1-28.5,65,245.8,245.8,0,0,1-31.6,40.5H180A250.5,250.5,0,0,0,210.8,100.6Z",
    fill: "#1bdfba"
  })), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M221.4,0H0C9.9,14.9,20.4,29.5,31.4,43.2a161.8,161.8,0,0,0,65.8,14A162.9,162.9,0,0,0,221.4,0Z",
    style: {
      fill: '#02018c',
      opacity: '.3'
    }
  }), _react["default"].createElement("path", {
    d: "M223.4,0A164.6,164.6,0,0,1,97.2,58.7a162.2,162.2,0,0,1-63.8-13l3.8,4.7c37.2,45,79.3,80.2,123.2,88.1a114.1,114.1,0,0,0,17.5,1.8,245.8,245.8,0,0,0,31.6-40.5,243.7,243.7,0,0,0,28.5-65V0Z",
    style: {
      fill: '#02018c',
      opacity: '.3'
    }
  }), _react["default"].createElement("path", {
    d: "M33.4,45.7c1.2,1.6,2.5,3.2,3.8,4.7l-3.8-4.7Z",
    fill: "#02018c"
  }), _react["default"].createElement("path", {
    d: "M97.2,58.7A164.6,164.6,0,0,0,223.4,0h-2A162.9,162.9,0,0,1,97.2,57.2a161.8,161.8,0,0,1-65.8-14l2,2.5A162.2,162.2,0,0,0,97.2,58.7Z",
    fill: "#1bdfba"
  }))), _react["default"].createElement(StyledQuoteContainer, null, _react["default"].createElement(ImageWrapper, null, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "280",
    width: "159",
    style: {
      position: 'absolute'
    }
  }, _react["default"].createElement("defs", null, _react["default"].createElement("clipPath", {
    id: "a",
    transform: "translate(20 0.7)"
  }, _react["default"].createElement("rect", {
    x: "-20",
    y: "-0.7",
    width: "125",
    height: "192.74",
    fill: "none"
  }))), _react["default"].createElement("title", null, "bottom-left"), _react["default"].createElement("g", {
    style: {
      clipPath: 'url(#a)'
    }
  }, _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M43.3,108Q109.7,62.4,104.6-.7H-20V190.8Q-3.4,140.1,43.3,108Z",
    transform: "translate(20 0.7)",
    fill: "#16289b"
  }), _react["default"].createElement("path", {
    d: "M27,48.9A137,137,0,0,0-20,71.7v1.8A138.8,138.8,0,0,1,27.4,50.3,147,147,0,0,1,47,46.6l-1.1-1.4A157.6,157.6,0,0,0,27,48.9Z",
    transform: "translate(20 0.7)",
    fill: "#fff",
    style: {
      opacity: '0.36'
    }
  }), _react["default"].createElement("path", {
    d: "M45.9,45.2,47,46.6a142.2,142.2,0,0,1,49.1,3l.6-1.4A142.2,142.2,0,0,0,45.9,45.2Z",
    transform: "translate(20 0.7)",
    fill: "#ffffff",
    style: {
      opacity: '0.36'
    }
  }), _react["default"].createElement("path", {
    d: "M47,46.6l-1.1-1.4A222.2,222.2,0,0,0-1.2-.7H-3.8a217.8,217.8,0,0,1,48,46.1l1.1,1.4A243,243,0,0,1,69.7,86.4a5.7,5.7,0,0,0,1.1-1.1A245.9,245.9,0,0,0,47,46.6Z",
    transform: "translate(20 0.7)",
    fill: "#ffffff",
    style: {
      opacity: '0.36'
    }
  })))), _react["default"].createElement("svg", {
    className: "right",
    width: "13px",
    height: "472px",
    viewBox: "0 0 13 472",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("g", {
    id: "Landing-Page",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    id: "1.0-Landing-Page",
    transform: "translate(-512.000000, -2274.000000)",
    fill: "#1BDFBA"
  }, _react["default"].createElement("g", {
    id: "Quote",
    transform: "translate(0.000000, 2227.000000)"
  }, _react["default"].createElement("g", {
    id: "Image",
    transform: "translate(100.000000, 47.000000)"
  }, _react["default"].createElement("path", {
    d: "M192.5,219.60271 L672.5,219.60271 L672.5,256.299097 C563.817163,261.763354 479.790218,261.763354 420.419165,256.299097 C364.209997,251.125845 285,256.299097 192.5,250.5 L192.5,219.60271 Z",
    id: "Path-9",
    transform: "translate(432.500000, 240.000000) rotate(90.000000) translate(-432.500000, -240.000000) "
  })))))), _react["default"].createElement("img", {
    alt: "person",
    className: "person",
    src: props.image
  })), _react["default"].createElement(Context, null, _react["default"].createElement(QuoteText, null, "\u201C", sortText(props.children, props.highlighted), "\u201D"), _react["default"].createElement(StyledPerson, null, _react["default"].createElement(_Typography2.Body, {
    color: "white"
  }, props.person, _react["default"].createElement("span", {
    className: "mobile-hide"
  }, ","), "\xA0"), _react["default"].createElement(_Typography2.Body, {
    color: "white"
  }, props.position, " ")), _react["default"].createElement("img", {
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

var StyledBlob = _styledComponents["default"].svg.withConfig({
  displayName: "QuoteContainer__StyledBlob",
  componentId: "sc-1jclz2n-0"
})(["position:absolute;max-width:100%;max-height:80%;top:0;right:0;"]);

var QuoteContainerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__QuoteContainerWrapper",
  componentId: "sc-1jclz2n-1"
})(["background:", ";width:100%;display:flex;justify-content:center;"], _variables.colors.blue);

var StyledQuoteContainer = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__StyledQuoteContainer",
  componentId: "sc-1jclz2n-2"
})(["display:flex;padding:40px;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap;box-sizing:border-box;position:relative;width:100%;margin-left:auto;margin-right:auto;padding-left:5em;padding-right:5em;max-width:", "px;", " ", " ", " ", " ", ""], _sizes.sizes.xl, _media["default"].lg(_templateObject()), _media["default"].md(_templateObject2()), _media["default"].sm(_templateObject3()), _media["default"].xs(_templateObject4()), _media["default"].xs(_templateObject5()));

var ImageWrapper = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__ImageWrapper",
  componentId: "sc-1jclz2n-3"
})(["overflow:hidden;width:400px;height:450px;position:relative;border-radius:6px;.person{object-fit:cover;height:100%;width:100%;z-index:1;}.right{position:absolute;top:0px;right:0px;z-index:5;bottom:0px;height:100%;}", " ", " ", ""], _media["default"].lg(_templateObject6()), _media["default"].md(_templateObject7()), _media["default"].xs(_templateObject8()));

var QuoteText = (0, _styledComponents["default"])(_Typography.Header).withConfig({
  displayName: "QuoteContainer__QuoteText",
  componentId: "sc-1jclz2n-4"
})(["letter-spacing:0.3px;margin-bottom:30px;text-indent:-0.5em;font-style:none;font-weight:bold;color:white;"]);

var Context = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__Context",
  componentId: "sc-1jclz2n-5"
})(["padding:20px 0px;display:flex;flex-direction:column;justify-content:flex-start;width:55%;z-index:1;align-items:flex-start;img{margin-top:15px;}", ";"], _media["default"].md(_templateObject9()));

var StyledPerson = _styledComponents["default"].div.withConfig({
  displayName: "QuoteContainer__StyledPerson",
  componentId: "sc-1jclz2n-6"
})(["color:white;font-size:18px;display:flex;flex-direction:row;align-items:center;p:nth-of-type(1){font-weight:700;}", ""], _media["default"].md(_templateObject10()));

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