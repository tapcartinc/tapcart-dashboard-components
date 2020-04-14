"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = isEmpty;

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
}