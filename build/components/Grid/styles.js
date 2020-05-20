"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledGridItem = exports.StyledGridWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledGridWrapper = _styledComponents["default"].section.withConfig({
  displayName: "styles__StyledGridWrapper",
  componentId: "bn91vj-0"
})(["display:flex;width:100%;flex-direction:", ";flex-wrap:", ";align-items:", ";justify-content:", ";"], function (props) {
  return props.type;
}, function (props) {
  return props.wrap ? 'wrap' : 'nowrap';
}, function (props) {
  return props.align ? props.align.split(' ')[1] : 'flex-start';
}, function (props) {
  return props.align ? props.align.split(' ')[0] : 'flex-start';
});

exports.StyledGridWrapper = StyledGridWrapper;

var StyledGridItem = _styledComponents["default"].section.withConfig({
  displayName: "styles__StyledGridItem",
  componentId: "bn91vj-1"
})(["flex:", ";width:", ";margin:", "px;"], function (props) {
  return props.wrap ? '0 0 auto' : 1;
}, function (props) {
  return props.wrap && props.wrapCount ? calculateChildWidth(props.wrapCount, props.margin) : 'auto';
}, function (props) {
  return props.wrap ? props.margin || 10 : props.margin || 0;
});

exports.StyledGridItem = StyledGridItem;

function calculateChildWidth(n, m) {
  var num = (100 / n).toFixed(2);
  return "calc(".concat(num, "% - ").concat(m * 2, "px)");
}