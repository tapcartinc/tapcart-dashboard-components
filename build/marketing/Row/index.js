"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

var _react = _interopRequireDefault(require("react"));

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
})(["display:flex;flex-wrap:wrap;flex-grow:0;flex-shrink:0;align-items:center;flex-direction:row;justify-content:space-between;", " ", ""], function (props) {
  return props.flushLeft && "align-items: flex-start;";
}, _media["default"].md(_templateObject(), function (props) {
  return props.mobileCentered && "align-items: center;";
}, function (props) {
  return props.responsiveReverse && "flex-direction: column-reverse;";
}));

var Row = function Row(props) {
  return _react["default"].createElement(RowWrapper, props);
};

exports.Row = Row;