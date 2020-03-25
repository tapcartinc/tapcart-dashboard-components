import React from "react";
import "../../../utils/main.css";
import { colorPicker } from "../../../utils/_dashVariables";
import { MultiSeriesBarGraph } from "./index";
import sessionPerSourceData from "./sessionPerSourceData.json";
import { useGetDifference } from "../../../hooks/useGetDifference";
import { generateDates } from "../HeatMapGraph/generateDates";
import moment from "moment";
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

  const dataSet = [
    {
      date: "2020-03-17T23:59:59.000Z",
      key: "2020-03-17T23:59:59.000Z",
      data: [
        { key: "Direct", data: 4409, key: "2020-03-17T23:59:59.000Z" },
        { key: "Push", data: 4410, key: "2020-03-17T23:59:59.000Z" },
        { key: "Deeplink", data: 4276, key: "2020-03-17T23:59:59.000Z" }
      ]
    },
    {
      date: "2020-03-18T12:59:59.000Z",
      key: "2020-03-18T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103736, key: "2020-03-18T12:59:59.000Z" },
        { key: "Push", data: 103396, key: "2020-03-18T12:59:59.000Z" },
        { key: "Deeplink", data: 103306, key: "2020-03-18T12:59:59.000Z" }
      ]
    },
    {
      date: "2020-03-19T12:59:59.000Z",
      key: "2020-03-19T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104003 },
        { key: "Push", data: 104351 },
        { key: "Deeplink", data: 104537 }
      ]
    },
    {
      date: "2020-03-20T12:59:59.000Z",
      key: "2020-03-20T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104089 },
        { key: "Push", data: 104250 },
        { key: "Deeplink", data: 104547 }
      ]
    },
    {
      date: "2020-03-21T12:59:59.000Z",
      key: "2020-03-21T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104328 },
        { key: "Push", data: 103500 },
        { key: "Deeplink", data: 103714 }
      ]
    },
    {
      date: "2020-03-22T12:59:59.000Z",
      key: "2020-03-22T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104298 },
        { key: "Push", data: 103773 },
        { key: "Deeplink", data: 104363 }
      ]
    },
    {
      date: "2020-03-23T12:59:59.000Z",
      key: "2020-03-23T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103783 },
        { key: "Push", data: 103217 },
        { key: "Deeplink", data: 103947 }
      ]
    },
    {
      date: "2020-03-24T11:59:59.000Z",
      key: "2020-03-24T11:59:59.000Z",
      data: [
        { key: "Direct", data: 99904 },
        { key: "Push", data: 99313 },
        { key: "Deeplink", data: 99782 }
      ]
    }
  ];

  return (
    <>
      <MultiSeriesBarGraph
        data={dataSet}
        body={[
          {
            title: "Active Sessions",
            total: "2.18M",
            previousTotal: "2.18M",
            percentChange: -0.05
          }
        ]}
        info={{
          id: "_5f11jhwk1",
          type: "card",
          name: "App Sessions per Source",
          description:
            'Allows you to view your sessions across different source types. \nSource types are divided into "Push", "Direct", or "Deeplink".'
        }}
        range={{
          start: "2020-03-17T22:01:48.442Z",
          end: "2020-03-24T22:01:48.442Z"
        }}
        keys={["Direct", "Push", "Deeplink"]}
        colors={["#01006f", "#373aaf", "#738eda"]}
      />
    </>
  );
};
