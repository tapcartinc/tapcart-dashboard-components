"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieGraph = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reaviz = require("reaviz");

var _styles = require("../styles");

var _Typography = require("../../../elements/Typography");

var _dashVariables = require("../../../utils/_dashVariables");

var _useFormattedNumber = require("../../../hooks/useFormattedNumber");

var _CardHeading = _interopRequireDefault(require("../../CardHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PieGraph = function PieGraph(props) {
  var data = props.data,
      removeCard = props.removeCard,
      tooltip = props.tooltip,
      colors = props.colors,
      info = props.info,
      body = props.body,
      currency = props.currency,
      range = props.range;
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
  }), _react["default"].createElement("div", {
    style: {
      paddingLeft: "50px"
    }
  }, _react["default"].createElement(_reaviz.PieChart, {
    height: 245,
    width: 400,
    data: data,
    series: _react["default"].createElement(_reaviz.PieArcSeries, {
      doughnut: true,
      label: null,
      colorScheme: colors,
      arc: _react["default"].createElement(_reaviz.PieArc, {
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          content: function content(d) {
            return _react["default"].createElement(_styles.StyledTooltip, {
              width: "70px"
            }, _react["default"].createElement(_Typography.Sofia, {
              style: {
                textAlign: "center"
              },
              fontSize: "11px",
              color: _dashVariables.colorPicker.blue
            }, d.y));
          }
        })
      })
    })
  })), _react["default"].createElement(Legend, {
    colors: colors,
    data: data
  }));
};

exports.PieGraph = PieGraph;

var Legend = function Legend(_ref) {
  var colors = _ref.colors,
      data = _ref.data;
  var sortData = data.slice(0).reverse();
  var sortcolors = colors.slice(0).reverse();
  return _react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: sortData.map(function (dataSet, index) {
      return _react["default"].createElement(_reaviz.DiscreteLegendEntry, {
        label: dataSet.key,
        color: sortcolors[index],
        symbol: _react["default"].createElement(_styles.StyledLevelSquare, null)
      });
    })
  });
};