"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBlob = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _media = _interopRequireDefault(require("../../utils/_media"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBlobWrapper = _styledComponents["default"].img.withConfig({
  displayName: "StyledBlob__StyledBlobWrapper",
  componentId: "a3ikc3-0"
})(["position:absolute;z-index:0;transition:400ms ease-in;max-width:", ";max-height:80%;top:", ";bottom:", ";left:", ";right:", ";", ";", ""], function (props) {
  return props.maxWidth ? "".concat(props.maxWidth, "px") : "100%";
}, function (props) {
  return props.top && 0;
}, function (props) {
  return props.bottom && 0;
}, function (props) {
  return props.left && 0;
}, function (props) {
  return props.right && 0;
}, function (props) {
  return props.mobileOnly && "display: none";
}, _media["default"].sm(_templateObject(), function (props) {
  return props.mobileOnly && "display: block";
}, function (props) {
  return props.desktopOnly && "display: none";
}));
/**
 * Place all of the `StyledBlob`s of each section underneath the `Section` components for propper placement and consistentsy
 * This applies to both `StyledBlobs`s being rendered on desktop and mobile screens
 *
 * ```
 * const example = () => (
    <ThemeProvider>
      <Section>
        <StyledBlob top left desktopOnly maxWidth={250} />
         <Container>
            ...

          </Container>
      </Section>
    </ThemeProvider>
  )
 * ```
 */


var StyledBlob = function StyledBlob(props) {
  return _react["default"].createElement(StyledBlobWrapper, props);
};

exports.StyledBlob = StyledBlob;
StyledBlob.propTypes = {
  top: _propTypes["default"].bool,
  bottom: _propTypes["default"].bool,
  left: _propTypes["default"].bool,
  right: _propTypes["default"].bool,
  src: _propTypes["default"].string.isRequired,
  maxWidth: _propTypes["default"].number,
  alt: _propTypes["default"].string.isRequired,
  desktopOnly: _propTypes["default"].bool,
  mobileOnly: _propTypes["default"].bool
};
StyledBlob.defaultProps = {
  top: false,
  bottom: false,
  left: false,
  right: false,
  maxWidth: null,
  desktopOnly: false,
  mobileOnly: false
};