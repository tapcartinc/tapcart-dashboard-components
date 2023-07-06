"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.barGraph = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../../utils/main.css");
var _dashVariables = require("../../../utils/_dashVariables");
var _index = require("./index");
var _moment = _interopRequireDefault(require("moment"));
var _deviceData = _interopRequireDefault(require("./deviceData.json"));
var _useGetDifference = require("../../../hooks/useGetDifference");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
  component: _index.BarGraph,
  title: "Stats/Charts/BarGraph"
};
exports["default"] = _default;
var barGraph = function barGraph() {
  var statValues = {};
  var statInfo = _objectSpread(_objectSpread({}, statValues), {}, {
    sectionInfo: [{
      title: "iOS Sessions",
      currentTotal: "1320000",
      prevTotal: "1220000",
      difference: "↑ 2,103 (30.2%)"
    }, {
      title: "Android Sessions",
      currentTotal: "770000",
      prevTotal: "771000",
      difference: "↓ 2,103 (30.2%)"
    }]
  });
  var dataSet = [{
    date: (0, _moment["default"])("2020-03-17T23:59:59.000Z").toDate(),
    key: "2020-03-17T23:59:59.000Z",
    data: [{
      key: "Direct",
      data: 4409
    }, {
      key: "Push",
      data: 4410
    }, {
      key: "Deeplink",
      data: 4276
    }]
  }, {
    date: "2020-03-18T12:59:59.000Z",
    key: "2020-03-18T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 103736
    }, {
      key: "Push",
      data: 103396
    }, {
      key: "Deeplink",
      data: 103306
    }]
  }, {
    date: "2020-03-19T12:59:59.000Z",
    key: "2020-03-19T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 104003
    }, {
      key: "Push",
      data: 104351
    }, {
      key: "Deeplink",
      data: 104537
    }]
  }, {
    date: "2020-03-20T12:59:59.000Z",
    key: "2020-03-20T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 104089
    }, {
      key: "Push",
      data: 104250
    }, {
      key: "Deeplink",
      data: 104547
    }]
  }, {
    date: "2020-03-21T12:59:59.000Z",
    key: "2020-03-21T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 104328
    }, {
      key: "Push",
      data: 103500
    }, {
      key: "Deeplink",
      data: 103714
    }]
  }, {
    date: "2020-03-22T12:59:59.000Z",
    key: "2020-03-22T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 104298
    }, {
      key: "Push",
      data: 103773
    }, {
      key: "Deeplink",
      data: 104363
    }]
  }, {
    date: "2020-03-23T12:59:59.000Z",
    key: "2020-03-23T12:59:59.000Z",
    data: [{
      key: "Direct",
      data: 103783
    }, {
      key: "Push",
      data: 103217
    }, {
      key: "Deeplink",
      data: 103947
    }]
  }, {
    date: "2020-03-24T11:59:59.000Z",
    key: "2020-03-24T11:59:59.000Z",
    data: [{
      key: "Direct",
      data: 99904
    }, {
      key: "Push",
      data: 99313
    }, {
      key: "Deeplink",
      data: 99782
    }]
  }];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.BarGraph
  // data={deviceData}
  , {
    data: dataSet,
    colors: ["#4cb7c5", "#02018c"],
    body: [{
      title: "Active Sessions",
      total: "2.18M",
      previousTotal: "2.18M",
      percentChange: -0.05
    }],
    info: {
      id: "_5f11jhwk1",
      type: "card",
      name: "App Sessions per Source",
      description: 'Allows you to view your sessions across different source types. \nSource types are divided into "Push", "Direct", or "Deeplink".'
    },
    range: {
      start: "2020-03-17T22:01:48.442Z",
      end: "2020-03-24T22:01:48.442Z"
    },
    title: "App Sessions by Device"
  }));
};
exports.barGraph = barGraph;