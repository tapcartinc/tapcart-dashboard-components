"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _BreadcrumbItemV = _interopRequireDefault(require("../BreadcrumbItemV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Examples|Components/BreadcrumbsV2", module).addParameters({
  component: _index["default"]
}).add("Basic", function (props) {
  console.log("props", props);
  return /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, "crumbies")), /*#__PURE__*/_react["default"].createElement(_BreadcrumbItemV["default"], null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, "crumbies")));
});