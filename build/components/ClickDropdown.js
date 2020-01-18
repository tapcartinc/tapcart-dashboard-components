"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickDropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ClickDropdown = function ClickDropdown(_ref) {
  var options = _ref.options,
      position = _ref.position,
      style = _ref.style;
  var node = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  (0, _react.useEffect)(function () {
    document.addEventListener("mousedown", handleClick);
    return function () {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  var handleClick = function handleClick(e) {
    if (node.current && node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return _react["default"].createElement(DDWrapper, {
    ref: node,
    position: position,
    style: style
  }, _react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, _react["default"].createElement(DropdownHeader, _extends({}, props, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }), _react["default"].createElement(_Icon.Icon, {
    type: "dot-dot-dot",
    style: {
      transform: "rotate(90deg)"
    },
    fill: "darkgray"
  })), open && _react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, _react["default"].createElement(ClickableDropdown, props, options.map(function (option) {
    return _react["default"].createElement(ClickableDropdownItem, {
      onClick: option.onClick,
      key: option.title
    }, option.title);
  })))));
};

exports.ClickDropdown = ClickDropdown;

var DDWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ClickDropdown__DDWrapper",
  componentId: "p308ch-0"
})(["position:relative;", ";", ";z-index:100;", ";"], function (props) {
  return props.position === "right" && "\n  position: absolute;\n  right: 30px";
}, function (props) {
  return props.position === "left" && "\n  position: absolute;\n  left: 30px";
}, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "ClickDropdown__ClickableDropdown",
  componentId: "p308ch-1"
})(["", " margin:0px;list-style:none;width:150px;", ";position:absolute;padding:0px;z-index:1;background:white;", ";"], _variables.inputBorder, _variables.sofia.sofiaRegular, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "ClickDropdown__ClickableDropdownItem",
  componentId: "p308ch-2"
})(["padding:5px;font-size:15px;background:white;&:hover{cursor:pointer;background:", ";}", ";"], _variables.colors.gray10, function (props) {
  return props.style ? props.style : null;
});

var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "ClickDropdown__DropdownHeader",
  componentId: "p308ch-3"
})(["margin-left:10px;&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
});

ClickDropdown.propTypes = {
  options: _propTypes["default"].array.isRequired
};
ClickDropdown.defaultProps = {};