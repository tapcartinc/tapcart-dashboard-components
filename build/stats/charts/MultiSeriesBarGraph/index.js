"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSeriesBarGraph = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reaviz = require("reaviz");

var _styles = require("../styles");

var _useColorScheme = require("../../../hooks/useColorScheme");

var _generateDates = require("../HeatMapGraph/generateDates");

var _dashVariables = require("../../../utils/_dashVariables");

var _moment = _interopRequireDefault(require("moment"));

var _useFormattedNumber = require("../../../hooks/useFormattedNumber");

var _Typography = require("../../../elements/Typography");

var _CardHeading = _interopRequireDefault(require("../../CardHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiSeriesBarGraph = function MultiSeriesBarGraph(props) {
  var data = props.data,
      colors = props.colors,
      tooltip = props.tooltip,
      info = props.info,
      body = props.body,
      currency = props.currency,
      range = props.range,
      keys = props.keys,
      removeCard = props.removeCard;
  var colorScheme = (0, _useColorScheme.useColorScheme)(colors);
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
  }), _react["default"].createElement(_reaviz.StackedBarChart, {
    width: 500,
    height: 220,
    data: data,
    gridlines: _react["default"].createElement(_reaviz.GridlineSeries, {
      line: _react["default"].createElement(_reaviz.Gridline, {
        direction: "y",
        strokeColor: _dashVariables.colorPicker.gray25,
        strokeDasharray: "0 0"
      })
    }),
    xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
      type: "category",
      tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        line: null,
        label: _react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
          padding: 5,
          format: function format(d) {
            return console.log("d", d);
          }
        })
      })
    }),
    yAxis: _react["default"].createElement(_reaviz.LinearYAxis, {
      type: "value",
      axisLine: null,
      tickSeries: _react["default"].createElement(_reaviz.LinearYAxisTickSeries, {
        line: null,
        label: _react["default"].createElement(_reaviz.LinearYAxisTickLabel, {
          padding: 10,
          label: null
        })
      })
    }),
    series: _react["default"].createElement(_reaviz.StackedBarSeries, {
      tooltip: _react["default"].createElement(_reaviz.TooltipArea, {
        placement: "top",
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          placement: "top",
          followCursor: true,
          content: function content(d) {
            return _react["default"].createElement(_styles.StyledTooltip, {
              width: "130px"
            }, d.data.map(function (dataSet, index) {
              return _react["default"].createElement(_styles.StyledAreaMapTooltip, {
                key: dataSet.key
              }, _react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "11px",
                color: _dashVariables.colorPicker.black
              }, dataSet.key), _react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "11px",
                color: colorScheme[index]
              }, dataSet.y));
            }));
          }
        })
      }),
      bar: _react["default"].createElement(_reaviz.Bar, _defineProperty({
        rounded: true,
        style: function style(data) {
          var index = keys.findIndex(function (e) {
            return e === data.x;
          });
          return {
            fill: colors[index],
            clipPath: "none"
          };
        }
      }, "rounded", true)),
      colorScheme: colorScheme
    })
  }), _react["default"].createElement(Legend, {
    colors: colors
  }));
};

exports.MultiSeriesBarGraph = MultiSeriesBarGraph;

var Legend = function Legend(_ref) {
  var colors = _ref.colors;
  return _react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: [_react["default"].createElement(_reaviz.DiscreteLegendEntry, {
      label: "Direct",
      color: colors[0],
      symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
    }), _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
      label: "Push",
      color: colors[1],
      symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
    }), _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
      label: "Deeplink",
      color: colors[2],
      symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
    })]
  });
};