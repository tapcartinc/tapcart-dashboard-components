"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectDropdown = SelectDropdown;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

var _Typography = require("../elements/Typography");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SelectDropdown(props) {
  var _customStyles;

  var DropdownIndicator = function DropdownIndicator(props) {
    return _reactSelect.components.DropdownIndicator && /*#__PURE__*/_react["default"].createElement(_reactSelect.components.DropdownIndicator, props, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      type: "arrow-down",
      fill: "darkgray",
      style: props.selectProps.menuIsOpen ? {
        transform: "rotate(180deg)",
        transition: ".2s ease-in-out"
      } : {
        transform: "rotate(0deg)",
        transition: ".2s ease-in-out"
      }
    }));
  };

  var sofiaRegular = _variables.sofia.sofiaRegular;
  var customStyles = (_customStyles = {
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        sofiaRegular: sofiaRegular,
        "&:hover": {
          background: _variables.colors.lightgray,
          transition: ".2s all",
          cursor: "pointer"
        },
        color: _variables.colors.black,
        backgroundColor: state.isSelected ? _variables.colors.lightgray : _variables.colors.offwhite
      });
    },
    menu: function menu(provided, state) {
      return _objectSpread(_objectSpread(_objectSpread({}, provided), _Typography.input), {}, {
        boxShadow: "0px transparent !important"
      });
    },
    menuList: function menuList(provided, state) {
      var transition = "opacity 300ms";
      return _objectSpread(_objectSpread(_objectSpread({}, provided), _variables.inputBorder), {}, {
        transition: transition,
        padding: 0,
        boxShadow: "0px transparent !important"
      });
    },
    placeholder: function placeholder(provided, state) {
      return _objectSpread(_objectSpread({}, provided), _Typography.placeholder);
    },
    valueContainer: function valueContainer(provided, state) {
      return _objectSpread(_objectSpread({}, provided), _Typography.placeholder);
    },
    control: function control(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        borderRadius: "3px",
        backgroundColor: _variables.colors.offwhite,
        borderColor: state.selectProps.menuIsOpen ? _variables.colors.blue : _variables.colors.bluegray,
        borderStyle: "solid",
        borderWidth: "1px",
        outline: "0px !important",
        boxShadow: "none",
        "&:hover": {
          border: "1px solid ".concat(_variables.colors.blue),
          cursor: "pointer",
          hoverWithBorder: _animations.hoverWithBorder,
          transition: ".2s ease"
        }
      });
    }
  }, _defineProperty(_customStyles, "option", function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: isDisabled ? null : isSelected ? _variables.colors.blue : isFocused ? _variables.colors.gray10 : null,
      color: isDisabled ? _variables.colors.gray25 : isSelected ? "white" : _variables.colors.black,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": _objectSpread(_objectSpread({}, styles[":active"]), {}, {
        backgroundColor: !isDisabled && (isSelected ? _variables.colors.blue : _variables.colors.gray50)
      })
    });
  }), _defineProperty(_customStyles, "indicatorSeparator", function indicatorSeparator(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      display: "none"
    });
  }), _customStyles);
  return /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({}, props, {
    components: {
      DropdownIndicator: DropdownIndicator
    },
    styles: customStyles,
    isSearchable: false
  }));
}