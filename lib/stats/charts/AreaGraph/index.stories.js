import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import chroma from "chroma-js";
import { AreaGraph } from "./index";
import stackedData from "./stackedData.json";
import singularData from "./singularData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";
import {
  StyledGraphCard,
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference
} from "./styles";

export default {
  component: AreaGraph,
  title: "Charts/AreaGraph"
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
        // percentageDifference={}
      />
      <AreaGraph
        tooltip={{ text: "tooltip text", color: colorPicker.grayBlue }}
        colors={[colorPicker.green100]}
        stacked={false}
        data={singularData}
        currency="$"
        title="Sales over Time"
      />
    </>
  );
};
