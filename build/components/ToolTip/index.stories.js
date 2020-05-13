"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)("Tooltip", module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add("with a button", function () {
  var style = {
    backgroundColor: "#FFF",
    border: "1px solid #DDD",
    borderRadius: 2,
    outline: 0,
    fontSize: 15,
    cursor: "pointer"
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    disabled: (0, _addonKnobs["boolean"])("Disabled", true),
    style: (0, _addonKnobs.object)("Style", style)
  }, (0, _addonKnobs.text)("Label", "Hello Button"));
});