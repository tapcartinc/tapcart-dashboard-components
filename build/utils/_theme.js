"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gradient = exports.offWhite = exports.scrollingNav = exports.topNav = exports.neutral = exports.invert = exports.base = void 0;

var _swatches = require("./_swatches");

var base = {
  fg: _swatches.swatches.blue,
  bg: "#FFFFFF",
  header: _swatches.swatches.black,
  subtext: _swatches.swatches.black,
  body: _swatches.swatches.black
};
exports.base = base;

var invert = function invert(_ref) {
  var fg = _ref.fg,
      bg = _ref.bg;
  return {
    fg: bg,
    bg: fg,
    header: "#FFFFFF",
    subtext: "#FFFFFF",
    body: "#FFFFFF"
  };
};

exports.invert = invert;

var offWhite = function offWhite(_ref2) {
  var fg = _ref2.fg,
      header = _ref2.header,
      subtext = _ref2.subtext,
      body = _ref2.body;
  return {
    fg: fg,
    header: header,
    subtext: subtext,
    body: body,
    bg: _swatches.swatches.offwhite
  };
};

exports.offWhite = offWhite;
var neutral = {
  fg: _swatches.swatches.black,
  bg: "#F3F3F7",
  header: _swatches.swatches.black,
  subtext: _swatches.swatches.black,
  body: _swatches.swatches.blue
};
exports.neutral = neutral;

var gradient = function gradient(fgColor, bgColor) {
  return {
    fg: _swatches.swatches.black,
    bg: "linear-gradient(184deg, ".concat(fgColor, ", ").concat(bgColor, ")"),
    header: _swatches.swatches.black,
    subtext: _swatches.swatches.black,
    body: _swatches.swatches.blue
  };
};

exports.gradient = gradient;
var topNav = {
  background: "transparent",
  fg: _swatches.swatches.white
};
exports.topNav = topNav;
var scrollingNav = {
  background: "#FFFFFF",
  fg: _swatches.swatches.blue
};
exports.scrollingNav = scrollingNav;