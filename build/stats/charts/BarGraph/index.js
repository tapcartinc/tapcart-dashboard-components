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

var _styles = require("../styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BarGraph = function BarGraph(props) {
  var data = props.data,
      title = props.title,
      currency = props.currency,
      statValues = props.statValues,
      tooltip = props.tooltip,
      colors = props.colors;

  var formatNumber = function formatNumber(num) {
    var number = Number(num);

    if (number > 999999) {
      number = Math.sign(number) * (Math.abs(number) / 1000000).toFixed(2) + "M";
      return number;
    }

    if (number > 999) {
      number = Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
      return number;
    }

    if (number < 999) {
      number = Math.sign(number) * Math.abs(number);
      return number;
    }

    return number;
  };

  var getColorScheme = function getColorScheme() {
    if (colors) {
      return colors;
    } else {
      var _colors = [];
      defaultGraphColors.map(function (color, index) {
        if (index <= state.data.length) {
          _colors.push(color);
        }
      });
      return _colors;
    }
  };

  return _react["default"].createElement(_styles.StyledGraphCard, null, _react["default"].createElement(_styles.StyledCardHeader, null, _react["default"].createElement(_styles.StyledTitleSection, null, _react["default"].createElement("span", {
    className: "title"
  }, _react["default"].createElement(_styles.StyledTitle, null, title), tooltip && _react["default"].createElement(ToolTip, {
    color: _dashVariables.colorPicker.grayBlue
  }, tooltip && tooltip.text)), _react["default"].createElement(_styles.StyledDescText, null, "1 Nov \u2013 24 Nov 2019")), statValues && statValues.sectionInfo.map(function (section) {
    return _react["default"].createElement(_styles.StyledHeaderChildren, {
      key: section.title
    }, _react["default"].createElement(_styles.StyledDescText, null, section.title), _react["default"].createElement(_styles.StyledStatHeader, {
      sm: true
    }, currency && _react["default"].createElement("span", {
      style: {
        marginRight: "-4px"
      }
    }, currency, " "), formatNumber(section.currentTotal)), statValues && _react["default"].createElement(_styles.StyledDifference, {
      upShift: section.currentTotal >= section.prevTotal
    }, currency && _react["default"].createElement("span", null, currency, " "), section.difference));
  })), _react["default"].createElement(_Icon.Icon, {
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
          format: formatNumber
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