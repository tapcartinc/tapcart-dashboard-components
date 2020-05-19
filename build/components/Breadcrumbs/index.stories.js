"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("./index");

var _Icon = require("../../elements/Icon");

var _BreadcrumbItem = require("./BreadcrumbItem");

var _TypographyOld = require("../../elements/TypographyOld");

require("./story-styles.scss");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Examples|Components/Breadcrumbs", module).add("Basic", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index.Breadcrumbs, null, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "design",
    iconLeft: true
  }), "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, "crumbies")));
}).add("with default active prop", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index.Breadcrumbs, null, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, {
    active: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "popup",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, {
    active: false
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "integrations",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "upgrade",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))));
}).add("with class props", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index.Breadcrumbs, {
    className: "breadcrumbs"
  }, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, {
    className: "breadcrumbs__crumb active"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "popup",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, {
    className: "breadcrumbs__crumb"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "integrations",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbItem, {
    className: "breadcrumbs__crumb"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "upgrade",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_TypographyOld.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))));
});