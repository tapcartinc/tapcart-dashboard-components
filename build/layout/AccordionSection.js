"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../elements/Icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dashVariables = require("../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react["default"].createElement(AccordionStyledItem, {
    steps: steps,
    boxShadow: boxShadow,
    style: style,
    isOpen: isOpen,
    error: errors.length > 0
  }, _react["default"].createElement(AccordionLabel, {
    steps: steps,
    onClick: onClick,
    isOpen: isOpen,
    className: className,
    error: errors.length > 0
  }, _react["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }, steps && _react["default"].createElement(StyledStep, {
    stepComplete: stateValues[index],
    error: errors.length > 0
  }, numerical && !stateValues[index] && _react["default"].createElement(_react["default"].Fragment, null, index + 1), steps && stateValues[index] && _react["default"].createElement(_Icon.Icon, {
    type: "checkmark",
    fill: "#ffffff"
  })), !steps && _react["default"].createElement(_Icon.Icon, {
    type: "small-drag",
    style: {
      marginRight: 8
    }
  }), errors.length > 0 && errors[0][1], !errors.length && label), _react["default"].createElement("div", {
    style: {
      "float": "right"
    }
  }, !isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
    fill: _dashVariables.colorPicker.blue,
    type: props.toggleIcons === "plus/minus" ? "small-add" : "arrow-down"
  })), isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
    fill: _dashVariables.colorPicker.blue,
    type: toggleIcons === "plus/minus" ? "subtract" : "arrow-up"
  })))), _react["default"].createElement(AccordionWrapper, {
    isOpen: isOpen
  }, _react["default"].createElement(AccordionChildren, {
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
}); // color: ${props =>
//   !props.className && (props.isOpen ? colors.blue : colors.black)};


var StyledStep = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__StyledStep",
  componentId: "sc-3gwizr-4"
})(["transition:0.2s all ease-in-out;background:", ";height:26px;width:26px;border-radius:50px;color:white;font-size:14px;display:flex;align-items:center;justify-content:center;margin-right:15px;", ""], function (props) {
  return props.stepComplete ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.blue;
}, function (props) {
  return props.error && "background: ".concat(_dashVariables.colorPicker.red, ";");
});