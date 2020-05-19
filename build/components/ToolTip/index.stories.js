"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _index = require("./index");

var _swatches = require("../../utils/_swatches");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)("Examples|Components/ToolTip", module).addParameters({
  options: {
    isToolshown: true
  }
});
stories.add("basic", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.ToolTip, null, "This shit is bananas - b a n a n a s.");
}).add("with custom color", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.ToolTip, {
    color: _swatches.swatches.disabledState
  }, "THIS SHIT IS BANANAS - B A N A N A S.");
}).add("with custom message height and top positioning", function () {
  return /*#__PURE__*/_react["default"].createElement(_index.ToolTip, {
    color: _swatches.swatches.disabledState,
    top: "-100px"
  }, "This shit is bananas - b a n a n a s.", /*#__PURE__*/_react["default"].createElement("br", null), "THIS SHIT IS BANANAS - B A N A N A S.", /*#__PURE__*/_react["default"].createElement("br", null), "This shit is bananas - b a n a n a s.", /*#__PURE__*/_react["default"].createElement("br", null), "THIS SHIT IS BANANAS - B A N A N A S.");
});