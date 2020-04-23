"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _reactRouterDom = require("react-router-dom");

var _Button = require("../../elements/Button");

var _Icon = require("../../elements/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react2.storiesOf)("Examples|Components/Link", module).add("Basic", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.Link, {
    element: "a",
    href: "#"
  }, "Link");
}).add("As button", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.Link, {
    href: "#",
    element: "a"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "primary"
  }, "As button"));
}).add("As button with Icon", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.Link, {
    href: "#",
    element: "a"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "primary"
  }, "With Icon ", /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "edit",
    fill: "white",
    iconRight: true
  })));
}).add("As React Router Link", function () {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_index.Link, {
    to: "/",
    element: _reactRouterDom.Link
  }, "Home")))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/"
  }))));
});