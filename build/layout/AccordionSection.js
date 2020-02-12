"use strict";

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledStep = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__StyledStep",
  componentId: "sc-3gwizr-0"
})(["transition:0.2s all ease-in-out;background:", ";height:26px;width:26px;border-radius:50px;color:white;font-size:14px;display:flex;align-items:center;justify-content:center;margin-right:15px;"], function (props) {
  return props.stepComplete ? _dashVariables.colorPicker.green100 : _dashVariables.colorPicker.blue;
});

var AccordionSection =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionSection, _Component);

  function AccordionSection(props) {
    var _this;

    _classCallCheck(this, AccordionSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionSection).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.props.onClick(_this.props.label);
    });

    _this.state = {};
    return _this;
  }

  _createClass(AccordionSection, [{
    key: "render",
    value: function render() {
      var onClick = this.onClick,
          _this$props = this.props,
          isOpen = _this$props.isOpen,
          label = _this$props.label,
          boxShadow = _this$props.boxShadow,
          toggleIcons = _this$props.toggleIcons,
          steps = _this$props.steps,
          index = _this$props.index,
          className = _this$props.className,
          style = _this$props.style,
          type = _this$props.type,
          header = _this$props.header,
          numerical = _this$props.numerical,
          stepComplete = _this$props.stepComplete,
          stateValues = _this$props.stateValues;
      return _react["default"].createElement(AccordionStyledItem, {
        steps: steps,
        boxShadow: boxShadow,
        style: style,
        isOpen: isOpen
      }, _react["default"].createElement(AccordionLabel, {
        steps: steps,
        onClick: onClick,
        isOpen: isOpen,
        className: className
      }, _react["default"].createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }
      }, steps && _react["default"].createElement(StyledStep, {
        stepComplete: stateValues[index]
      }, numerical && !stateValues[index] && _react["default"].createElement(_react["default"].Fragment, null, index + 1), steps && stateValues[index] && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Icon.Icon, {
        type: "checkmark",
        fill: "#ffffff"
      }))), !steps && _react["default"].createElement(_Icon.Icon, {
        type: "small-drag",
        style: {
          marginRight: 8
        }
      }), label), _react["default"].createElement("div", {
        style: {
          "float": "right"
        }
      }, !isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
        fill: _dashVariables.colorPicker.blue,
        type: this.props.toggleIcons === "plus/minus" ? "small-add" : "arrow-down"
      })), isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
        fill: _dashVariables.colorPicker.blue,
        type: toggleIcons === "plus/minus" ? "subtract" : "arrow-up"
      })))), _react["default"].createElement(AccordionWrapper, {
        isOpen: isOpen
      }, _react["default"].createElement(AccordionChildren, {
        steps: steps,
        className: className,
        isOpen: isOpen
      }, this.props.children)));
    }
  }]);

  return AccordionSection;
}(_react.Component);

var _default = AccordionSection;
exports["default"] = _default;

var AccordionWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionWrapper",
  componentId: "sc-3gwizr-1"
})(["", ""], function (props) {
  return props.isOpen ? "\n  max-height: 100rem;\n  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  " : "\n  max-height: 0;\n  overflow: hidden;\n  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  z-index: 1;\n  position: relative;";
});

var AccordionStyledItem = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionStyledItem",
  componentId: "sc-3gwizr-2"
})(["padding:0px 30px 0px 15px;border-radius:3px;background:white;box-shadow:", ";margin-bottom:20px;", " ", " ", ";"], function (props) {
  return props.boxShadow ? "0px 2px 40px 0px rgba(0,0,0,0.05)" : null;
}, function (props) {
  return props.isOpen && "\n  box-shadow: 0 0 0 2px ".concat(_dashVariables.colorPicker.blue, ";\n  ");
}, function (props) {
  return props.steps && !props.isOpen && "box-shadow: 0 0 0 2px ".concat(_dashVariables.colorPicker.lightGray, ";");
}, function (props) {
  return props.style ? props.style : null;
});

var AccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionLabel",
  componentId: "sc-3gwizr-3"
})(["cursor:pointer;font-size:14px;transition:0.5s;display:flex;justify-content:space-between;align-items:center;text-align:left;", " height:65px;text-transform:uppercase;color:", ";letter-spacing:1px;"], _dashVariables.circularStd.book, function (props) {
  return props.steps ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.black;
});

var AccordionChildren = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionChildren",
  componentId: "sc-3gwizr-4"
})(["padding-bottom:25px;", " ", ""], function (props) {
  return props.steps && "padding-left: 40px;";
}, function (props) {
  return props.isOpen ? "\n      opacity: 1;\n      transform: translateY(0);\n      transition-delay: 0.2s;\n      transition-timing-function: ease-in-out;\n      transition-duration: 0.2s;\n      transition-property: opacity, transform;\n\n " : "opacity: 0;\n      transform: translateY(-1rem);\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n\n ";
}); // color: ${props =>
//   !props.className && (props.isOpen ? colors.blue : colors.black)};