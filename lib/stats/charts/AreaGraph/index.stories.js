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

  const dataTest = [
    {
      key: "Current",
      data: [
        { key: "2020-03-17T22:59:59.000Z", data: 19423167, id: 0 },
        { key: "2020-03-18T12:59:59.000Z", data: 155528908, id: 1 },
        { key: "2020-03-19T12:59:59.000Z", data: 156040425, id: 2 },
        { key: "2020-03-20T12:59:59.000Z", data: 156315891, id: 3 },
        { key: "2020-03-21T12:59:59.000Z", data: 156397840, id: 4 },
        { key: "2020-03-22T12:59:59.000Z", data: 155833793, id: 5 },
        { key: "2020-03-23T12:59:59.000Z", data: 155792609, id: 6 },
        { key: "2020-03-24T10:59:59.000Z", data: 136082742, id: 7 }
      ]
    },
    {
      key: "Previous",
      data: [
        { key: "2020-03-17T22:59:59.000Z", data: 19276739, id: 0 },
        { key: "2020-03-18T12:59:59.000Z", data: 1564021, id: 1 },
        { key: "2020-03-19T12:59:59.000Z", data: 1313187, id: 2 },
        { key: "2020-03-20T12:59:59.000Z", data: 155755396, id: 3 },
        { key: "2020-03-21T12:59:59.000Z", data: 1516638, id: 4 },
        { key: "2020-03-22T12:59:59.000Z", data: 155676796, id: 5 },
        { key: "2020-03-23T12:59:59.000Z", data: 155919436, id: 6 },
        { key: "2020-03-24T10:59:59.000Z", data: 135976086, id: 7 }
      ]
    }
  ];

  return (
    <>
      {/* <AreaGraph
        stacked={true}
        data={stackedData}
        statValues={statInfo}
        currency="$"
        title="Sales over Time"
        gradient
      /> */}
      <AreaGraph
        tooltip={{ text: "tooltip text", color: colorPicker.grayBlue }}
        // colors={["#4cb7c5", "#02018c"]}
        stacked={true}
        data={dataTest}
        title="Sessions by New vs. Returning"
        body={[
          {
            title: "Total Sales",
            total: "1091.5M",
            previousTotal: "1091.1M",
            percentChange: 0.04
          }
        ]}
        range={{
          start: "2020-03-17T22:01:48.442Z",
          end: "2020-03-24T22:01:48.442Z"
        }}
        info={{
          id: "_jmafzy9ik",
          type: "card",
          name: "Sales over Time",
          description:
            "Allows you to view your sessions over the \n last 30 days, graphed as a heatmap."
        }}
      />
      {/* <HeatMapGraph
        tooltip={{ text: "tooltip text", color: colorPicker.grayBlue }}
        colors={[colorPicker.green100]}
        stacked={false}
        // data={singularData}
        currency="$"
        title="Sales over Time"
      /> */}
    </>
  );
};
