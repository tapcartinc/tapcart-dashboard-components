import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import { MultiSeriesBarGraph } from "./index";
import sessionPerSourceData from "./sessionPerSourceData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";
import { generateDates } from "../HeatMapGraph/generateDates";

export default {
  component: MultiSeriesBarGraph,
  title: "Stats/Charts/MultiSeriesBarGraph"
};

export const multiSeriesBarGraph = () => {
  const data = generateDates(new Date("11/1/2019"), new Date("11/24/2019"));

  const statValues = {};
  const statInfo = {
    ...statValues,
    sectionInfo: [
      {
        title: "Active Sessions",
        currentTotal: "2090000",
        prevTotal: "2103000",
        difference: "↓ 2,103 (30.2%)"
      }
    ]
  };

  return (
    <>
      <MultiSeriesBarGraph
        data={data}
        range={{
          startDate: new Date("11/1/2019"),
          endDate: new Date("11/24/2019")
        }}
        keys={["Direct", "Push", "Deeplink"]}
        colors={["#01006f", "#373aaf", "#738eda"]}
        statValues={statInfo}
        title="App Sessions by Device"
      />
    </>
  );
};
