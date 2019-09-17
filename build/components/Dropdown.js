"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _functions = require("../utils/_functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["options", "title"]);

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

  return _react["default"].createElement("div", _extends({}, props, {
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }), props.children, open && options && _react["default"].createElement("ul", _extends({
    open: open
  }, props), options.map(function (option) {
    return _react["default"].createElement("li", {
      onClick: option.onClick,
      key: option.title
    }, _react["default"].createElement(DDCircle, null), option.title);
  })));
};

exports.Dropdown = Dropdown;

var HoverDD = _styledComponents["default"].ul.withConfig({
  displayName: "Dropdown__HoverDD",
  componentId: "sc-18wceag-0"
})(["list-style:none;", ";padding:0px;margin:0px;color:", ";position:absolute;z-index:1;", ";"], _variables.sofia.sofiaRegular, function (props) {
  if (props.color) {
    return (0, _functions.getColors)(props.color);
  } else {
    return _variables.colors.blue;
  }
}, function (props) {
  return props.style ? props.style : null;
});

var HoverDDItem = _styledComponents["default"].li.withConfig({
  displayName: "Dropdown__HoverDDItem",
  componentId: "sc-18wceag-1"
})(["&:hover{cursor:pointer;}display:flex;flex-direction:row;align-items:center;"]);

var DDCircle = _styledComponents["default"].div.withConfig({
  displayName: "Dropdown__DDCircle",
  componentId: "sc-18wceag-2"
})(["background:transparent;box-shadow:inset 0px 0px 0px 1px ", ";height:10px;width:10px;border-radius:50px;margin-right:15px;", ":hover &{background:", ";box-shadow:none;}"], _variables.colors.blue, HoverDDItem, _variables.colors.blue);