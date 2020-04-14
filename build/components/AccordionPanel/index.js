"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionPanel = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccordionPanel = function AccordionPanel(props) {
  // console.log("props", props);
  var onClick = function onClick() {
    props.onClick(props.index);
  };

  var childrenWithProps = _react["default"].Children.map(props.children, function (child) {
    return _react["default"].cloneElement(child, _objectSpread({}, props, {
      isOpen: props.isOpen
    }));
  });

  return _react["default"].createElement(_styles.StyledPanelWrapper, null, _react["default"].createElement(_styles.StyledPanelLabel, {
    onClick: onClick,
    isOpen: props.isOpen
  }, props.label), _react["default"].createElement(_styles.StyledPanelChildrenWrapper, {
    isOpen: props.isOpen
  }, _react["default"].createElement(_styles.StyledPanelChildren, {
    onClick: onClick,
    isOpen: props.isOpen
  }, childrenWithProps)));
};

exports.AccordionPanel = AccordionPanel;