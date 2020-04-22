"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = Toggle;

var _react = _interopRequireDefault(require("react"));

var _dashVariables = require("../../utils/_dashVariables");

var _Icon = require("../../elements/Icon");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moon = require("./icons/moon");

var _sun = require("./icons/sun");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Toggle(props) {
  switch (props.type) {
    case "timeOfDay":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleWrapper, _extends({
        border: _dashVariables.colorPicker.blue,
        backgroundOn: _dashVariables.colorPicker.yellow,
        backgroundOff: _dashVariables.colorPicker.blue
      }, props), /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleInput, _extends({
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
        autoComplete: "new-password"
      }, props)), /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleLabel, _extends({
        border: _dashVariables.colorPicker.blue,
        backgroundOn: _dashVariables.colorPicker.yellow,
        backgroundOff: _dashVariables.colorPicker.blue,
        htmlFor: props.name,
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_sun.SunIcon, {
        type: "checkmark-small",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : "white"
      }), /*#__PURE__*/_react["default"].createElement(_moon.MoonIcon, {
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : _dashVariables.colorPicker.gray
      })));

    case "platforms":
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleWrapper, {
        border: _dashVariables.colorPicker.androidGreen,
        backgroundOn: _dashVariables.colorPicker.black,
        backgroundOff: _dashVariables.colorPicker.androidGreen
      }, /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleInput, _extends({
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
        autoComplete: "new-password"
      }, props)), /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleLabel, _extends({
        border: _dashVariables.colorPicker.androidGreen,
        backgroundOn: _dashVariables.colorPicker.black,
        backgroundOff: _dashVariables.colorPicker.androidGreen,
        htmlFor: props.name
      }, props), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
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
      }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
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

    case "basic":
    default:
      return /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleWrapper, _extends({
        border: _dashVariables.colorPicker.grayBlue,
        backgroundOn: _dashVariables.colorPicker.green100,
        backgroundOff: _dashVariables.colorPicker.offWhite
      }, props), /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleInput, _extends({
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
        autoComplete: "new-password"
      }, props)), /*#__PURE__*/_react["default"].createElement(_styles.StyledToggleLabel, _extends({
        border: _dashVariables.colorPicker.grayBlue,
        backgroundOn: _dashVariables.colorPicker.green100,
        backgroundOff: _dashVariables.colorPicker.offWhite,
        htmlFor: props.name
      }, props), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
        type: "checkmark-small",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "white" : "transparent",
        style: {
          position: "absolute",
          zIndex: 1,
          left: 10,
          marginTop: 12
        }
      }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
        type: "small-close",
        onClick: function onClick() {
          return props.onChange(!props.toggleState);
        },
        fill: props.toggleState ? "transparent" : _dashVariables.colorPicker.gray,
        style: {
          position: "absolute",
          zIndex: 1,
          right: 11,
          marginTop: 12
        }
      })));
  }
}

Toggle.propTypes = {
  /**
   * options: "basic" | "timeOfDay" | "platforms"
   */
  type: _propTypes["default"].string,
  id: _propTypes["default"].string,

  /**
   * Contains boolean value for toggle being switched on or off
   */
  toggleState: _propTypes["default"].bool.isRequired,

  /**
   * Pass the function that sets the state for the toggle switch for the current toggle here
   */
  onChange: _propTypes["default"].func
};
Toggle.defaultProps = {
  type: "basic"
};