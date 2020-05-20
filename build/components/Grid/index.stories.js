"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react2.storiesOf)("Examples|Components/Grid", module).add("Basic Row", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.Grid, {
    id: "grid-example-row"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 1"), /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 2"), /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 3"), /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 4"));
}).add("Basic Column", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.Grid, {
    style: {
      border: '1px solid #ddd'
    },
    id: "grid-example-column",
    type: "column"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 1"), /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 2"), /*#__PURE__*/_react["default"].createElement("div", null, "Grid item 3"));
}).add("Wrapped Rows", function () {
  // create some styles for children
  var itemStyle = {
    background: '#f5f5f5',
    padding: 10,
    boxSizing: 'border-box'
  }; // Create placeholder array of children

  var items = Array.from(Array(6).keys()).map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "item-".concat(i)
    }, i + 1);
  }); // render Grid

  return /*#__PURE__*/_react["default"].createElement(_index.Grid, {
    id: "grid-example-row-wrapped",
    type: "row",
    wrap: true,
    wrapCount: 3,
    margin: 10,
    childStyle: itemStyle
  }, items);
});