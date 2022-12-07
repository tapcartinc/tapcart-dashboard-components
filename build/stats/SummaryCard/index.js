"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reaviz = require("reaviz");
var _dashVariables = require("../../utils/_dashVariables");
var _moment = _interopRequireDefault(require("moment"));
var _StatsIcon = require("../StatsIcon");
var _Typography = require("../../elements/Typography");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SummaryCard = function SummaryCard(props) {
  var title = props.title,
    info = props.info,
    icon = props.icon,
    currentScore = props.currentScore,
    percentageDifference = props.percentageDifference,
    prevPeriodScore = props.prevPeriodScore,
    data = props.data,
    removeCard = props.removeCard,
    currency = props.currency;
  var currentColor = currentScore > prevPeriodScore ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.red;
  var updatedDataDates = data.map(function (dataSet) {
    return _objectSpread(_objectSpread({}, dataSet), {}, {
      key: (0, _moment["default"])(dataSet.key)
    });
  });
  var getIcon = function getIcon(name) {
    switch (name) {
      case "Total App Sales":
        return "orders";
      case "App Sessions":
        return "session";
      case "Conversion Rate":
        return "conversion";
      default:
        break;
    }
  };
  return /*#__PURE__*/_react["default"].createElement(StyledSummaryCardWrapper, {
    upShift: currentScore > prevPeriodScore,
    onClick: function onClick() {
      return removeCard(info);
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledBorderTop, {
    upShift: currentScore > prevPeriodScore
  }), /*#__PURE__*/_react["default"].createElement(StyledCardLeft, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "summary-card-header"
  }, /*#__PURE__*/_react["default"].createElement(_StatsIcon.StatsIcon, {
    type: getIcon(title)
  }), /*#__PURE__*/_react["default"].createElement(StyledBody, null, title)), /*#__PURE__*/_react["default"].createElement(StyledStatHeader, {
    lg: true
  }, currency && /*#__PURE__*/_react["default"].createElement("span", null, currency), currentScore), /*#__PURE__*/_react["default"].createElement(StyledDifference, {
    unShift: currentScore > prevPeriodScore
  }, currentScore > prevPeriodScore && /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow"
  }, "\u2191"), currentScore < prevPeriodScore && /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow"
  }, "\u2193"), currency && /*#__PURE__*/_react["default"].createElement("span", null, currency, " "), prevPeriodScore, " (", percentageDifference, "%)")), /*#__PURE__*/_react["default"].createElement(StyledCardRight, null, data.length > 0 && /*#__PURE__*/_react["default"].createElement(_reaviz.AreaSparklineChart, {
    width: 113,
    height: 80,
    data: updatedDataDates,
    series: /*#__PURE__*/_react["default"].createElement(_reaviz.AreaSeries, {
      tooltip: null,
      colorScheme: [currentColor],
      interpolation: "smooth",
      symbols: /*#__PURE__*/_react["default"].createElement(_reaviz.PointSeries, {
        show: "last",
        point: /*#__PURE__*/_react["default"].createElement(_reaviz.ScatterPoint, {
          symbol: function symbol(d) {
            return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("circle", {
              cx: "1",
              cy: "0",
              r: "3",
              stroke: currentColor,
              strokeWidth: "2",
              fill: "white"
            }));
          }
        })
      }),
      area: /*#__PURE__*/_react["default"].createElement(_reaviz.Area, {
        style: {
          opacity: 0.6
        },
        gradient: /*#__PURE__*/_react["default"].createElement(_reaviz.Gradient, {
          stops: [/*#__PURE__*/_react["default"].createElement(_reaviz.GradientStop, {
            offset: "20%",
            stopOpacity: 0,
            key: "stop"
          }), /*#__PURE__*/_react["default"].createElement(_reaviz.GradientStop, {
            offset: "90%",
            stopOpacity: 0.3,
            key: "start"
          })]
        })
      }),
      line: /*#__PURE__*/_react["default"].createElement(_reaviz.Line, {
        strokeWidth: 2
      })
    })
  })));
};
exports.SummaryCard = SummaryCard;
var StyledSummaryCardWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledSummaryCardWrapper",
  componentId: "sc-144rjke-0"
})(["width:323px;height:130px;border:1px solid ", ";border-radius:3px;position:relative;overflow:hidden;padding:24px 23px 20px 20px;display:flex;align-items:center;margin-right:15px;justify-content:space-between;"], _dashVariables.colorPicker.gray25);
var StyledBorderTop = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledBorderTop",
  componentId: "sc-144rjke-1"
})(["position:absolute;top:0;left:0;height:7px;width:100%;background:", ";"], function (props) {
  return props.upShift ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.red;
});
var StyledCardLeft = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledCardLeft",
  componentId: "sc-144rjke-2"
})(["width:auto;display:flex;flex-direction:column;.summary-card-header{display:flex;align-items:center;}"]);
var StyledCardRight = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledCardRight",
  componentId: "sc-144rjke-3"
})(["margin-top:5px;"]);
var StyledBody = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "SummaryCard__StyledBody",
  componentId: "sc-144rjke-4"
})(["font-size:14px;font-weight:500;width:100%;margin-left:7px;", ""], _dashVariables.circularStd.medium);
var StyledStatHeader = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledStatHeader",
  componentId: "sc-144rjke-5"
})(["text-align:left;-webkit-font-smoothing:antialiased;font-weight:normal;font-style:normal;letter-spacing:normal;font-weight:300;color:", ";", ";", ";", ""], _dashVariables.colorPicker.blue, function (props) {
  return props.lg && "font-size: 30px";
}, function (props) {
  return props.sm && "font-size: 27px";
}, _dashVariables.sofiaPro.light);
var StyledDifference = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledDifference",
  componentId: "sc-144rjke-6"
})(["margin-top:8px;color:", ";-webkit-font-smoothing:antialiased;font-size:15px;font-weight:normal;font-style:normal;font-weight:400;display:flex;align-items:center;", " .arrow{margin-right:3px;margin-top:2px;}"], function (props) {
  return props.unShift ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.red;
}, _dashVariables.sofiaPro.regular);