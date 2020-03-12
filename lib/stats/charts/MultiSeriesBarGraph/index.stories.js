import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import { MultiSeriesBarGraph } from "./index";
import sessionPerSourceData from "./sessionPerSourceData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";

export default {
  component: MultiSeriesBarGraph,
  title: "Stats/Charts/MultiSeriesBarGraph"
};

export const multiSeriesBarGraph = () => {
  const statValues = {};
  const statInfo = {
    ...statValues,
    sectionInfo: [
      {
        title: "iOS Sessions",
        currentTotal: "1320000",
        prevTotal: "1220000",
        difference: "↑ 2,103 (30.2%)"
      },
      {
        title: "Android Sessions",
        currentTotal: "770000",
        prevTotal: "771000",
        difference: "↓ 2,103 (30.2%)"
      }
    ]
  };

  return (
    <>
      <MultiSeriesBarGraph
        data={sessionPerSourceData}
        colors={["#01006f", "#373aaf", "#738eda"]}
        statValues={statInfo}
        title="App Sessions by Device"
      />
    </>
  );
};
