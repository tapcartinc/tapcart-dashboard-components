"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeatmapTooltip = exports.StyledDifference = exports.StyledStatHeader = exports.StyledDescText = exports.StyledTitle = exports.StyledHeaderChildren = exports.StyledTitleSection = exports.StyledCardHeader = exports.StyledGraphCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _Typography = require("../../elements/Typography");

var _variables = require("../../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledGraphCard = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledGraphCard",
  componentId: "uezup0-0"
})(["background:white;border:1px solid ", ";width:550px;height:350px;border-radius:3px;padding:10px 20px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;"], _dashVariables.colorPicker.gray25);

exports.StyledGraphCard = StyledGraphCard;

var StyledCardHeaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledCardHeaderWrapper",
  componentId: "uezup0-1"
})(["display:flex;justify-content:space-between;width:100%;"]);

var StyledCardHeader = function StyledCardHeader(props) {
  return _react["default"].createElement(StyledCardHeaderWrapper, null, props.children);
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

var StyledTooltip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledTooltip",
  componentId: "uezup0-8"
})(["position:relative;background:white;width:70px;padding:15px 10px;text-align:center;transform:translateY(12px);box-shadow:0 0 30px 0 rgba(0,0,0,0.3);&::after{content:\"\";position:absolute;top:100%;left:calc(42%);background:white;width:12px;height:8px;clip-path:polygon(0 0,100% 0,50% 100%);}"]);

var StyledHeatmapTip = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledHeatmapTip",
  componentId: "uezup0-9"
})([""]);

var StyledHeatmapTooltip = function StyledHeatmapTooltip(props) {
  return _react["default"].createElement(StyledTooltip, props, props.children);
};

exports.StyledHeatmapTooltip = StyledHeatmapTooltip;