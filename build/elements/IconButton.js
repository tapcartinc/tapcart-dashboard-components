"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../elements/Icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _animations = require("../utils/_animations");

var _functions = require("../utils/_functions");

var _variables = require("../utils/_variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = function IconButton(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return /*#__PURE__*/_react["default"].createElement(IconButtonStyle, props, props.children, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: props.type,
    fill: "white",
    height: "24px",
    width: "24px"
  }));
};

exports.IconButton = IconButton;

var Button = _styledComponents["default"].button.withConfig({
  displayName: "IconButton__Button",
  componentId: "sc-1ungl9q-0"
})(["border-radius:3px;border:none;font-size:15px;display:flex;flex-direction:row;align-items:center;justify-items:center;outline:none;", " &:hover{cursor:pointer;", "}", ""], _animations.transition, _animations.hover, function (props) {
  return props.style ? props.style : null;
});

var IconButtonStyle = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "IconButton__IconButtonStyle",
  componentId: "sc-1ungl9q-1"
})(["background:", ";display:flex;align-items:center;padding:5px;height:35px;width:35px;color:#ffffff;", ""], function (props) {
  return props.color ? (0, _functions.getColors)(props.color) : _variables.colors.blue;
}, function (props) {
  return props.style ? props.style : null;
});