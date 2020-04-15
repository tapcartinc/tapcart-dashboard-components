"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _styles = require("./styles");

var _AccordionV = require("../AccordionV3");

var _Icon = require("../../elements/Icon");

var _dashVariables = require("../../utils/_dashVariables");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AccordionV3Panel = function AccordionV3Panel(_ref) {
  var id = _ref.id,
      children = _ref.children,
      complete = _ref.complete,
      errors = _ref.errors,
      style = _ref.style;

  var _useContext = (0, _react.useContext)(_AccordionV.AccordionContext),
      open = _useContext.open,
      onClickPanel = _useContext.onClickPanel,
      spacing = _useContext.spacing,
      panelHeight = _useContext.panelHeight,
      includeArrows = _useContext.includeArrows,
      steps = _useContext.steps,
      includeBorder = _useContext.includeBorder;

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledPanelWrapper, {
    spacing: spacing,
    error: errors && errors.length > 0 && !complete,
    isOpen: open && open[id],
    includeBorder: includeBorder,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledPanelLabel, {
    onClick: function onClick() {
      return onClickPanel(id);
    },
    panelHeight: panelHeight
  }, steps && /*#__PURE__*/_react["default"].createElement(_styles.StyledStep, {
    stepComplete: complete,
    error: errors && errors.length > 0 && !complete
  }, !complete && /*#__PURE__*/_react["default"].createElement("span", null, id), complete && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "checkmark",
    fill: "#ffffff"
  })), /*#__PURE__*/_react["default"].createElement(_styles.StyledLabelChildren, null, children[0].props.children, includeArrows && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "arrow-down",
    fill: _dashVariables.colorPicker.blue,
    style: open && open[id] ? {
      transform: "rotate(-180deg)",
      transition: "transform .2s ease-in"
    } : {
      transform: "rotate(0deg)",
      transition: "transform .2s ease-in"
    }
  }))), /*#__PURE__*/_react["default"].createElement(_styles.StyledPanelChildrenWrapper, {
    isOpen: open && open[id]
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledPanelInnerChildren, {
    isOpen: open && open[id]
  }, children[1].props.children)));
};

var _default = AccordionV3Panel;
exports["default"] = _default;
AccordionV3Panel.propTypes = {
  /**
   * Order of panel in the correct order
   */
  id: _propTypes["default"].number.isRequired,

  /**
   * Array of error messages that come back from validation check; first index is rendered
   */
  errors: _propTypes["default"].array,

  /**
   * Holds state values for determining if the panel has all required values fulfilled; not required
   */
  complete: _propTypes["default"].bool,

  /**
   * Applies style to the individual panel
   */
  style: _propTypes["default"].object,

  /**
   * Must include AccordionLabel and AccordionBody
   */
  children: _propTypes["default"].node.isRequired
};
AccordionV3Panel.defaultProps = {};