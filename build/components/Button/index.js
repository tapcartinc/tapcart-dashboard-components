"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _swatches = require("../../utils/_swatches");

var _Loader = require("../../elements/Loader");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var getLoaderColors = function getLoaderColors() {
    function getFillColor(color) {
      switch (color) {
        case "blue":
          return _swatches.swatches.blue;

        case "green":
          return _swatches.swatches.green100;

        case "red":
          return _swatches.swatches.red;

        case "white":
          return _swatches.swatches.lightGray;

        case "gray":
          return _swatches.swatches.gray;

        default:
          break;
      }
    }

    var fillColor = "";

    if (props.color) {
      fillColor = getFillColor(props.color);
    }

    if (props.color === "white") {
      if (props.plainText) {
        return {
          fg: "white",
          bg: _swatches.swatches.blue
        };
      } else if (!props.invert) {
        return {
          fg: _swatches.swatches.blue,
          bg: "white"
        };
      } else {
        return {
          fg: "white",
          bg: _swatches.swatches.blue
        };
      }
    } else if (props.plainText && props.color) {
      return {
        fg: fillColor,
        bg: "white"
      };
    } else if (!props.invert && props.color) {
      return {
        fg: "white",
        bg: fillColor
      };
    } else if (props.invert && props.color) {
      return {
        fg: fillColor,
        bg: "white"
      };
    } else {
      return {
        fg: "white",
        bg: _swatches.swatches.gray
      };
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledButtonWrapper, props, props.isLoading && !props.isDisabled ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Loader.Loader, {
    loaderColors: getLoaderColors()
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: "transparent"
    }
  }, props.children)) : props.children);
};

exports.Button = Button;
Button.propTypes = {
  /**
   * Color value for button; applicable to both the button background, text, or border
   * if the text and border are to be a color, set the color accordingly and add the prop "invert" to your button component
   */
  color: _propTypes["default"].string,

  /**
   * Applies a styled loader to the button when set to true; uses color prop from above for styling
   */
  isLoading: _propTypes["default"].bool,

  /**
   * When set to true, applies universal "disabled" style to button and removes hover/cursor effects
   */
  isDisabled: _propTypes["default"].bool,

  /**
   * onClick handler passed to the button
   */
  onClick: _propTypes["default"].func,

  /**
   * Applies 8px of padding to top and bottom of button which is the generic style for dashboard
   * Buttons used in the marketing site will generally be wrapped in a ThemeProvider giving them top and bottom padding of 12px
   * Adding the 'thin' prop will adjust their padding to match that of the dashboard
   */
  thin: _propTypes["default"].bool,

  /**
   * Without this prop, the color prop will give the button the background of the corresponding color and the button text is white
   * With 'invert' prop, the color is applied to the text and the border of the button and the background is transparent
   */
  invert: _propTypes["default"].bool,

  /**
   * Color prop is applied to text with no background color and no border is applied; also applies reduced left and right padding for alignment purposes
   */
  plainText: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
Button.defaultProps = {
  color: "blue",
  isLoading: false,
  isDisabled: false,
  thin: false,
  invert: false,
  plainText: false
};