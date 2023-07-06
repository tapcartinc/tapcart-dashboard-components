"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _sizes = require("./_sizes");
var _default = Object.keys(_sizes.sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], _sizes.sizes[label], _styledComponents.css.apply(void 0, arguments));
  };
  return acc;
}, {});
exports["default"] = _default;