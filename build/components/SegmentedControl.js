"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../utils/_variables");

var _animations = require("../utils/_animations");

var _Icon = require("../elements/Icon");

var _Container = require("../layout/Container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SegmentedControl =
/*#__PURE__*/
function (_Component) {
  _inherits(SegmentedControl, _Component);

  function SegmentedControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SegmentedControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SegmentedControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      var currentActive = e.currentTarget.value;

      _this.props.action(currentActive, e);
    });

    return _this;
  }

  _createClass(SegmentedControl, [{
    key: "render",
    value: function render() {
      var sofiaRegular = _variables.sofia.sofiaRegular;

      var SegmentedControlType = function SegmentedControlType(props) {
        switch (props.type) {
          case "primary":
            return _react["default"].createElement(_Container.Container, {
              style: {
                marginTop: 30,
                marginBottom: 30
              }
            }, _react["default"].createElement(SegmentedControlStyle, props, Object.keys(props.items).map(function (key) {
              return _react["default"].createElement(Tab, _extends({}, props, {
                htmlFor: "".concat(key),
                style: {
                  display: "flex",
                  flexDirection: "column"
                }
              }), props.hasIcons && _react["default"].createElement("div", {
                style: {
                  marginBottom: 3
                }
              }, _react["default"].createElement(_Icon.Icon, {
                type: props.icons[key],
                fill: props.current === key ? "white" : "blue"
              })), props.items[key], _react["default"].createElement("input", {
                type: "radio",
                value: key,
                id: "".concat(key),
                name: props.name,
                style: {
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                  border: " 1px solid #000",
                  margin: "0",
                  position: "absolute"
                },
                onClick: props.clickHandler
              }));
            })));

          case "secondary":
            return _react["default"].createElement(SecondaryControlStyle, props, _react["default"].createElement(SegmentedControlTabs, _extends({
              style: {
                display: "flex",
                width: "100%",
                boxShadow: "inset 0 0 0 1px ".concat(_variables.colors.bluegray),
                borderRadius: "3px",
                sofiaRegular: sofiaRegular
              }
            }, props), Object.keys(props.items).map(function (key) {
              return _react["default"].createElement(SecondaryTab, _extends({
                htmlFor: "".concat(key)
              }, props), props.hasIcons && _react["default"].createElement("div", null, _react["default"].createElement(_Icon.Icon, {
                type: props.icons[key],
                fill: props.current === key ? "blue" : "lightblue",
                style: {
                  marginRight: 10
                }
              })), props.items[key], _react["default"].createElement("input", {
                type: "radio",
                value: key,
                id: "".concat(key),
                name: props.name,
                onClick: props.clickHandler,
                style: {
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                  border: " 1px solid #000",
                  margin: "0",
                  position: "absolute"
                }
              }));
            })));

          default:
            return _react["default"].createElement("div", null);
        }
      };

      var hasIcons = this.props.hasOwnProperty("icons");
      return _react["default"].createElement(SegmentedControlType, _extends({}, this.props, {
        hasIcons: hasIcons,
        clickHandler: this.clickHandler
      }));
    }
  }]);

  return SegmentedControl;
}(_react.Component);

exports.SegmentedControl = SegmentedControl;

var SegmentedControlTabs = _styledComponents["default"].div.withConfig({
  displayName: "SegmentedControl__SegmentedControlTabs",
  componentId: "w55qep-0"
})(["width:100%;display:flex;flex-direction:row;justify-items:space-between;"]);

var SegmentedControlStyle = _styledComponents["default"].div.withConfig({
  displayName: "SegmentedControl__SegmentedControlStyle",
  componentId: "w55qep-1"
})(["margin:auto;overflow:hidden;height:100%;display:flex;flex-direction:row;justify-items:space-between;width:100%;", ""], function (props) {
  return props.style ? props.style : null;
});

var SecondaryControlStyle = _styledComponents["default"].div.withConfig({
  displayName: "SegmentedControl__SecondaryControlStyle",
  componentId: "w55qep-2"
})(["margin:0px;max-width:450px;overflow:hidden;display:flex;flex-direction:row;", ""], function (props) {
  return props.style ? props.style : null;
});

var Tab = _styledComponents["default"].label.withConfig({
  displayName: "SegmentedControl__Tab",
  componentId: "w55qep-3"
})(["color:#000;font-size:15px;font-family:\"Sofia Pro\";font-weight:normal;font-style:normal;flex:1;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;z-index:1;font-weight:500;font-family:\"Sofia Pro\";font-weight:normal;font-style:normal;padding:20px;letter-spacing:0.5px;", " ", ";&:hover{cursor:pointer;}"], _animations.onClickTransition, function (props) {
  return props.current === props.htmlFor && "background: #3235ab;\n    color: #fff;\n    border-radius: 3px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);";
});

var SecondaryTab = _styledComponents["default"].label.withConfig({
  displayName: "SegmentedControl__SecondaryTab",
  componentId: "w55qep-4"
})(["flex:1;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;z-index:1;font-weight:500;font-family:\"Sofia Pro\";font-weight:normal;font-style:normal;padding:", ";letter-spacing:0.5px;color:#a2a4dd;font-size:14px;width:100%;transition:ease-out 0.2s;border:1px solid transparent;", " &:hover{cursor:pointer;}"], function (props) {
  return props.hasIcons ? "10px" : "20px";
}, function (props) {
  return props.current === props.htmlFor && "background: #fff;\n    color: #3235ab;\n    border-radius: 3px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);\n    opacity: 1;\n    border: 1px solid #3235ab;\n    ";
});