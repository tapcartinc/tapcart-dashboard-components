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
  }); // data={dataSet}
  // body={[
  //   {
  //     title: "Active Sessions",
  //     total: "2.18M",
  //     previousTotal: "2.18M",
  //     percentChange: -0.05
  //   }
  // ]}
  // info={{
  //   id: "_5f11jhwk1",
  //   type: "card",
  //   name: "App Sessions per Source",
  //   description:
  //     'Allows you to view your sessions across different source types. \nSource types are divided into "Push", "Direct", or "Deeplink".'
  // }}
  // range={{
  //   start: "2020-03-17T22:01:48.442Z",
  //   end: "2020-03-24T22:01:48.442Z"
  // }}
  // keys={["Direct", "Push", "Deeplink"]}
  // colors={["#01006f", "#373aaf", "#738eda"]}


  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.PieGraph, {
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