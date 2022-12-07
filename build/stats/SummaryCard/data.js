"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrevData = exports.getData = void 0;
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function convert(d) {
  return (0, _moment["default"])(d).toDate();
}
var getData = function getData(dimmension) {
  switch (dimmension) {
    case "day":
      return [{
        key: convert("2020-02-13T01:00:00.000Z"),
        id: "0",
        data: 2
      }, {
        key: convert("2020-02-13T02:00:00.000Z"),
        id: "2",
        data: 4
      }, {
        key: convert("2020-02-13T03:00:00.000Z"),
        id: "3",
        data: 10
      }, {
        key: convert("2020-02-13T04:00:00.000Z"),
        id: "4",
        data: 12
      }, {
        key: convert("2020-02-13T06:00:00.000Z"),
        id: "6",
        data: 10
      }, {
        key: convert("2020-02-13T07:00:00.000Z"),
        id: "7",
        data: 14
      }];
    case "week":
      return [{
        key: convert("2020-02-07T01:00:00.000Z"),
        id: "0",
        data: 2
      }, {
        key: convert("2020-02-08T10:00:00.000Z"),
        id: "1",
        data: 5
      }, {
        key: convert("2020-02-09T01:00:00.000Z"),
        id: "2",
        data: 3
      }, {
        key: convert("2020-02-10T06:00:00.000Z"),
        id: "3",
        data: 8
      }, {
        key: convert("2020-02-11T07:00:00.000Z"),
        id: "4",
        data: 6
      }, {
        key: convert("2020-02-12T08:00:00.000Z"),
        id: "5",
        data: 13
      }];
    case "month":
      return [{
        key: convert("2020-02-13T01:00:00.000Z"),
        id: "0",
        data: 2
      }, {
        key: convert("2020-02-14T01:00:00.000Z"),
        id: "1",
        data: 4
      }, {
        key: convert("2020-02-15T01:00:00.000Z"),
        id: "2",
        data: 9
      }, {
        key: convert("2020-02-16T01:00:00.000Z"),
        id: "3",
        data: 5
      }, {
        key: convert("2020-02-17T01:00:00.000Z"),
        id: "4",
        data: 8
      }, {
        key: convert("2020-02-18T01:00:00.000Z"),
        id: "5",
        data: 5
      }, {
        key: convert("2020-02-19T01:00:00.000Z"),
        id: "6",
        data: 10
      }, {
        key: convert("2020-02-20T01:00:00.000Z"),
        id: "7",
        data: 7
      }, {
        key: convert("2020-02-21T01:00:00.000Z"),
        id: "8",
        data: 15
      }];
    default:
      break;
  }
};
exports.getData = getData;
var getPrevData = function getPrevData(dimmension) {
  switch (dimmension) {
    case "day":
      return [{
        key: convert("2020-02-13T01:00:00.000Z"),
        id: "0",
        data: 1
      }, {
        key: convert("2020-02-13T02:00:00.000Z"),
        id: "2",
        data: 3
      }, {
        key: convert("2020-02-13T03:00:00.000Z"),
        id: "3",
        data: 11
      }, {
        key: convert("2020-02-13T04:00:00.000Z"),
        id: "4",
        data: 11
      }, {
        key: convert("2020-02-13T06:00:00.000Z"),
        id: "6",
        data: 9
      }, {
        key: convert("2020-02-13T07:00:00.000Z"),
        id: "7",
        data: 12
      }];
    case "week":
      return [{
        key: convert("2020-02-07T01:00:00.000Z"),
        id: "0",
        data: 3
      }, {
        key: convert("2020-02-08T10:00:00.000Z"),
        id: "1",
        data: 6
      }, {
        key: convert("2020-02-09T01:00:00.000Z"),
        id: "2",
        data: 4
      }, {
        key: convert("2020-02-10T06:00:00.000Z"),
        id: "3",
        data: 9
      }, {
        key: convert("2020-02-11T07:00:00.000Z"),
        id: "4",
        data: 7
      }, {
        key: convert("2020-02-12T08:00:00.000Z"),
        id: "5",
        data: 14
      }];
    case "month":
      return [{
        key: convert("2020-02-13T01:00:00.000Z"),
        id: "0",
        data: 1
      }, {
        key: convert("2020-02-14T01:00:00.000Z"),
        id: "1",
        data: 3
      }, {
        key: convert("2020-02-15T01:00:00.000Z"),
        id: "2",
        data: 8
      }, {
        key: convert("2020-02-16T01:00:00.000Z"),
        id: "3",
        data: 4
      }, {
        key: convert("2020-02-17T01:00:00.000Z"),
        id: "4",
        data: 5
      }, {
        key: convert("2020-02-18T01:00:00.000Z"),
        id: "5",
        data: 3
      }, {
        key: convert("2020-02-19T01:00:00.000Z"),
        id: "6",
        data: 8
      }, {
        key: convert("2020-02-20T01:00:00.000Z"),
        id: "7",
        data: 6
      }, {
        key: convert("2020-02-21T01:00:00.000Z"),
        id: "8",
        data: 10
      }];
    default:
      break;
  }
};
exports.getPrevData = getPrevData;