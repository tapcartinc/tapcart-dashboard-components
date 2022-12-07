"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickDropdown = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../elements/Icon");
var _variables = require("../utils/_variables");
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _Typography = require("../elements/Typography");
var _dashVariables = require("../utils/_dashVariables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
  var handleOpen = function handleOpen(e) {
    e.stopPropagation();
    return setOpen(!open);
  };
  var handleItemClick = function handleItemClick(e, onClick) {
    e.stopPropagation();
    return onClick();
  };
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  return /*#__PURE__*/_react["default"].createElement(DDWrapper, {
    ref: node,
    position: position,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(DropdownHeader, _extends({}, props, {
    onClick: function onClick(e) {
      return handleOpen(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "dot-dot-dot",
    style: {
      transform: "rotate(90deg)",
      zIndex: 100,
      marginLeft: 14
    },
    fill: "darkgray"
  })), open && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(ClickableDropdown, _extends({}, props, {
    position: position
  }), options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(ClickableDropdownItem, {
      onClick: function onClick(e) {
        return handleItemClick(e, option.onClick);
      },
      key: option.title,
      lastItem: index === options.length - 1
    }, option.icon && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: option.icon
    }), /*#__PURE__*/_react["default"].createElement(_Typography.Body, {
      style: {
        marginLeft: 8
      }
    }, option.title));
  })))));
};
exports.ClickDropdown = ClickDropdown;
var DDWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ClickDropdown__DDWrapper",
  componentId: "sc-18q6bvz-0"
})(["position:relative;z-index:100;", ";", ";z-index:100;", ";"], function (props) {
  return props.position === "right" && "\n  position: absolute;\n  right: 10px";
}, function (props) {
  return props.position === "left" && "\n  position: absolute;\n  left: 10px";
}, function (props) {
  return props.style ? props.style : null;
});
var ClickableDropdown = _styledComponents["default"].ul.withConfig({
  displayName: "ClickDropdown__ClickableDropdown",
  componentId: "sc-18q6bvz-1"
})(["margin:0px;border-radius:3px;list-style:none;box-shadow:", ";", ";position:absolute;padding:0px;z-index:1;background:white;width:218px;", " ", " ", ";"], _variables.boxShadow.medium, _variables.sofia.sofiaRegular, function (props) {
  return props.position === "right" && "right: 0;";
}, function (props) {
  return props.position === "left" && "left: 0;";
}, function (props) {
  return props.style ? props.style : null;
});
var ClickableDropdownItem = _styledComponents["default"].li.withConfig({
  displayName: "ClickDropdown__ClickableDropdownItem",
  componentId: "sc-18q6bvz-2"
})(["font-size:15px;background:white;border-bottom:1px solid ", ";", " display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:10px 17px;&:hover{cursor:pointer;background:", ";}", ";"], _dashVariables.colorPicker.lightGray, function (props) {
  return props.lastItem && "border-bottom: none;";
}, _variables.colors.gray10, function (props) {
  return props.style ? props.style : null;
});
var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "ClickDropdown__DropdownHeader",
  componentId: "sc-18q6bvz-3"
})(["width:37px;height:100%;z-index:100;&:hover{cursor:pointer;}", ";"], function (props) {
  return props.style ? props.style : null;
});
ClickDropdown.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    onClick: _propTypes["default"].func,
    icon: _propTypes["default"].string
  })).isRequired,
  /**
   * options: "right" | "left"
   */
  position: _propTypes["default"].string.isRequired
};
ClickDropdown.defaultProps = {};