import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import { BarGraph } from "./index";
import deviceData from "./deviceData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";

export default {
  component: BarGraph,
  title: "Stats/Charts/BarGraph"
};

export const barGraph = () => {
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
      <BarGraph
        data={deviceData}
        colors={["#4cb7c5", "#02018c"]}
        statValues={statInfo}
        title="App Sessions by Device"
      />
    </>
  );
};
