"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topNav = exports.scrollingNav = exports.offWhite = exports.neutral = exports.invert = exports.gradient = exports.base = void 0;
var _variables = require("./_variables");
var base = {
  fg: _variables.colors.blue,
  bg: "#FFFFFF",
  header: _variables.colors.black,
  subtext: _variables.colors.black,
  body: _variables.colors.blue
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
    bg: _variables.colors.offwhite
  };
};
exports.offWhite = offWhite;
var neutral = {
  fg: _variables.colors.black,
  bg: "#F3F3F7",
  header: _variables.colors.black,
  subtext: _variables.colors.black,
  body: _variables.colors.blue
};
exports.neutral = neutral;
var gradient = function gradient(fgColor, bgColor) {
  return {
    fg: _variables.colors.black,
    bg: "linear-gradient(184deg, ".concat(fgColor, ", ").concat(bgColor, ")"),
    header: _variables.colors.black,
    subtext: _variables.colors.black,
    body: _variables.colors.blue
  };
};
exports.gradient = gradient;
var topNav = {
  background: "transparent",
  fg: _variables.colors.white
};
exports.topNav = topNav;
var scrollingNav = {
  background: "white",
  fg: _variables.colors.blue
};
exports.scrollingNav = scrollingNav;