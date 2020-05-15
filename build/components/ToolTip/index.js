"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTip = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swatches = require("../../utils/_swatches");

var _styles = require("./styles");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ToolTip = function ToolTip(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      toggleTooltip = _useState2[1];

  var toggle = function toggle(e) {
    e.stopPropagation();
    toggleTooltip(true);
  };

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledTooltipWrapper, {
    open: open,
    onClick: toggle,
    onMouseLeave: function onMouseLeave() {
      return toggleTooltip(false);
    },
    style: {
      position: "relative"
    },
    top: props.top ? props.top : "-45px"
  }, /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: "14px",
    height: "14px",
    viewBox: "0 0 14 14",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    id: "Style-Guide",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(-540.000000, -1650.000000)",
    fill: props.color ? props.color : _swatches.swatches.green,
    fillRule: "nonzero",
    id: "Shape"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M547,1650 C543.140083,1650 540,1653.14008 540,1657 C540,1660.85992 543.140083,1664 547,1664 C550.859917,1664 554,1660.85992 554,1657 C554,1653.14008 550.859917,1650 547,1650 Z M546.708333,1661.08333 C546.225333,1661.08333 545.833333,1660.69133 545.833333,1660.20833 C545.833333,1659.72533 546.225333,1659.33333 546.708333,1659.33333 C547.191333,1659.33333 547.583333,1659.72533 547.583333,1660.20833 C547.583333,1660.69133 547.191333,1661.08333 546.708333,1661.08333 Z M549.223083,1655.90742 C549.042833,1656.19617 548.700417,1656.5205 548.19525,1656.881 C547.378,1657.48533 547.400167,1657.6195 547.400167,1658.16667 L545.966917,1658.16667 C545.966917,1657.73908 545.957583,1657.41067 546.188583,1657.01108 C546.336167,1656.755 546.606833,1656.48258 547,1656.19442 C547.471917,1655.85725 547.930417,1655.53233 547.930417,1654.9665 C547.930417,1654.43625 547.476583,1654.24725 546.946333,1654.24725 C546.405583,1654.24725 545.789,1654.424 545.096583,1654.7775 L544.506833,1653.59333 C545.765083,1652.88808 547.75075,1652.569 548.836333,1653.45275 C549.633167,1654.102 549.637833,1655.24358 549.223083,1655.90742 Z"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tooltip"
  }, props.children));
};

exports.ToolTip = ToolTip;
ToolTip.propTypes = {
  color: _propTypes["default"].string,

  /**
   * custom space between tooltip icon and pop up message
   */
  top: _propTypes["default"].string,

  /**
   * everything that goes inside of the tooltip pop up message
   */
  children: _propTypes.node
};
ToolTip.defaultProps = {
  color: "".concat(_swatches.swatches.green),
  top: "-45px"
};