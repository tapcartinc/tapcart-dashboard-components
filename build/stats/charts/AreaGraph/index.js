"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AreaGraph = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reaviz = require("reaviz");

var _styles = require("../styles");

var _Typography = require("../../../elements/Typography");

var _ToolTip = require("../../../components/ToolTip");

var _moment = _interopRequireDefault(require("moment"));

var _dashVariables = require("../../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function convert(d) {
  var date = (0, _moment["default"])(d).toDate();
  return date;
}

var convertData = function convertData(data) {
  return data && data.reduce(function (acc, dataSet, index) {
    if (dataSet.data.length) {
      return [].concat(_toConsumableArray(acc), [{
        key: dataSet.key,
        data: dataSet.data.map(function (key, index) {
          return key[index] = _objectSpread({}, key, {
            key: convert(key.key)
          });
        })
      }]);
    } else {
      return [].concat(_toConsumableArray(acc), [_objectSpread({}, dataSet, {
        key: convert(dataSet.key)
      })]);
    }
  }, []);
};

var AreaGraph = function AreaGraph(props) {
  var _useState = (0, _react.useState)({
    data: [],
    dimmension: "",
    prevData: [],
    range: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  console.log("state.data && state.data", state.data && state.data);
  var currentData = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    currentData.current = state.data;

    if (!previousData && props.data) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          data: convertData(props.data)
        });
      });
    }

    if (state.range.length <= 0 && state.data.length > 0) {
      setRange();
    }
  }, [props.data, state.data]);
  var previousData = currentData.current;
  var stacked = props.stacked,
      currency = props.currency,
      colors = props.colors,
      tooltip = props.tooltip,
      statValues = props.statValues,
      title = props.title,
      gradient = props.gradient,
      fillColors = props.fillColors;

  var setRange = function setRange() {
    state.data.map(function (dataSet, index) {
      if (dataSet.data.length) {
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            range: [dataSet.data[0].key, dataSet.data[dataSet.data.length - 1].key]
          });
        });
      } else {
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            range: [state.data[0], state.data[state.data.length - 1]]
          });
        });
      }
    });
  };

  var getColorScheme = function getColorScheme() {
    if (colors) {
      return colors;
    } else {
      var _colors = [];

      _dashVariables.defaultGraphColors.map(function (color, index) {
        if (index <= state.data.length) {
          _colors.push(color);
        }
      });

      return _colors;
    }
  };

  return _react["default"].createElement(_styles.StyledGraphCard, null, _react["default"].createElement(GraphDetails, {
    currency: currency,
    stacked: stacked,
    data: state.data,
    gradient: gradient,
    fillColors: fillColors,
    getColorScheme: getColorScheme,
    colors: colors
  }));
};

exports.AreaGraph = AreaGraph;

