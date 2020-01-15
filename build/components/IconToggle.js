"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconToggle = IconToggle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _Icon = require("../elements/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function IconToggle(props) {
  return _react["default"].createElement(IconToggleWrapper, _extends({
    style: {
      margin: 5
    }
  }, props), _react["default"].createElement(IconToggleInput, {
    type: "checkbox",
    id: props.name,
    checked: props.value,
    onChange: props.onToggle,
    name: props.name,
    style: {
      position: "absolute"
    }
  }), _react["default"].createElement(IconToggleLabel, _extends({
    htmlFor: props.name
  }, props), _react["default"].createElement(_Icon.Icon, {
    type: props.icons[0],
    fill: props.value ? "darkgray" : "white",
    style: {
      position: "absolute",
      zIndex: 1,
      width: "30px",
      height: "30px",
      padding: "4px"
    }
  }), _react["default"].createElement(_Icon.Icon, {
    type: props.icons[1],
    fill: props.value ? "white" : "darkgray",
    style: {
      position: "absolute",
      zIndex: 1,
      width: "30px",
      height: "30px",
      padding: "4px",
      right: 1
    }
  })));
}

var IconToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "IconToggle__IconToggleWrapper",
  componentId: "sc-3p3d84-0"
})(["position:relative;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

var IconToggleLabel = _styledComponents["default"].label.withConfig({
  displayName: "IconToggle__IconToggleLabel",
  componentId: "sc-3p3d84-1"
})(["position:relative;top:0;left:0;width:73px;height:38px;border-radius:25px;background:", ";cursor:pointer;border:4px solid ", ";&::after{content:\"\";display:block;border-radius:50%;width:30px;height:30px;transform:scale(1.3);background:", ";border:3px solid #3a3cb4;box-shadow:1px 3px 3px 1px rgba(0,0,0,0.08);-webkit-transition:0.2s;transition:0.2s;position:absolute;}"], function (props) {
  return props.value ? _variables.colors.blue : _variables.colors.gray25;
}, _variables.colors.gray25, _variables.colors.blue);

var IconToggleInput = _styledComponents["default"].input.withConfig({
  displayName: "IconToggle__IconToggleInput",
  componentId: "sc-3p3d84-2"
})(["opacity:0;z-index:1;border-radius:15px;width:50px;height:30px;&:checked + ", "{background-color:", ";&::after{content:\"\";display:block;border-radius:50%;width:30px;height:30px;transform:scale(1.3);border:3px solid ", ";margin-left:34px;transition:0.2s;background-color:", ";}}"], IconToggleLabel, _variables.colors.gray25, _variables.colors.blue, _variables.colors.blue);