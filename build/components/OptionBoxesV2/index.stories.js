"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _OptionBox = require("./OptionBox");

var _Icon = require("../../elements/Icon");

var _Typography = require("../../elements/Typography");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _react2.storiesOf)("Examples|Components/OptionBoxesV2", module).add("Basic", function () {
  var _React$useState = _react["default"].useState({
    selectedOptions: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var clickOption = function clickOption(option) {
    if (!state.selectedOptions.length) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          selectedOptions: [].concat(_toConsumableArray(state.selectedOptions), [option])
        });
      });
    } else {
      var updatedState = _toConsumableArray(state.selectedOptions);

      if (state.selectedOptions.includes(option)) {
        var index = state.selectedOptions.findIndex(function (currOption) {
          return currOption === option;
        });
        updatedState.splice(index, 1);
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            selectedOptions: updatedState
          });
        });
      } else {
        return setState(function (prevState) {
          return _objectSpread({}, prevState, {
            selectedOptions: [].concat(_toConsumableArray(updatedState), [option])
          });
        });
      }
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_index.OptionBoxesV2, {
    selectedOptions: state.selectedOptions
  }, /*#__PURE__*/_react["default"].createElement(_OptionBox.OptionBox, {
    value: "product",
    onClick: clickOption,
    id: 1
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "product"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, null, "Product")), /*#__PURE__*/_react["default"].createElement(_OptionBox.OptionBox, {
    value: "push",
    onClick: clickOption,
    id: 2
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "push"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, null, "Push")));
}).add("only one selected option", function () {
  var _React$useState3 = _react["default"].useState({
    selectedOptions: []
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var clickOption = function clickOption(option) {
    if (state.selectedOptions.includes(option)) {
      return setState({
        selectedOptions: []
      });
    } else {
      var updatedState = [];
      updatedState.push(option);
      return setState({
        selectedOptions: updatedState
      });
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_index.OptionBoxesV2, {
    selectedOptions: state.selectedOptions
  }, /*#__PURE__*/_react["default"].createElement(_OptionBox.OptionBox, {
    value: "product",
    onClick: clickOption,
    id: 1
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "product"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, null, "Product")), /*#__PURE__*/_react["default"].createElement(_OptionBox.OptionBox, {
    value: "push",
    onClick: clickOption,
    id: 2
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    type: "push"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, null, "Push")));
});