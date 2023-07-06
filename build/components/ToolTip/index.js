"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _dashVariables = require("../../utils/_dashVariables");
var _variables = require("../../utils/_variables");
var _propTypes = _interopRequireWildcard(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
  return /*#__PURE__*/_react["default"].createElement(ToolTipWrapper, {
    open: open,
    onClick: toggle,
    onMouseLeave: function onMouseLeave() {
      return toggleTooltip(false);
    },
    style: props.wrapperStyle ? _objectSpread({
      position: 'relative'
    }, props.wrapperStyle) : {
      position: "relative"
    },
    top: props.top ? props.top : "-45px"
  }, /*#__PURE__*/_react["default"].createElement(ToolTipIcon, _extends({
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
    fill: props.color ? props.color : _dashVariables.colorPicker.green100,
    fillRule: "nonzero",
    id: "Shape"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M547,1650 C543.140083,1650 540,1653.14008 540,1657 C540,1660.85992 543.140083,1664 547,1664 C550.859917,1664 554,1660.85992 554,1657 C554,1653.14008 550.859917,1650 547,1650 Z M546.708333,1661.08333 C546.225333,1661.08333 545.833333,1660.69133 545.833333,1660.20833 C545.833333,1659.72533 546.225333,1659.33333 546.708333,1659.33333 C547.191333,1659.33333 547.583333,1659.72533 547.583333,1660.20833 C547.583333,1660.69133 547.191333,1661.08333 546.708333,1661.08333 Z M549.223083,1655.90742 C549.042833,1656.19617 548.700417,1656.5205 548.19525,1656.881 C547.378,1657.48533 547.400167,1657.6195 547.400167,1658.16667 L545.966917,1658.16667 C545.966917,1657.73908 545.957583,1657.41067 546.188583,1657.01108 C546.336167,1656.755 546.606833,1656.48258 547,1656.19442 C547.471917,1655.85725 547.930417,1655.53233 547.930417,1654.9665 C547.930417,1654.43625 547.476583,1654.24725 546.946333,1654.24725 C546.405583,1654.24725 545.789,1654.424 545.096583,1654.7775 L544.506833,1653.59333 C545.765083,1652.88808 547.75075,1652.569 548.836333,1653.45275 C549.633167,1654.102 549.637833,1655.24358 549.223083,1655.90742 Z"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tooltip"
  }, props.children));
};
exports.ToolTip = ToolTip;
var ToolTipWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ToolTip__ToolTipWrapper",
  componentId: "sc-1tvdsd5-0"
})(["height:14px;width:14px;position:relative;cursor:pointer;margin:8px;", ";svg{transition:0.3s ease;}&:hover .tooltip{", ";}.tooltip{padding:10px;position:absolute;width:auto;white-space:pre;max-width:418px;box-shadow:", ";border-radius:3px;background-color:#fff;top:", ";left:50%;transform:translateX(-50%);transform-style:preserve-3d;z-index:200;display:none;font-size:13px;padding:8px 15px;line-height:1.46;&:after{content:\"\";position:absolute;display:block;width:10px;height:10px;transform-origin:50% 50%;transform:rotate(45deg) translateX(-50%);background-color:#fff;left:50%;bottom:-6px;z-index:400;}&:before{content:\"\";display:block;position:absolute;width:10px;height:10px;transform-origin:50% 50%;transform:rotate(45deg) translateX(-50%) translateZ(-1px);background-color:#fff;left:50%;bottom:-4px;z-index:-1;box-shadow:", ";}}"], _dashVariables.sofiaPro.medium, function (props) {
  return props.open && "display: block";
}, _variables.boxShadow.small, function (props) {
  return props.top;
}, _variables.boxShadow.small);
var ToolTipIcon = _styledComponents["default"].svg.withConfig({
  displayName: "ToolTip__ToolTipIcon",
  componentId: "sc-1tvdsd5-1"
})([""]);
ToolTip.propTypes = {
  color: _propTypes["default"].string,
  /**
   * message inside of the tooltip pop up
   */
  position: _propTypes["default"].node
};
ToolTip.defaultProps = {};