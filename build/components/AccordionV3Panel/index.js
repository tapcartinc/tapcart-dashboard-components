"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("./styles");

var _AccordionV = require("../AccordionV3");

var _Icon = require("../../elements/Icon");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AccordionV3Panel = function AccordionV3Panel(_ref) {
  var children = _ref.children,
      index = _ref.index,
      steps = _ref.steps,
      complete = _ref.complete,
      errors = _ref.errors,
      includeBorder = _ref.includeBorder,
      spacing = _ref.spacing,
      panelHeight = _ref.panelHeight,
      includeArrows = _ref.includeArrows;

  var _React$useContext = _react["default"].useContext(_AccordionV.AccordionContext),
      open = _React$useContext.open,
      onClickPanel = _React$useContext.onClickPanel;

  return _react["default"].createElement(_styles.StyledPanelWrapper, {
    spacing: spacing,
    error: errors && errors.length > 0 && !complete,
    isOpen: open && open[index],
    includeBorder: includeBorder
  }, _react["default"].createElement(_styles.StyledPanelLabel, {
    onClick: function onClick() {
      return onClickPanel(index);
    },
    panelHeight: panelHeight
  }, steps && _react["default"].createElement(_styles.StyledStep, {
    stepComplete: complete,
    error: errors && errors.length > 0 && !complete
  }, !complete && _react["default"].createElement("span", null, index + 1), complete && _react["default"].createElement(_Icon.Icon, {
    type: "checkmark",
    fill: "#ffffff"
  })), _react["default"].createElement(_styles.StyledLabelChildren, null, children[0].props.children, includeArrows && _react["default"].createElement(_Icon.Icon, {
    type: "arrow-down",
    fill: _dashVariables.colorPicker.blue,
    style: open && open[index] ? {
      transform: "rotate(-180deg)",
      transition: "transform .2s ease-in"
    } : {
      transform: "rotate(0deg)",
      transition: "transform .2s ease-in"
    }
  }))), _react["default"].createElement(_styles.StyledPanelChildrenWrapper, {
    isOpen: open && open[index]
  }, _react["default"].createElement(_styles.StyledPanelInnerChildren, {
    isOpen: open && open[index]
  }, children[1].props.children)));
};

var _default = AccordionV3Panel;
exports["default"] = _default;