"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../elements/Icon");

var _Button = require("../../components/Button");

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

var StyledCustomLabel = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__StyledCustomLabel",
  componentId: "sc-15gzis1-0"
})(["display:flex;align-items:center;"]);

(0, _react2.storiesOf)("Examples|Components/Input", module).add("Basic", function (props) {
  var _React$useState = _react["default"].useState({
    input: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var setInput = function setInput(e) {
    e.persist();
    setState(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_index.Input, {
    label: "Input label",
    onChange: setInput,
    value: state.input || "",
    placeholder: "Enter Input Text",
    name: "input"
  });
}).add("password", function (props) {
  var _React$useState3 = _react["default"].useState({
    password: ""
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var setPassword = function setPassword(e) {
    e.persist();
    setState(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_index.Input, {
    label: "Enter password",
    onChange: setPassword,
    value: state.password || "",
    placeholder: "Enter password",
    name: "password",
    type: "password"
  });
}).add("error", function (props) {
  var _React$useState5 = _react["default"].useState({
    password: "",
    error: false
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  var setPassword = function setPassword(e) {
    e.persist();
    setState(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  var toggleInputError = function toggleInputError() {
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        error: !prevState.error
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    errors: state.error ? ["There's been an error"] : false,
    label: /*#__PURE__*/_react["default"].createElement(StyledCustomLabel, null, "Enter Name", /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "account"
    })),
    onChange: setPassword,
    value: state.password || "",
    placeholder: "Enter password",
    name: "password",
    type: "password"
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    kind: "primary--reversed",
    onClick: toggleInputError
  }, "Toggle Error"));
});