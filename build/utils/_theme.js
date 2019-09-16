"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.neutral = exports.invert = exports.base = void 0;

var _variables = require("./_variables");

var base = {
  fg: _variables.colors.blue,
  bg: "white",
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
var neutral = {
  fg: _variables.colors.black,
  bg: "#F3F3F7",
  header: _variables.colors.black,
  subtext: _variables.colors.black,
  body: _variables.colors.blue
};
exports.neutral = neutral;