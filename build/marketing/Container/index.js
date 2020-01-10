"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _sizes = require("../../utils/_sizes");

var _variables = require("../../utils/_variables");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  padding-bottom: 40px;\n  padding-top: 40px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  padding-left: 2em;\n  padding-right: 2em;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-top: 100px;\n  padding-bottom: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerWrapper",
  componentId: "yhgl5u-0"
})(["box-sizing:border-box;position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:", "px;padding-left:5em;padding-right:5em;z-index:1;padding-top:75px;padding-bottom:75px;", ";button{", "}", ";", ";", ";", ";"], _sizes.sizes.xl, function (props) {
  return props.highlightContainer && "border: 1px solid ".concat(_variables.colors.red);
}, function (props) {
  return props.centered && "display: block !important; margin: 0 auto;";
}, _media["default"].lg(_templateObject()), _media["default"].md(_templateObject2()), _media["default"].sm(_templateObject3()), _media["default"].xs(_templateObject4()));
/**
 * Use `Container` as the wrapper component of the `Row` component and all of the children within that component.
 */


var Container = function Container(props) {
  return _react["default"].createElement(ContainerWrapper, props);
};

exports.Container = Container;