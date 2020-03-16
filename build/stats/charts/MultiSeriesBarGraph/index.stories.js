"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiSeriesBarGraph = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../../utils/main.css");

var _dashVariables = require("../../../utils/_dashVariables");

var _index = require("./index");

var _sessionPerSourceData = _interopRequireDefault(require("./sessionPerSourceData.json"));

var _useGetDifference = require("../../../hooks/useGetDifference");

var _generateDates = require("../HeatMapGraph/generateDates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _index.MultiSeriesBarGraph,
  title: "Stats/Charts/MultiSeriesBarGraph"
};
exports["default"] = _default;

var multiSeriesBarGraph = function multiSeriesBarGraph() {
  var data = (0, _generateDates.generateDates)(new Date("11/1/2019"), new Date("11/24/2019"));
  var statValues = {};

  var statInfo = _objectSpread({}, statValues, {
    sectionInfo: [{
      title: "Active Sessions",
      currentTotal: "2090000",
      prevTotal: "2103000",
      difference: "↓ 2,103 (30.2%)"
    }]
  });

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.MultiSeriesBarGraph, {
    data: data,
    range: {
      startDate: new Date("11/1/2019"),
      endDate: new Date("11/24/2019")
    },
    keys: ["Direct", "Push", "Deeplink"],
    colors: ["#01006f", "#373aaf", "#738eda"],
    statValues: statInfo,
    title: "App Sessions by Device"
  }));
};

exports.multiSeriesBarGraph = multiSeriesBarGraph;