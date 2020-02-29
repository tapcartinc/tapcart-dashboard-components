"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsIcon = StatsIcon;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function StatsIcon(props) {
  var type = props.type;

  switch (type) {
    case "orders":
      return _react["default"].createElement(StatsIconWrapper, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1"
      }), _react["default"].createElement("g", {
        id: "Analytics-/-Stats",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Stats-v4",
        transform: "translate(-67.000000, -311.000000)"
      }, _react["default"].createElement("g", {
        id: "Roll-up-metrics-cards",
        transform: "translate(44.000000, 287.000000)"
      }, _react["default"].createElement("g", {
        id: "ROLLUP---Total-App-Sales"
      }, _react["default"].createElement("g", {
        id: "Order-icon",
        transform: "translate(23.000000, 24.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "box-3d-50",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M5.5,2.25 L17.5,8.25",
        id: "Path",
        stroke: _dashVariables.colorPicker.green100
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: _dashVariables.colorPicker.blue,
        points: "22 6 12 11 0 5"
      }), _react["default"].createElement("path", {
        d: "M12,11 L12,22",
        id: "Path",
        stroke: _dashVariables.colorPicker.blue
      }), _react["default"].createElement("polygon", {
        id: "Path",
        stroke: _dashVariables.colorPicker.blue,
        points: "22 6 22 16 12 22 0 16 0 5 10 0"
      }))))))));

    case "session":
      return _react["default"].createElement(StatsIconWrapper, _extends({}, props, {
        width: "19px",
        height: "25px",
        viewBox: "0 0 19 25",
        version: "1.1"
      }), _react["default"].createElement("g", {
        id: "Analytics-/-Stats",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Stats-v4",
        transform: "translate(-400.000000, -310.000000)"
      }, _react["default"].createElement("g", {
        id: "Roll-up-metrics-cards",
        transform: "translate(44.000000, 287.000000)"
      }, _react["default"].createElement("g", {
        id: "ROLLUP---App-Sessions",
        transform: "translate(343.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "App-opens-icon",
        transform: "translate(10.000000, 24.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "phone-charging-3",
        transform: "translate(4.119800, 0.729730)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M14.4193012,22 L2.05990017,22 C0.922248718,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.922248718,0 2.05990017,0 L14.4193012,0 C15.5569526,0 16.4792013,0.8954305 16.4792013,2 L16.4792013,20 C16.4792013,21.1045695 15.5569526,22 14.4193012,22 Z",
        id: "Path",
        stroke: _dashVariables.colorPicker.blue
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: _dashVariables.colorPicker.green100,
        points: "9.08985025 8 6 10.9189189 10.1198003 10.9189189 7.02995008 13.8378378"
      }))))))));

    case "conversion":
      return _react["default"].createElement(StatsIconWrapper, _extends({}, props, {
        width: "25px",
        height: "21px",
        viewBox: "0 0 25 21",
        version: "1.1"
      }), _react["default"].createElement("g", {
        id: "Analytics-/-Stats",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Stats-v4",
        transform: "translate(-749.000000, -312.000000)"
      }, _react["default"].createElement("g", {
        id: "Roll-up-metrics-cards",
        transform: "translate(44.000000, 287.000000)"
      }, _react["default"].createElement("g", {
        id: "ROLLUP---Conversion-Rate",
        transform: "translate(686.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "User-icon",
        transform: "translate(19.000000, 24.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "users-wm",
        transform: "translate(0.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M19.9026956,18.5714286 L23.9661877,18.5714286 L23.9661877,14.1800287 C23.9659248,13.7647329 23.7128802,13.3914203 23.3272035,13.2373456 L19.5258067,11.7136121 C19.1408167,11.5598133 18.8879147,11.1875152 18.8868226,10.7729607 L18.8868226,9.88106869 C20.1408299,9.16146152 20.91541,7.82731391 20.9185686,6.38156082 L20.9185686,4.34991619 C20.9188947,2.89807975 20.1445263,1.5563794 18.8872178,0.83031998 C17.6299093,0.104260556 16.0807205,0.104173603 14.8233305,0.830091882",
        id: "Path",
        stroke: _dashVariables.colorPicker.green100
      }), _react["default"].createElement("path", {
        d: "M15.2986775,14.2847059 L11.3275754,12.7721008 C10.9253983,12.6194253 10.6612061,12.2498462 10.6600652,11.8383193 L10.6600652,11.3835294 C14.1302693,10.9428571 14.9049632,9.49579832 14.9049632,9.49579832 C14.9049632,9.49579832 12.7825142,7.4789916 12.7825142,5.46218487 C12.7825142,3.23448168 10.8820086,1.42857143 8.53761623,1.42857143 C6.19322382,1.42857143 4.29271827,3.23448168 4.29271827,5.46218487 C4.29271827,7.4789916 2.17026929,9.49579832 2.17026929,9.49579832 C2.17026929,9.49579832 2.94496317,10.9428571 6.41516725,11.3835294 L6.41516725,11.8383193 C6.41489264,12.250582 6.15055143,12.6211682 5.74765705,12.7741176 L1.77655501,14.2867227 C1.37437791,14.4393982 1.11018566,14.8089774 1.1090448,15.2205042 L1.1090448,18.5714286 L15.9661877,18.5714286 L15.9661877,15.2205042 C15.9659131,14.8082415 15.7015718,14.4376553 15.2986775,14.2847059 Z",
        id: "Path",
        stroke: _dashVariables.colorPicker.blue
      }))))))));

    default:
      return _react["default"].createElement("span", null);
  }
}

var StatsIconWrapper = _styledComponents["default"].svg.withConfig({
  displayName: "StatsIcon__StatsIconWrapper",
  componentId: "sc-143zybq-0"
})(["margin-left:", ";margin-right:", ";", " ", ";"], function (props) {
  return props.iconRight ? "10px" : "0px";
}, function (props) {
  return props.iconLeft ? "10px" : "0px";
}, function (props) {
  return props.fill && "color: ".concat(props.fill, ";");
}, function (props) {
  return props.style ? props.style : null;
});