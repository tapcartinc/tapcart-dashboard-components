"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftStatus = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DraftStatus = function DraftStatus(_ref) {
  var status = _ref.status,
      props = _objectWithoutProperties(_ref, ["status"]);

  return _react["default"].createElement(StyledDraftStatusWrapper, {
    status: status
  }, _react["default"].createElement(StyledStatusCircle, _extends({}, props, {
    status: status
  })), _react["default"].createElement(StyledStatusText, null, status || "Draft"));
};

exports.DraftStatus = DraftStatus;
DraftStatus.propTypes = {
  /**
  options: live, scheduled, or no status prop (defaults to "draft")
  */
  status: _propTypes["default"].string
};
DraftStatus.defaultProps = {
  status: ""
};

var StyledDraftStatusWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DraftStatus__StyledDraftStatusWrapper",
  componentId: "td0u63-0"
})(["display:flex;flex-direction:row;color:", ";align-content:center;justify-content:flex-start;align-items:center;", " ", ""], _dashVariables.colorPicker.gray, function (props) {
  return props.status === "live" && "color: ".concat(_dashVariables.colorPicker.green100, ";");
}, function (props) {
  return props.status === "scheduled" && "color: ".concat(_dashVariables.colorPicker.yellow, ";");
});

var StyledStatusCircle = _styledComponents["default"].div.withConfig({
  displayName: "DraftStatus__StyledStatusCircle",
  componentId: "td0u63-1"
})(["background:", ";height:8px;width:8px;border-radius:50px;margin-right:8px;", " ", " ", ";"], _dashVariables.colorPicker.gray, function (props) {
  return props.status === "live" && "background: ".concat(_dashVariables.colorPicker.green100, ";");
}, function (props) {
  return props.status === "scheduled" && "background: ".concat(_dashVariables.colorPicker.yellow, ";");
}, function (props) {
  return props.style ? props.style : null;
});

var StyledStatusText = _styledComponents["default"].span.withConfig({
  displayName: "DraftStatus__StyledStatusText",
  componentId: "td0u63-2"
})(["font-size:11px;text-transform:uppercase;letter-spacing:0.83px;line-height:0.8;", ""], _dashVariables.circularStd.medium);