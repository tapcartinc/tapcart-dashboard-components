"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoverWithBorder = exports.onClickTransition = exports.hover = exports.transition = void 0;
///////////
// HOVER
//////////
var transition = {
  transition: 'transform .2s;'
};
exports.transition = transition;
var hover = {
  transform: 'translateY(-2px)'
};
exports.hover = hover;
var onClickTransition = {
  transition: '.2s ease-in-out'
};
exports.onClickTransition = onClickTransition;
var hoverWithBorder = {
  boxShadow: 'inset 0px 0px 0px 3px #3A3CB4'
};
exports.hoverWithBorder = hoverWithBorder;