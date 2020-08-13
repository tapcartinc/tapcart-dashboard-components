"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDataToo = exports.generateDates = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateRandomData = function generateRandomData() {
  // const data = [];
  // let start = 0;
  // const end = 24;
  // while (start <= end) {
  //   const dataSet = {};
  //   dataSet["key"] = start;
  //   dataSet["data"] = (Math.random() * (1000 - 10) + 10).toFixed(2);
  //   data.push(dataSet);
  //   start = start + 1;
  // }
  var data = [{
    key: "Direct",
    data: (Math.random() * (1000 - 10) + 10).toFixed(2)
  }, {
    key: "Push",
    data: (Math.random() * (1000 - 10) + 10).toFixed(2)
  }, {
    key: "Deeplink",
    data: (Math.random() * (1000 - 10) + 10).toFixed(2)
  }];
  return data;
};

var getDay = function getDay(date) {
  var day = (0, _moment["default"])(date).day();

  switch (day) {
    case 0:
      return "SUN";

    case 6:
      return "SAT";

    case 5:
      return "FRI";

    case 4:
      return "THU";

    case 3:
      return "WED";

    case 2:
      return "TUE";

    case 1:
      return "Mon";

    default:
      break;
  }
};

var generateDates = function generateDates(rangeStart, rangeFinish) {
  var heatMapData = [];
  var end = (0, _moment["default"])(rangeFinish);
  var start = (0, _moment["default"])(rangeStart);

  while (start <= end) {
    var dataSet = {};
    dataSet["date"] = start;
    dataSet["key"] = (0, _moment["default"])(start).format("MMM D");
    dataSet["data"] = generateRandomData();
    heatMapData.push(dataSet);
    start = (0, _moment["default"])(start).add(1, "days");
  }

  return heatMapData;
};

exports.generateDates = generateDates;

var getTheDay = function getTheDay(day) {
  switch (day) {
    case 0:
      return "Sun";

    case 6:
      return "Sat";

    case 5:
      return "Fri";

    case 4:
      return "Thur";

    case 3:
      return "Wed";

    case 2:
      return "Tue";

    case 1:
      return "Mon";

    default:
      break;
  }
};

var generateDayData = function generateDayData() {
  var dayData = [];
  var start = 0;
  var end = 7;

  while (start < end) {
    var day = {};
    day["key"] = getTheDay(start);
    day["data"] = Number((Math.random() * (800 - 0) + 0).toFixed(2));
    day["metadata"] = {
      previousPeriod: Number((Math.random() * (800 - 0) + 0).toFixed(2))
    };
    day.metadata = _objectSpread(_objectSpread({}, day.metadata), {}, {
      percentageDiff: Number(parseFloat((Number(day.data) - Number(day.metadata.previousPeriod)) / ((Number(day.data) + Number(day.metadata.previousPeriod)) / 2) * 100).toFixed(4))
    });
    dayData.push(day);
    start = start + 1;
  }

  return dayData;
};

var getHour = function getHour(hour) {
  var setHour = hour;
  var amOrPm = hour >= 12 ? "pm" : "am";
  setHour = hour % 12 || 12;
  var finalTime = "".concat(setHour).concat(amOrPm);
  return finalTime;
};

var generateDataToo = function generateDataToo() {
  var heatMapData = [];
  var start = 0;
  var end = 23;

  while (start <= end) {
    var hourSet = {};
    hourSet["key"] = getHour(start);
    hourSet["id"] = start;
    hourSet["data"] = generateDayData();
    heatMapData.push(hourSet);
    start = start + 1;
  }

  return heatMapData;
}; // console.log("generateDataToo", generateDates());


exports.generateDataToo = generateDataToo;