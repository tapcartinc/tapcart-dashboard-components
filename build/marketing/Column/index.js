"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n  width: ", "%;\n  margin: 0 auto;\n  ", ";\n\n  ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColumnWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Column__ColumnWrapper",
  componentId: "qzbrba-0"
})(["box-sizing:border-box;min-height:1px;position:relative;flex:0 0 ", "%;max-width:", "%;right:auto;left:auto;", ";", ";", ";", " ", " ", " ", ""], function (props) {
  return 100 / props.cols;
}, function (props) {
  return 100 / props.cols;
}, function (props) {
  return props.customWidth && "max-width: ".concat(props.customWidth, "%; flex: 0 0 ").concat(props.customWidth, "%");
}, function (props) {
  return props.centered && "margin: 0 auto";
}, function (props) {
  return props.flushLeft && "display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap";
}, _media["default"].lg(_templateObject(), function (props) {
  return props.customWidthLg && "max-width: ".concat(props.customWidthLg, "%; flex: 0 0 ").concat(props.customWidthLg, "%");
}), _media["default"].md(_templateObject2(), function (props) {
  return 100 / props.mobileCols;
}, function (props) {
  return 100 / props.mobileCols;
}, function (props) {
  return 100 / props.mobileCols;
}, function (props) {
  return props.customWidthMd && "max-width: ".concat(props.customWidthMd, "%; flex: 0 0 ").concat(props.customWidthMd, "%");
}, function (props) {
  return props.mobileCentered && "align-items: center; display: flex;";
}), _media["default"].sm(_templateObject3(), function (props) {
  return props.customWidthSm && "max-width: ".concat(props.customWidthSm, "%; flex: 0 0 ").concat(props.customWidthSm, "%");
}), _media["default"].xs(_templateObject4(), function (props) {
  return props.customWidthXs && "max-width: ".concat(props.customWidthXs, "%; flex: 0 0 ").concat(props.customWidthXs, "%");
}));
/**
 * Allows each `Row` to break responsively
 * */


var Column = function Column(props) {
  return _react["default"].createElement(ColumnWrapper, props);
};

exports.Column = Column;
Column.propTypes = {
  /**
   * The amount of columns inside of the current row
   */
  cols: _propTypes["default"].number,

  /**
   * The amount of columns inside of the mobile row; allows you to tell the column to fill the entire width of the row
   */
  mobileCols: _propTypes["default"].number,
  customWidth: _propTypes["default"].number,
  customWidthMd: _propTypes["default"].number,
  customWidthSm: _propTypes["default"].number,
  customWidthXs: _propTypes["default"].number,
  flushLeft: _propTypes["default"].bool,
  centered: _propTypes["default"].bool
};
Column.defaultProps = {
  flushLeft: false
};