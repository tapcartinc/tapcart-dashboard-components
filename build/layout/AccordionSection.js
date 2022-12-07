"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../elements/Icon");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _dashVariables = require("../utils/_dashVariables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AccordionSection = function AccordionSection(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var isOpen = props.isOpen,
    label = props.label,
    boxShadow = props.boxShadow,
    toggleIcons = props.toggleIcons,
    steps = props.steps,
    index = props.index,
    className = props.className,
    style = props.style,
    type = props.type,
    header = props.header,
    numerical = props.numerical,
    stepComplete = props.stepComplete,
    stateValues = props.stateValues,
    requiredContent = props.requiredContent;
  var currentErrorsRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    currentErrorsRef.current = props.errors;
    if (!previousErrors && props.errors && requiredContent && requiredContent.length > 0) {
      return throwErrors(props.errors);
    }
    if (props.errors && previousErrors && requiredContent.length > 0 && Object.keys(previousErrors).length !== Object.keys(props.errors).length) {
      return throwErrors(props.errors);
    }
    if (previousErrors && !props.errors) {
      return setErrors([]);
    }
  }, [props.errors]);
  var previousErrors = currentErrorsRef.current;
  var throwErrors = function throwErrors(errors) {
    var newErrors = [];
    var currentErrors = Object.entries(props.errors);
    currentErrors.map(function (error) {
      if (errors.hasOwnProperty(error[0])) {
        newErrors.push(error);
      }
    });
    return setErrors(newErrors);
  };
  var onClick = function onClick() {
    props.onClick(props.label);
  };
  return /*#__PURE__*/_react["default"].createElement(AccordionStyledItem, {
    steps: steps,
    boxShadow: boxShadow,
    style: style,
    isOpen: isOpen,
    error: errors.length > 0
  }, /*#__PURE__*/_react["default"].createElement(AccordionLabel, {
    steps: steps,
    onClick: onClick,
    isOpen: isOpen,
    className: className,
    error: errors.length > 0
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }, steps && /*#__PURE__*/_react["default"].createElement(StyledStep, {
    stepComplete: stateValues[index],
    error: errors.length > 0
  }, numerical && !stateValues[index] && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, index + 1), steps && stateValues[index] && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "checkmark",
    fill: "#ffffff"
  })), !steps && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "small-drag",
    style: {
      marginRight: 8
    }
  }), errors.length > 0 && errors[0][1], !errors.length && label), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      "float": "right"
    }
  }, !isOpen && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    fill: _dashVariables.colorPicker.blue,
    type: props.toggleIcons === "plus/minus" ? "small-add" : "arrow-down"
  })), isOpen && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    fill: _dashVariables.colorPicker.blue,
    type: toggleIcons === "plus/minus" ? "subtract" : "arrow-up"
  })))), /*#__PURE__*/_react["default"].createElement(AccordionWrapper, {
    isOpen: isOpen
  }, /*#__PURE__*/_react["default"].createElement(AccordionChildren, {
    steps: steps,
    className: className,
    isOpen: isOpen
  }, props.children)));
};
var _default = AccordionSection;
exports["default"] = _default;
var AccordionWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionWrapper",
  componentId: "sc-3gwizr-0"
})(["", ""], function (props) {
  return props.isOpen ? "\n  max-height: 100rem;\n  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  " : "\n  max-height: 0;\n  overflow: hidden;\n  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  z-index: 1;\n  position: relative;";
});
var AccordionStyledItem = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionStyledItem",
  componentId: "sc-3gwizr-1"
})(["padding:0px 30px 0px 15px;border-radius:3px;background:white;box-shadow:", ";margin-bottom:20px;", " ", " ", ";", ";"], function (props) {
  return props.boxShadow ? "0px 2px 40px 0px rgba(0,0,0,0.05)" : null;
}, function (props) {
  return props.isOpen && "\n  box-shadow: 0 0 0 2px ".concat(_dashVariables.colorPicker.blue, ";\n  ");
}, function (props) {
  return props.steps && !props.isOpen && "box-shadow: 0 0 0 2px ".concat(_dashVariables.colorPicker.lightGray, ";");
}, function (props) {
  return props.error && "box-shadow: 0 0 0 2px ".concat(_dashVariables.colorPicker.red);
}, function (props) {
  return props.style ? props.style : null;
});
var AccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionLabel",
  componentId: "sc-3gwizr-2"
})(["cursor:pointer;font-size:14px;transition:0.5s;display:flex;justify-content:space-between;align-items:center;text-align:left;", " height:65px;text-transform:uppercase;color:", ";letter-spacing:1px;", ";"], _dashVariables.circularStd.book, function (props) {
  return props.steps ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.black;
}, function (props) {
  return props.error && "color: ".concat(_dashVariables.colorPicker.red);
});
var AccordionChildren = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionChildren",
  componentId: "sc-3gwizr-3"
})(["padding-bottom:25px;", " ", ""], function (props) {
  return props.steps && "padding-left: 40px;";
}, function (props) {
  return props.isOpen ? "\n      opacity: 1;\n      transform: translateY(0);\n      transition-delay: 0.2s;\n      transition-timing-function: ease-in-out;\n      transition-duration: 0.2s;\n      transition-property: opacity, transform;\n\n " : "opacity: 0;\n      transform: translateY(-1rem);\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n\n ";
});

// color: ${props =>
//   !props.className && (props.isOpen ? colors.blue : colors.black)};

var StyledStep = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__StyledStep",
  componentId: "sc-3gwizr-4"
})(["transition:0.2s all ease-in-out;background:", ";height:26px;width:26px;border-radius:50px;color:white;font-size:14px;display:flex;align-items:center;justify-content:center;margin-right:15px;", ""], function (props) {
  return props.stepComplete ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.blue;
}, function (props) {
  return props.error && "background: ".concat(_dashVariables.colorPicker.red, ";");
});