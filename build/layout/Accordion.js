"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AccordionSection = _interopRequireDefault(require("./AccordionSection"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (label) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          openSections = _assertThisInitialize.state.openSections;

      var isOpen = !!openSections[label];

      _this.setState({
        openSections: _defineProperty({}, label, !isOpen)
      });
    });

    var _openSections = {};
    _this.state = {
      openSections: _openSections
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var onClick = this.onClick,
          _this$props = this.props,
          children = _this$props.children,
          toggleIcons = _this$props.toggleIcons,
          boxShadow = _this$props.boxShadow,
          circleIcons = _this$props.circleIcons,
          className = _this$props.className,
          style = _this$props.style,
          steps = _this$props.steps,
          openSections = this.state.openSections;
      return _react["default"].createElement("div", null, children.map(function (child, index) {
        return _react["default"].createElement(_AccordionSection["default"], {
          key: child.props.label,
          isOpen: !!openSections[child.props.label],
          label: child.props.label,
          index: index,
          circleIcons: circleIcons,
          onClick: onClick,
          toggleIcons: toggleIcons,
          boxShadow: boxShadow,
          className: className,
          style: style,
          steps: steps
        }, child.props.children);
      }));
    }
  }]);

  return Accordion;
}(_react.Component);

var _default = Accordion;
exports["default"] = _default;
var accordionIconOptions = "plus/minus";
Accordion.propTypes = {
  boxShadow: _propTypes["default"].bool,
  toggleIcons: _propTypes["default"].oneOfType(accordionIconOptions),
  children: _propTypes.node.isRequired
};
Accordion.defaultProps = {
  boxShadow: false
};