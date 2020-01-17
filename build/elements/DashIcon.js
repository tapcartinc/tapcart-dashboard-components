"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DashIcon = function DashIcon(props) {
  var type = props.type,
      fill = props.fill;

  switch (type) {
    case "android":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "23px",
        height: "26px",
        viewBox: "0 0 23 26",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Design",
        transform: "translate(-397.000000, -113.000000)",
        fill: fill ? fill : _dashVariables.colorPicker.green100,
        fillRule: "nonzero"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "App-status",
        transform: "translate(393.000000, 110.000000)"
      }, _react["default"].createElement("g", {
        id: "Android-Logo"
      }, _react["default"].createElement("g", {
        id: "androd",
        transform: "translate(4.428571, 2.952381)"
      }, _react["default"].createElement("path", {
        d: "M14.0770323,2.23559547 L15.3421289,0.381656137 C15.4172478,0.271453402 15.3985465,0.12679648 15.3003335,0.0583947823 C15.202246,-0.00962690555 15.0615472,0.024003929 14.9869931,0.134333333 L13.6721938,2.06028446 C12.8057228,1.71580591 11.8435489,1.52383781 10.8294132,1.52383781 C9.81527748,1.52383781 8.85285263,1.7156159 7.98644435,2.06028446 L6.67183326,0.134269998 C6.5964634,0.0240672639 6.45601564,-0.00969024045 6.35786538,0.0583314474 C6.25971511,0.12654314 6.2410766,0.271263398 6.31619545,0.381592802 L7.5817314,2.23553214 C5.56958822,3.18023558 4.15852128,4.97540013 3.97872556,7.07051878 L17.6793478,7.07051878 C17.5001796,4.97540013 16.0890499,3.18029892 14.0770323,2.23559547",
        id: "Shape"
      }), _react["default"].createElement("path", {
        d: "M7.96724104,5.15786799 C7.54847076,5.15786799 7.20914948,4.81541616 7.20914948,4.39284567 C7.20914948,3.97033852 7.54828249,3.62776002 7.96724104,3.62776002 C8.38569754,3.62776002 8.72489331,3.97021185 8.72489331,4.39284567 C8.72495606,4.81535282 8.38569754,5.15786799 7.96724104,5.15786799",
        id: "Shape"
      }), _react["default"].createElement("path", {
        d: "M13.6908951,5.15786799 C13.2724386,5.15786799 12.93318,4.81541616 12.93318,4.39284567 C12.93318,3.97021185 13.2724386,3.62776002 13.6908951,3.62776002 C14.1097908,3.62776002 14.4489239,3.97033852 14.4489239,4.39284567 C14.4489239,4.81535282 14.1096653,5.15786799 13.6908951,5.15786799",
        id: "Shape"
      }), _react["default"].createElement("path", {
        d: "M3.09907578,15.8082656 C3.09907578,16.6601201 2.41478519,17.3507239 1.57065526,17.3507239 L1.57065526,17.3507239 C0.726588084,17.3507239 0.0422974925,16.6601201 0.0422974925,15.8082656 L0.0422974925,9.56927078 C0.0422974925,8.71741631 0.726588084,8.02681251 1.57065526,8.02681251 L1.57065526,8.02681251 C2.41478519,8.02681251 3.09907578,8.71741631 3.09907578,9.56927078 L3.09907578,15.8082656 Z",
        id: "Shape"
      }), _react["default"].createElement("path", {
        d: "M3.97847453,8.07450369 L3.97847453,19.3427333 C3.97847453,20.0119299 4.51604178,20.55452 5.17930913,20.55452 L6.59966395,20.55452 L6.59966395,24.0217261 C6.59966395,24.8736439 7.28389179,25.5641843 8.12802172,25.5641843 C8.97215164,25.5641843 9.65644224,24.8736439 9.65644224,24.0217261 L9.65644224,20.55452 L12.0016939,20.55452 L12.0016939,24.0217261 C12.0016939,24.8736439 12.6858589,25.5641843 13.5300516,25.5641843 C14.3742443,25.5641843 15.0584094,24.8736439 15.0584094,24.0217261 L15.0584094,20.55452 L16.4787642,20.55452 C17.1420316,20.55452 17.6797243,20.0122466 17.6797243,19.3427333 L17.6797243,8.07450369 L3.97847453,8.07450369 Z",
        id: "Shape"
      }), _react["default"].createElement("path", {
        d: "M18.5590603,15.8082656 C18.5590603,16.6601201 19.2432882,17.3507239 20.0874181,17.3507239 L20.0874181,17.3507239 C20.9314853,17.3507239 21.6157758,16.6601201 21.6157758,15.8082656 L21.6157758,9.56927078 C21.6157758,8.71741631 20.9314853,8.02681251 20.0874181,8.02681251 L20.0874181,8.02681251 C19.2432882,8.02681251 18.5590603,8.71741631 18.5590603,9.56927078 L18.5590603,15.8082656 Z",
        id: "Shape"
      }))))))));

    case "apple":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "21.85px",
        height: "26.99px",
        viewBox: "0 0 21.85 26.99",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("title", null, "apple"), _react["default"].createElement("path", {
        d: "M45.35,31.51c-.38.32-.73.6-1.05.9A5.22,5.22,0,0,0,42.7,35a5.77,5.77,0,0,0,1.62,6,10.52,10.52,0,0,0,1.39,1c.33.22.34.2.21.58a15.81,15.81,0,0,1-3.35,5.52A3.57,3.57,0,0,1,41,49.14a3.44,3.44,0,0,1-2.22,0c-.51-.18-1-.42-1.52-.59a5.2,5.2,0,0,0-3.76.17,11.29,11.29,0,0,1-1.78.6,2.76,2.76,0,0,1-2.39-.64,11.3,11.3,0,0,1-2.07-2.35A17,17,0,0,1,24.32,39a10.83,10.83,0,0,1,.34-5.24,6.82,6.82,0,0,1,4.25-4.44,5.46,5.46,0,0,1,3.94.05l1.53.58a2.41,2.41,0,0,0,1.79,0c.67-.26,1.35-.5,2-.74a6.44,6.44,0,0,1,6.39,1.46C44.86,30.92,45.09,31.22,45.35,31.51Z",
        transform: "translate(-24.15 -22.36)",
        style: {
          fill: fill ? fill : _dashVariables.colorPicker.green100
        }
      }), _react["default"].createElement("path", {
        d: "M40.46,22.36a5,5,0,0,1-.19,2.05A6,6,0,0,1,37.42,28a4.28,4.28,0,0,1-2.1.56c-.19,0-.25-.06-.26-.25a5.41,5.41,0,0,1,1.22-3.63,6,6,0,0,1,4.09-2.35Z",
        transform: "translate(-24.15 -22.36)",
        style: {
          fill: fill ? fill : _dashVariables.colorPicker.green100
        }
      }));

    case "design":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Settings",
        transform: "translate(-66.000000, -205.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-2",
        transform: "translate(0.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Tab-design"
      }, _react["default"].createElement("g", {
        id: "Icon-design",
        transform: "translate(0.000000, 1.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "path-exclude",
        transform: "translate(1.000000, 1.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.gray50,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        points: "22 0 7 0 7 7 0 7 0 22 15 22 15 15 22 15"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        points: "15 9 15 7 13 7"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        points: "7 13 7 15 9 15"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        points: "7 9 7 7 9 7"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        points: "13 15 15 15 15 13"
      }))))))))));

    case "engage":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "24px",
        height: "22px",
        viewBox: "0 0 24 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Settings",
        transform: "translate(-246.000000, -206.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Tab-engage",
        transform: "translate(180.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-engage",
        transform: "translate(0.000000, 2.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle-Copy-6",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "f-chat",
        transform: "translate(1.000000, 2.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.green100,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        points: "22 0 0 0 0 15 7 15 11 20 15 15 22 15"
      }), _react["default"].createElement("path", {
        d: "M6,5 L16,5",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M6,10 L12,10",
        id: "Path"
      })))))))));

    case "drops":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "21px",
        height: "26px",
        viewBox: "0 0 21 26",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Settings",
        transform: "translate(-418.000000, -205.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-3",
        transform: "translate(351.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Tap-drops"
      }, _react["default"].createElement("g", {
        id: "Icon-drops",
        transform: "translate(0.000000, 2.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle-Copy-7",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        transform: "translate(2.000000, 0.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.green100,
        strokeWidth: "2"
      }, _react["default"].createElement("g", {
        id: "app",
        transform: "translate(0.923077, 7.384615)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, _react["default"].createElement("polyline", {
        id: "Path",
        points: "0.208436725 3.72208437 8.97766749 6.49131514 17.7468983 3.72208437"
      }), _react["default"].createElement("path", {
        d: "M8.97766749,6.49131514 L8.97766749,15.7220844",
        id: "Path"
      }), _react["default"].createElement("polygon", {
        id: "Path",
        points: "17.7468983 12.5836228 8.97766749 15.7220844 0.208436725 12.5836228 0.208436725 3.16823821 8.97766749 0.0297766749 17.7468983 3.16823821"
      })), _react["default"].createElement("circle", {
        id: "Oval-Copy",
        cx: "9.63275434",
        cy: "1.7866005",
        r: "1.7866005"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-2",
        cx: "16.9131514",
        cy: "3.93052109",
        r: "1.7866005"
      }), _react["default"].createElement("path", {
        d: "M13.507783,5.44913151 L15.5028202,8.96277916",
        id: "Line-Copy-2",
        transform: "translate(14.843672, 7.295285) scale(-1, 1) translate(-14.843672, -7.295285) "
      }), _react["default"].createElement("g", {
        id: "Group",
        transform: "translate(3.074442, 5.643921) scale(-1, 1) translate(-3.074442, -5.643921) translate(0.074442, 2.143921)"
      }, _react["default"].createElement("circle", {
        id: "Oval-Copy-2",
        transform: "translate(3.454094, 1.786600) scale(-1, 1) translate(-3.454094, -1.786600) ",
        cx: "3.45409429",
        cy: "1.7866005",
        r: "1.7866005"
      }), _react["default"].createElement("path", {
        d: "M0.0487259118,3.30521092 L2.04376313,6.81885856",
        id: "Line-Copy-2",
        transform: "translate(1.384615, 5.151365) scale(-1, 1) translate(-1.384615, -5.151365) "
      })), _react["default"].createElement("path", {
        d: "M9.78461538,4.28784119 L9.78461538,7.38461538",
        id: "Line-Copy",
        strokeLinecap: "round"
      }))))))))));

    case "stats":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "22px",
        height: "22px",
        viewBox: "0 0 22 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Settings",
        transform: "translate(-591.000000, -207.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Tab-stats",
        transform: "translate(524.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-stats",
        transform: "translate(0.000000, 2.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle-Copy-8",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "a-chart",
        transform: "translate(2.000000, 2.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.green100,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M14.6,16.5 C13.2,18.6 10.7,20 8,20 C3.6,20 0,16.4 0,12 C0,7.6 3.6,4 8,4",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M17.9,18.8 C19.2,16.9 20,14.5 20,12 C20,5.4 14.6,0 8,0 L8,12 L17.9,18.8 Z",
        id: "Path"
      })))))))));

    case "integrations":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "19px",
        height: "24px",
        viewBox: "0 0 19 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---Settings",
        transform: "translate(-741.000000, -206.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Tab-integrations",
        transform: "translate(672.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-integrations",
        transform: "translate(0.000000, 2.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle-Copy-9",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "camera-flash",
        transform: "translate(4.000000, 1.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.green100,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        points: "11.5789474 0 3.47368421 0 0 12.7368421 6.94736842 12.7368421 4.63157895 22 16.2105263 8.10526316 9.26315789 8.10526316"
      })))))))));

    case "settings":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Header---App-Submission-(0/3)",
        transform: "translate(-975.000000, -206.000000)"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Tab-settings",
        transform: "translate(909.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-settings",
        transform: "translate(0.000000, 2.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle-Copy-10",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "preferences-circle",
        transform: "translate(1.000000, 1.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.green100,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M13,3 L22,3",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M0,3 L3,3",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M21,11 L22,11",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M0,11 L11,11",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M13,19 L22,19",
        id: "Path"
      }), _react["default"].createElement("path", {
        d: "M0,19 L3,19",
        id: "Path"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        cx: "6",
        cy: "3",
        r: "3"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        cx: "14",
        cy: "11",
        r: "3"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        cx: "6",
        cy: "19",
        r: "3"
      })))))))));

    case "dropdown-arrow":
      return _react["default"].createElement(DashIconWrapper, _extends({}, props, {
        width: "10px",
        height: "6px",
        viewBox: "0 0 10 6",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, _react["default"].createElement("g", {
        id: "Header---Drops",
        transform: "translate(-186.000000, -216.000000)",
        stroke: fill ? fill : _dashVariables.colorPicker.gray50,
        strokeWidth: "2"
      }, _react["default"].createElement("g", {
        id: "Header"
      }, _react["default"].createElement("g", {
        id: "Navigation",
        transform: "translate(66.000000, 203.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-2",
        transform: "translate(0.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-4"
      }, _react["default"].createElement("polyline", {
        id: "Path-Copy",
        points: "129 13 125 17 121 13"
      }))))))));

    default:
      return _react["default"].createElement("span", null);
  }
};

exports.DashIcon = DashIcon;

var DashIconWrapper = _styledComponents["default"].svg.withConfig({
  displayName: "DashIcon__DashIconWrapper",
  componentId: "jgzjtn-0"
})(["margin-left:", ";margin-right:", ";", " ", ";"], function (props) {
  return props.iconRight ? "10px" : "0px";
}, function (props) {
  return props.iconLeft ? "10px" : "0px";
}, function (props) {
  return props.fill && "color: ".concat(props.fill, ";");
}, function (props) {
  return props.style ? props.style : null;
});