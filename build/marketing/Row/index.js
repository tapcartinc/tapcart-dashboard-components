"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _Column = require("../Column");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  ", "\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RowWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Row__RowWrapper",
  componentId: "sc-1vzn6t1-0"
})(["display:flex;flex-wrap:wrap;flex-grow:0;flex-shrink:0;align-items:center;flex-direction:row;justify-content:space-between;", " ", " ", " ", ""], function (props) {
  return props.positionRelative && "position: relative;";
}, function (props) {
  return props.noWrap && "flex-wrap: nowrap;";
}, function (props) {
  return props.flushLeft && "align-items: flex-start;";
}, _media["default"].md(_templateObject(), function (props) {
  return props.mobileCentered && "align-items: center;";
}, function (props) {
  return props.responsiveReverse && "section:nth-of-type(2) {\n    order: 1;\n  }\n    section:nth-of-type(1) {\n      order: 2;\n      margin-top: 40px;\n    }\n  }";
}));

var Row = function Row(props) {
  return _react["default"].createElement(RowWrapper, props);
};

exports.Row = Row;
Row.propTypes = {
  /**
   * Justifies columns starting at the left side of the row
   */
  flushLeft: _propTypes["default"].bool,

  /**
   * Centers columns on a mobile screen. Useful for those Rows that align left on desktop
   */
  mobileCentered: _propTypes["default"].bool,

  /**
   * Switches the order of the columns starting at medium breakpoint
   * Only to be used with two columns
   * Specifically for segments with context and graphics to the side
   */
  responsiveReverse: _propTypes["default"].bool,

  /**
   * Prevents row from wrapping; useful for keeping elements together such as logos in the TrustedBy section on the landing page
   */
  noWrap: _propTypes["default"].bool,

  /**
   * Useful for rows that have a column that needs to be positioned absolute
   */
  positionRelative: _propTypes["default"].bool
};
Row.defaultProps = {
  flushLeft: false,
  mobileCentered: false,
  responsiveReverse: false,
  noWrap: false
};