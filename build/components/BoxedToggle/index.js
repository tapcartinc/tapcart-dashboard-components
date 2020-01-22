"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxedToggle = BoxedToggle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _dashVariables = require("../../utils/_dashVariables");

var _Icon = require("../../elements/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BoxedToggle(props) {
  console.log("props", props);

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

    default:
      return _react["default"].createElement("div", null);
  }
}

var BoxedToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "BoxedToggle__BoxedToggleWrapper",
  componentId: "sc-173bx5f-0"
})(["position:relative;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

var BoxedToggleLabel = _styledComponents["default"].label.withConfig({
  displayName: "BoxedToggle__BoxedToggleLabel",
  componentId: "sc-173bx5f-1"
})(["position:relative;width:64px;height:32px;cursor:pointer;height:32px;box-shadow:0 0 0 1px ", ";border-radius:3px;background:", ";transition:0.2s;&::after{content:\"\";display:block;width:32px;height:32px;border-radius:3px;box-shadow:0 0 0 1px ", ";background:white;-webkit-transition:0.2s;transition:0.2s;position:absolute;", ";}"], function (props) {
  return props.toggleState ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.grayBlue;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.backgroundOff;
}, function (props) {
  return props.toggleState ? props.backgroundOn : props.border;
}, function (props) {
  return !props.toggleState ? "left: 0" : "right: 0";
});

var BoxedToggleInput = _styledComponents["default"].input.withConfig({
  displayName: "BoxedToggle__BoxedToggleInput",
  componentId: "sc-173bx5f-2"
})(["opacity:0;z-index:1;width:64px;height:32px;transition:0.2s;&:checked{", " transition:0.2s;&::after{content:\"\";display:block;width:32px;height:32px;margin-left:34px;left:0px;transition:0.2s;}}"], function (props) {
  return console.log("props", props.checked);
});