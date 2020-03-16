import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import chroma from "chroma-js";
import { AreaGraph } from "./index";
import { HeatMapGraph } from "../HeatMapGraph/index";
import stackedData from "./stackedData.json";
import singularData from "./singularData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";

export default {
  component: AreaGraph,
  title: "Stats/Charts/AreaGraph"
};

export const areaGraph = () => {
  const statValues = useGetDifference(stackedData[0].data, stackedData[1].data);
  const statInfo = { ...statValues, title: "Total Sales" };

  const cats = [
    {
      key: new Date("11/29/2019"),
      data: 10
    },
    {
      key: new Date("11/30/2019"),
      data: 14
    },
    {
      key: new Date("12/01/2019"),
      data: 5
    },
    {
      key: new Date("12/02/2019"),
      data: 18
    }
  ];

  return (
    <>
      <AreaGraph
        stacked={true}
        data={stackedData}
        statValues={statInfo}
        currency="$"
        title="Sales over Time"
        gradient
      />
      <AreaGraph
        tooltip={{ text: "tooltip text", color: colorPicker.grayBlue }}
        colors={["#4cb7c5", "#02018c"]}
        stacked={true}
        // data={stackedData}
        data={[
          {
            key: "Current",
            data: [
              {
                key: "2020-02-01T07:00:00.000Z",
                id: "0",
                data: 485
              },
              {
                key: "2020-02-02T08:00:00.000Z",
                id: "1",
                data: 892
              },
              {
                key: "2020-02-03T09:00:00.000Z",
                id: "2",
                data: 995
              },
              {
                key: "2020-02-04T10:00:00.000Z",
                id: "3",
                data: 791
              },
              {
                key: "2020-02-05T07:00:00.000Z",
                id: "4",
                data: 1163
              },
              {
                key: "2020-02-06T08:00:00.000Z",
                id: "5",
                data: 1261
              },
              {
                key: "2020-02-07T09:00:00.000Z",
                id: "6",
                data: 1592
              }
            ]
          },
          {
            key: "Previous",
            data: [
              {
                key: "2020-02-01T07:00:00.000Z",
                id: "0",
                data: 321
              },
              {
                key: "2020-02-02T08:00:00.000Z",
                id: "1",
                data: 232
              },
              {
                key: "2020-02-03T09:00:00.000Z",
                id: "2",
                data: 483
              },
              {
                key: "2020-02-04T10:00:00.000Z",
                id: "3",
                data: 229
              },
              {
                key: "2020-02-05T07:00:00.000Z",
                id: "4",
                data: 552
              },
              {
                key: "2020-02-06T08:00:00.000Z",
                id: "5",
                data: 443
              },
              {
                key: "2020-02-07T09:00:00.000Z",
                id: "6",
                data: 1019
              }
            ]
          }
        ]}
        title="Sessions by New vs. Returning"
        fillColors
      />
      <HeatMapGraph
        tooltip={{ text: "tooltip text", color: colorPicker.grayBlue }}
        colors={[colorPicker.green100]}
        stacked={false}
        // data={singularData}
        currency="$"
        title="Sales over Time"
      />
    </>
  );
};
