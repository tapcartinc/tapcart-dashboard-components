"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAccordionWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledAccordionWrapper = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledAccordionWrapper",
  componentId: "sc-1mmowyq-0"
})(["", ""], function (props) {
  return props.style ? props.style : null;
});

exports.StyledAccordionWrapper = StyledAccordionWrapper;