var GraphDetails = function GraphDetails(_ref) {
  var data = _ref.data,
      currency = _ref.currency,
      getColorScheme = _ref.getColorScheme,
      stacked = _ref.stacked,
      gradient = _ref.gradient,
      fillColors = _ref.fillColors,
      strokes = _ref.strokes,
      colors = _ref.colors;

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      keys = _useState4[0],
      setKeys = _useState4[1];

  console.log("data", data);
  (0, _react.useEffect)(function () {
    var updatedKeys = _toConsumableArray(keys);

    data.map(function (dataSet) {
      return updatedKeys.push(dataSet.key);
    });
    return setKeys(updatedKeys);
  }, [data]);

  if (data && data.length) {
    switch (stacked) {
      case true:
        return _react["default"].createElement(_reaviz.StackedAreaChart, {
          width: 470,
          height: 220,
          data: data,
          gridlines: _react["default"].createElement(_reaviz.GridlineSeries, {
            line: _react["default"].createElement(_reaviz.Gridline, {
              direction: "y",
              strokeColor: _dashVariables.colorPicker.gray25,
              strokeDasharray: "0 0"
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
          xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
            type: "time",
            tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
              line: null,
              label: _react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
                padding: 5,
                format: function format(d) {
                  return (0, _moment["default"])(d).format("MMM D");
                }
              })
            })
          }),
          series: _react["default"].createElement(_reaviz.StackedAreaSeries, {
            type: "grouped",
            interpolation: "smooth",
            colorScheme: getColorScheme(),
            tooltip: _react["default"].createElement(_reaviz.TooltipArea, {
              placement: "top",
              tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
                placement: "top",
                followCursor: true,
                content: function content(d, ab, b) {
                  return _react["default"].createElement(_styles.StyledTooltip, {
                    width: "130px"
                  }, _react["default"].createElement(_styles.StyledAreaMapTooltip, null, _react["default"].createElement(_styles.StyledLeftTooltip, null, _react["default"].createElement(_Typography.Sofia, {
                    marginBottom: "2px",
                    marginTop: "5px",
                    fontSize: "11px",
                    color: _dashVariables.colorPicker.black
                  }, (0, _moment["default"])(d.x).format("MMM D")), _react["default"].createElement(_Typography.Sofia, _defineProperty({
                    marginBottom: "5px",
                    marginTop: "0px",
                    fontSize: "11px",
                    color: _dashVariables.colorPicker.blue
                  }, "fontSize", "13px"), currency && _react["default"].createElement("span", null, currency), d.data[0].value.toLocaleString())), _react["default"].createElement(_styles.StyledRightTooltip, {
                    upShift: d.data[0].value >= d.data[1].value
                  }, _react["default"].createElement(_Typography.Sofia, {
                    marginBottom: "0px",
                    color: d.data[0].value >= d.data[1].value ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.red
                  }, d.data[0].value > d.data[1].value && _react["default"].createElement("span", null, "\u2191"), d.data[0].value < d.data[1].value && _react["default"].createElement("span", null, "\u2193"), Number(parseFloat((Number(d.data[0].value) - Number(d.data[1].value)) / ((Number(d.data[0].value) + Number(d.data[1].value)) / 2) * 100).toFixed(2)), "%"), _react["default"].createElement(_Typography.Sofia, {
                    marginTop: "0px",
                    fontSize: "10px",
                    color: d.data[0].value >= d.data[1].value ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.red
                  }, "prev period"))));
                }
              })
            }),
            area: _react["default"].createElement(_reaviz.Area, {
              style: function style(data, idx) {
                return data && data.length && data[0] && data[0].key === keys[0] ? {
                  opacity: fillColors ? 1 : 0.9,
                  fill: getColorScheme()[1]
                } : {
                  opacity: fillColors ? 1 : 0,
                  fill: getColorScheme()[0]
                };
              },
              series: _react["default"].createElement(_reaviz.AreaSeries, {
                type: "grouped"
              }),
              mask: !fillColors ? _react["default"].createElement(_reaviz.Gradient, {
                stops: [_react["default"].createElement(_reaviz.GradientStop, {
                  offset: "10%",
                  color: getColorScheme()[0],
                  stopOpacity: 0,
                  key: "start"
                }), _react["default"].createElement(_reaviz.GradientStop, {
                  offset: "80%",
                  color: getColorScheme()[0],
                  stopOpacity: gradient ? 1 : 0,
                  key: "stop"
                })]
              }) : null
            }),
            line: _react["default"].createElement(_reaviz.Line, {
              strokeWidth: 3,
              style: fillColors ? {
                stroke: "transparent"
              } : null
            })
          })
        });

      case false:
        return _react["default"].createElement(_reaviz.AreaChart, {
          width: 470,
          height: 220,
          gridlines: _react["default"].createElement(_reaviz.GridlineSeries, {
            line: _react["default"].createElement(_reaviz.Gridline, {
              direction: "y",
              strokeColor: _dashVariables.colorPicker.gray25,
              strokeDasharray: "0 0"
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
          xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
            type: "time",
            tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
              line: null,
              label: _react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
                padding: 5,
                format: function format(d) {
                  return (0, _moment["default"])(d).format("ddd");
                }
              })
            })
          }),
          series: _react["default"].createElement(_reaviz.LineSeries, {
            colorScheme: getColorScheme(),
            symbols: _react["default"].createElement(_reaviz.PointSeries, {
              show: "hover"
            })
          }),
          data: data
        });

      default:
        return _react["default"].createElement("div", null, "loading");
    }
  } else {
    return _react["default"].createElement("div", null, "loading");
  }
};

var Legend = function Legend(_ref2) {
  var colors = _ref2.colors,
      data = _ref2.data;
  return _react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: data.map(function (dataSet, index) {
      return _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
        label: dataSet.key,
        color: colors[index],
        symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
      });
    })
  });
};