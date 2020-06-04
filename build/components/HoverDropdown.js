"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverDropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../utils/_dashVariables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HoverDropdown = function HoverDropdown(_ref) {
  var options = _ref.options,
      title = _ref.title,
      children = _ref.children;
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

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return _react["default"].createElement("div", {
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }, _react["default"].createElement(DropdownHeader, props, children), _react["default"].createElement(ClickableDropdownWrapper, _extends({}, props, {
    open: open
  }), _react["default"].createElement(ClickableDropdown, _extends({}, props, {
    open: open
  }), options.map(function (option, index) {
    return _react["default"].createElement(ClickableDropdownItem, {
      active: option.active,
      onClick: option.onClick,
      key: option.title,
      lastOption: index === options.length - 1,
      firstOption: index === 0
    }, option.title);
  }))));
};

exports.HoverDropdown = HoverDropdown;

var ClickableDropdownWrapper = _styledComponents["default"].div.withConfig({
  displayName: "HoverDropdown__ClickableDropdownWrapper",
  componentId: "bxg8ff-0"
})(["margin:0px;list-style:none;width:150px;padding:0px;position:absolute;z-index:1;visibility:hidden;margin-top:-20px;opacity:0;transition:all 0.2s ease-in-out;", ";", " ", " ", ";"], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.open && "visibility: visible; opacity: 1; margin-top: 0px;";
}, _dashVariables.sofiaPro.medium, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "HoverDropdown__ClickableDropdown",
  componentId: "bxg8ff-1"
})(["margin:0px;list-style:none;width:100%;padding:0px;background:white;margin-top:8px;box-shadow:0 0 8px 0 rgba(0,0,0,0.08);", " ", ";"], _dashVariables.sofiaPro.medium, function (props) {
  return props.style ? props.style : null;
});

var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "HoverDropdown__ClickableDropdownItem",
  componentId: "bxg8ff-2"
})(["font-size:13px;background:white;display:flex;flex-direction:row;align-items:center;width:100% max-width:150px;padding:15px 17px;&:hover{cursor:pointer;}", ";", ";", ";", ";"], function (props) {
  return props.firstOption && "margin-top: 10px";
}, function (props) {
  return props.active ? "color: ".concat(_dashVariables.colorPicker.blue) : "color: ".concat(_dashVariables.colorPicker.gray);
}, function (props) {
  return props.lastOption ? "border-bottom: 1px solid transparent" : "border-bottom: 1px solid ".concat(_dashVariables.colorPicker.gray25);
}, function (props) {
  return props.style ? props.style : null;
});

var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "HoverDropdown__DropdownHeader",
  componentId: "bxg8ff-3"
})(["&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
}); // const DDCircle = styled.div`
//   background: transparent;
//   box-shadow: inset 0px 0px 0px 1px ${colorPicker.blue};
//   height: 10px;
//   width: 10px;
//   border-radius: 50px;
//   margin-right: 15px;
//   ${ClickableDropdownItem}:hover & {
//     background: ${colors.blue};
//     box-shadow: none;
//   }
//   ${props => (props.style ? props.style : null)};
// `;


HoverDropdown.propTypes = {
  options: _propTypes["default"].array.isRequired,
  title: _propTypes["default"].string
};
HoverDropdown.defaultProps = {};