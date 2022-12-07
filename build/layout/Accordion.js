"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AccordionSection = _interopRequireDefault(require("./AccordionSection"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
        return _objectSpread(_objectSpread({}, prevState), {}, {
          errors: props.errors
        });
      });
    }
    if (!previousErrors && props.errors) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          errors: props.errors
        });
      });
    }
    if (previousErrors && !props.errors && state.errors) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
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
      return _objectSpread(_objectSpread({}, prevState), {}, {
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