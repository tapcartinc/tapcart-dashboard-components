"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionBoxes = OptionBoxes;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

var _dashVariables = require("../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OptionBoxes(props) {
  var options = props.options,
      clickOption = props.clickOption,
      selectedOption = props.selectedOption;
  return _react["default"].createElement(OptionBoxesWrapper, props, options.map(function (option) {
    return _react["default"].createElement(Option, _extends({}, props, {
      selectedOption: selectedOption,
      currentOption: option.value,
      key: option.value,
      onClick: function onClick() {
        return clickOption(option);
      },
      optionCount: options.length
    }), _react["default"].createElement(_Icon.Icon, {
      type: option.icon,
      style: {
        marginBottom: 10
      }
    }), option.label);
  }));
}

var OptionBoxesWrapper = _styledComponents["default"].ul.withConfig({
  displayName: "OptionBoxes__OptionBoxesWrapper",
  componentId: "glmpcy-0"
})(["display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;", " font-size:15px;text-transform:capitalize;border-radius:4px;", ";"], _dashVariables.sofiaPro.regular, function (props) {
  return props.style ? props.style : null;
});

var Option = _styledComponents["default"].li.withConfig({
  displayName: "OptionBoxes__Option",
  componentId: "glmpcy-1"
})(["height:100px;width:", ";font-size:15px;box-shadow:0px 0px 0px 1px ", ";display:flex;flex-direction:column;background:", ";justify-items:center;align-items:center;justify-content:center;color:", ";&:hover{cursor:pointer;}"], function (props) {
  return props.size ? props.size : "33.333%";
}, _variables.colors.gray25, function (props) {
  return props.selectedOption && props.selectedOption.value === props.currentOption ? _dashVariables.colorPicker.lightBlue : "transparent";
}, _variables.colors.black);