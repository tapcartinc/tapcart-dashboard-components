"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickDropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../elements/Icon");

var _swatches = require("../../utils/_swatches");

var _uuid = require("uuid");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ClickDropdown = function ClickDropdown(_ref) {
  var position = _ref.position,
      style = _ref.style,
      children = _ref.children;
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

  return /*#__PURE__*/_react["default"].createElement(_styles.DDWrapper, {
    ref: node,
    position: position,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_styles.DropdownHeader, {
    onClick: function onClick(e) {
      return handleOpen(e);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "dot-dot-dot",
    style: {
      transform: "rotate(90deg)",
      zIndex: 100,
      marginLeft: 14
    },
    fill: _swatches.swatches.gray
  })), open && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_styles.ClickableDropdown, {
    position: position
  }, children && children.length > 0 && children.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_styles.ClickableDropdownItem, {
      onClick: function onClick(e) {
        return handleItemClick(e, option.props.onClick);
      },
      key: (0, _uuid.v4)(),
      lastItem: index === children.length - 1
    }, option.props.children);
  })))));
};

exports.ClickDropdown = ClickDropdown;
ClickDropdown.propTypes = {
  /**
   * options are right and left
   */
  position: _propTypes["default"].string,
  children: _propTypes["default"].node
};