"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../elements/Icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

//import './Accordion.css';
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
          circleIcons = _this$props.circleIcons,
          className = _this$props.className,
          style = _this$props.style;

      function stepComplete(index) {
        if (steps) {
          for (var key in steps[index]) {
            if (!steps[index][key]) {
              return false;
            }
          }

          return true;
        }
      }

      return _react["default"].createElement(AccordionStyledItem, {
        boxShadow: boxShadow,
        style: style
      }, _react["default"].createElement(AccordionLabel, {
        onClick: onClick,
        isOpen: isOpen,
        className: className
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }
      }, steps && _react["default"].createElement("div", {
        style: {
          marginRight: 10,
          background: stepComplete(index) ? _variables.colors.green : _variables.colors.blue,
          borderRadius: '50%',
          transitionProperty: 'all',
          transitionDuration: '.2s',
          height: 32,
          width: 32,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          color: 'white',
          paddingRight: '1px',
          paddingBottom: '1px'
        }
      }, steps && stepComplete(index) ? _react["default"].createElement(_Icon.Icon, {
        type: "checkmark",
        fill: "white"
      }) : index + 1), circleIcons && circleIcons.length && _react["default"].createElement("div", null, circleIcons[index]), label), _react["default"].createElement("div", {
        style: {
          "float": 'right'
        }
      }, !isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
        type: this.props.toggleIcons === 'plus/minus' ? 'small-add' : 'arrow-down'
      })), isOpen && _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
        type: toggleIcons === 'plus/minus' ? 'subtract' : 'arrow-up'
      })))), _react["default"].createElement(AccordionWrapper, {
        isOpen: isOpen
      }, _react["default"].createElement(AccordionChildren, {
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
  componentId: "llk5lt-0"
})(["", ""], function (props) {
  return props.isOpen ? "\n  max-height: 100rem;\n  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  " : "\n  max-height: 0;\n  overflow: hidden;\n  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  transition-duration: 0.5s;\n  transition-property: max-height;\n  z-index: 1;\n  position: relative;";
});

var AccordionStyledItem = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionStyledItem",
  componentId: "llk5lt-1"
})(["padding:0px 50px;border-radius:3px;background:white;box-shadow:", ";margin-bottom:20px;", ";"], function (props) {
  return props.boxShadow ? '0px 2px 40px 0px rgba(0,0,0,0.05)' : null;
}, function (props) {
  return props.style ? props.style : null;
});

var AccordionLabel = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionLabel",
  componentId: "llk5lt-2"
})(["cursor:pointer;transition:0.5s;display:flex;justify-content:space-between;align-items:center;text-align:left;font-family:Sofia Pro,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;font-size:26px;font-stretch:normal;font-style:normal;font-weight:400;height:75px;font-size:", ";color:", ";"], function (props) {
  return !props.className && '26px';
}, function (props) {
  return !props.className && (props.isOpen ? _variables.colors.blue : _variables.colors.black);
});

var AccordionChildren = _styledComponents["default"].div.withConfig({
  displayName: "AccordionSection__AccordionChildren",
  componentId: "llk5lt-3"
})(["padding-bottom:25px;", ""], function (props) {
  return props.isOpen ? "\n      opacity: 1;\n      transform: translateY(0);\n      transition-delay: 0.2s;\n      transition-timing-function: ease-in-out;\n      transition-duration: 0.2s;\n      transition-property: opacity, transform;\n\n " : "opacity: 0;\n      transform: translateY(-1rem);\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-property: opacity, transform;\n\n ";
});