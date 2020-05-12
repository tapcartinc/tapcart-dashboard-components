"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = require("../Typography");

var _index = require("./index");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconGallery = function IconGallery(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledGallery, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Header, null, "All Swatches:")), /*#__PURE__*/_react["default"].createElement(StyledSwatchList, null, Object.entries(_index.swatches).map(function (swatch) {
    return /*#__PURE__*/_react["default"].createElement(StyledSwatchListItem, null, /*#__PURE__*/_react["default"].createElement(StyledSwatch, {
      color: swatch[1]
    }), /*#__PURE__*/_react["default"].createElement("span", null, swatch[0]));
  })));
};

var _default = IconGallery;
exports["default"] = _default;

var StyledGallery = _styledComponents["default"].div.withConfig({
  displayName: "Swatches__StyledGallery",
  componentId: "sc-6bn8o2-0"
})([".header{display:flex;align-items:center;}"]);

var StyledSwatchList = _styledComponents["default"].ul.withConfig({
  displayName: "Swatches__StyledSwatchList",
  componentId: "sc-6bn8o2-1"
})(["width:100%;display:flex;flex-wrap:wrap;border-radius:5px;justify-content:space-between;padding:1em;margin:1em auto;list-style:none;&:after{content:\"\";flex:auto;}"]);

var StyledSwatchListItem = _styledComponents["default"].li.withConfig({
  displayName: "Swatches__StyledSwatchListItem",
  componentId: "sc-6bn8o2-2"
})(["width:150px;height:120px;align-items:center;span{font-weight:200;font-size:13px;}"]);

var StyledSwatch = _styledComponents["default"].div.withConfig({
  displayName: "Swatches__StyledSwatch",
  componentId: "sc-6bn8o2-3"
})(["height:50px;width:50px;border-radius:3px;background:", ";"], function (props) {
  return props.color;
});