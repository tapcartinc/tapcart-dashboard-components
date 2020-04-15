"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditContainerDropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dashVariables = require("../../utils/_dashVariables");

var _Icon = require("../../elements/Icon");

var _variables = require("../../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditContainerDropdown = function EditContainerDropdown(_ref) {
  var options = _ref.options,
      icon = _ref.icon,
      children = _ref.children,
      hoverBorder = _ref.hoverBorder,
      props = _objectWithoutProperties(_ref, ["options", "icon", "children", "hoverBorder"]);

  var hoverNode = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  (0, _react.useEffect)(function () {
    document.addEventListener("mouseover", handleHover);
    return function () {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  var handleHover = function handleHover(e) {
    if (hoverNode.current && hoverNode.current.contains(e.target)) {
      return;
    }
  };

  return /*#__PURE__*/_react["default"].createElement(StyledDropdownWrapper, {
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledChild, _extends({}, props, {
    open: open,
    hoverBorder: hoverBorder
  }), children), /*#__PURE__*/_react["default"].createElement(ClickableDropdown, _extends({}, props, {
    open: open
  }), options.map(function (option, idx) {
    return /*#__PURE__*/_react["default"].createElement(ClickableDropdownItem, {
      onClick: option.onClick,
      key: option.title,
      lastOption: idx === options.length - 1
    }, option.icon && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: option.icon,
      fill: _dashVariables.colorPicker.blue
    }), option.title);
  })));
};

exports.EditContainerDropdown = EditContainerDropdown;

var StyledDropdownWrapper = _styledComponents["default"].div.withConfig({
  displayName: "EditContainerDropdown__StyledDropdownWrapper",
  componentId: "sc-1j6xycl-0"
})(["display:inline-block;width:auto;height:auto;position:relative;"]);

var StyledChild = _styledComponents["default"].div.withConfig({
  displayName: "EditContainerDropdown__StyledChild",
  componentId: "sc-1j6xycl-1"
})(["position:relative;z-index:5;", ""], function (props) {
  return props.open && props.hoverBorder ? "box-shadow:  0 0 0  2px ".concat(_dashVariables.colorPicker.blue, "; border-radius: 3px;") : "box-shadow: 0 0 0 2px transparent; border-radius: 3px;";
});

var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "EditContainerDropdown__ClickableDropdown",
  componentId: "sc-1j6xycl-2"
})(["margin:0px;list-style:none;background:white;width:200px;", ";padding:0px;color:", ";box-shadow:", ";position:absolute;letter-spacing:0.25px;z-index:1;", " ", " ", " transition:all 0.1s ease-in-out;", ";"], _dashVariables.circularStd.book, _dashVariables.colorPicker.black, _variables.boxShadow.medium, function (props) {
  return props.open ? "margin-top: 0px;" : "margin-top: -10px;";
}, function (props) {
  return props.open ? "opacity: 1;" : "opacity: 0;";
}, function (props) {
  return props.open ? "visibility: visible;" : "visibility: hidden;";
}, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "EditContainerDropdown__ClickableDropdownItem",
  componentId: "sc-1j6xycl-3"
})(["padding:10px;font-size:14px;display:flex;flex-direction:row;align-items:center;transition:all 0.1s ease-in-out;", ";color:", ";padding:18px 14px;&:hover{cursor:pointer;transition:all 0.1s ease-in-out;color:", ";}", ";", ";"], _dashVariables.circularStd.book, _dashVariables.colorPicker.black, _dashVariables.colorPicker.blue, function (props) {
  return !props.lastOption && "border-bottom: 1px solid ".concat(_dashVariables.colorPicker.lightGray);
}, function (props) {
  return props.style ? props.style : null;
});

EditContainerDropdown.propTypes = {
  options: _propTypes["default"].array.isRequired,
  icon: _propTypes["default"].string
};
EditContainerDropdown.defaultProps = {}; // ${props =>
//   props.open && props.hoverBorder
//     ? `box-shadow:  0 0 0  2px ${colorPicker.blue}; border-radius: 3px;`
//     : `box-shadow: 0 0 0 2px transparent; border-radius: 3px;`}