"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../../utils/_variables");
var _dashVariables = require("../../utils/_dashVariables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StyledSearchableContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SearchableContent__StyledSearchableContentWrapper",
  componentId: "sc-s439ny-0"
})(["width:420px;overflow:scroll;max-height:220px;box-shadow:", ";border:1px solid ", ";position:absolute;z-index:100;margin-top:10px;background:#ffffff;border-radius:3px;"], _variables.boxShadow.medium, _dashVariables.colorPicker.grayBlue);
var SearchableContent = function SearchableContent(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledSearchableContentWrapper, {
    props: props
  }, props.children);
};
exports.SearchableContent = SearchableContent;