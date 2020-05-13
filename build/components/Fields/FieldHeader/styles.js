"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledFieldHeader",
  componentId: "gv86lv-0"
})(["width:50%;", ";"], function (props) {
  return props.stretch && "width: 100%";
});

exports.StyledFieldHeader = StyledFieldHeader;