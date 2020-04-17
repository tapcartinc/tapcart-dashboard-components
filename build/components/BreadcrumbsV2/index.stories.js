"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _Icon = require("../../elements/Icon");

var _BreadcrumbItemV = _interopRequireDefault(require("../BreadcrumbItemV2"));

var _Typography = require("../../elements/Typography");

require("./story-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Examples|Components/BreadcrumbsV2", module) // .addParameters({
//   component: BreadcrumbsV2,
//   parameters: { docs: { page: null } }
// })
.add("Basic", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "design",
    iconLeft: true
  }), "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, "crumbies")));
}).add("with default active prop", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], {
    active: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "popup",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], {
    active: false
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "integrations",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "upgrade",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase"
  }, "crumbies"))));
}).add("with class props", function (props) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    className: "breadcrumbs"
  }, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], {
    className: "breadcrumbs__crumb active"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "popup",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], {
    className: "breadcrumbs__crumb"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "integrations",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], {
    className: "breadcrumbs__crumb"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "upgrade",
    iconLeft: true,
    fill: "#ffffff"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    fontSize: "14px",
    textTransform: "lowercase",
    color: "#ffffff"
  }, "crumbies"))));
});