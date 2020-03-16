import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import { PieGraph } from "./index";
import pushSubscribersData from "./pushSubscribersData.json";

export default {
  component: PieGraph,
  title: "Stats/Charts/PieGraph"
};

export const pieGraph = () => {
  const statValues = {};
  const statInfo = {
    ...statValues,
    sectionInfo: [
      {
        title: "iOS Sessions",
        currentTotal: "1320000",
        prevTotal: "1220000",
        difference: "↑ 2,103 (30.2%)"
      }
    ]
  };

  return (
    <>
      <PieGraph
        data={pushSubscribersData}
        colors={["#02018c", "#4cb7c5"]}
        statValues={statInfo}
        title="Push Subscribers by Device"
      />
    </>
  );
};
