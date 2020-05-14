"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = exports.SearchContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../../utils/_dashVariables");

var _swatches = require("../../utils/_swatches");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchContainer = _styledComponents["default"].div.withConfig({
  displayName: "styles__SearchContainer",
  componentId: "sc-104cukr-0"
})(["display:flex;flex-direction:row;align-items:center;border-bottom:1px solid ", ";position:relative;width:100%;", " input{font-weight:400;font-size:15px;", ";border-radius:3px;border:none;background:transparent;width:100%;padding-top:15px;padding-bottom:15px;padding-left:5px;padding-right:5px;letter-spacing:0.25px;color:", ";&:hover{cursor:auto;}&::placeholder{color:", ";}&:focus{outline:none;}margin-left:10px;", "}", ""], _swatches.swatches.grayBlue, _dashVariables.sofiaPro.medium, function (props) {
  return props.fontSize && "font-size: ".concat(props.fontSize, "px");
}, _swatches.swatches.black, _swatches.swatches.grayBlue, function (props) {
  return props.style ? props.style : null;
}, function (props) {
  return props.style ? props.style : null;
});

exports.SearchContainer = SearchContainer;

var StyledForm = _styledComponents["default"].form.withConfig({
  displayName: "styles__StyledForm",
  componentId: "sc-104cukr-1"
})(["width:420px;", ";", " ", ""], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.center ? "margin: 0 auto;" : "margin: 0px;";
}, function (props) {
  return props.style ? props.style : null;
});

exports.StyledForm = StyledForm;