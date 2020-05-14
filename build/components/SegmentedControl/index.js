"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Icon = require("../../elements/Icon");

var _ContainerBox = require("../../layout/ContainerBox");

var _dashVariables = require("../../utils/_dashVariables");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SegmentedControl = /*#__PURE__*/function (_Component) {
  _inherits(SegmentedControl, _Component);

  var _super = _createSuper(SegmentedControl);

  function SegmentedControl() {
    var _this;

    _classCallCheck(this, SegmentedControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      var currentActive = e.currentTarget.value;

      _this.props.action(currentActive, e);
    });

    return _this;
  }

  _createClass(SegmentedControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var SegmentedControlType = function SegmentedControlType(props) {
        switch (props.type) {
          case "primary":
          case null:
            return /*#__PURE__*/_react["default"].createElement(_ContainerBox.ContainerBox, null, /*#__PURE__*/_react["default"].createElement(_styles.StyledSegmentedControlStyle, {
              width: _this2.props.width
            }, Object.keys(props.items).map(function (key, idx) {
              return /*#__PURE__*/_react["default"].createElement(_styles.StyledTab, {
                key: key,
                current: props.current,
                htmlFor: "".concat(key)
              }, props.icons && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
                iconLeft: true,
                type: props.icons[key],
                fill: props.current === key ? "white" : _dashVariables.colorPicker.blue
              })), props.items[key], /*#__PURE__*/_react["default"].createElement("input", {
                type: "radio",
                value: key,
                id: "".concat(key),
                name: props.name,
                onClick: props.clickHandler
              }));
            })));

          case "secondary":
            return /*#__PURE__*/_react["default"].createElement(_styles.StyledSecondaryControlStyle, null, /*#__PURE__*/_react["default"].createElement(_styles.StyledSegmentedControlTabs, null, Object.keys(props.items).map(function (key) {
              return /*#__PURE__*/_react["default"].createElement(_styles.StyledSecondaryTab, {
                key: key,
                htmlFor: "".concat(key),
                current: props.current
              }, props.hasIcons && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
                type: props.icons[key],
                fill: props.current === key ? _dashVariables.colorPicker.blue : _dashVariables.colorPicker.grayBlue,
                iconLeft: true
              })), props.items[key], /*#__PURE__*/_react["default"].createElement("input", {
                type: "radio",
                value: key,
                id: "".concat(key),
                name: props.name,
                onClick: props.clickHandler
              }));
            })));

          case "field":
            return /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldSegmentedControl, {
              style: props.style
            }, /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldSegmentedControlTabs, null, Object.keys(props.items).map(function (key, index) {
              return /*#__PURE__*/_react["default"].createElement(_styles.StyledFieldTab, {
                key: key,
                htmlFor: "".concat(key),
                firstIndex: index === 0,
                current: props.current
              }, props.items[key], /*#__PURE__*/_react["default"].createElement("input", {
                type: "radio",
                value: key,
                id: "".concat(key),
                name: props.name,
                onClick: props.clickHandler
              }));
            })));

          default:
            return /*#__PURE__*/_react["default"].createElement("div", null);
        }
      };

      var hasIcons = this.props.hasOwnProperty("icons");
      return /*#__PURE__*/_react["default"].createElement(SegmentedControlType, _extends({}, this.props, {
        hasIcons: hasIcons,
        clickHandler: this.clickHandler
      }));
    }
  }]);

  return SegmentedControl;
}(_react.Component);

exports.SegmentedControl = SegmentedControl;
SegmentedControl.propTypes = {
  /**
   * Required prop for applying the correct branded styling to the current segmented control
   * options: primary, secondary, field
   */
  type: _propTypes["default"].string,

  /**
   * The control's list of clickable items
   * Format: items={{itemOne: "item one", itemTwo: "item two"}}
   */
  items: _propTypes["default"].object,

  /**
   * Item selection handler
   */
  action: _propTypes["default"].func,

  /**
   * Currently selected item
   * Typically set the first option to the default if merchant hasn't selected another item but this varies per the design specs
   */
  current: _propTypes["default"].any,

  /**
   * Optional object of icons that align with the correlating items
   * Pass the "type" given to all of the icons in the component library
   * Should not add icons here that are outside of the component library
   * Format: icons={{itemOne: "itemOneIconType", itemTwo: "itemTwoIconType"}}
   */
  icons: _propTypes["default"].object
};
SegmentedControl.defaultProps = {
  type: "primary"
};