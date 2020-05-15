"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopOutOptionsList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPopOutOptionsList = _styledComponents["default"].ul.withConfig({
  displayName: "styles__StyledPopOutOptionsList",
  componentId: "sc-8qrp8x-0"
})(["", ""], function (props) {
  return props.style && props.style;
});

exports.StyledPopOutOptionsList = StyledPopOutOptionsList;