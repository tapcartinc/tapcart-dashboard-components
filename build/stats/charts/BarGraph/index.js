"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarGraph = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reaviz = require("reaviz");

var _Typography = require("../../../elements/Typography");

var _dashVariables = require("../../../utils/_dashVariables");

var _Icon = require("../../../elements/Icon");

var _ToolTip = require("../../../components/ToolTip");

var _styles = require("../styles");

var _moment = _interopRequireDefault(require("moment"));

var _useFormattedNumber = require("../../../hooks/useFormattedNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BarGraph = function BarGraph(props) {
  var currency = props.currency,
      data = props.data,
      body = props.body,
      info = props.info,
      range = props.range,
      tooltip = props.tooltip,
      colors = props.colors,
      removeCard = props.removeCard;

  var getColorScheme = function getColorScheme() {
    if (colors) {
      return colors;
    } else {
      var _colors = [];
      defaultGraphColors.map(function (color, index) {
        if (index <= data.length) {
          _colors.push(color);
        }
      });
      return _colors;
    }
  };

  return _react["default"].createElement(_styles.StyledGraphCard, {
    onClick: function onClick() {
      return removeCard(info);
    }
  }, _react["default"].createElement(CardHeading, {
    range: range,
    info: info,
    body: body,
    tooltip: tooltip,
    currency: currency
  }), _react["default"].createElement(_Icon.Icon, {
    type: "apple",
    fill: "white",
    style: {
      overflow: "visible",
      position: "absolute",
      right: 435,
      top: 120
    }
  }), _react["default"].createElement(_Icon.Icon, {
    type: "android",
    fill: "white",
    style: {
      overflow: "visible",
      position: "absolute",
      right: 437,
      top: 208
    }
  }), _react["default"].createElement(_reaviz.BarChart, {
    height: 220,
    width: 500,
    data: data,
    gridlines: _react["default"].createElement(_reaviz.GridlineSeries, {
      line: _react["default"].createElement(_reaviz.Gridline, {
        direction: "x",
        strokeColor: _dashVariables.colorPicker.gray25,
        strokeDasharray: "0 0"
      })
    }),
    xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
      type: "value",
      tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        label: _react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
          format: _useFormattedNumber.useFormattedNumber
        })
      })
    }),
    series: _react["default"].createElement(_reaviz.BarSeries, {
      colorScheme: getColorScheme(),
      layout: "horizontal",
      tooltip: _react["default"].createElement(_reaviz.TooltipArea, {
        placement: "top",
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          placement: "top",
          followCursor: true,
          content: function content(d) {
            return _react["default"].createElement(_styles.StyledTooltip, {
              width: "70px"
            }, _react["default"].createElement(_Typography.Sofia, {
              fontSize: "11px",
              color: _dashVariables.colorPicker.black
            }, d.key), _react["default"].createElement(_Typography.Sofia, {
              color: _dashVariables.colorPicker.blue
            }, d.y.toLocaleString()));
          }
        })
      }),
      bar: _react["default"].createElement(_reaviz.Bar, {
        width: 60 // mask={<Stripes />}
        ,
        style: function style(data) {
          return data && {
            position: "relative",
            fill: getColorScheme()[data.id],
            clipPath: "none",
            opacity: 1,
            borderRadius: 3
          };
        }
      })
    }),
    yAxis: _react["default"].createElement(_reaviz.LinearYAxis, {
      type: "category",
      line: null,
      tickSeries: _react["default"].createElement(_reaviz.LinearYAxisTickSeries, null)
    })
  }), _react["default"].createElement(Legend, {
    colors: colors
  }));
};

exports.BarGraph = BarGraph;

var Legend = function Legend(_ref) {
  var colors = _ref.colors;
  return _react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: [_react["default"].createElement(_reaviz.DiscreteLegendEntry, {
      label: "iOS",
      color: colors[0],
      symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
    }), _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
      label: "Android",
      color: colors[1],
      symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
    })]
  });
};