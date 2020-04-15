"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SunIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SunIcon = function SunIcon() {
  return /*#__PURE__*/_react["default"].createElement(StyledSVG, {
    width: "20px",
    height: "20px",
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg" // style={{
    //   position: "absolute",
    //   zIndex: 1,
    //   left: 7,
    //   marginTop: 6
    // }}

  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "Style-Guide",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(-190.000000, -2015.000000)",
    id: "Toggle-Apple",
    stroke: "#FFFFFF",
    strokeWidth: "1.6"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(184.000000, 2009.000000)"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "sun",
    transform: "translate(7.000000, 7.000000)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0,8.8 L0.8,8.8",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.56,2.56 L3.12,3.12",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.8,0 L8.8,0.8",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.04,2.56 L14.48,3.12",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.6,8.8 L16.8,8.8",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.04,15.04 L14.48,14.48",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.8,17.6 L8.8,16.8",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.56,15.04 L3.12,14.48",
    id: "Path"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "Oval",
    cx: "8.8",
    cy: "8.8",
    r: "4.8"
  }))))));
};

exports.SunIcon = SunIcon;

var StyledSVG = _styledComponents["default"].svg.withConfig({
  displayName: "sun__StyledSVG",
  componentId: "sc-1gez0lq-0"
})(["position:absolute;z-index:1;left:7px;margin-top:6px;"]);