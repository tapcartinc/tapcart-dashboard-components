import React from "react";
// import "../../utils/main.css";
import moment from "moment";
import { colorPicker } from "../../utils/_dashVariables";
import { AreaGraph } from "./AreaGraph";
import {
  AreaChart,
  AreaSeries,
  GridlineSeries,
  Gridline,
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  StackedAreaSeries,
  TooltipArea,
  ChartTooltip,
  Gradient,
  GradientStop,
  Line,
  Area,
} from "reaviz";

export default {
  component: AreaGraph,
  title: "Stats/Charts/AreaGraph-testing",
};

export const areaGraphTest = () => {
  const colorSwatches = [colorPicker.blue, colorPicker.green];
  const fakeData = [
    {
      key: "Current",
      data: [
        { key: moment("2020-04-15").toDate(), data: 54304715, id: "0" },
        { key: moment("2020-04-16").toDate(), data: 104070107, id: "1" },
        { key: moment("2020-04-17").toDate(), data: 103928612, id: "2" },
      ],
    },
    {
      key: "Previous",
      data: [
        { key: moment("2020-04-15").toDate(), data: 247712, id: "0" },
        { key: moment("2020-04-16").toDate(), data: 249488, id: "1" },
        { key: moment("2020-04-17").toDate(), data: 145418, id: "2" },
      ],
    },
  ];
  return (
    <div>
      <AreaChart
        width={470}
        height={320}
        series={<AreaSeries type="stacked" colorScheme={colorSwatches} />}
        // gridlines={
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
        yAxis={
          <LinearYAxis
            type="value"
            axisLine={null}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearYAxisTickLabel padding={5} rotation={false} />}
              />
            }
          />
        }
        xAxis={
          <LinearXAxis
            type="time"
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={
                  <LinearXAxisTickLabel
                    padding={5}
                    rotation={-45}
                    format={(d) => moment(d).format("MMM D, YY")}
                  />
                }
              />
            }
          />
        }
        // series={
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
        data={fakeData}
      />
    </div>
  );
};
