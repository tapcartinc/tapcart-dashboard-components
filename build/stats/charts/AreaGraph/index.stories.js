"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaGraph = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../../utils/main.css");

var _dashVariables = require("../../../utils/_dashVariables");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _index = require("./index");

var _index2 = require("../HeatMapGraph/index");

var _stackedData = _interopRequireDefault(require("./stackedData.json"));

var _singularData = _interopRequireDefault(require("./singularData.json"));

var _useGetDifference = require("../../../hooks/useGetDifference");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _index.AreaGraph,
  title: "Stats/Charts/AreaGraph"
};
exports["default"] = _default;

var areaGraph = function areaGraph() {
  var statValues = (0, _useGetDifference.useGetDifference)(_stackedData["default"][0].data, _stackedData["default"][1].data);

  var statInfo = _objectSpread({}, statValues, {
    title: "Total Sales"
  });

  var cats = [{
    key: new Date("11/29/2019"),
    data: 10
  }, {
    key: new Date("11/30/2019"),
    data: 14
  }, {
    key: new Date("12/01/2019"),
    data: 5
  }, {
    key: new Date("12/02/2019"),
    data: 18
  }];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.AreaGraph, {
    stacked: true,
    data: _stackedData["default"],
    statValues: statInfo,
    currency: "$",
    title: "Sales over Time",
    gradient: true
  }), _react["default"].createElement(_index.AreaGraph, {
    tooltip: {
      text: "tooltip text",
      color: _dashVariables.colorPicker.grayBlue
    },
    colors: ["#4cb7c5", "#02018c"],
    stacked: true // data={stackedData}
    ,
    data: [{
      key: "Current",
      data: [{
        key: "2020-02-01T07:00:00.000Z",
        id: "0",
        data: 485
      }, {
        key: "2020-02-02T08:00:00.000Z",
        id: "1",
        data: 892
      }, {
        key: "2020-02-03T09:00:00.000Z",
        id: "2",
        data: 995
      }, {
        key: "2020-02-04T10:00:00.000Z",
        id: "3",
        data: 791
      }, {
        key: "2020-02-05T07:00:00.000Z",
        id: "4",
        data: 1163
      }, {
        key: "2020-02-06T08:00:00.000Z",
        id: "5",
        data: 1261
      }, {
        key: "2020-02-07T09:00:00.000Z",
        id: "6",
        data: 1592
      }]
    }, {
      key: "Previous",
      data: [{
        key: "2020-02-01T07:00:00.000Z",
        id: "0",
        data: 321
      }, {
        key: "2020-02-02T08:00:00.000Z",
        id: "1",
        data: 232
      }, {
        key: "2020-02-03T09:00:00.000Z",
        id: "2",
        data: 483
      }, {
        key: "2020-02-04T10:00:00.000Z",
        id: "3",
        data: 229
      }, {
        key: "2020-02-05T07:00:00.000Z",
        id: "4",
        data: 552
      }, {
        key: "2020-02-06T08:00:00.000Z",
        id: "5",
        data: 443
      }, {
        key: "2020-02-07T09:00:00.000Z",
        id: "6",
        data: 1019
      }]
    }],
    title: "Sessions by New vs. Returning",
    fillColors: true
  }), _react["default"].createElement(_index2.HeatMapGraph, {
    tooltip: {
      text: "tooltip text",
      color: _dashVariables.colorPicker.grayBlue
    },
    colors: [_dashVariables.colorPicker.green100],
    stacked: false // data={singularData}
    ,
    currency: "$",
    title: "Sales over Time"
  }));
};

exports.areaGraph = areaGraph;