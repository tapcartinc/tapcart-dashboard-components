"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardHeading = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("../charts/styles");
var _moment = _interopRequireDefault(require("moment"));
var _dashVariables = require("../../utils/_dashVariables");
var _ToolTip = require("../../components/ToolTip");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CardHeading = function CardHeading(props) {
  var range = props.range,
    info = props.info,
    body = props.body,
    currency = props.currency;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledCardHeader, null, /*#__PURE__*/_react["default"].createElement(_styles.StyledTitleSection, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledTitle, null, info.name), info.description && /*#__PURE__*/_react["default"].createElement(_ToolTip.ToolTip, {
    color: _dashVariables.colorPicker.grayBlue
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledToolltipText, {
    color: _dashVariables.colorPicker.blue
  }, info.description.props ? info.description.props.children.map(function (child) {
    if (typeof child === "string") {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: child
      }, "".concat(child));
    }
  }) : info.description))), /*#__PURE__*/_react["default"].createElement(_styles.StyledDescText, null, (0, _moment["default"])(range.start).format("MMM Do"), " -", " ", (0, _moment["default"])(range.end).format("MMM Do"), " ", (0, _moment["default"])(range.end).format("YYYY"))), body && body.length > 0 && body.map(function (statInfo) {
    return /*#__PURE__*/_react["default"].createElement(_styles.StyledHeaderChildren, {
      key: statInfo.title
    }, /*#__PURE__*/_react["default"].createElement(_styles.StyledDescText, null, statInfo.title), /*#__PURE__*/_react["default"].createElement(_styles.StyledStatHeader, {
      sm: true
    }, currency && /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginRight: "-4px"
      }
    }, currency, " "), statInfo.total), /*#__PURE__*/_react["default"].createElement(_styles.StyledDifference, {
      upShift: statInfo.total > statInfo.previousTotal
    }, statInfo.total > statInfo.previousTotal && /*#__PURE__*/_react["default"].createElement("span", {
      className: "arrow"
    }, "\u2191"), statInfo.total < statInfo.previousTotal && /*#__PURE__*/_react["default"].createElement("span", {
      className: "arrow"
    }, "\u2193"), currency && /*#__PURE__*/_react["default"].createElement("span", null, currency, " "), statInfo.previousTotal, statInfo.percentChange && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0 (", statInfo.percentChange, "%)")));
  }));
};
exports.CardHeading = CardHeading;