"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n  margin: 0 auto;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents["default"].section.withConfig({
  displayName: "Column",
  componentId: "qzbrba-0"
})(["box-sizing:border-box;min-height:1px;position:relative;flex:0 0 ", "%;max-width:", "%;right:auto;left:auto;flex-wrap:wrap;", ""], function (props) {
  return 100 / props.cols;
}, function (props) {
  return 100 / props.cols;
}, _media["default"].md(_templateObject(), function (props) {
  return 100 / props.mobileCols;
}, function (props) {
  return 100 / props.mobileCols;
}));

exports.Column = Column;