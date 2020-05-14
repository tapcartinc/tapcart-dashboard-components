"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _react2 = require("@storybook/react");

var _swatches = require("../../utils/_swatches");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = require("../../components/Button");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledLoaderContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__StyledLoaderContainer",
  componentId: "sc-1r9nv0q-0"
})(["display:flex;align-items:center;height:600px;justify-content:space-around;flex-direction:column;", ""], function (props) {
  return props.fill && "height: 300px;\n    width: 300px;\n    background: ".concat(_swatches.swatches.blue, ";\n  border-radius: 3px;");
});

(0, _react2.storiesOf)("Design Guidelines/Loader", module).add("Basic", function () {
  var label = "Loading colors";
  var options = [{
    fg: _swatches.swatches.blue,
    bg: "white"
  }, {
    fg: _swatches.swatches.green,
    bg: "white"
  }, {
    fg: _swatches.swatches.grayBlue,
    bg: "white"
  }];
  var defaultValue = {
    fg: _swatches.swatches.blue,
    bg: "white"
  };
  var loaderColor = (0, _addonKnobs.select)(label, options, defaultValue);
  return /*#__PURE__*/_react["default"].createElement(_index.Loader, {
    loaderColors: loaderColor,
    size: (0, _addonKnobs.number)("size", 25)
  });
}).addDecorator(_addonKnobs.withKnobs).add("inside of button", function () {
  return /*#__PURE__*/_react["default"].createElement(StyledLoaderContainer, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    isLoading: (0, _addonKnobs["boolean"])("isLoading", true),
    color: "blue"
  }, "Button w loader"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    isLoading: (0, _addonKnobs["boolean"])("isLoading", true),
    color: "green",
    plainText: true
  }, "plainText button"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    isLoading: (0, _addonKnobs["boolean"])("isLoading", true),
    color: "red",
    invert: true
  }, "Button w loader"));
}).add("with background color on parent div", function () {
  return /*#__PURE__*/_react["default"].createElement(StyledLoaderContainer, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_index.Loader, {
    loaderColors: {
      fg: "white",
      bg: _swatches.swatches.blue
    },
    parentBgColor: _swatches.swatches.blue
  }));
}).addDecorator(_addonKnobs.withKnobs);