"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPanelLabel = exports.StyledPanelChildren = exports.StyledPanelChildrenWrapper = exports.StyledPanelWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ${props =>
//   props.isOpen
//     ? `
//     border: 2px solid blue;
//     max-height: 100rem;
//     transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
//     transition-duration: 0.5s;
//     transition-property: max-height;
// `
//     : `max-height: 0;
//     overflow: hidden;
//     text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
//     transition-duration: 0.5s;
//     transition-property: max-height;
//     z-index: 1;
//     position: relative;
// `}
var StyledPanelWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelWrapper",
  componentId: "sc-17dj9x2-0"
})(["padding:0px 30px 0px 15px;border-radius:3px;background:white;margin-bottom:20px;border:2px solid pink;", ""], function (props) {
  return props.style ? props.style : null;
});

exports.StyledPanelWrapper = StyledPanelWrapper;

var StyledPanelChildrenWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelChildrenWrapper",
  componentId: "sc-17dj9x2-1"
})(["padding-bottom:25px;", " background:red;"], function (props) {
  return props.isOpen ? "\n    opacity: 1;\n    transform: translateY(0);\n    transition-delay: 0.2s;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n\n" : "opacity: 0;\n    transform: translateY(-1rem);\n  transition-timing-function: ease-in-out;\n  transition-duration: 0.2s;\n  transition-property: opacity, transform;\n";
});

exports.StyledPanelChildrenWrapper = StyledPanelChildrenWrapper;

var StyledPanelChildren = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelChildren",
  componentId: "sc-17dj9x2-2"
})(["padding-bottom:25px;", " background:red;"], function (props) {
  return props.isOpen ? "\n      opacity: 1;\n      transform: translateY(0);\n      transition-delay: 0.2s;\n      transition-timing-function: ease-in-out;\n      transition-duration: 0.2s;\n      transition-property: opacity, transform;\n\n " : "opacity: 0;\n      transform: translateY(-1rem);\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n ";
});

exports.StyledPanelChildren = StyledPanelChildren;

var StyledPanelLabel = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledPanelLabel",
  componentId: "sc-17dj9x2-3"
})(["cursor:pointer;font-size:14px;transition:0.5s;display:flex;justify-content:space-between;align-items:center;text-align:left;", " height:65px;text-transform:uppercase;color:", ";letter-spacing:1px;"], _dashVariables.circularStd.book, function (props) {
  return props.steps ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.black;
}); //   ${props =>
//     props.isOpen
//       ? `
//       max-height: 100rem;
//       transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
//       transition-duration: 0.5s;
//       transition-property: max-height;
// `
//       : `max-height: 0;
//       overflow: hidden;
//       text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
//       transition-duration: 0.5s;
//       transition-property: max-height;
//       z-index: 1;
//       position: relative;
//   `}


exports.StyledPanelLabel = StyledPanelLabel;