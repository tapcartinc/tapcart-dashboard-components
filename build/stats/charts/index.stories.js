"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaGraphTest = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _dashVariables = require("../../utils/_dashVariables");

var _AreaGraph = require("./AreaGraph");

var _reaviz = require("reaviz");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import "../../utils/main.css";
var _default = {
  component: _AreaGraph.AreaGraph,
  title: "Stats/Charts/AreaGraph-testing"
};
exports["default"] = _default;

var areaGraphTest = function areaGraphTest() {
  var colorSwatches = [_dashVariables.colorPicker.blue, _dashVariables.colorPicker.green];
  var fakeData = [{
    key: "Current",
    data: [{
      key: (0, _moment["default"])("2020-04-15").toDate(),
      data: 54304715,
      id: "0"
    }, {
      key: (0, _moment["default"])("2020-04-16").toDate(),
      data: 104070107,
      id: "1"
    }, {
      key: (0, _moment["default"])("2020-04-17").toDate(),
      data: 103928612,
      id: "2"
    }]
  }, {
    key: "Previous",
    data: [{
      key: (0, _moment["default"])("2020-04-15").toDate(),
      data: 247712,
      id: "0"
    }, {
      key: (0, _moment["default"])("2020-04-16").toDate(),
      data: 249488,
      id: "1"
    }, {
      key: (0, _moment["default"])("2020-04-17").toDate(),
      data: 145418,
      id: "2"
    }]
  }];
  return _react["default"].createElement("div", null, _react["default"].createElement(_reaviz.AreaChart, {
    width: 470,
    height: 320,
    series: _react["default"].createElement(_reaviz.AreaSeries, {
      type: "stacked",
      colorScheme: colorSwatches
    }) // gridlines={
    // 	<GridlineSeries
    // 		line={
    // 			<Gridline
    // 				direction="y"
    // 				strokeColor={colorPicker.gray25}
    // 				strokeDasharray="0 0"
    // 				style={{ strokeDasharray: '0 0' }}
    // 			/>
    // 		}
    // 	/>
    // }
    ,
    yAxis: _react["default"].createElement(_reaviz.LinearYAxis, {
      type: "value",
      axisLine: null,
      tickSeries: _react["default"].createElement(_reaviz.LinearYAxisTickSeries, {
        line: null,
        label: _react["default"].createElement(_reaviz.LinearYAxisTickLabel, {
          padding: 5,
          rotation: false
        })
      })
    }),
    xAxis: _react["default"].createElement(_reaviz.LinearXAxis, {
      type: "time",
      tickSeries: _react["default"].createElement(_reaviz.LinearXAxisTickSeries, {
        line: null,
        label: _react["default"].createElement(_reaviz.LinearXAxisTickLabel, {
          padding: 5,
          rotation: -45,
          format: function format(d) {
            return (0, _moment["default"])(d).format("MMM D, YY");
          }
        })
      })
    }) // series={
    //   <StackedAreaSeries
    //     type="stacked"
    //     interpolation="smooth"
    //     colorScheme={["hotpink", "blue"]}
    //     area={
    //       <Area
    //         style={{ opacity: 1 }}
    //         // style={(data, idx) =>
    //         // 	data && data.length && data[0] && data[0].key === keys[0]
    //         // 		? {
    //         // 				opacity: fillColors ? 1 : 0.9,
    //         // 				fill: colorSwatches[1]
    //         // 		  }
    //         // 		: {
    //         // 				opacity: fillColors ? 1 : 0,
    //         // 				fill: colorSwatches[0]
    //         // 		  }
    //         // }
    //       />
    //     }
    //     // line={<Line strokeWidth={3} style={fillColors ? { stroke: 'transparent' } : null} />}
    //   />
    // }
    ,
    data: fakeData
  }));
};

exports.areaGraphTest = areaGraphTest;