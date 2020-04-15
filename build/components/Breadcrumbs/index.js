"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BreadcrumbItem = require("./BreadcrumbItem");

var _propTypes = _interopRequireDefault(require("prop-types"));

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
})(["display:flex;align-items:center;flex-direction:row;width:100%;padding:0px;margin-top:0px;margin-bottom:0px;padding-left:45px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px;", ""], function (props) {
  return props.style ? props.style : null;
});

Breadcrumbs.propTypes = {
  crumbs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    /**
     * Crumb label
     */
    crumb: _propTypes["default"].string.isRequired,

    /**
     * Icon that displays to the left of the crumb; optional
     */
    icon: _propTypes["default"].string,

    /**
     * onClick functiont that gets called when selecting a breadcrumb
     */
    onClick: _propTypes["default"].func,

    /**
     * The active page in the breadcrumbs list
     */
    active: _propTypes["default"].bool
  })).isRequired
};