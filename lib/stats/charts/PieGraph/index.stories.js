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
        info={{
          id: "_falzewu1g",
          type: "card",
          name: "Push Subscribers by Device",
          description:
            "Allows you to view your push subscribers by the users device."
        }}
        range={{
          start: "2020-03-17T22:01:48.442Z",
          end: "2020-03-24T22:01:48.442Z"
        }}
        body={[{ title: "Total Subscribers", total: 393 }]}
        data={[
          { key: "iOS", data: 220 },
          { key: "Android", data: 173 }
        ]}
        colors={["#02018c", "#4cb7c5"]}
      />
    </>
  );
};
