"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionContext = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccordionContext = _react["default"].createContext({
  parent: "AccordionV3"
});

exports.AccordionContext = AccordionContext;

var AccordionV3 = function AccordionV3(_ref) {
  var children = _ref.children,
      onePanelOpen = _ref.onePanelOpen,
      steps = _ref.steps,
      includeBorder = _ref.includeBorder,
      spacing = _ref.spacing,
      panelHeight = _ref.panelHeight,
      includeArrows = _ref.includeArrows,
      className = _ref.className;

  var _useState = (0, _react.useState)({
    open: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClickPanel = function onClickPanel(panel) {
    if (onePanelOpen) {
      if (state.open && Number(Object.keys(state.open)[0]) === panel) {
        if (state.open[panel]) {
          return setState(function (prevState) {
            return _objectSpread({}, prevState, {
              open: null
            });
          });
        }
      }

      if (state.open && Object.keys(state.open) !== panel) {
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            open: _defineProperty({}, panel, true)
          });
        });
      }

      if (!state.open) {
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            open: _defineProperty({}, panel, true)
          });
        });
      }
    } else {
      if (state.open && state.open[panel]) {
        setState(function (prevState) {
          return _objectSpread({}, prevState, {
            open: _objectSpread({}, prevState.open, _defineProperty({}, panel, !prevState.open[panel]))
          });
        });
      } else {
        var newOpenState = _objectSpread({}, state.open);

        newOpenState[panel] = true;
        setState(function (prevState) {
          return _objectSpread({}, prevState, {
            open: newOpenState
          });
        });
      }
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledAccordionWrapper, {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(AccordionContext.Provider, {
    value: {
      open: state.open,
      onClickPanel: onClickPanel,
      steps: steps,
      includeBorder: includeBorder,
      includeArrows: includeArrows,
      spacing: spacing,
      panelHeight: panelHeight
    }
  }, children));
};

exports["default"] = AccordionV3;
AccordionV3.propTypes = {
  /**
   * Controls whether more than one panel can be opened at a time in the accordion
   */
  onePanelOpen: _propTypes["default"].bool,

  /**
   * Adds designed and label steps in each panel that update with panel completion and panel errors
   * Functionality for panel completion and errors are handled on a panel by panel basis
   */
  steps: _propTypes["default"].bool,

  /**
   * Adds border style and border style functionality to wrap each pannel for focused panel, errors on panel, etc
   */
  includeBorder: _propTypes["default"].bool,

  /**
   * Adds spacing (in pixels) between panels
   */
  spacing: _propTypes["default"].number,

  /**
   * Panel height
   */
  panelHeight: _propTypes["default"].number,

  /**
   * Includes interactive, generic dropdown arrow on right side of panel
   */
  includeArrows: _propTypes["default"].bool,

  /**
   * Classname that can be added for css to entire accordion wrapper
   */
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
AccordionV3.defaultProps = {
  onePanelOpen: false,
  steps: false,
  includeBorder: false,
  spacing: 0,
  panelHeight: 35,
  includeArrows: false
};