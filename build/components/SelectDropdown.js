"use strict";

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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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