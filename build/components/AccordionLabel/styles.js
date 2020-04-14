"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAccordionLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledAccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "styles__StyledAccordionLabel",
  componentId: "drvdwy-0"
})(["cursor:pointer;font-size:14px;transition:0.5s;display:flex;justify-content:space-between;align-items:center;text-align:left;", " height:65px;text-transform:uppercase;color:", ";letter-spacing:1px;"], _dashVariables.circularStd.book, function (props) {
  return props.steps ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.black;
});

exports.StyledAccordionLabel = StyledAccordionLabel;