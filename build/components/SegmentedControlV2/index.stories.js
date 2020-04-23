"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _react2 = require("@storybook/react");

var _Icon = require("../../elements/Icon");

var _addonKnobs = require("@storybook/addon-knobs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _react2.storiesOf)("Examples|Components/SegmentedControlV2", module).add("Basic", function () {
  var _useState = (0, _react.useState)("cat"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var changeSection = function changeSection(selectedTab) {
    if (state === selectedTab) {
      return;
    }

    setState(selectedTab);
  };

  return /*#__PURE__*/_react["default"].createElement(_index.SegmentedControlV2, {
    type: "primary",
    items: {
      cat: "cat",
      dog: "dog",
      mouse: "mouse"
    },
    action: changeSection,
    current: state,
    icons: {
      cat: "blocks",
      dog: "theme",
      mouse: "menu-icon"
    }
  });
}).add("primary", function () {
  var _useState3 = (0, _react.useState)("push"),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var changeSection = function changeSection(selectedTab) {
    if (state === selectedTab) {
      return;
    }

    setState(selectedTab);
  };

  return /*#__PURE__*/_react["default"].createElement(_index.SegmentedControlV2, {
    type: "primary",
    items: {
      push: "push",
      pop: "pop",
      plainText: "plain Text"
    },
    action: changeSection,
    current: state,
    icons: {
      push: "push",
      pop: "popup",
      plainText: "text-icon"
    }
  });
}).add("secondary", function () {
  var _useState5 = (0, _react.useState)("enabled"),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var changeSection = function changeSection(selectedTab) {
    if (state === selectedTab) {
      return;
    }

    setState(selectedTab);
  };

  return /*#__PURE__*/_react["default"].createElement(_index.SegmentedControlV2, {
    type: "secondary",
    items: {
      enabled: "Enabled",
      optional: "Optional",
      required: "Required"
    },
    action: changeSection,
    current: state
  });
}).add("field segmented control", function () {
  var _useState7 = (0, _react.useState)("collection"),
      _useState8 = _slicedToArray(_useState7, 2),
      state = _useState8[0],
      setState = _useState8[1];

  var changeSection = function changeSection(selectedTab) {
    if (state === selectedTab) {
      return;
    }

    setState(selectedTab);
  };

  return /*#__PURE__*/_react["default"].createElement(_index.SegmentedControlV2, {
    type: "field",
    items: {
      collection: "collection",
      webpage: "webpage",
      "static": "static",
      product: "product"
    },
    action: changeSection,
    current: state
  });
});