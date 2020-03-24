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
  var dataTest = [{
    key: "Current",
    data: [{
      key: "2020-03-17T22:59:59.000Z",
      data: 19423167,
      id: 0
    }, {
      key: "2020-03-18T12:59:59.000Z",
      data: 155528908,
      id: 1
    }, {
      key: "2020-03-19T12:59:59.000Z",
      data: 156040425,
      id: 2
    }, {
      key: "2020-03-20T12:59:59.000Z",
      data: 156315891,
      id: 3
    }, {
      key: "2020-03-21T12:59:59.000Z",
      data: 156397840,
      id: 4
    }, {
      key: "2020-03-22T12:59:59.000Z",
      data: 155833793,
      id: 5
    }, {
      key: "2020-03-23T12:59:59.000Z",
      data: 155792609,
      id: 6
    }, {
      key: "2020-03-24T10:59:59.000Z",
      data: 136082742,
      id: 7
    }]
  }, {
    key: "Previous",
    data: [{
      key: "2020-03-17T22:59:59.000Z",
      data: 19276739,
      id: 0
    }, {
      key: "2020-03-18T12:59:59.000Z",
      data: 156034021,
      id: 1
    }, {
      key: "2020-03-19T12:59:59.000Z",
      data: 156313187,
      id: 2
    }, {
      key: "2020-03-20T12:59:59.000Z",
      data: 155755396,
      id: 3
    }, {
      key: "2020-03-21T12:59:59.000Z",
      data: 156116638,
      id: 4
    }, {
      key: "2020-03-22T12:59:59.000Z",
      data: 155676796,
      id: 5
    }, {
      key: "2020-03-23T12:59:59.000Z",
      data: 155919436,
      id: 6
    }, {
      key: "2020-03-24T10:59:59.000Z",
      data: 135976086,
      id: 7
    }]
  }];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.AreaGraph, {
    tooltip: {
      text: "tooltip text",
      color: _dashVariables.colorPicker.grayBlue
    } // colors={["#4cb7c5", "#02018c"]}
    ,
    stacked: true,
    data: dataTest,
    title: "Sessions by New vs. Returning",
    body: [{
      title: "Total Sales",
      total: "1091.5M",
      previousTotal: "1091.1M",
      percentChange: 0.04
    }],
    range: {
      start: "2020-03-17T22:01:48.442Z",
      end: "2020-03-24T22:01:48.442Z"
    },
    info: {
      id: "_jmafzy9ik",
      type: "card",
      name: "Sales over Time",
      description: _react["default"].createElement("div", null, _react["default"].createElement("div", null, "Allows you to view your sales over a period, graphed as an "), _react["default"].createElement("div", null, "area line chart compared with the previous period."))
    }
  }));
};

exports.areaGraph = areaGraph;