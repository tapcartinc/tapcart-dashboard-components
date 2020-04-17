"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _AccordionLabel = require("../AccordionLabel");

var _AccordionPanelBody = require("../AccordionPanelBody");

var _AccordionV3Panel = _interopRequireDefault(require("../AccordionV3Panel"));

var _index = _interopRequireDefault(require("./index"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Input = require("../Input");

var _Button = require("../../elements/Button");

var _OptionBoxes = require("../OptionBoxes");

var _Typography = require("../../elements/Typography");

var _dashVariables = require("../../utils/_dashVariables");

var _Icon = require("../../elements/Icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("./story-styles.scss");

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

(0, _react2.storiesOf)("Examples|Components/AccordionV3", module).add("Push", function () {
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

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onePanelOpen: true,
    steps: true,
    includeBorder: true,
    spacing: 20,
    panelHeight: 65,
    includeArrows: true
  }, /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 1,
    complete: state.values.one ? true : false,
    errors: errors && errors["one"]
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, errors && errors["one"] && !state.values.one ? /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.red
  }, errors["one"][0]) : /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.black
  }, "one")), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    name: "one",
    value: state.values.one || "",
    onChange: setField
  }))), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 2,
    complete: state.values.two ? true : false,
    errors: errors && errors["two"]
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, "two"), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    name: "two",
    value: state.values.two || "",
    onChange: setField
  }))), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 3,
    complete: state.values.three ? true : false,
    errors: errors && errors["three"]
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, errors && errors["three"] && !state.values.three ? /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.red
  }, errors["three"][0]) : /*#__PURE__*/_react["default"].createElement(_Typography.Sofia, {
    fontSize: "16px",
    color: _dashVariables.colorPicker.black
  }, "three")), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, /*#__PURE__*/_react["default"].createElement(_OptionBoxes.OptionBoxes, {
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
  })))), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    kind: "primary",
    onClick: checkForErrors
  }, "Submit"));
});

var StyledMenuExampleLabel = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__StyledMenuExampleLabel",
  componentId: "bdvj15-0"
})(["display:flex;align-items:center;height:100%;width:100%;"]);

(0, _react2.storiesOf)("Examples|Components/AccordionV3", module).add("Menu", function () {
  var extraPanelStyles = {
    borderBottom: "1px solid ".concat(_dashVariables.colorPicker.gray25),
    borderRadius: "0px",
    height: "100%",
    width: "100%"
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    spacing: 0,
    panelHeight: 50,
    includeArrows: true
  }, /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    style: _objectSpread({
      borderTop: "1px solid ".concat(_dashVariables.colorPicker.gray25)
    }, extraPanelStyles),
    id: 1
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: _dashVariables.colorPicker.blue,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, "FEATURED"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, "FEATURED BODY")), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    style: extraPanelStyles,
    id: 2
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: _dashVariables.colorPicker.blue,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, "COLLECTIONS"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, "COLLECTIONS BODY")), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    style: extraPanelStyles,
    id: 3
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: _dashVariables.colorPicker.blue,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, "ORDERS"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, "ORDERS BODY"))));
});
(0, _react2.storiesOf)("Examples|Components/AccordionV3", module).add("with class props", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    spacing: 0,
    panelHeight: 50,
    includeArrows: true,
    className: "accordion-with-classname"
  }, /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 1,
    className: "accordion-with-classname__panel-one"
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, {
    labelClassName: "accordion-with-classname__label"
  }, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: "#FFFFFF",
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: "#FFFFFF"
  }, "FEATURED"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, {
    bodyClassName: "accordion-with-classname__body"
  }, "FEATURED BODY")), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 2
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: _dashVariables.colorPicker.blue,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, "COLLECTIONS"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, "COLLECTIONS BODY")), /*#__PURE__*/_react["default"].createElement(_AccordionV3Panel["default"], {
    id: 3
  }, /*#__PURE__*/_react["default"].createElement(_AccordionLabel.AccordionLabel, null, /*#__PURE__*/_react["default"].createElement(StyledMenuExampleLabel, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      height: "10px"
    },
    type: "double-dot-dot-dot",
    fill: _dashVariables.colorPicker.blue,
    iconLeft: true
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Circular, {
    letterSpacing: "1px",
    fontSize: "14px",
    color: _dashVariables.colorPicker.black
  }, "ORDERS"))), /*#__PURE__*/_react["default"].createElement(_AccordionPanelBody.AccordionPanelBody, null, "ORDERS BODY"))));
});