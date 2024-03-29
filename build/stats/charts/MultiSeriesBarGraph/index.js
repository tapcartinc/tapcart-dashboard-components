"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _CardHeading = require("../../CardHeading");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
    if (unit === "WEEKS") {
      return "".concat((0, _moment["default"])(d).startOf("isoWeek").format("MMM D"), " - ").concat((0, _moment["default"])(d).endOf("isoWeek").format("MMM D"));
    }
    return (0, _moment["default"])(d).format("MMM D, h A");
  };
  // moment(d.key).format("MMM D")
  var getTooltipFormat = function getTooltipFormat(value) {
    if (unit === "DAYS" || unit === "WEEKS") {
      return (0, _moment["default"])(value.key).format("MMM D");
    }
    if (unit === "HOURS") {
      return (0, _moment["default"])(value.key).format("MMM D, h A");
    }
  };
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
  }), /*#__PURE__*/_react["default"].createElement(_reaviz.StackedBarChart, {
    width: 500,
    height: 220,
    data: data,
    gridlines: /*#__PURE__*/_react["default"].createElement(_reaviz.GridlineSeries, {
      line: /*#__PURE__*/_react["default"].createElement(_reaviz.Gridline, {
        direction: "y",
        strokeColor: _dashVariables.colorPicker.gray25,
        strokeDasharray: "0 0"
      })
    }),
    xAxis: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxis, {
      type: "category",
      tickSeries: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        line: null,
        label: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
          padding: 5,
          format: function format(d) {
            return getFormat(d);
          }
          // format={d => moment(d).format("MMM D")}
        })
      })
    }),

    yAxis: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxis, {
      type: "value",
      axisLine: null,
      tickSeries: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxisTickSeries, {
        line: null,
        label: /*#__PURE__*/_react["default"].createElement(_reaviz.LinearYAxisTickLabel, {
          padding: 10,
          label: null
        })
      })
    }),
    series: /*#__PURE__*/_react["default"].createElement(_reaviz.StackedBarSeries, {
      tooltip: /*#__PURE__*/_react["default"].createElement(_reaviz.TooltipArea, {
        tooltip: /*#__PURE__*/_react["default"].createElement(_reaviz.ChartTooltip, {
          followCursor: true,
          content: function content(d) {
            var tooltipHeader = getTooltipFormat(d);
            return /*#__PURE__*/_react["default"].createElement(_styles.StyledTooltip, {
              width: "130px",
              tipAlign: "left"
            }, /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
              marginBottom: "2px",
              fontSize: "11px",
              color: _dashVariables.colorPicker.gray
            }, tooltipHeader), d.data.map(function (dataSet, index) {
              return /*#__PURE__*/_react["default"].createElement(_styles.StyledAreaMapTooltip, {
                key: dataSet.key
              }, /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "13px",
                color: _dashVariables.colorPicker.black
              }, dataSet.key), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
                marginBottom: "2px",
                marginTop: "5px",
                fontSize: "13px",
                color: colorScheme[index]
              }, dataSet.y));
            }));
          }
        })
      }),
      bar: /*#__PURE__*/_react["default"].createElement(_reaviz.Bar, {
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
  }), /*#__PURE__*/_react["default"].createElement(Legend, {
    colors: colors,
    keys: keys
  }));
};
exports.MultiSeriesBarGraph = MultiSeriesBarGraph;
var Legend = function Legend(_ref) {
  var colors = _ref.colors,
    keys = _ref.keys;
  return /*#__PURE__*/_react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: keys.map(function (keySet, index) {
      return /*#__PURE__*/_react["default"].createElement(_reaviz.DiscreteLegendEntry, {
        label: keySet,
        color: colors[index],
        symbol: /*#__PURE__*/_react["default"].createElement(_styles.StyledLevelSquare, null)
      });
    })
    // entries={[
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