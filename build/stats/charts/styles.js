"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLevelSquare = exports.StyledRightTooltip = exports.StyledLeftTooltip = exports.StyledAreaMapTooltip = exports.StyledCustomLegend = exports.StyledHeatmapTip = exports.StyledTooltip = exports.StyledDifference = exports.StyledStatHeader = exports.StyledDescText = exports.StyledTitle = exports.StyledHeaderChildren = exports.StyledTitleSection = exports.StyledCardHeader = exports.StyledGraphCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _Typography = require("../../elements/Typography");

var _variables = require("../../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledGraphCard = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledGraphCard",
  componentId: "uezup0-0"
})(["background:white;border:1px solid ", ";width:550px;height:350px;border-radius:3px;padding:10px 20px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;padding-bottom:23px;position:relative;"], _dashVariables.colorPicker.gray25);

exports.StyledGraphCard = StyledGraphCard;

var StyledCardHeaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledCardHeaderWrapper",
  componentId: "uezup0-1"
})(["display:flex;justify-content:space-between;width:100%;", ""], function (props) {
  return props.style ? props.style : null;
});

var StyledCardHeader = function StyledCardHeader(props) {
  return _react["default"].createElement(StyledCardHeaderWrapper, props, props.children);
};

exports.StyledCardHeader = StyledCardHeader;

var StyledTitleSection = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledTitleSection",
  componentId: "uezup0-2"
})(["display:flex;flex-direction:column;align-items:flex-start;.title{display:flex;align-items:center;}"]);

exports.StyledTitleSection = StyledTitleSection;
var StyledTitle = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "styles__StyledTitle",
  componentId: "uezup0-3"
})(["line-height:1;margin-top:8px;margin-bottom:2px;"]);
exports.StyledTitle = StyledTitle;
var StyledDescText = (0, _styledComponents["default"])(_Typography.Description).withConfig({
  displayName: "styles__StyledDescText",
  componentId: "uezup0-4"
})(["font-size:13px;line-height:1;margin-top:2px;margin-bottom:4px;"]);
exports.StyledDescText = StyledDescText;

var StyledHeaderChildren = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledHeaderChildren",
  componentId: "uezup0-5"
})(["text-align:right;"]);

exports.StyledHeaderChildren = StyledHeaderChildren;

var StyledStatHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledStatHeader",
  componentId: "uezup0-6"
})(["-webkit-font-smoothing:antialiased;font-weight:normal;font-style:normal;letter-spacing:normal;font-weight:400;color:", ";", ";", ";", ""], _dashVariables.colorPicker.blue, function (props) {
  return props.lg && "font-size: 30px";
}, function (props) {
  return props.sm && "font-size: 24px";
}, _dashVariables.sofiaPro.regular);

exports.StyledStatHeader = StyledStatHeader;

var StyledDifference = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledDifference",
  componentId: "uezup0-7"
})(["margin-top:4px;-webkit-font-smoothing:antialiased;font-size:15px;font-weight:normal;font-style:normal;font-weight:400;display:flex;align-items:center;", " .arrow{margin-right:3px;margin-top:2px;}", ""], _dashVariables.sofiaPro.regular, function (props) {
  return props.upShift ? "color: ".concat(_dashVariables.colorPicker.green100) : "color: ".concat(_dashVariables.colorPicker.red);
});

exports.StyledDifference = StyledDifference;

var StyledTip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledTip",
  componentId: "uezup0-8"
})(["position:relative;background:white;width:100%;padding:3px 8px;border-radius:3px;text-align:left;transform:translateY(12px);box-shadow:0 0 20px 0 rgba(0,0,0,0.2);&::after{content:\"\";position:absolute;top:100%;left:calc(42%);background:white;width:12px;height:8px;clip-path:polygon(0 0,100% 0,50% 100%);}", ""], function (props) {
  return props.width && "width: ".concat(props.width, ";");
});

var StyledHeatmapTip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledHeatmapTip",
  componentId: "uezup0-9"
})(["display:flex;flex-direction:column;align-items:flex-start;"]);

exports.StyledHeatmapTip = StyledHeatmapTip;

var StyledTooltip = function StyledTooltip(props) {
  return _react["default"].createElement(StyledTip, _extends({}, props, {
    width: props.width
  }), props.children);
};

exports.StyledTooltip = StyledTooltip;

var StyledAreaMapTooltip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledAreaMapTooltip",
  componentId: "uezup0-10"
})(["display:flex;flex-direction:row;align-items:center;height:100%;justify-content:space-between;"]);

exports.StyledAreaMapTooltip = StyledAreaMapTooltip;

var StyledCustomLegendWrapper = _styledComponents["default"].ul.withConfig({
  displayName: "styles__StyledCustomLegendWrapper",
  componentId: "uezup0-11"
})(["list-style:none;display:flex;font-size:11px;color:", ";width:100%;align-items:center;justify-content:space-between;margin:0 auto;"], _dashVariables.colorPicker.gray);

var StyledLevelSquare = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledLevelSquare",
  componentId: "uezup0-12"
})(["height:14px;width:14px;border-radius:2px;margin-right:0px;background:", ";"], function (props) {
  return props.color;
});

exports.StyledLevelSquare = StyledLevelSquare;

var StyledLevel = _styledComponents["default"].li.withConfig({
  displayName: "styles__StyledLevel",
  componentId: "uezup0-13"
})(["display:flex;align-items:center;span{display:inline-block;margin-left:8px;}"]);

var StyledCustomLegend = function StyledCustomLegend(props) {
  var data = props.data;
  return _react["default"].createElement(StyledCustomLegendWrapper, props, data.map(function (dataLevel) {
    return _react["default"].createElement(StyledLevel, {
      key: dataLevel.key
    }, _react["default"].createElement(StyledLevelSquare, {
      color: dataLevel.color
    }), _react["default"].createElement("span", null, dataLevel.key));
  }));
};

exports.StyledCustomLegend = StyledCustomLegend;

var StyledLeftTooltip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledLeftTooltip",
  componentId: "uezup0-14"
})(["display:flex;flex-direction:column;width:45%;padding-left:5px;align-items:flex-start;text-align:center;justify-content:center;"]);

exports.StyledLeftTooltip = StyledLeftTooltip;

var StyledRightTooltip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledRightTooltip",
  componentId: "uezup0-15"
})(["width:55%;min-height:35px;text-align:center;background:", ";height:100%;border-radius:3px;span{margin-right:3px;}"], function (props) {
  return props.upShift ? _dashVariables.colorPicker.green50 : _dashVariables.colorPicker.redTint;
});

exports.StyledRightTooltip = StyledRightTooltip;