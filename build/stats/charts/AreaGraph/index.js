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
  console.log("props", props); // const [state, setState] = useState({
  //   data: convertData(props.data),
  //   dimmension: "",
  //   prevData: [],
  //   range: []
  // });

  var updatedData = props.data && convertData(props.data);
  var currentData = (0, _react.useRef)(); // useEffect(() => {
  //   currentData.current = state.data;
  //   if (!previousData && props.data) {
  //     return setState(prevState => ({
  //       ...prevState,
  //       data: convertData(props.data)
  //     }));
  //   }
  //   // if (state.range.length <= 0 && state.data.length > 0) {
  //   //   setRange();
  //   // }
  // }, [props.data, state.data]);

  var previousData = currentData.current;
  var stacked = props.stacked,
      currency = props.currency,
      colors = props.colors,
      tooltip = props.tooltip,
      range = props.range,
      gradient = props.gradient,
      fillColors = props.fillColors,
      info = props.info,
      body = props.body,
      removeCard = props.removeCard; // const setRange = () => {
  //   state.data.map((dataSet, index) => {
  //     if (dataSet.data.length) {
  //       return setState(prevState => ({
  //         ...prevState,
  //         range: [
  //           dataSet.data[0].key,
  //           dataSet.data[dataSet.data.length - 1].key
  //         ]
  //       }));
  //     } else {
  //       return setState(prevState => ({
  //         ...prevState,
  //         range: [state.data[0], state.data[state.data.length - 1]]
  //       }));
  //     }
  //   });
  // };

  var getColorScheme = function getColorScheme() {
    if (colors) {
      return colors;
    } else {
      var _colors = [];

      _dashVariables.defaultGraphColors.map(function (color, index) {
        if (index <= updatedData.length) {
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
  }, _react["default"].createElement(_styles.StyledCardHeader, null, _react["default"].createElement(_styles.StyledTitleSection, null, _react["default"].createElement("span", {
    className: "title"
  }, _react["default"].createElement(_styles.StyledTitle, null, info.name), tooltip && _react["default"].createElement(_ToolTip.ToolTip, {
    color: _dashVariables.colorPicker.grayBlue
  }, info.description)), _react["default"].createElement(_styles.StyledDescText, null, (0, _moment["default"])(range.start).format("MMM Do"), " -", " ", (0, _moment["default"])(range.end).format("MMM Do"), " ", (0, _moment["default"])(range.end).format("YYYY"))), body && body.length > 0 && body.map(function (statInfo) {
    return _react["default"].createElement(_styles.StyledHeaderChildren, {
      key: statInfo.title
    }, _react["default"].createElement(_styles.StyledDescText, null, statInfo.title), _react["default"].createElement(_styles.StyledStatHeader, {
      sm: true
    }, currency && _react["default"].createElement("span", {
      style: {
        marginRight: "-4px"
      }
    }, currency, " "), Number(statInfo.total).toLocaleString()), _react["default"].createElement(_styles.StyledDifference, {
      upShift: statInfo.total > statInfo.previousTotal
    }, statInfo.total > statInfo.previousTotal && _react["default"].createElement("span", {
      className: "arrow"
    }, "\u2191"), statInfo.total < statInfo.previousTotal && _react["default"].createElement("span", {
      className: "arrow"
    }, "\u2193"), currency && _react["default"].createElement("span", null, currency, " "), Number(statInfo.previousTotal).toLocaleString(), " (", statInfo.percentChange, "%)"));
  })), _react["default"].createElement(GraphDetails, {
    data: updatedData,
    currency: currency,
    stacked: stacked // data={state.data}
    ,
    gradient: gradient,
    fillColors: fillColors,
    getColorScheme: getColorScheme,
    colors: colors
  }), _react["default"].createElement(Legend, {
    colors: getColorScheme(),
    data: updatedData
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
  console.log("data", data); // const [keys, setKeys] = useState();

  var keys = [];
  data && data.map(function (dataSet) {
    return keys.push(dataSet.key);
  }); // useEffect(() => {
  //   let updatedKeys = [...keys];
  //   data.map(dataSet => updatedKeys.push(dataSet.key));
  //   return setKeys(updatedKeys);
  // }, [data, data.]);

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
            tooltip: _react["default"].createElement(_reaviz.TooltipArea // placement="top"
            , {
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