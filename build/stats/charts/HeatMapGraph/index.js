"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeatMapGraph = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../../../elements/Icon");
var _colors = require("../../utils/_colors");
var _d3Time = require("d3-time");
var _reaviz = require("reaviz");
var _styles = require("../styles");
var _moment = _interopRequireDefault(require("moment"));
var _dashVariables = require("../../../utils/_dashVariables");
var _Typography = require("../../../elements/Typography");
var _CardHeading = require("../../CardHeading");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HeatMapGraph = function HeatMapGraph(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    legendKeys = _useState2[0],
    setLegendKeys = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cells = _useState4[0],
    setCells = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    totalSessions = _useState6[0],
    setTotalSessions = _useState6[1];
  (0, _react.useEffect)(function () {
    var totalSessions = props.data.reduce(function (acc, currDataSet) {
      var total = currDataSet.data.reduce(function (insideAcc, insideDataSet) {
        insideAcc = insideAcc + insideDataSet.data;
        return insideAcc;
      }, 0);
      acc = acc + total;
      return acc;
    }, 0);
    setTotalSessions(totalSessions);
    var legendData = props.data.reduce(function (acc, currData) {
      currData.data.map(function (dataSet) {
        acc = [].concat(_toConsumableArray(acc), [dataSet.data]);
      });
      return acc;
    }, []);
    if (totalSessions) {
      getCells();
      getLegendKeys(legendData);
    }
  }, [props.data, totalSessions]);
  var getCells = function getCells() {
    var updatedCells = [];
    var dataCopy = props.data.slice(0);
    dataCopy.map(function (dataSet, index) {
      var updatedData = _objectSpread({}, dataSet);
      updatedData.data.map(function (day, index) {
        day["total"] = day.data;
        var updatedCell = Number((day.total / totalSessions * 100).toFixed(4));
        day["metadata"] = updatedCell;
      });
      updatedCells.push(updatedData);
    });
    setCells(updatedCells);
  };
  var getLegendKeys = function getLegendKeys(array) {
    var maxInt = Math.max.apply(null, array);
    var minInt = Math.min.apply(null, array);
    var lastKey = Number((maxInt / totalSessions * 100).toFixed(4));
    var firstKey = Number((minInt / totalSessions * 100).toFixed(4));
    var range = parseFloat((lastKey - firstKey).toFixed(4));
    var step = 1 * range / 8;
    var arrayStart = firstKey;
    var count = 0;
    var steps = [];
    while (lastKey > arrayStart && count < 8) {
      steps.push({
        key: parseFloat(arrayStart.toFixed(2)),
        total: arrayStart,
        color: _colors.heatmapColors[count]
      });
      arrayStart = arrayStart + step;
      count = count + 1;
    }
    return setLegendKeys(steps);
  };
  var currency = props.currency,
    removeCard = props.removeCard,
    tooltip = props.tooltip,
    range = props.range,
    info = props.info,
    body = props.body,
    colors = props.colors;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledGraphCard, {
    onClick: function onClick() {
      return removeCard(info);
    }
  }, /*#__PURE__*/_react["default"].createElement(_CardHeading.CardHeading, {
    range: range,
    info: info,
    body: body,
    tooltip: tooltip,
    currency: currency
  }), /*#__PURE__*/_react["default"].createElement(_reaviz.Heatmap, {
    height: 195,
    width: 515,
    data: cells,
    series: /*#__PURE__*/_react["default"].createElement(_reaviz.HeatmapSeries, {
      padding: 0.14,
      cell: /*#__PURE__*/_react["default"].createElement(_reaviz.HeatmapCell, {
        rx: 1,
        ry: 1,
        tooltip: /*#__PURE__*/_react["default"].createElement(_reaviz.ChartTooltip, {
          content: function content(d) {
            return /*#__PURE__*/_react["default"].createElement(_styles.StyledTooltip, {
              width: "80px"
            }, /*#__PURE__*/_react["default"].createElement(_styles.StyledHeatmapTip, null, /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
              color: _dashVariables.colorPicker.black
            }, d.data.metadata, "%"), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
              color: _dashVariables.colorPicker.blue
            }, d.y, " users")));
          }
        })
      }),
      colorScheme: colors
    }),
    xAxis: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxis, {
      type: "time",
      tickSeries: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        interval: _d3Time.timeDay,
        line: null,
        label: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
          padding: 5,
          format: function format(d) {
            return (0, _moment["default"])(d, "HH:mm").format("h a");
          }
        })
      })
    }),
    yAxis: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxis, {
      type: "time",
      axisLine: null,
      tickSeries: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxisTickSeries, {
        line: null,
        label: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxisTickLabel, {
          padding: 10
        })
      })
    })
  }), legendKeys && /*#__PURE__*/_react["default"].createElement(_styles.StyledCustomLegend, {
    data: legendKeys
  }));
};
exports.HeatMapGraph = HeatMapGraph;