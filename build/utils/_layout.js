"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftAlign = exports.centered = void 0;
var centered = {
  textAlign: "center",
  direction: "column",
  justify: "flex-start"
};
exports.centered = centered;
var leftAlign = {
  textAlign: "left",
  direction: "row",
  justify: "center"
};
exports.leftAlign = leftAlign;