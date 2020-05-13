"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _index = require("../index");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OptionBox = function OptionBox(_ref) {
  var id = _ref.id,
      children = _ref.children,
      _onClick = _ref.onClick,
      style = _ref.style,
      value = _ref.value,
      className = _ref.className;

  var _useContext = (0, _react.useContext)(_index.OptionBoxesContext),
      selectedOptions = _useContext.selectedOptions,
      length = _useContext.length;

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledOption, {
    selectedOption: selectedOptions.includes(value),
    onClick: function onClick() {
      return _onClick(value);
    },
    optionCount: length,
    style: style,
    className: className,
    first: id === 1,
    last: id === length
  }, children);
};

exports.OptionBox = OptionBox;
OptionBox.propTypes = {
  /**
   * Order of option (starting index should be 1)
   */
  id: _propTypes["default"].number.isRequired,

  /**
   * Value of current option that is used for parent component functionality
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * Click handler that gets called that either selects or deselects the current option
   */
  onClick: _propTypes["default"].func,

  /**
   * Option className for current option specifically; className will not be applied to other option boxes
   */
  className: _propTypes["default"].string,

  /**
   * Option styles for current option specifically; styles will not be applied to other option boxes
   */
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
};
OptionBox.defaultProps = {};