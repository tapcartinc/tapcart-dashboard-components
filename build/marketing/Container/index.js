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
  var data = _taggedTemplateLiteral(["\n  ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n\n  ", ";\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n  ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  padding-left: 2em;\n  padding-right: 2em;\n\n  ", ";\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n  ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 3em;\n  padding-right: 3em;\n  ", ";\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n  ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerWrapper",
  componentId: "yhgl5u-0"
})(["box-sizing:border-box;position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:", "px;padding-left:5em;padding-right:5em;", ";padding-top:", ";padding-bottom:", ";z-index:1;", ";button{", "}", ";", ";", ";", ";", ""], _sizes.sizes.xl, function (props) {
  return props.customPadding && "padding: ".concat(props.customPadding, "px 5em");
}, function (props) {
  return props.customPaddingTop ? "".concat(props.customPaddingTop, "px") : "75px";
}, function (props) {
  return props.customPaddingBottom ? "".concat(props.customPaddingBottom, "px") : "75px";
}, function (props) {
  return props.customMargins && "margin-top: ".concat(props.customMargins[0], "px; margin-bottom: ").concat(props.customMargins[1], "px");
}, function (props) {
  return props.centered && "display: block !important; margin: 0 auto;";
}, _media["default"].lg(_templateObject(), function (props) {
  return props.customPadding && "padding: ".concat(props.customPadding, "px 2.5em");
}, function (props) {
  return props.customPaddingTop ? "".concat(props.customPaddingTop, "px") : "75px";
}, function (props) {
  return props.customPaddingBottom ? "".concat(props.customPaddingBottom, "px") : "75px";
}), _media["default"].md(_templateObject2(), function (props) {
  return props.customPaddingMd && "padding: ".concat(props.customPaddingMd, "px 3em");
}, function (props) {
  return props.customPaddingTopMd ? "".concat(props.customPaddingTopMd, "px") : "100px";
}, function (props) {
  return props.customPaddingBottomMd ? "".concat(props.customPaddingBottomMd, "px") : "100px";
}, function (props) {
  return props.customMarginsMd && "margin-top: ".concat(props.customMarginsMd[0], "px; margin-bottom: ").concat(props.customMarginsMd[1], "px");
}), _media["default"].sm(_templateObject3(), function (props) {
  return props.customPaddingSm && "padding: ".concat(props.customPaddingSm, "px 2em");
}, function (props) {
  return props.customPaddingTopSm ? "".concat(props.customPaddingTopSm, "px") : "100px";
}, function (props) {
  return props.customPaddingBottomSm ? "".concat(props.customPaddingBottomSm, "px") : "100px";
}, function (props) {
  return props.customMarginsSm && "margin-top: ".concat(props.customMarginsSm[0], "px; margin-bottom: ").concat(props.customMarginsSm[1], "px");
}), _media["default"].xs(_templateObject4(), function (props) {
  return props.customPaddingXs && "padding: ".concat(props.customPaddingXs, "px 1em");
}, function (props) {
  return props.customPaddingTopXs ? "".concat(props.customPaddingTopXs, "px") : "40px";
}, function (props) {
  return props.customPaddingBottomXs ? "".concat(props.customPaddingBottomXs, "px") : "40px";
}, function (props) {
  return props.customMarginsXs && "margin-top: ".concat(props.customMarginsXs[0], "px; margin-bottom: ").concat(props.customMarginsXs[1], "px");
}), _media["default"].unoCardSmall(_templateObject5(), function (props) {
  return props.customMarginsXxs && "margin-top: ".concat(props.customMarginsXxs[0], "px; margin-bottom: ").concat(props.customMarginsXxs[1], "px");
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
   * MUST BE GREATER THAN 0!!!
   */
  customPadding: _propTypes["default"].number,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingMd: _propTypes["default"].number,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingSm: _propTypes["default"].number,

  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingXs: _propTypes["default"].number,

  /**
   * Control top and bottom margins of a container
   * Cannont change left and right margins of container for consistency purposes
   * First index is top margin; second index is bottom margin
   * MUST BE GREATER THAN 0!!!
   */
  customMargins: _propTypes["default"].array
};