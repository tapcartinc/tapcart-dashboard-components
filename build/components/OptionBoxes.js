"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionBoxes = OptionBoxes;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _dashVariables = require("../utils/_dashVariables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OptionBoxes(props) {
  var options = props.options,
      clickOption = props.clickOption,
      selectedOption = props.selectedOption,
      selectedOptions = props.selectedOptions;
  var currSelectedSingleOption = selectedOption;
  return /*#__PURE__*/_react["default"].createElement(OptionBoxesWrapper, props, options.map(function (option, index) {
    var included = selectedOptions && selectedOptions.filter(function (currOption) {
      return currOption.value === option.value;
    });
    return /*#__PURE__*/_react["default"].createElement(Option, _extends({}, props, {
      first: index === 0,
      last: index === options.length - 1,
      selectedOption: currSelectedSingleOption && currSelectedSingleOption.value === option.value,
      included: included,
      currentOption: option.value,
      key: option.value,
      onClick: function onClick() {
        return clickOption(option);
      },
      optionCount: options.length
    }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
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
})(["height:100px;width:", ";font-size:15px;margin-right:-1px;border:1px solid ", ";display:flex;flex-direction:column;background:white;", ";", ";justify-items:center;align-items:center;justify-content:center;color:", ";", ";", ";&:hover{cursor:pointer;}"], function (props) {
  return props.size ? props.size : "33.333%";
}, _dashVariables.colorPicker.border2, function (props) {
  return props.selectedOption && "background: ".concat(_dashVariables.colorPicker.lightBlue);
}, function (props) {
  return props.included && props.included.length && props.included[0].value === props.currentOption && "background: ".concat(_dashVariables.colorPicker.lightBlue);
}, _variables.colors.black, function (props) {
  return props.first && "border-radius: 3px 0px 0px 3px";
}, function (props) {
  return props.last && "border-radius: 0px 3px 3px 0px";
});

OptionBoxes.propTypes = {
  size: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    value: _propTypes["default"].string
  })),
  clickOption: _propTypes["default"].func,
  selectedOption: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    value: _propTypes["default"].string
  }),
  selectedOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    value: _propTypes["default"].string
  }))
};
OptionBoxes.defaultProps = {};