"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var sizes = {
  lg: 1200,
  mdlg: 1090,
  md: 900,
  sm: 700,
  xsm: 400
};

var _default = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], sizes[label], _styledComponents.css.apply(void 0, arguments));
  };

  return acc;
}, {});

exports["default"] = _default;