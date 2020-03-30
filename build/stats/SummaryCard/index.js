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
  return _react["default"].createElement(StyledSummaryCardWrapper, {
    upShift: currentScore > prevPeriodScore,
    onClick: function onClick() {
      return removeCard(info);
    }
  }, _react["default"].createElement(StyledBorderTop, {
    upShift: currentScore > prevPeriodScore
  }), _react["default"].createElement(StyledCardLeft, null, _react["default"].createElement("div", {
    className: "summary-card-header"
  }, _react["default"].createElement(_StatsIcon.StatsIcon, {
    type: icon,
    iconLeft: true
  }), _react["default"].createElement(StyledBody, null, " ", title)), _react["default"].createElement(StyledStatHeader, {
    lg: true
  }, currency && _react["default"].createElement("span", null, currency), currentScore), _react["default"].createElement(StyledDifference, {
    unShift: currentScore > prevPeriodScore
  }, currentScore > prevPeriodScore && _react["default"].createElement("span", {
    className: "arrow"
  }, "\u2191"), currentScore < prevPeriodScore && _react["default"].createElement("span", {
    className: "arrow"
  }, "\u2193"), currency && _react["default"].createElement("span", null, currency, " "), prevPeriodScore, " (", percentageDifference, "%)")), _react["default"].createElement(StyledCardRight, null, data.length > 0 && _react["default"].createElement(_reaviz.AreaSparklineChart, {
    width: 113,
    height: 67,
    data: data,
    series: _react["default"].createElement(_reaviz.AreaSeries, {
      tooltip: null,
      colorScheme: [currentColor],
      interpolation: "smooth",
      symbols: _react["default"].createElement(_reaviz.PointSeries, {
        show: "last",
        point: _react["default"].createElement(_reaviz.ScatterPoint, {
          symbol: function symbol(d) {
            return _react["default"].createElement("g", null, _react["default"].createElement("circle", {
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
      area: _react["default"].createElement(_reaviz.Area, {
        style: {
          opacity: 0.6
        },
        gradient: _react["default"].createElement(_reaviz.Gradient, {
          stops: [_react["default"].createElement(_reaviz.GradientStop, {
            offset: "20%",
            stopOpacity: 0,
            key: "stop"
          }), _react["default"].createElement(_reaviz.GradientStop, {
            offset: "90%",
            stopOpacity: 0.3,
            key: "start"
          })]
        })
      }),
      line: _react["default"].createElement(_reaviz.Line, {
        strokeWidth: 2
      })
    })
  })));
};

exports.SummaryCard = SummaryCard;

var StyledSummaryCardWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledSummaryCardWrapper",
  componentId: "sc-144rjke-0"
})(["width:270px;height:118px;border:1px solid ", ";border-radius:3px;position:relative;overflow:hidden;padding:24px 5px 20px 14px;display:flex;align-items:center;justify-content:space-between;"], _dashVariables.colorPicker.gray25);

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
})(["width:46%;position:absolute;right:display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:flex-end;height:77px;right:10px;"]);

var StyledBody = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "SummaryCard__StyledBody",
  componentId: "sc-144rjke-4"
})(["font-size:13px;font-weight:500;margin-left:-2px;width:100%;font- ", ""], _dashVariables.circularStd.medium);

var StyledStatHeader = _styledComponents["default"].div.withConfig({
  displayName: "SummaryCard__StyledStatHeader",
  componentId: "sc-144rjke-5"
})(["-webkit-font-smoothing:antialiased;font-weight:normal;font-style:normal;letter-spacing:normal;font-weight:300;color:", ";", ";", ";", ""], _dashVariables.colorPicker.blue, function (props) {
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