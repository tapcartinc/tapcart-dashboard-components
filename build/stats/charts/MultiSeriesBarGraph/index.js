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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MultiSeriesBarGraph = function MultiSeriesBarGraph(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currUnit = _useState2[0],
      setCurrUnit = _useState2[1];

  var unitRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (props.unit !== currUnit && previousUnit !== props.unit) {
      return setCurrUnit(props.unit);
    }

    if (!currUnit && props.unit) {
      return setCurrUnit(props.unit);
    }
  }, [props.unit]);
  var previousUnit = unitRef.current;
  var data = props.data,
      colors = props.colors,
      tooltip = props.tooltip,
      info = props.info,
      body = props.body,
      currency = props.currency,
      range = props.range,
      keys = props.keys,
      removeCard = props.removeCard,
      unit = props.unit;
  var colorScheme = (0, _useColorScheme.useColorScheme)(colors);

  var getFormat = function getFormat(d) {
    if (unit === "DAYS" || unit === "WEEKS") {
      return (0, _moment["default"])(d).format("MMM D");
    }

    if (unit === "HOURS") {
      return (0, _moment["default"])("".concat(d, ":00:00"), "HH:mm:ss").format("h A");
    }
  }; // moment(d.key).format("MMM D")


  var getTooltipFormat = function getTooltipFormat(value) {
    if (unit === "DAYS" || unit === "WEEKS") {
      return (0, _moment["default"])(value.key).format("MMM D");
    }

    if (unit === "HOURS") {
      return (0, _moment["default"])("".concat(value.key, ":00:00"), "HH:mm:ss").format("h A");
    }
  };

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
            return getFormat(d);
          } // format={d => moment(d).format("MMM D")}

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
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          followCursor: true,
          content: function content(d) {
            var tooltipHeader = getTooltipFormat(d);
            return _react["default"].createElement(_styles.StyledTooltip, {
              width: "130px",
              tipAlign: "left"
            }, _react["default"].createElement(_Typography.Sofia, {
              marginBottom: "2px",
              fontSize: "11px",
              color: _dashVariables.colorPicker.gray
            }, tooltipHeader), d.data.map(function (dataSet, index) {
              return _react["default"].createElement(_styles.StyledAreaMapTooltip, {
                key: dataSet.key
              }, _react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "13px",
                color: _dashVariables.colorPicker.black
              }, dataSet.key), _react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "13px",
                color: colorScheme[index]
              }, dataSet.y));
            }));
          }
        })
      }),
      bar: _react["default"].createElement(_reaviz.Bar, {
        style: function style(data) {
          var index = keys.findIndex(function (e) {
            return e === data.x;
          });
          return {
            fill: colors[index],
            clipPath: "none"
          };
        },
        rounded: true
      }),
      colorScheme: colorScheme
    })
  }), _react["default"].createElement(Legend, {
    colors: colors,
    keys: keys
  }));
};

exports.MultiSeriesBarGraph = MultiSeriesBarGraph;

var Legend = function Legend(_ref) {
  var colors = _ref.colors,
      keys = _ref.keys;
  return _react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: keys.map(function (keySet, index) {
      return _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
        label: keySet,
        color: colors[index],
        symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
      });
    }) // entries={[
    //   <DiscreteLegendEntry
    //     label="Direct"
    //     color={colors[0]}
    //     symbol={<StyledLevelSquare />}
    //   />,
    //   <DiscreteLegendEntry
    //     label="Push"
    //     color={colors[1]}
    //     symbol={<StyledLevelSquare />}
    //   />,
    //   <DiscreteLegendEntry
    //     label="Deeplink"
    //     color={colors[2]}
    //     symbol={<StyledLevelSquare />}
    //   />
    // ]}

  });
};