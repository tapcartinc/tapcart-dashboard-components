"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverDropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HoverDropdown = function HoverDropdown(_ref) {
  var options = _ref.options,
      title = _ref.title;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

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

  return _react["default"].createElement("div", {
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    },
    style: {
      width: 150,
      position: "relative"
    }
  }, _react["default"].createElement(DropdownHeader, props, title), open && _react["default"].createElement(ClickableDropdown, props, options.map(function (option) {
    return _react["default"].createElement(ClickableDropdownItem, {
      onClick: option.onClick,
      key: option.title
    }, _react["default"].createElement(DDCircle, props), option.title);
  })));
};

exports.HoverDropdown = HoverDropdown;

var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "HoverDropdown__ClickableDropdown",
  componentId: "sc-1a8mo2v-0"
})(["margin:0px;list-style:none;background:white;width:150px;", ";padding:0px;color:", ";box-shadow:0 0 8px 0 rgba(0,0,0,0.08);position:absolute;z-index:1;", ";"], _variables.sofia.sofiaMedium, _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "HoverDropdown__ClickableDropdownItem",
  componentId: "sc-1a8mo2v-1"
})(["padding:10px;font-size:18px;text-transform:uppercase;&:hover{cursor:pointer;}display:flex;flex-direction:row;align-items:center;max-width:150px;", ";"], function (props) {
  return props.style ? props.style : null;
});

var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "HoverDropdown__DropdownHeader",
  componentId: "sc-1a8mo2v-2"
})(["padding:10px;width:100px;", ";font-size:20px;color:", ";&:hover{cursor:pointer;}text-transform:uppercase;", ";"], _variables.sofia.sofiaMedium, _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

var DDCircle = _styledComponents["default"].div.withConfig({
  displayName: "HoverDropdown__DDCircle",
  componentId: "sc-1a8mo2v-3"
})(["background:transparent;box-shadow:inset 0px 0px 0px 1px ", ";height:10px;width:10px;border-radius:50px;margin-right:15px;", ":hover &{background:", ";box-shadow:none;}", ";"], _variables.colors.blue, ClickableDropdownItem, _variables.colors.blue, function (props) {
  return props.style ? props.style : null;
});

HoverDropdown.propTypes = {
  options: _propTypes["default"].array.isRequired,
  title: _propTypes["default"].string.isRequired
};
HoverDropdown.defaultProps = {};