"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordionSecondVersion = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AccordionLabel = require("../AccordionLabel");

var _AccordionPanelBody = require("../AccordionPanelBody");

var _AccordionV3Panel = _interopRequireDefault(require("../AccordionV3Panel"));

var _index = _interopRequireDefault(require("./index"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Input = require("../Input");

var _Button = require("../../elements/Button");

var _OptionBoxes = require("../OptionBoxes");

var _Typography = require("../../elements/Typography");

var _Icon = require("../../elements/Icon");

var _dashVariables = require("../../utils/_dashVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  component: _index["default"],
  title: "Components/AccordionV3",
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var accordionSecondVersion = function accordionSecondVersion() {
  var _useState = (0, _react.useState)({
    values: {
      one: "",
      two: "",
      three: null
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  console.log("errors", errors); // useEffect(() => {
  //   if (errors && errors)
  // }, [state.values.one, state.values.two, state.values.three]);

  var errorSchemaCheck = {
    one: ["error - one"],
    three: ["error - three"]
  };

  var setField = function setField(e) {
    e.persist();
    var currentField = e.target.name;
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        values: _objectSpread({}, prevState.values, _defineProperty({}, currentField, e.target.value))
      });
    });
  };

  var setOptionField = function setOptionField(option) {
    if (!option) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          values: _objectSpread({}, prevState.values, {
            three: null
          })
        });
      });
    }

    if (state.values.three && option.value === state.values.three.value) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          values: _objectSpread({}, prevState.values, {
            three: null
          })
        });
      });
    }

    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        values: _objectSpread({}, prevState.values, {
          three: option
        })
      });
    });
  };

  var checkForErrors = function checkForErrors() {
    var returningErrorObj = {};
    Object.entries(errorSchemaCheck).map(function (errorField) {
      if (!state.values[errorField[0]]) {
        returningErrorObj[errorField[0]] = errorField[1];
      }
    });
    return setErrors(returningErrorObj);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index["default"], {
    onePanelOpen: true,
    steps: true,
    includeBorder: true,
    spacing: 20,
    panelHeight: 65,
    includeArrows: true
  }, _react["default"].createElement(_AccordionV3Panel["default"], {
    complete: state.values.one,
    errors: errors && errors["one"]
  }, _react["default"].createElement(_AccordionLabel.AccordionLabel, null, errors && errors["one"] && !state.values.one ? _react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.red
  }, errors["one"][0]) : _react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.black
  }, "one")), _react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, _react["default"].createElement(_Input.Input, {
    name: "one",
    value: state.values.one || "",
    onChange: setField
  }))), _react["default"].createElement(_AccordionV3Panel["default"], {
    complete: state.values.two,
    errors: errors && errors["two"]
  }, _react["default"].createElement(_AccordionLabel.AccordionLabel, null, "two"), _react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, _react["default"].createElement(_Input.Input, {
    name: "two",
    value: state.values.two || "",
    onChange: setField
  }))), _react["default"].createElement(_AccordionV3Panel["default"], {
    complete: state.values.three,
    errors: errors && errors["three"]
  }, _react["default"].createElement(_AccordionLabel.AccordionLabel, null, "three"), _react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, _react["default"].createElement(_OptionBoxes.OptionBoxes, {
    size: "120px",
    clickOption: setOptionField,
    name: "three",
    selectedOption: state.values.three,
    options: [{
      label: "cat",
      icon: "design",
      value: "cat"
    }, {
      label: "dog",
      icon: "push",
      value: "dog"
    }]
  })))), _react["default"].createElement(_Button.Button, {
    kind: "primary",
    onClick: checkForErrors
  }, "Submit"));
};

exports.accordionSecondVersion = accordionSecondVersion;