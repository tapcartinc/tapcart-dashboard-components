"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pieGraph = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../../utils/main.css");

var _dashVariables = require("../../../utils/_dashVariables");

var _index = require("./index");

var _pushSubscribersData = _interopRequireDefault(require("./pushSubscribersData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _index.PieGraph,
  title: "Stats/Charts/PieGraph"
};
exports["default"] = _default;

var pieGraph = function pieGraph() {
  var statValues = {};

  var statInfo = _objectSpread({}, statValues, {
    sectionInfo: [{
      title: "iOS Sessions",
      currentTotal: "1320000",
      prevTotal: "1220000",
      difference: "↑ 2,103 (30.2%)"
    }]
  });

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.PieGraph, {
    data: _pushSubscribersData["default"],
    colors: ["#02018c", "#4cb7c5"],
    statValues: statInfo,
    title: "Push Subscribers by Device"
  }));
};

exports.pieGraph = pieGraph;