"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../elements/Icon");
var _variables = require("../utils/_variables");
var _Typography = require("../elements/Typography");
var _dashVariables = require("../utils/_dashVariables");
var _excluded = ["innerRef", "center", "value", "name", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SearchBar(_ref) {
  var innerRef = _ref.innerRef,
    center = _ref.center,
    value = _ref.value,
    name = _ref.name,
    placeholder = _ref.placeholder,
    props = _objectWithoutProperties(_ref, _excluded);
  var checkEnter = function checkEnter(e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(StyledForm, _extends({
    onSubmit: props.onChange,
    center: center,
    onKeyPress: checkEnter
  }, props), /*#__PURE__*/_react["default"].createElement(SearchContainer, props, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "search",
    style: {
      position: "absolute",
      left: 0,
      top: 14
    }
  }), /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
    onFocus: props.onFocus,
    ref: innerRef,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }))));
}
var SearchContainer = _styledComponents["default"].div.withConfig({
  displayName: "SearchBar__SearchContainer",
  componentId: "sc-1a34skd-0"
})(["display:flex;flex-direction:row;align-items:center;border-bottom:1px solid ", ";position:relative;width:100%;input{font-weight:400;font-size:15px;border-radius:3px;border:none;background:transparent;width:100%;padding-top:15px;padding-bottom:15px;padding-left:5px;padding-right:5px;letter-spacing:0.25px;color:", ";&:hover{cursor:auto;}&::placeholder{color:", ";}&:focus{outline:none;}", " margin-left:10px;", "}", ""], _dashVariables.colorPicker.grayBlue, _dashVariables.colorPicker.black, _dashVariables.colorPicker.grayBlue, _dashVariables.sofiaPro.medium, function (props) {
  return props.style ? props.style : null;
}, function (props) {
  return props.style ? props.style : null;
});
var StyledForm = _styledComponents["default"].form.withConfig({
  displayName: "SearchBar__StyledForm",
  componentId: "sc-1a34skd-1"
})(["width:420px;", ";", " ", ""], function (props) {
  return props.width && "width: ".concat(props.width);
}, function (props) {
  return props.center ? "margin: 0 auto;" : "margin: 0px;";
}, function (props) {
  return props.style ? props.style : null;
});