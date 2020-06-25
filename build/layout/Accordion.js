"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AccordionSection = _interopRequireDefault(require("./AccordionSection"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Accordion = function Accordion(props) {
  var _useState = (0, _react.useState)({
    openSections: {},
    errors: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var currentErrors = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    currentErrors.current = props.errors;

    if (state.errors && props.errors && Object.keys(state.errors).length !== Object.keys(props.errors).length) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          errors: props.errors
        });
      });
    }

    if (!previousErrors && props.errors) {
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          errors: props.errors
        });
      });
    }

    if (previousErrors && !props.errors && state.errors) {
      setState(function (prevState) {
        return _objectSpread({}, prevState, {
          errors: null
        });
      });
    }
  }, [props.errors]);
  var previousErrors = currentErrors.current;

  var onClick = function onClick(label) {
    var openSections = state.openSections;
    var isOpen = !!openSections[label];
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        openSections: _defineProperty({}, label, !isOpen)
      });
    });
  };

  var children = props.children,
      toggleIcons = props.toggleIcons,
      boxShadow = props.boxShadow,
      className = props.className,
      style = props.style,
      steps = props.steps,
      type = props.type,
      header = props.header,
      numerical = props.numerical,
      stateValues = props.stateValues,
      content = props.content;
  var openSections = state.openSections;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 60
    }
  }, children.map(function (child, index) {
    var newErrors = {};
    content && state.errors && content[index].requiredValues.map(function (requiredValue) {
      if (state.errors && requiredValue && state.errors.hasOwnProperty(Object.keys(requiredValue))) {
        newErrors[Object.keys(requiredValue)] = state.errors[Object.keys(requiredValue)];
      }
    });
    return /*#__PURE__*/_react["default"].createElement(_AccordionSection["default"], {
      numerical: numerical,
      key: child.props.label,
      isOpen: !!openSections[child.props.label],
      label: child.props.label,
      stepComplete: child.props.stepComplete,
      index: index,
      onClick: onClick,
      toggleIcons: toggleIcons,
      boxShadow: boxShadow,
      className: className,
      style: style,
      steps: steps,
      type: type,
      header: header,
      requiredContent: content ? content[index].requiredValues : null,
      errors: newErrors,
      stateValues: stateValues
    }, child.props.children);
  }));
};

var _default = Accordion;
exports["default"] = _default;
Accordion.propTypes = {
  boxShadow: _propTypes["default"].bool,

  /**
   * option: "plus/minus"
   */
  toggleIcons: _propTypes["default"].string,
  children: _propTypes.node.isRequired
};
Accordion.defaultProps = {
  boxShadow: false
};