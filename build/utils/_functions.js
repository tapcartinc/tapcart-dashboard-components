"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBorder = exports.getColors = void 0;

var _variables = require("./_variables");

var getColors = function getColors(type) {
  switch (type) {
    case 'primary':
      return {
        color: '#FFFFFF',
        background: _variables.colors.blue
      };

    case 'primary--reversed':
      return {
        background: 'transparent',
        color: _variables.colors.blue,
        boxShadow: "inset 0px 0px 0px 1px ".concat(_variables.colors.blue)
      };

    case 'secondary':
      return {
        color: _variables.colors.black,
        background: 'transparent',
        boxShadow: "inset 0px 0px 0px 1px ".concat(_variables.colors.gray25)
      };

    case 'delete':
      return {
        color: '#FFFFFF',
        background: _variables.colors.red
      };

    case 'delete--reversed':
      return {
        background: 'transparent',
        color: _variables.colors.red,
        boxShadow: "inset 0px 0px 0px 1px ".concat(_variables.colors.red)
      };

    case 'save':
      return {
        color: '#FFFFFF',
        background: _variables.colors.green
      };

    case 'save--reversed':
      return {
        background: 'transparent',
        color: _variables.colors.green,
        boxShadow: "inset 0px 0px 0px 1px ".concat(_variables.colors.green)
      };

    case 'inverted':
      return {
        color: _variables.colors.blue,
        background: '#FFFFFF'
      };

    case 'inverted--reversed':
      return {
        background: 'transparent',
        color: '#FFFFFF',
        boxShadow: "inset 0px 0px 0px 1px #FFFFFF"
      };

    case 'transparent--blue':
      return {
        color: _variables.colors.blue,
        background: 'transparent'
      };

    case 'transparent--green':
      return {
        color: _variables.colors.green,
        background: 'transparent'
      };

    case 'transparent--red':
      return {
        color: _variables.colors.red,
        background: 'transparent'
      };

    case 'transparent--white':
      return {
        color: 'white',
        background: 'transparent'
      };

    case 'secondary--green':
      return {
        color: 'white',
        background: 'transparent',
        boxShadow: "inset 0px 0px 0px 1px ".concat(_variables.colors.green)
      };

    case 'blue':
      return _variables.colors.blue;

    case '#373aaf':
      return _variables.colors.blue;

    case 'green':
      return _variables.colors.green;

    case 'lightgray':
      return _variables.colors.lightgray;

    case 'gray':
      return _variables.colors.gray;

    case 'darkgray':
      return _variables.colors.darkgray;

    case 'black':
      return _variables.colors.black;

    case 'red':
      return _variables.colors.red;

    case 'lightblue':
      return _variables.colors.lightblue;

    case 'white':
      return _variables.colors.white;

    case 'grayText':
      return _variables.colors.grayText;

    default:
      break;
  }
};

exports.getColors = getColors;

var getBorder = function getBorder(type) {
  switch (type) {
    case 'primary':
      return '0px';

    case 'secondary':
      return "inset 0px 0px 0px 2px ".concat(_variables.colors.gray25);

    case 'border':
      return "inset 0px 0px 0px 1px ".concat(_variables.colors.blue);

    default:
      break;
  }
};

exports.getBorder = getBorder;