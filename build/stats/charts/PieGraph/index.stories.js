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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
  component: _index.PieGraph,
  title: "Stats/Charts/PieGraph"
};
exports["default"] = _default;
var pieGraph = function pieGraph() {
  var statValues = {};
  var statInfo = _objectSpread(_objectSpread({}, statValues), {}, {
    sectionInfo: [{
      title: "iOS Sessions",
      currentTotal: "1320000",
      prevTotal: "1220000",
      difference: "↑ 2,103 (30.2%)"
    }]
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.PieGraph, {
    info: {
      id: "_falzewu1g",
      type: "card",
      name: "Push Subscribers by Device",
      description: "Allows you to view your push subscribers by the users device."
    },
    range: {
      start: "2020-03-17T22:01:48.442Z",
      end: "2020-03-24T22:01:48.442Z"
    },
    body: [{
      title: "Total Subscribers",
      total: 393
    }],
    data: [{
      key: "iOS",
      data: 220
    }, {
      key: "Android",
      data: 173
    }],
    colors: ["#02018c", "#4cb7c5"]
  }));
};
exports.pieGraph = pieGraph;