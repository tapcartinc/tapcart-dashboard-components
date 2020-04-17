"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _Textarea = require("../Textarea");

var _Input = require("../Input");

var _index = require("./index");

var _FieldV = require("../FieldV2");

var _FieldHeader = require("../FieldHeader");

var _FieldLabel = require("../FieldLabel");

var _FieldDescription = require("../FieldDescription");

var _FieldColumn = require("../FieldColumn");

var _Button = require("../../elements/Button");

var _ImageUploaderV = require("../ImageUploaderV2");

var _SegmentedControl = require("../SegmentedControl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _react2.storiesOf)("Examples|Components/FieldsV2", module).add("Basic", function (props) {
  var _React$useState = _react["default"].useState({
    test: "",
    toggleState: false,
    image: null,
    currentSelection: "disabled"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var setInput = function setInput(e) {
    e.persist();
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        test: e.target.value
      });
    });
  };

  var handleImageUpload = function handleImageUpload(files) {
    var selectedImage = "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        image: selectedImage
      });
    });
  };

  var changeSection = function changeSection(selectedTab) {
    if (state.currentSelection === selectedTab) {
      return;
    }

    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        currentSelection: selectedTab
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.FieldsV2, {
    sectionHeader: "Section Header"
  }, /*#__PURE__*/_react["default"].createElement(_FieldV.FieldV2, null, /*#__PURE__*/_react["default"].createElement(_FieldHeader.FieldHeader, {
    stretch: false
  }, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, null, "Label here"), /*#__PURE__*/_react["default"].createElement(_FieldDescription.FieldDescription, null, "Description here")), /*#__PURE__*/_react["default"].createElement(_Toggle["default"], {
    className: "flex-end",
    type: "basic",
    id: "toggle",
    toggleState: state.toggleState,
    onChange: function onChange() {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          toggleState: !state.toggleState
        });
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    onChange: setInput,
    value: state.test || "",
    placeholder: "Enter Popup Text"
  })), /*#__PURE__*/_react["default"].createElement(_FieldV.FieldV2, null, /*#__PURE__*/_react["default"].createElement(_FieldHeader.FieldHeader, {
    stretch: false
  }, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, null, "Label here"), /*#__PURE__*/_react["default"].createElement(_FieldDescription.FieldDescription, null, "Description here")), /*#__PURE__*/_react["default"].createElement(_SegmentedControl.SegmentedControl, {
    type: "secondary",
    items: {
      disabled: "disabled",
      optional: "optional",
      required: "mouse"
    },
    action: changeSection,
    current: state.currentSelection
  })), /*#__PURE__*/_react["default"].createElement(_FieldV.FieldV2, _extends({}, props, {
    fieldFlow: "vertical",
    label: "Display sold out products",
    description: "This will hide or show sold out products in your mobile app"
  }), /*#__PURE__*/_react["default"].createElement(_FieldHeader.FieldHeader, {
    stretch: true
  }, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, null, "Label here"), /*#__PURE__*/_react["default"].createElement(_FieldDescription.FieldDescription, null, "Description here")), /*#__PURE__*/_react["default"].createElement(_ImageUploaderV.ImageUploaderV2, {
    label: "Image",
    value: state.image || "",
    handleImageUpload: handleImageUpload
  }), /*#__PURE__*/_react["default"].createElement(_Textarea.Textarea, {
    onChange: setInput,
    value: state.test || "",
    label: "Popup Custom Text",
    placeholder: "Enter Popup Text"
  }))));
});