"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _dashVariables = require("../../utils/_dashVariables");

var _ContainerBox = require("../../layout/ContainerBox");

var _react2 = require("@storybook/react");

var _PopoutItem = _interopRequireDefault(require("./PopoutItem"));

var _PopoutOptions = _interopRequireDefault(require("./PopoutOptions"));

var _addonKnobs = require("@storybook/addon-knobs");

var _PopoutOption = require("./PopoutOption");

var _Toggle = require("../Toggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _react2.storiesOf)("Examples|Components/PopoutContainer", module).add("Basic", function () {
  var _useState = (0, _react.useState)(_dashVariables.colorPicker.blue),
      _useState2 = _slicedToArray(_useState, 2),
      colorState = _useState2[0],
      setColorState = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    direction: "right"
  }, /*#__PURE__*/_react["default"].createElement(_PopoutItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ContainerBox.ContainerBox, {
    customHeight: 200,
    customWidth: 300,
    customWidthMd: 100,
    bg: colorState
  })), /*#__PURE__*/_react["default"].createElement(_PopoutOptions["default"], null, /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    id: 1,
    onClick: function onClick() {
      return console.log("edit");
    },
    icon: "edit",
    label: "edit"
  }), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    id: 2,
    onClick: function onClick() {
      return console.log("edit");
    },
    icon: "edit",
    label: "edit"
  })));
}).add("Left direction", function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginLeft: 200
    }
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    direction: "left"
  }, /*#__PURE__*/_react["default"].createElement(_PopoutItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ContainerBox.ContainerBox, {
    customHeight: 200,
    customWidth: 300,
    customWidthMd: 100,
    bg: _dashVariables.colorPicker.blue
  })), /*#__PURE__*/_react["default"].createElement(_PopoutOptions["default"], null, /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    id: 1,
    onClick: function onClick() {
      return console.log("edit");
    },
    icon: "edit",
    label: "edit"
  }), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    id: 2,
    onClick: function onClick() {
      return console.log("edit");
    },
    icon: "edit",
    label: "edit"
  }))));
}).add("With functional components inside items", function () {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      toggle = _React$useState2[0],
      setToggle = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    direction: "right"
  }, /*#__PURE__*/_react["default"].createElement(_PopoutItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ContainerBox.ContainerBox, {
    customHeight: 200,
    customWidth: 300,
    customWidthMd: 100,
    bg: _dashVariables.colorPicker.blue
  })), /*#__PURE__*/_react["default"].createElement(_PopoutOptions["default"], null, /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    onClick: function onClick() {
      return console.log("edit title");
    },
    icon: "edit",
    label: "edit title"
  }), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    icon: "text-icon",
    label: "title"
  }, /*#__PURE__*/_react["default"].createElement(_Toggle.Toggle, {
    type: "basic",
    id: "toggle",
    toggleState: toggle,
    onChange: function onChange() {
      return setToggle(!toggle);
    }
  })), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    onClick: function onClick() {
      return console.log("upload banner");
    },
    icon: "images",
    label: "upload banner"
  }), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    onClick: function onClick() {
      return console.log("remove banner");
    },
    icon: "images",
    label: "remove banner"
  }), /*#__PURE__*/_react["default"].createElement(_PopoutOption.PopoutOptionV2, {
    onClick: function onClick() {
      return console.log("delete");
    },
    icon: "trash",
    label: "delete"
  })));
});