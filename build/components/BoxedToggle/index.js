"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxedToggle = BoxedToggle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _dashVariables = require("../../utils/_dashVariables");

var _Icon = require("../../elements/Icon");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BoxedToggle(props) {
  var SunIcon = function SunIcon(props) {
    return _react["default"].createElement("svg", _extends({
      width: "20px",
      height: "20px",
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: props.style
    }, props), _react["default"].createElement("g", {
      id: "Style-Guide",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, _react["default"].createElement("g", {
      transform: "translate(-190.000000, -2015.000000)",
      id: "Toggle-Apple",
      stroke: "#FFFFFF",
      strokeWidth: "1.6"
    }, _react["default"].createElement("g", {
      transform: "translate(184.000000, 2009.000000)"
    }, _react["default"].createElement("g", {
      id: "sun",
      transform: "translate(7.000000, 7.000000)"
    }, _react["default"].createElement("path", {
      d: "M0,8.8 L0.8,8.8",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M2.56,2.56 L3.12,3.12",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M8.8,0 L8.8,0.8",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M15.04,2.56 L14.48,3.12",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M17.6,8.8 L16.8,8.8",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M15.04,15.04 L14.48,14.48",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M8.8,17.6 L8.8,16.8",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M2.56,15.04 L3.12,14.48",
      id: "Path"
    }), _react["default"].createElement("circle", {
      id: "Oval",
      cx: "8.8",
      cy: "8.8",
      r: "4.8"
    }))))));
  };

  var MoonIcon = function MoonIcon(props) {
    return _react["default"].createElement("svg", _extends({
      width: "20px",
      height: "20px",
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: props.style
    }, props), _react["default"].createElement("g", {
      id: "Style-Guide",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, _react["default"].createElement("g", {
      transform: "translate(-223.000000, -2072.000000)",
      id: "Toggle-Android",
      stroke: "#FFFFFF",
      strokeWidth: "1.6"
    }, _react["default"].createElement("g", {
      transform: "translate(184.000000, 2066.000000)"
    }, _react["default"].createElement("g", {
      id: "moon-stars",
      transform: "translate(40.000000, 7.000000)"
    }, _react["default"].createElement("path", {
      d: "M13.6,12 C9.2,12 5.6,8.4 5.6,4 C5.6,3.28 5.68,2.56 5.92,1.92 C2.48,2.8 0,5.92 0,9.6 C0,14 3.6,17.6 8,17.6 C11.68,17.6 14.8,15.12 15.68,11.68 C15.04,11.92 14.32,12 13.6,12 Z",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M11.2,0 L11.2,3.2",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M9.6,1.6 L12.8,1.6",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M16,4.8 L16,8",
      id: "Path"
    }), _react["default"].createElement("path", {
      d: "M14.4,6.4 L17.6,6.4",
      id: "Path"
    }))))));
  };

  switch (props.type) {
    case "basic":
      return _react["default"].createElement(BoxedToggleWrapper, _extends({
        style: {
          margin: 5
        },
        border: _dashVariables.colorPicker.grayBlue,
        backgroundOn: _dashVariables.colorPicker.green100,
        backgroundOff: _dashVariables.colorPicker.offWhite
      }, props), _react["default"].createElement(BoxedToggleInput, _extends({
        type: "checkbox",
        id: props.name,
        checked: props.toggleState,
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        onChange: props.onChange,
        border: _dashVariables.colorPicker.grayBlue,
        backgroundOn: _dashVariables.colorPicker.green100,
        backgroundOff: _dashVariables.colorPicker.offWhite,
        style: {
          position: "absolute"
        }
      }, props)), _react["default"].createElement(BoxedToggleLabel, _extends({
        border: _dashVariables.colorPicker.grayBlue,
        backgroundOn: _dashVariables.colorPicker.green100,
        backgroundOff: _dashVariables.colorPicker.offWhite,
        htmlFor: props.name
      }, props), _react["default"].createElement(_Icon.Icon, {
        type: "checkmark-small",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : "white",
        style: {
          position: "absolute",
          zIndex: 1,
          left: 10,
          marginTop: 11
        }
      }), _react["default"].createElement(_Icon.Icon, {
        type: "small-close",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : _variables.colors.grayText,
        style: {
          position: "absolute",
          zIndex: 1,
          right: 10,
          marginTop: 11
        }
      })));

    case "day/night":
      return _react["default"].createElement(BoxedToggleWrapper, _extends({
        style: {
          margin: 5
        },
        border: _dashVariables.colorPicker.blue,
        backgroundOn: _dashVariables.colorPicker.yellow,
        backgroundOff: _dashVariables.colorPicker.blue
      }, props), _react["default"].createElement(BoxedToggleInput, _extends({
        type: "checkbox",
        id: props.name,
        checked: props.toggleState,
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        onChange: props.onChange,
        border: _dashVariables.colorPicker.blue,
        backgroundOn: _dashVariables.colorPicker.yellow,
        backgroundOff: _dashVariables.colorPicker.blue,
        style: {
          position: "absolute"
        }
      }, props)), _react["default"].createElement(BoxedToggleLabel, _extends({
        border: _dashVariables.colorPicker.blue,
        backgroundOn: _dashVariables.colorPicker.yellow,
        backgroundOff: _dashVariables.colorPicker.blue,
        htmlFor: props.name
      }, props), _react["default"].createElement(SunIcon, {
        type: "checkmark-small",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : "white",
        style: {
          position: "absolute",
          zIndex: 1,
          left: 7,
          marginTop: 6
        }
      }), _react["default"].createElement(MoonIcon, {
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : _variables.colors.grayText,
        style: {
          position: "absolute",
          zIndex: 1,
          right: 6,
          marginTop: 6
        }
      })));

    case "apple/android":
      return _react["default"].createElement(BoxedToggleWrapper, _extends({
        style: {
          margin: 5
        },
        border: _dashVariables.colorPicker.androidGreen,
        backgroundOn: _dashVariables.colorPicker.black,
        backgroundOff: _dashVariables.colorPicker.androidGreen
      }, props), _react["default"].createElement(BoxedToggleInput, _extends({
        type: "checkbox",
        id: props.name,
        checked: props.toggleState,
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        onChange: props.onChange,
        border: _dashVariables.colorPicker.androidGreen,
        backgroundOn: _dashVariables.colorPicker.black,
        backgroundOff: _dashVariables.colorPicker.androidGreen,
        style: {
          position: "absolute"
        }
      }, props)), _react["default"].createElement(BoxedToggleLabel, _extends({
        border: _dashVariables.colorPicker.androidGreen,
        backgroundOn: _dashVariables.colorPicker.black,
        backgroundOff: _dashVariables.colorPicker.androidGreen,
        htmlFor: props.name
      }, props), _react["default"].createElement(_Icon.Icon, {
        type: "apple",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "white" : "white",
        style: {
          position: "absolute",
          zIndex: 1,
          left: 6,
          marginTop: 6,
          marginLeft: 2,
          width: 18,
          height: 18
        }
      }), _react["default"].createElement(_Icon.Icon, {
        type: "android",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: !props.toggleState ? "white" : "white",
        style: {
          position: "absolute",
          zIndex: 1,
          right: 5,
          marginTop: 6,
          width: 20,
          height: 20
        }
      })));

    default:
      return _react["default"].createElement("div", null);
  }
}

var BoxedToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "BoxedToggle__BoxedToggleWrapper",
  componentId: "sc-1wzsyt4-0"
})(["position:relative;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

var BoxedToggleLabel = _styledComponents["default"].label.withConfig({
  displayName: "BoxedToggle__BoxedToggleLabel",
  componentId: "sc-1wzsyt4-1"
})(["position:relative;width:64px;height:32px;cursor:pointer;height:32px;box-shadow:0 0 0 1px ", ";border-radius:3px;background:", ";transition:0.2s;&:hover{cursor:pointer;}&::after{content:\"\";display:block;width:33px;height:34px;border-radius:3px;border:1px solid ", ";background:white;box-shadow:0 2px 10px 0 rgba(0,0,0,0.11);-webkit-transition:0.2s;transition:0.2s;position:absolute;&:hover{cursor:pointer;}", ";}"], function (props) {
  return props.toggleState ? props.backgroundOn : props.border;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.backgroundOff;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.border;
}, function (props) {
  return !props.toggleState ? "left: -1px; top: -1px;" : "right: -1px; top: -1px;";
});

var BoxedToggleInput = _styledComponents["default"].input.withConfig({
  displayName: "BoxedToggle__BoxedToggleInput",
  componentId: "sc-1wzsyt4-2"
})(["opacity:0;z-index:1;width:64px;height:32px;transition:0.2s;&:hover{cursor:pointer;}&:checked{transition:0.2s;&::after{content:\"\";display:block;width:32px;height:32px;margin-left:34px;left:0px;transition:0.2s;}}"]);

BoxedToggle.propTypes = {
  /**
   * options: "basic" | "day/night" | "apple/android"
   */
  type: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string,
  toggleState: _propTypes["default"].bool,

  /** takes the function that sets the state for the toggle in your component */
  onChange: _propTypes["default"].func
};
BoxedToggle.defaultProps = {};