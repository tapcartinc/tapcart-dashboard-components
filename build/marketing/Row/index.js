"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = _styledComponents["default"].div.withConfig({
  displayName: "Row",
  componentId: "sc-1vzn6t1-0"
})(["display:flex;flex-wrap:wrap;flex-grow:0;flex-shrink:0;align-items:center;flex-direction:row;justify-content:space-between;", ""], _media["default"].md(_templateObject()));

exports.Row = Row;