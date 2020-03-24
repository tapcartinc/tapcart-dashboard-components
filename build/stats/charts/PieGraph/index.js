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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { Icon } from "../../../elements/Icon";
var PieGraph = function PieGraph(props) {
  var data = props.data,
      tooltip = props.tooltip,
      colors = props.colors,
      info = props.info,
      body = props.body,
      currency = props.currency,
      range = props.range;
  return _react["default"].createElement(_styles.StyledGraphCard, null, _react["default"].createElement("div", {
    style: {
      paddingLeft: "40px"
    }
  }, _react["default"].createElement(_reaviz.PieChart, {
    height: 325,
    width: 400,
    data: data,
    series: _react["default"].createElement(_reaviz.PieArcSeries, {
      doughnut: true,
      colorScheme: colors,
      label: _react["default"].createElement(_reaviz.PieArcLabel, {
        style: {
          width: "400px !important"
        },
        format: function format(d) {
          return _react["default"].createElement(Key, null, d.key);
        }
      }),
      arc: _react["default"].createElement(_reaviz.PieArc, {
        tooltip: _react["default"].createElement(_reaviz.ChartTooltip, {
          placement: "top",
          followCursor: true,
          content: function content(d) {
            console.log("d", d);
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
      })
    })
  })));
};

exports.PieGraph = PieGraph;

var Key = function Key(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react.Fragment, null, children);
};