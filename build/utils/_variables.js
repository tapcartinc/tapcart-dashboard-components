"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sofia = exports.marginRight = exports.marginLeft = exports.margin = exports.inputBorder = exports.gradientOverlay = exports.colors = exports.circular = exports.boxShadow = exports.borderRadius = exports.border = void 0;
var _leftToRight, _rightToLeft, _bottomToTop, _topToBottom;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/////////
// Colors
/////////

var colors = {
  blue: "#373aaf",
  blue10: "#f6faff",
  blue15: "#CBCFDD",
  blue25: "#DBE1EF",
  blue50: "#BAC4E0",
  blue75: "#738EDA",
  lightpurple: "#7574EF",
  darkBlue: "#02018C",
  offwhite: "#FCFEFF",
  bgGray: "#F3F3F7",
  lightestGray: "#fcfcfc",
  lightestGrayBorder: "#f4f4f4",
  gray: "#BDBDBD",
  gray10: "#F8F7F8",
  gray25: "#F0F2F5",
  gray50: "#e9e9e9",
  gray75: "#D8D8D8",
  darkgray: "#8A888A",
  grayText: "#a1a8b9",
  coolBgGray: "#f9fbfe",
  green: "#1BDFBA",
  bluegray: "#a1a8b9",
  black: "#000000",
  highlightblue: "#E3EFFD",
  yellow: "#F6B343",
  red: "#D94747",
  gold: "#d5a83e"
};
exports.colors = colors;
var sofia = {
  sofiaSemiBold: {
    fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 600,
    fontStyle: "normal"
  },
  sofiaMedium: {
    fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontStyle: "normal"
  },
  sofiaRegular: {
    fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontStyle: "normal"
  },
  sofiaLight: {
    fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 200,
    fontStyle: "normal"
  },
  sofiaItalic: {
    fontFamily: "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: "normal",
    fontStyle: "italic"
  }
};
exports.sofia = sofia;
var boxShadow = {
  small: "0 2px 5px 0 rgba(0, 0, 0, 0.05),\n  0 2px 10px 0 rgba(0, 0, 0, 0.025),\n  0 2px 20px 0 rgba(0, 0, 0, 0.025)",
  medium: "0 2px 10px 0 rgba(0, 0, 0, 0.05),\n  0 2px 20px 0 rgba(0, 0, 0, 0.025),\n  0 2px 30px 0 rgba(0, 0, 0, 0.025)",
  large: "0 2px 30px 0 rgba(0, 0, 0, 0.05),\n  0 2px 50px 0 rgba(0, 0, 0, 0.025),\n  0 2px 70px 0 rgba(0, 0, 0, 0.025)"
};
exports.boxShadow = boxShadow;
var margin = {
  margin: "30px auto"
};
exports.margin = margin;
var borderRadius = {
  borderRadius: "4px"
};
exports.borderRadius = borderRadius;
var inputBorder = {
  borderRadius: borderRadius.borderRadius,
  backgroundColor: colors.offwhite,
  borderColor: colors.bluegray,
  bordeRadius: "3px",
  borderStyle: "solid",
  borderWidth: "1px",
  outline: "0px !important"
};
exports.inputBorder = inputBorder;
var circular = {
  circularBook: {
    fontFamily: "CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBold: {
    fontFamily: "CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularMedium: {
    fontFamily: "CircularStd-Medium, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBlack: {
    fontFamily: "CircularStd-Black, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBookItalic: {
    fontFamily: "CircularStd-BookItalic, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  }
};
exports.circular = circular;
var border = {
  lightblue: {
    borderRadius: "2px",
    border: "1px solid ".concat(colors.blue25)
  },
  lightgray: {
    borderRadius: "3px",
    border: "1px solid ".concat(colors.gray25)
  },
  divider: {
    borderBottom: "1px solid ".concat(colors.gray25)
  },
  dotted: {
    border: "1px dashed ".concat(colors.blue25)
  }
};
exports.border = border;
var gradientOverlay = {
  leftToRight: (_leftToRight = {
    background: "-moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)"
  }, _defineProperty(_leftToRight, "background", "-webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"), _defineProperty(_leftToRight, "background", "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"), _leftToRight),
  rightToLeft: (_rightToLeft = {
    background: "-moz-linear-gradient(left,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)"
  }, _defineProperty(_rightToLeft, "background", "-webkit-linear-gradient(left,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"), _defineProperty(_rightToLeft, "background", "linear-gradient(to right,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"), _rightToLeft),
  bottomToTop: (_bottomToTop = {
    background: "-moz-linear-gradient(top,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)"
  }, _defineProperty(_bottomToTop, "background", "-webkit-linear-gradient(top,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"), _defineProperty(_bottomToTop, "background", "linear-gradient(to bottom,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"), _bottomToTop),
  topToBottom: (_topToBottom = {
    background: " -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)"
  }, _defineProperty(_topToBottom, "background", "-webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"), _defineProperty(_topToBottom, "background", "linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"), _topToBottom)
};
exports.gradientOverlay = gradientOverlay;
var marginRight = {
  marginRight: "10px"
};
exports.marginRight = marginRight;
var marginLeft = {
  marginLeft: "10px"
};
exports.marginLeft = marginLeft;