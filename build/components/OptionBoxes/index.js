"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionBoxesContext = exports.OptionBoxes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OptionBoxesContext = _react["default"].createContext({
  parent: "OptionBoxes"
});

exports.OptionBoxesContext = OptionBoxesContext;

var OptionBoxes = function OptionBoxes(props) {
  var selectedOptions = props.selectedOptions,
      children = props.children;
  var length = children.length;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledOptionBoxesWrapper, props, /*#__PURE__*/_react["default"].createElement(OptionBoxesContext.Provider, {
    value: {
      selectedOptions: selectedOptions,
      length: length
    }
  }, children));
};

exports.OptionBoxes = OptionBoxes;
OptionBoxes.propTypes = {
  /**
   * Array of current options that are "selected"
   */
  selectedOptions: _propTypes["default"].array,
  children: _propTypes["default"].node
};
OptionBoxes.defaultProps = {};