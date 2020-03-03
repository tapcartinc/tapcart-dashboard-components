"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summaryCard = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _Container = require("../../layout/Container");

var _Button = require("../../elements/Button");

var _Typography = require("../../elements/Typography");

var _data = require("./data");

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
  component: _index.SummaryCard,
  title: "Stats/SummaryCard"
};
exports["default"] = _default;

var summaryCard = function summaryCard() {
  var _useState = (0, _react.useState)({
    dimmension: "day",
    data: [],
    prevAvg: [],
    currentPeriodAvg: null,
    previousPeriodAvg: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var currentDimmension = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    currentDimmension.current = state.dimmension;

    if (!state.data.length && state.dimmension) {
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          data: (0, _data.getData)(state.dimmension)
        });
      });
    }

    if (previousDimmension !== state.dimmension || !state.currentPeriodAvg) {
      var currData = (0, _data.getData)(state.dimmension);
      var currentAverages = currData.reduce(function (acc, currPlot) {
        return acc + parseFloat(currPlot.data);
      }, 0) / currData.length;
      var prevData = (0, _data.getPrevData)(state.dimmension);
      var prevAverages = prevData.reduce(function (acc, prevPlot) {
        return acc + parseFloat(prevPlot.data);
      }, 0) / prevData.length;
      return setState(function (prevState) {
        return _objectSpread({}, prevState, {
          data: (0, _data.getData)(state.dimmension),
          currentPeriodAvg: parseFloat(currentAverages).toFixed(2),
          previousPeriodAvg: parseFloat(prevAverages).toFixed(2)
        });
      });
    }
  }, [state.dimmension, state.data]);
  var previousDimmension = currentDimmension.current;

  var setDimmension = function setDimmension(e) {
    e.persist();
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        dimmension: e.target.name
      });
    });
  };

  var previousPeriodAvg = state.previousPeriodAvg,
      currentPeriodAvg = state.currentPeriodAvg,
      data = state.data;
  return _react["default"].createElement(_Container.Container, null, _react["default"].createElement(_Typography.Header, null, state.dimmension), _react["default"].createElement(_Button.Button, {
    kind: "transparent--blue",
    name: "day",
    onClick: setDimmension
  }, "day"), _react["default"].createElement(_Button.Button, {
    kind: "transparent--blue",
    name: "week",
    onClick: setDimmension
  }, "week"), _react["default"].createElement(_Button.Button, {
    kind: "transparent--blue",
    name: "month",
    onClick: setDimmension
  }, "month"), _react["default"].createElement(_index.SummaryCard, {
    title: "Total App Sales",
    icon: "orders",
    data: data,
    currentScore: currentPeriodAvg,
    prevPeriodScore: previousPeriodAvg,
    currency: "$",
    percentageDifference: Number(parseFloat((Number(currentPeriodAvg) - Number(previousPeriodAvg)) / ((Number(currentPeriodAvg) + Number(previousPeriodAvg)) / 2) * 100).toFixed(4))
  }));
};

exports.summaryCard = summaryCard;