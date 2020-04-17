"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBreadcrumbList = exports.StyledBreadcrumbWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBreadcrumbWrapper = _styledComponents["default"].nav.attrs(function (props) {
  return {
    className: props.className
  };
}).withConfig({
  displayName: "styles__StyledBreadcrumbWrapper",
  componentId: "go8hwc-0"
})(["display:flex;align-items:center;flex-direction:row;width:100%;padding:0px;margin-top:0px;margin-bottom:0px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px;", ";"], function (props) {
  return props.style ? props.style : null;
});

exports.StyledBreadcrumbWrapper = StyledBreadcrumbWrapper;

var StyledBreadcrumbList = _styledComponents["default"].ol.withConfig({
  displayName: "styles__StyledBreadcrumbList",
  componentId: "go8hwc-1"
})(["display:flex;align-items:center;flex-direction:row;width:100%;"]);

exports.StyledBreadcrumbList = StyledBreadcrumbList;