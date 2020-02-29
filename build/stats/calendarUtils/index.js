"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weekDays = void 0;

var _d3Array = require("d3-array");

var weekDays = function () {
  var base = new Date(Date.UTC(2017, 0, 2));
  return (0, _d3Array.range)(7).map(function () {
    var name = base.toLocaleDateString("default", {
      weekday: "short"
    });
    base.setDate(base.getDate() + 1);
    return name;
  });
}();

exports.weekDays = weekDays;