"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _CardHeading = require("../../CardHeading");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PieGraph = function PieGraph(props) {
  var data = props.data,
    removeCard = props.removeCard,
    tooltip = props.tooltip,
    colors = props.colors,
    info = props.info,
    body = props.body,
    currency = props.currency,
    range = props.range;
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
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingLeft: "50px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reaviz.PieChart, {
    height: 245,
    width: 400,
    data: data,
    series: /*#__PURE__*/_react["default"].createElement(_reaviz.PieArcSeries, {
      doughnut: true,
      label: null,
      colorScheme: colors,
      arc: /*#__PURE__*/_react["default"].createElement(_reaviz.PieArc, {
        tooltip: /*#__PURE__*/_react["default"].createElement(_reaviz.ChartTooltip, {
          content: function content(d) {
            return /*#__PURE__*/_react["default"].createElement(_styles.StyledTooltip, {
              width: "70px"
            }, /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
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
  })), /*#__PURE__*/_react["default"].createElement(Legend, {
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
  return /*#__PURE__*/_react["default"].createElement(_reaviz.DiscreteLegend, {
    orientation: "horizontal",
    style: {
      margin: "0 auto"
    },
    entries: sortData.map(function (dataSet, index) {
      return /*#__PURE__*/_react["default"].createElement(_reaviz.DiscreteLegendEntry, {
        label: dataSet.key,
        color: sortcolors[index],
        symbol: /*#__PURE__*/_react["default"].createElement(_styles.StyledLevelSquare, null)
      });
    })
  });
};