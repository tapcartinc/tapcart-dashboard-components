"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = require("../../../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldLabel = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "styles__StyledFieldLabel",
  componentId: "sc-1ffwmbt-0"
})(["line-height:20px;margin-top:0px;margin-bottom:3px;"]);
exports.StyledFieldLabel = StyledFieldLabel;