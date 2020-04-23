"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconV2 = IconV2;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function IconV2(props) {
  var type = props.type;

  switch (type) {
    case "account":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1379.000000, -1079.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-account",
        transform: "translate(1298.000000, 60.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "circle-09",
        transform: "translate(1.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M17.989,19.495 C17.854,17.107 16.492,16.349 14.5,15.685 C12.978,15.178 12.559,13.58 12.444,12.732",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M9.555,12.731 C9.442,13.575 9.031,15.175 7.5,15.685 C5.508,16.349 4.144,17.105 4.009,19.493",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M11,13 L11,13 C8.791,13 7,11.209 7,9 L7,8 C7,5.791 8.791,4 11,4 L11,4 C13.209,4 15,5.791 15,8 L15,9 C15,11.209 13.209,13 11,13 Z",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "11",
        cy: "11",
        r: "11"
      })))))));

    case "add":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-966.000000, -1079.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-add",
        transform: "translate(885.000000, 60.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "e-add",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22.9090909,10.9090909 L13.0909091,10.9090909 L13.0909091,1.09090909 C13.0909091,0.436363636 12.6545455,0 12,0 C11.3454545,0 10.9090909,0.436363636 10.9090909,1.09090909 L10.9090909,10.9090909 L1.09090909,10.9090909 C0.436363636,10.9090909 0,11.3454545 0,12 C0,12.6545455 0.436363636,13.0909091 1.09090909,13.0909091 L10.9090909,13.0909091 L10.9090909,22.9090909 C10.9090909,23.5636364 11.3454545,24 12,24 C12.6545455,24 13.0909091,23.5636364 13.0909091,22.9090909 L13.0909091,13.0909091 L22.9090909,13.0909091 C23.5636364,13.0909091 24,12.6545455 24,12 C24,11.3454545 23.5636364,10.9090909 22.9090909,10.9090909 Z",
        id: "Path"
      })))))));

    case "alert":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-317.000000, -1139.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-alert",
        transform: "translate(236.000000, 120.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "buzz",
        transform: "translate(1.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M8.012,16.115 C8.073,17.717 9.383,19 11,19 C12.617,19 13.924,17.717 13.986,16.115 L8.012,16.115 L8.012,16.115 Z",
        id: "Path",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22,19 C22,17.137 20.969,13.5 18,12 L18,7 C18,3.134 14.866,0 11,0 C7.134,0 4,3.134 4,7 L4,12 C1,13.531 0,17.137 0,19",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        id: "Oval",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "11",
        cy: "19",
        rx: "11",
        ry: "3"
      })))))));

    case "analytics-stats":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "22px",
        viewBox: "0 0 22 22",
        version: "1.1"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-259.000000, -1080.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-stats",
        transform: "translate(177.000000, 60.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle-Copy-8",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "a-chart",
        transform: "translate(2.000000, 2.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M14.6,16.5 C13.2,18.6 10.7,20 8,20 C3.6,20 0,16.4 0,12 C0,7.6 3.6,4 8,4",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M17.9,18.8 C19.2,16.9 20,14.5 20,12 C20,5.4 14.6,0 8,0 L8,12 L17.9,18.8 Z",
        id: "Path"
      })))))));

    case "android-dev":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-966.000000, -1138.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-android",
        transform: "translate(885.000000, 119.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle-Copy-3",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "android",
        transform: "translate(0.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M1,9 L1,16",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23,9 L23,16",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M7,3 L4,0",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M17,3 L20,0",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M8,19 L8,22",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M16,19 L16,22",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12,1 C8.134,1 5,4.134 5,8 L5,19 L19,19 L19,8 C19,4.134 15.866,1 12,1 Z",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero",
        cx: "9",
        cy: "6",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero",
        cx: "15",
        cy: "6",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5,9 L19,9",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })))))));

    case "apple-dev":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "20px",
        height: "24px",
        viewBox: "0 0 20 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1027.000000, -1140.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-apple",
        transform: "translate(944.000000, 120.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "apple",
        transform: "translate(3.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M18,17.423 C17.508,18.513 17.273,18.999 16.639,19.963 C15.756,21.308 14.51,22.983 12.966,22.997 C11.594,23.01 11.242,22.105 9.38,22.115 C7.519,22.125 7.13,23.013 5.758,23.0001414 C4.214,22.986 3.035,21.474 2.15,20.128 C-0.32,16.366 -0.578,11.952 0.946,9.606 C2.029,7.938 3.738,6.963 5.345,6.963 C6.981,6.963 8.009,7.86 9.362,7.86 C10.674,7.86 11.474,6.962 13.365,6.962 C14.795,6.962 16.309,7.74 17.389,9.085 C13.853,11.023 14.427,16.072 18,17.423 L18,17.423 Z",
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12.1,3.45 C12.75,2.616 13.243,1.439 13.064,0.236 C12.002,0.309 10.762,0.984 10.037,1.864 C9.379,2.663 8.836,3.847 9.047,4.999 C10.205,5.035 11.404,4.343 12.1,3.45 L12.1,3.45 Z",
        id: "Path",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero"
      })))))));

    case "arrow-down":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "10px",
        height: "6px",
        viewBox: "0 0 10 6",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1327.000000, -1148.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-arrow-down",
        transform: "translate(1239.000000, 120.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "small-down",
        transform: "translate(8.000000, 10.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        transform: "translate(4.000000, 2.000000) scale(1, -1) translate(-4.000000, -2.000000) ",
        points: "0 4 4 0 8 4"
      })))))));

    case "arrow-left":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "6px",
        height: "10px",
        viewBox: "0 0 6 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1388.000000, -1145.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-arrow-right",
        transform: "translate(1310.000000, 131.000000) scale(-1, 1) translate(-1310.000000, -131.000000) translate(1298.000000, 119.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "small-down",
        transform: "translate(10.000000, 8.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        transform: "translate(2.000000, 4.000000) scale(1, -1) rotate(90.000000) translate(-2.000000, -4.000000) ",
        points: "-2 6 2 2 6 6"
      })))))));

    case "arrow-right":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "6px",
        height: "10px",
        viewBox: "0 0 6 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1388.000000, -1145.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-arrow-right",
        transform: "translate(1298.000000, 119.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "small-down",
        transform: "translate(10.000000, 8.000000)",
        stroke: props.active ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.gray50,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        transform: "translate(2.000000, 4.000000) scale(1, -1) rotate(90.000000) translate(-2.000000, -4.000000) ",
        points: "-2 6 2 2 6 6"
      })))))));

    case "arrow-up":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "10px",
        height: "6px",
        viewBox: "0 0 10 6",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1268.000000, -1148.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-arrow-up",
        transform: "translate(1180.000000, 120.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "small-up",
        transform: "translate(8.000000, 10.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "0 4 4 0 8 4"
      })))))));

    case "attach":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "24px",
        viewBox: "0 0 22 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-849.000000, -1080.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-attach",
        transform: "translate(767.000000, 61.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "attach",
        transform: "translate(2.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M20,10.4 L11.2,19.2 C8.7,21.7 4.5,21.7 2,19.2 L2,19.2 C-0.5,16.7 -0.5,12.5 2,10 L9.8,2.2 C11.6,0.4 14.4,0.4 16.2,2.2 L16.2,2.2 C18,4 18,6.8 16.2,8.6 L9,15.7 C8,16.7 6.4,16.7 5.5,15.7 L5.5,15.7 C4.5,14.7 4.5,13.1 5.5,12.2 L11.5,6.2",
        id: "Path"
      })))))));

    case "bag":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "24px",
        viewBox: "0 0 22 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-731.000000, -1079.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-bag",
        transform: "translate(649.000000, 60.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "shopping-bag",
        transform: "translate(2.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        id: "Path",
        points: "20 22 0 22 2 6 18 6"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M6,9 L6,4 C6.0065896,1.79359627 7.79359627,0.00658960222 10,0 L10,0 C12.2064037,0.00658960222 13.9934104,1.79359627 14,4 L14,9",
        id: "Path"
      })))))));

    case "calendar":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "23px",
        viewBox: "0 0 24 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-140.000000, -1020.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-calendar",
        transform: "translate(59.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "calendar-event-2",
        transform: "translate(1.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "8 14 10 16 15 11"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "2",
        width: "22",
        height: "19",
        rx: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5,0 L5,3",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M17,0 L17,3",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0,7 L22,7",
        id: "Path"
      })))))));

    case "carousel":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-376.000000, -1019.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-carousel",
        transform: "translate(295.000000, 0.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "slider",
        transform: "translate(1.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        x: "0",
        y: "0",
        width: "22",
        height: "14"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero",
        cx: "11",
        cy: "20",
        r: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "3",
        cy: "20",
        r: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "19",
        cy: "20",
        r: "2"
      })))))));

    case "cart":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "23px",
        height: "23px",
        viewBox: "0 0 23 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-789.000000, -1020.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-cart",
        transform: "translate(708.000000, 0.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "shopping-cart",
        transform: "translate(1.000000, 2.000000)"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero",
        cx: "5",
        cy: "20",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero",
        cx: "19",
        cy: "20",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "5",
        cy: "20",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "19",
        cy: "20",
        r: "1"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "3.8 5 21 5 19 15 5 15 3 0 0 0"
      })))))));

    case "checkmark":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "14px",
        height: "10px",
        viewBox: "0 0 14 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1207.000000, -1145.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-checkmark",
        transform: "translate(1121.000000, 119.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "d-check",
        transform: "translate(6.000000, 8.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "0 4 4 8 12 0"
      })))))));

    case "collection":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "24px",
        viewBox: "0 0 22 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-318.000000, -1019.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-collection",
        transform: "translate(236.000000, 0.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "single-copies",
        transform: "translate(2.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "8",
        width: "12",
        height: "14"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "4 4 16 4 16 18"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "8 0 20 0 20 14"
      })))))));

    case "close":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "23px",
        viewBox: "0 0 24 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-907.000000, -1081.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-close-(x)",
        transform: "translate(826.000000, 61.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "e-remove",
        transform: "translate(1.500000, 2.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M21,0 L0,21",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M21,21 L0,0",
        id: "Path"
      })))))));

    case "dismiss":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-907.000000, -1020.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-dismiss",
        transform: "translate(826.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "corner-bottom-right",
        transform: "translate(1.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Group-3",
        transform: "translate(13.000000, 13.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0,0 L9,9",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "9 1 9 9 1 9"
      })), /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        transform: "translate(5.000000, 5.000000) rotate(90.000000) translate(-5.000000, -5.000000) ",
        x: "5.39146505e-10",
        y: "1.21326593e-09",
        width: "10",
        height: "10"
      })))))));

    case "discount":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "23px",
        height: "23px",
        viewBox: "0 0 23 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-495.000000, -1019.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-discount",
        transform: "translate(413.000000, 0.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "tag-line",
        transform: "translate(2.000000, 1.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        id: "Path",
        points: "12 21 21 12 9 0 0 0 0 9"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "6",
        cy: "6",
        r: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12,9 L15,12",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M9,12 L12,15",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M6,8 L6,21",
        id: "Path"
      })))))));

    case "dot-dot-dot":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "6px",
        height: "22px",
        viewBox: "0 0 6 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1034.000000, -1081.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-option,-settings",
        transform: "translate(944.000000, 61.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "menu-dots",
        transform: "translate(12.000000, 12.000000) rotate(-91.000000) translate(-12.000000, -12.000000) translate(1.000000, 10.000000)",
        fill: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        fillRule: "nonzero"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "11",
        cy: "2",
        r: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "2",
        cy: "2",
        r: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "20",
        cy: "2",
        r: "2"
      })))))));

    case "download-cloud":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "24px",
        height: "17px",
        viewBox: "0 0 24 17",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-730.000000, -1023.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-download-cloud",
        transform: "translate(649.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "cloud-download-95",
        transform: "translate(1.000000, 3.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M11,6.998 L11,14.998",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "14 11.998 11 14.998 8 11.998"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M16,16 L18,16 C20.209,16 22,14.207 22,11.998 C22,9.801 20.218,7.985 17.975,8.001 C17.718,4.092 14.474,0.998 10.5,0.998 C6.481,0.998 3.21,4.162 3.018,8.134 C1.287,8.573 0,10.129 0,11.998 C0,14.207 1.791,16 4,16 L6,16",
        id: "Path"
      })))))));

    case "drag-and-drop":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "47px",
        height: "38px",
        viewBox: "0 0 47 38",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-86.000000, -1206.000000)",
        id: "Icons",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-drag-&-drop",
        transform: "translate(26.500000, 207.500000) rotate(90.000000) translate(-26.500000, -207.500000) translate(7.000000, 181.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "2x-drag-up"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M4,10 C1.33333333,15.3177083 0,19.6510417 0,23 C0,26.3489583 1.33333333,31.3489583 4,38",
        id: "Path",
        strokeDasharray: "3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "5",
        cy: "40",
        r: "4"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M6,10 C8.209139,10 10,8.209139 10,6 C10,3.790861 8.209139,2 6,2 C3.790861,2 2,3.790861 2,6 C2,8.209139 3.790861,10 6,10 Z",
        id: "Oval",
        strokeDasharray: "3",
        transform: "translate(6.000000, 6.000000) rotate(36.000000) translate(-6.000000, -6.000000) "
      })), /*#__PURE__*/_react["default"].createElement("g", {
        id: "active-38",
        transform: "translate(21.350933, 36.035819) rotate(-50.000000) translate(-21.350933, -36.035819) translate(9.850933, 23.535819)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12.1968205,8.45666947 L12.1968305,3.70648947 C12.1968305,2.71021947 11.5160505,1.78682947 10.5327005,1.62690947 C9.27967049,1.42312947 8.19682049,2.38478947 8.19682049,3.59954262 L8.19682049,7.59954262 L8.19682049,16.5995426 L4.25291049,14.2331995 C3.60800049,13.8462495 2.79785049,13.8655295 2.17207049,14.2827195 L2.17207049,14.2827195 C1.15021049,14.9639595 1.00704049,16.4097695 1.87546049,17.2781795 L8.19682049,23.5995426 L20.1968205,23.5995426 L21.7665605,13.3961895 C22.0081505,11.8258695 20.9835505,10.3394995 19.4300205,10.0066095 L12.1968205,8.45666947 Z",
        id: "Path",
        transform: "translate(11.553572, 12.599546) rotate(-5.000000) translate(-11.553572, -12.599546) "
      })))))));

    case "edit":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "21px",
        height: "21px",
        viewBox: "0 0 21 21",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Editor---collections",
        transform: "translate(-16.000000, -18.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Block-editor"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Edit-title",
        transform: "translate(17.000000, 18.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-edit-content",
        transform: "translate(0.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "20",
        height: "20"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "pen",
        stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M11.5,3.83333333 L15.3333333,7.66666667",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        id: "Path",
        points: "4.79166667 18.2083333 0 19.1666667 0.958333333 14.375 15.3333333 0 19.1666667 3.83333333"
      }))))))));

    case "edit-content":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "20px",
        height: "20px",
        viewBox: "0 0 20 20",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Editor---Blocks",
        transform: "translate(-16.000000, -19.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Block-editor"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Edit-content",
        transform: "translate(16.000000, 19.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-edit-content"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "20",
        height: "20"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "rotate-22",
        transform: "translate(1.666667, 1.666667)",
        stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M10,3.33333333 L5,3.33333333 C3.61929167,3.33333333 2.5,4.452625 2.5,5.83333333 L2.5,8.33333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "6.66666667 6.66666667 10 3.33333333 6.66666667 0"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M13.75,5.83333333 L13.75,5.83333333 C15.3541667,5.83333333 16.6666667,7.14583333 16.6666667,8.75 L16.6666667,8.75 C16.6666667,10.3541667 15.3541667,11.6666667 13.75,11.6666667 L13.75,11.6666667 C12.1458333,11.6666667 10.8333333,10.3541667 10.8333333,8.75 L10.8333333,8.75 C10.8333333,7.14583333 12.1458333,5.83333333 13.75,5.83333333 Z",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M2.91666667,11.6666667 L2.91666667,11.6666667 C4.52083333,11.6666667 5.83333333,12.9791667 5.83333333,14.5833333 L5.83333333,14.5833333 C5.83333333,16.1875 4.52083333,17.5 2.91666667,17.5 L2.91666667,17.5 C1.3125,17.5 0,16.1875 0,14.5833333 L0,14.5833333 C0,12.9791667 1.3125,11.6666667 2.91666667,11.6666667 Z",
        id: "Path"
      }))))))));

    case "full-arrow-right":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "16px",
        viewBox: "0 0 22 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-554.000000, -1023.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-full-arrow-right",
        transform: "translate(472.000000, 0.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "arrow-right",
        transform: "translate(2.000000, 5.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0,7 L20,7",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "13 0 20 7 13 14"
      })))))));

    case "go-live":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "20px",
        height: "13px",
        viewBox: "0 0 20 13",
        version: "1.1"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Editor---Drafts",
        transform: "translate(-17.000000, -24.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Block-editor"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Title",
        transform: "translate(17.000000, 19.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-live",
        transform: "translate(0.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "20",
        height: "20"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "radio",
        transform: "translate(0.000000, 4.166667)",
        stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M14.5833333,8.75 C16.25,7.08333333 16.25,4.5 14.5833333,2.83333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M17,11.1666667 C19.9166667,8.25 19.9166667,3.5 17,0.583333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5.41666667,8.75 C3.75,7.08333333 3.75,4.5 5.41666667,2.83333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M3,11.1666667 C0.0833333333,8.25 0.0833333333,3.5 3,0.583333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "10",
        cy: "5.83333333",
        r: "1.66666667"
      }))))))));

    case "google-play":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "23px",
        height: "24px",
        viewBox: "0 0 23 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/StyledSVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1142.000000, -1079.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-google-play",
        transform: "translate(1062.000000, 60.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M2.5536416,22.3128149 L16.4555339,8.07323152",
        id: "Path-6"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M2.5536416,1.60812735 L16.4555339,15.9563044",
        id: "Path-7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M13.5045557,4.3790302 L21.9314147,20.4538262 C22.4442639,21.4321203 22.0669462,22.6409309 21.0886521,23.1537801 C20.8021641,23.3039652 20.4835235,23.3824219 20.1600564,23.3824219 L3.30656838,23.3824219 C2.20199888,23.3824219 1.30656838,22.4869914 1.30656838,21.3824219 C1.30656838,21.0589624 1.3850214,20.740329 1.53519971,20.4538461 L9.96182882,4.37905007 C10.4746671,3.40075017 11.6834734,3.02341896 12.6617733,3.53625722 C13.0218236,3.72500052 13.3158084,4.01898205 13.5045557,4.3790302 Z",
        id: "Triangle",
        strokeLinejoin: "round",
        transform: "translate(11.733333, 12.191211) rotate(90.000000) translate(-11.733333, -12.191211) "
      })), /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }))))));

    case "search":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "22px",
        height: "22px",
        viewBox: "0 0 22 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Search-bar",
        transform: "translate(1.000000, 1.000000)",
        stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "zoom-2"
      }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M20,20 L13.656,13.656",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        id: "Oval",
        cx: "8",
        cy: "8",
        r: "8"
      }))))));

    case "small-close":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "10px",
        height: "10px",
        viewBox: "0 0 10 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(-1150.000000, -1145.000000)",
        id: "Icons"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(81.000000, 1019.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-close-small",
        transform: "translate(1062.000000, 119.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "i-remove",
        transform: "translate(8.000000, 8.000000)",
        style: {
          stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M8,0 L0,8",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M8,8 L0,0",
        id: "Path"
      })))))));

    case "trash":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledSVG, _extends({
        width: "20px",
        height: "20px",
        viewBox: "0 0 20 20",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), /*#__PURE__*/_react["default"].createElement("g", {
        id: "Drops",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "1.1-Drop-hover-+-click-states",
        transform: "translate(-683.000000, -719.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Editor---Drafts-Copy",
        transform: "translate(667.000000, 579.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Block-editor"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Delete",
        transform: "translate(16.000000, 139.000000)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Icon-trash",
        transform: "translate(0.000000, 1.000000)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "20",
        height: "20"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "trash-simple",
        transform: "translate(0.833333, 0.833333)",
        stroke: props.fill ? props.fill : _dashVariables.colorPicker.blue,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.75"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15.8333333,6.66666667 L15.8333333,16.6666667 C15.8333333,17.5871412 15.0871412,18.3333333 14.1666667,18.3333333 L4.16666667,18.3333333 C3.24619208,18.3333333 2.5,17.5871412 2.5,16.6666667 L2.5,6.66666667",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0,3.33333333 L18.3333333,3.33333333",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M9.16666667,9.16666667 L9.16666667,14.1666667",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5.83333333,9.16666667 L5.83333333,14.1666667",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12.5,9.16666667 L12.5,14.1666667",
        id: "Path"
      }), /*#__PURE__*/_react["default"].createElement("polyline", {
        id: "Path",
        points: "5.83333333 3.33333333 5.83333333 0 12.5 0 12.5 3.33333333"
      })))))))));

    default:
      /*#__PURE__*/
      _react["default"].createElement("span", null);

  }
}

IconV2.propTypes = {
  type: _propTypes["default"].string.isRequired,

  /**
   * margin creating separation to the left of the icon
   */
  iconRight: _propTypes["default"].bool,

  /**
   * margin creating separation to the right of the icon
   */
  iconLeft: _propTypes["default"].bool,

  /**
   * icon color
   */
  fill: _propTypes["default"].string,
  circleIcon: _propTypes["default"].bool
};
IconV2.defaultProps = {
  iconRight: false,
  iconLeft: false,
  circleIcon: false
};