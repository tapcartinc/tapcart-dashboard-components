"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../utils/_variables");

var _BreadcrumbItem = require("./BreadcrumbItem");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _media = _interopRequireDefault(require("../../utils/_media"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var crumbs = _ref.crumbs;
  return /*#__PURE__*/_react["default"].createElement(BreadcrumbsStyle, null, crumbs.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_BreadcrumbItem.BreadcrumbsItem, {
      key: item.crumb,
      onClick: item.onClick,
      crumb: item.crumb,
      icon: item.icon,
      index: index,
      active: crumbs.length - 1 === index,
      hasSeparator: item.hasSeparator
    });
  }));
};

exports.Breadcrumbs = Breadcrumbs;

var BreadcrumbsStyle = _styledComponents["default"].ul.withConfig({
  displayName: "Breadcrumbs__BreadcrumbsStyle",
  componentId: "sc-4btehn-0"
})(["display:flex;align-items:center;flex-direction:row;width:100%;padding:0px;margin-top:0px;margin-bottom:0px;padding-left:45px;flex-wrap:wrap;padding-top:20px;padding-bottom:0px;font-family:SofiaPro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-weight:400;", ""], function (props) {
  return props.style ? props.style : null;
});

Breadcrumbs.propTypes = {
  crumbs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    crumb: _propTypes["default"].string.isRequired,
    icon: _propTypes["default"].string,
    onClick: _propTypes["default"].func,

    /**
     * The active page in the breadcrumbs list
     */
    active: _propTypes["default"].bool
  })).isRequired
};