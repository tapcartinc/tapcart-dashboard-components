"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _ToolTip = require("../../../components/ToolTip");

var _Typography = require("../../../elements/Typography");

var _CardHeading = _interopRequireDefault(require("../../CardHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeatMapGraph = function HeatMapGraph(props) {
  var sequentialData = function sequentialData() {
    var start = 100;
    var index = 0;
    var legendDetails = [];

    while (start <= 800) {
      var details = {};
      details["key"] = "\u2265 ".concat(start);
      details["color"] = _colors.heatmapColors[index];
      legendDetails.push(details);
      start = start + 100;
      index = index + 1;
    }

    return legendDetails;
  };

  var getRange = function getRange(d) {
    return ">= ".concat(JSON.stringify(d.y).split("")[0], "00");
  };

  var currency = props.currency,
      removeCard = props.removeCard,
      tooltip = props.tooltip,
      range = props.range,
      info = props.info,
      body = props.body,
      data = props.data;
  return _react["default"].createElement(_styles.StyledGraphCard, {
    onClick: function onClick() {
      return removeCard(info);
    }
  }, _react["default"].createElement(_CardHeading["default"], {
    range: range,
    info: info,
    body: body,
    tooltip: tooltip,
    currency: currency
  }), _react["default"].createElement(_reaviz.Heatmap, {
    height: 195,
    width: 515,
    data: data,
    series: _react["default"].createElement(_reaviz.HeatmapSeries, {
      padding: 0.14,
      cell: _react["default"].createElement(_reaviz.HeatmapCell, {
        rx: 1,
        ry: 1,
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          content: function content(d) {
            return _react["default"].createElement(_styles.StyledTooltip, {
              width: "70px"
            }, _react["default"].createElement(_styles.StyledHeatmapTip, null, _react["default"].createElement(_Typography.Sofia, {
              fontSize: "11px",
              color: _dashVariables.colorPicker.black
            }, getRange(d)), _react["default"].createElement(_Typography.Sofia, {
              color: _dashVariables.colorPicker.blue
            }, d.y)));
          }
        })
      }),
      colorScheme: _colors.heatmapColors
    }),
    xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
      type: "time",
      tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        interval: _d3Time.timeDay
      })
    }),
    yAxis: _react["default"].createElement(_reaviz.LinearYAxis, {
      type: "time",
      axisLine: null,
      tickSeries: _react["default"].createElement(_reaviz.LinearYAxisTickSeries, {
        line: null,
        label: _react["default"].createElement(_reaviz.LinearYAxisTickLabel, {
          padding: 10
        })
      })
    })
  }), _react["default"].createElement(_styles.StyledCustomLegend, {
    data: sequentialData()
  }));
};

exports.HeatMapGraph = HeatMapGraph;

var Icon = function Icon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    width: "30",
    height: "30",
    fill: fill
  }, _react["default"].createElement("rect", {
    width: "30",
    height: "30",
    rx: "4"
  }));
};