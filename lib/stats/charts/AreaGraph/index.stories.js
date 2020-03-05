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
        data={stackedData}
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
