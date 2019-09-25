"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftAlign = exports.centered = void 0;
var centered = {
  textAlign: "center",
  direction: "column",
  justify: "center"
};
exports.centered = centered;
var leftAlign = {
  textAlign: "left",
  direction: "row",
  justify: "flex-start"
};
exports.leftAlign = leftAlign;