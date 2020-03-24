"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("../charts/styles");

var _moment = _interopRequireDefault(require("moment"));

var _useFormattedNumber = require("../../hooks/useFormattedNumber");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardHeading = function CardHeading(props) {
  var range = props.range,
      info = props.info,
      body = props.body,
      currency = props.currency,
      tooltip = props.tooltip;
  console.log("body", body);
  console.log("body.length", body.length);
  return _react["default"].createElement(_styles.StyledCardHeader, null, _react["default"].createElement(_styles.StyledTitleSection, null, _react["default"].createElement("span", {
    className: "title"
  }, _react["default"].createElement(_styles.StyledTitle, null, info.name), tooltip && _react["default"].createElement(ToolTip, {
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
    }, currency, " "), statInfo.total), _react["default"].createElement(_styles.StyledDifference, {
      upShift: statInfo.total > statInfo.previousTotal
    }, statInfo.total > statInfo.previousTotal && _react["default"].createElement("span", {
      className: "arrow"
    }, "\u2191"), statInfo.total < statInfo.previousTotal && _react["default"].createElement("span", {
      className: "arrow"
    }, "\u2193"), currency && _react["default"].createElement("span", null, currency, " "), Number(statInfo.previousTotal).toLocaleString(), " (", statInfo.percentChange, "%)"));
  }));
};

var _default = CardHeading;
exports["default"] = _default;