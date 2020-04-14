"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionPanelBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AccordionPanelBody = function AccordionPanelBody(props) {
  // console.log("BOD", props);
  return _react["default"].createElement(StyledPanelChildrenWrapper, {
    isOpen: props.isOpen
  }, props.children);
};

exports.AccordionPanelBody = AccordionPanelBody;

var StyledPanelChildrenWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionPanelBody__StyledPanelChildrenWrapper",
  componentId: "sc-1sat9ez-0"
})(["", ""], function (props) {
  return props.isOpen ? "\n      max-height: 100rem;\n      transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n      transition-duration: 0.5s;\n      transition-property: max-height;\n" : "max-height: 0;\n      overflow: hidden;\n      text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n      transition-duration: 0.5s;\n      transition-property: max-height;\n      z-index: 1;\n      position: relative;\n  ";
});