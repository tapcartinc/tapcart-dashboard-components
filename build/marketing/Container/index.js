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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n  ", "\n\n    ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  padding-top: 65px;\n  padding-bottom: 65px;\n\n  ", "\n\n  ", "\n\n    ", ";\n    ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  padding-left: 2em;\n  padding-right: 2em;\n  padding-top: 80px;\n  padding-bottom: 80px;\n\n\n  ", "\n\n\n  ", ";\n\n    ", ";\n    ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-top: 100px;\n  padding-bottom: 100px;\n\n  ", "\n\n", "\n\n  ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n  padding-top: 100px;\n  padding-bottom: 100px;\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerWrapper",
  componentId: "yhgl5u-0"
})(["box-sizing:border-box;position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:", "px;padding-left:5em;padding-right:5em;padding-top:100px;padding-bottom:100px;", " z-index:1;", " button{", "}", ";", ";", ";", ";", ";", ";", ""], _sizes.sizes.xl, function (props) {
  return props.customPadding && "padding-top: ".concat(props.customPadding[0], "px; padding-bottom: ").concat(props.customPadding[1], "px;");
}, function (props) {
  return props.customMargins && "margin-top: ".concat(props.customMargins[0], "px; margin-bottom: ").concat(props.customMargins[1], "px;");
}, function (props) {
  return props.centered && "display: block !important; margin: 0 auto;";
}, function (props) {
  return props.customHeight && "height: ".concat(props.customHeight, "px");
}, function (props) {
  return props.tombstone && "margin-top: -350px";
}, _media["default"].lg(_templateObject(), function (props) {
  return props.customPadding && "padding-top: ".concat(props.customPadding[0], "px; padding-bottom: ").concat(props.customPadding[1], "px;");
}), _media["default"].md(_templateObject2(), function (props) {
  return props.customPaddingMd && "padding-top: ".concat(props.customPaddingMd[0], "px; padding-bottom: ").concat(props.customPaddingMd[1], "px;");
}, function (props) {
  return props.customMarginsMd && "margin-top: ".concat(props.customMarginsMd[0], "px; margin-bottom: ").concat(props.customMarginsMd[1], "px;");
}, function (props) {
  return props.customHeightMd && "height: ".concat(props.customHeightMd, "px");
}, function (props) {
  return props.tombstone && "margin-top: -450px";
}), _media["default"].sm(_templateObject3(), function (props) {
  return props.customPaddingSm && "padding-top: ".concat(props.customPaddingSm[0], "px; padding-bottom: ").concat(props.customPaddingSm[1], "px;");
}, function (props) {
  return props.customMarginsSm && "margin-top: ".concat(props.customMarginsSm[0], "px; margin-bottom: ").concat(props.customMarginsSm[1], "px;");
}, function (props) {
  return props.customHeightSm && "height: ".concat(props.customHeightSm, "px");
}, function (props) {
  return props.tombstone && "margin-top: -450px";
}), _media["default"].xs(_templateObject4(), function (props) {
  return props.customPaddingXs && "padding-top: ".concat(props.customPaddingXs[0], "px; padding-bottom: ").concat(props.customPaddingXs[1], "px;");
}, function (props) {
  return props.customMarginsXs && "margin-top: ".concat(props.customMarginsXs[0], "px; margin-bottom: ").concat(props.customMarginsXs[1], "px;");
}, function (props) {
  return props.customHeightXs && "height: ".concat(props.customHeightXs, "px");
}, function (props) {
  return props.tombstone && "margin-top: -450px";
}), _media["default"].unoCardSmall(_templateObject5(), function (props) {
  return props.customMarginsXxs && "margin-top: ".concat(props.customMarginsXxs[0], "px; margin-bottom: ").concat(props.customMarginsXxs[1], "px;");
}, function (props) {
  return props.tombstone && "margin-top: -450px";
}));
/**
 * Use `Container` as the wrapper component of the `Row` component and all of the children within that component.
 */


var Container = function Container(props) {
  return _react["default"].createElement(ContainerWrapper, props);
};

exports.Container = Container;
Container.propTypes = {
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPadding: _propTypes["default"].array,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingMd: _propTypes["default"].array,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingSm: _propTypes["default"].array,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingXs: _propTypes["default"].array,

  /**
   * Control top and bottom margins of a container
   * Cannont change left and right margins of container for consistency purposes
   * First index is top margin; second index is bottom margin
   */
  customMargins: _propTypes["default"].array,
  customHeight: _propTypes["default"].number
};