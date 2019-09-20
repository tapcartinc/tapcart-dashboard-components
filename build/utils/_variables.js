"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.space = exports.gradientOverlay = exports.border = exports.circular = exports.inputBorder = exports.borderRadius = exports.margin = exports.boxShadow = exports.sofia = exports.colors = void 0;

var _leftToRight, _rightToLeft, _bottomToTop, _topToBottom;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/////////
// Colors
/////////
var colors = _defineProperty({
  blue: "#373aaf",
  blue10: "#f6faff",
  blue15: "#CBCFDD",
  blue25: "#DBE1EF",
  blue50: "#BAC4E0",
  blue75: "#738EDA",
  lightpurple: "#7574EF",
  // 393cb4
  offwhite: "#FCFEFF",
  white: "#F3F3F7",
  gray: "#BDBDBD",
  gray10: "#F8F7F8",
  gray25: "#F0F2F5",
  gray50: "#e9e9e9",
  gray75: "#D8D8D8",
  darkgray: "#8A888A",
  grayText: "#abb1c2",
  green: "#1BDFBA",
  bluegray: "#A1A8B9",
  black: "#000000",
  highlightblue: "#E3EFFD",
  yellow: "#F6B343",
  red: "#D94747"
}, "black", "#000000");

exports.colors = colors;
var sofia = {
  sofiaSemiBold: {
    fontFamily: "Sofia Pro",
    fontWeight: 600,
    fontStyle: "normal"
  },
  sofiaMedium: {
    fontFamily: "Sofia Pro",
    fontWeight: 500,
    fontStyle: "normal"
  },
  sofiaRegular: {
    fontFamily: "Sofia Pro",
    fontWeight: "normal",
    fontStyle: "normal"
  },
  sofiaLight: {
    fontFamily: "Sofia Pro",
    fontWeight: 200,
    fontStyle: "normal"
  },
  sofiaItalic: {
    fontFamily: "Sofia Pro",
    fontWeight: "normal",
    fontStyle: "italic"
  }
};
exports.sofia = sofia;
var boxShadow = {
  boxShadow: "0 0 28px 0 rgba(0, 0, 0, 0.14)"
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
    fontFamily: "CircularStd-Book"
  },
  circularBold: {
    fontFamily: "CircularStd-Bold"
  },
  circularMedium: {
    fontFamily: "CircularStd-Medium"
  },
  circularBlack: {
    fontFamily: "CircularStd-Black"
  },
  circularBookItalic: {
    fontFamily: "CircularStd-BookItalic"
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
var space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
exports.space = space;