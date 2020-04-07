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

  const dayDataSet = [
    {
      date: "2020-03-25T12:59:59.000Z",
      key: "2020-03-25T12:59:59.000Z",
      data: [
        { key: "Direct", data: 99999 },
        { key: "Push", data: 99591 },
        { key: "Deeplink", data: 99674 }
      ]
    },
    {
      date: "2020-03-26T12:59:59.000Z",
      key: "2020-03-26T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103444 },
        { key: "Push", data: 103913 },
        { key: "Deeplink", data: 103474 }
      ]
    },
    {
      date: "2020-03-27T12:59:59.000Z",
      key: "2020-03-27T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104629 },
        { key: "Push", data: 104318 },
        { key: "Deeplink", data: 104283 }
      ]
    },
    {
      date: "2020-03-28T12:59:59.000Z",
      key: "2020-03-28T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103528 },
        { key: "Push", data: 103990 },
        { key: "Deeplink", data: 103843 }
      ]
    },
    {
      date: "2020-03-29T12:59:59.000Z",
      key: "2020-03-29T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103796 },
        { key: "Push", data: 104483 },
        { key: "Deeplink", data: 104085 }
      ]
    },
    {
      date: "2020-03-30T12:59:59.000Z",
      key: "2020-03-30T12:59:59.000Z",
      data: [
        { key: "Direct", data: 103995 },
        { key: "Push", data: 103473 },
        { key: "Deeplink", data: 103513 }
      ]
    },
    {
      date: "2020-03-31T12:59:59.000Z",
      key: "2020-03-31T12:59:59.000Z",
      data: [
        { key: "Direct", data: 104910 },
        { key: "Push", data: 104590 },
        { key: "Deeplink", data: 104139 }
      ]
    },
    {
      date: "2020-04-01T00:59:59.000Z",
      key: "2020-04-01T00:59:59.000Z",
      data: [
        { key: "Direct", data: 4250 },
        { key: "Push", data: 4293 },
        { key: "Deeplink", data: 4298 }
      ]
    }
  ];
  const hourDataSet = [
    {
      key: 16,
      date: 16,
      id: 16,
      data: [
        { key: "Direct", data: 30554 },
        { key: "Push", data: 30215 },
        { key: "Deeplink", data: 30212 }
      ]
    },
    {
      key: 17,
      date: 17,
      id: 17,
      data: [
        { key: "Direct", data: 30136 },
        { key: "Push", data: 30157 },
        { key: "Deeplink", data: 30124 }
      ]
    },
    {
      key: 18,
      date: 18,
      id: 18,
      data: [
        { key: "Direct", data: 29977 },
        { key: "Push", data: 30206 },
        { key: "Deeplink", data: 30412 }
      ]
    },
    {
      key: 19,
      date: 19,
      id: 19,
      data: [
        { key: "Direct", data: 30406 },
        { key: "Push", data: 30315 },
        { key: "Deeplink", data: 30080 }
      ]
    },
    {
      key: 20,
      date: 20,
      id: 20,
      data: [
        { key: "Direct", data: 30655 },
        { key: "Push", data: 30250 },
        { key: "Deeplink", data: 30017 }
      ]
    },
    {
      key: 21,
      date: 21,
      id: 21,
      data: [
        { key: "Direct", data: 30415 },
        { key: "Push", data: 30116 },
        { key: "Deeplink", data: 30237 }
      ]
    },
    {
      key: 22,
      date: 22,
      id: 22,
      data: [
        { key: "Direct", data: 30515 },
        { key: "Push", data: 30215 },
        { key: "Deeplink", data: 30500 }
      ]
    },
    {
      key: 23,
      date: 23,
      id: 23,
      data: [
        { key: "Direct", data: 30284 },
        { key: "Push", data: 30180 },
        { key: "Deeplink", data: 30504 }
      ]
    },
    {
      key: 0,
      date: 0,
      id: 0,
      data: [
        { key: "Direct", data: 30370 },
        { key: "Push", data: 30669 },
        { key: "Deeplink", data: 30489 }
      ]
    },
    {
      key: 1,
      date: 1,
      id: 1,
      data: [
        { key: "Direct", data: 30130 },
        { key: "Push", data: 30346 },
        { key: "Deeplink", data: 30327 }
      ]
    },
    {
      key: 2,
      date: 2,
      id: 2,
      data: [
        { key: "Direct", data: 30429 },
        { key: "Push", data: 30518 },
        { key: "Deeplink", data: 30406 }
      ]
    },
    {
      key: 3,
      date: 3,
      id: 3,
      data: [
        { key: "Direct", data: 30148 },
        { key: "Push", data: 30243 },
        { key: "Deeplink", data: 30168 }
      ]
    },
    {
      key: 4,
      date: 4,
      id: 4,
      data: [
        { key: "Direct", data: 30177 },
        { key: "Push", data: 30406 },
        { key: "Deeplink", data: 30127 }
      ]
    },
    {
      key: 5,
      date: 5,
      id: 5,
      data: [
        { key: "Direct", data: 30245 },
        { key: "Push", data: 30298 },
        { key: "Deeplink", data: 30388 }
      ]
    },
    {
      key: 6,
      date: 6,
      id: 6,
      data: [
        { key: "Direct", data: 30134 },
        { key: "Push", data: 30652 },
        { key: "Deeplink", data: 30351 }
      ]
    },
    {
      key: 7,
      date: 7,
      id: 7,
      data: [
        { key: "Direct", data: 30291 },
        { key: "Push", data: 30420 },
        { key: "Deeplink", data: 30209 }
      ]
    },
    {
      key: 8,
      date: 8,
      id: 8,
      data: [
        { key: "Direct", data: 30411 },
        { key: "Push", data: 30120 },
        { key: "Deeplink", data: 30465 }
      ]
    },
    {
      key: 9,
      date: 9,
      id: 9,
      data: [
        { key: "Direct", data: 29564 },
        { key: "Push", data: 30095 },
        { key: "Deeplink", data: 29328 }
      ]
    },
    {
      key: 10,
      date: 10,
      id: 10,
      data: [
        { key: "Direct", data: 29313 },
        { key: "Push", data: 29374 },
        { key: "Deeplink", data: 29781 }
      ]
    },
    {
      key: 11,
      date: 11,
      id: 11,
      data: [
        { key: "Direct", data: 29835 },
        { key: "Push", data: 29383 },
        { key: "Deeplink", data: 29652 }
      ]
    },
    {
      key: 12,
      date: 12,
      id: 12,
      data: [
        { key: "Direct", data: 29408 },
        { key: "Push", data: 29336 },
        { key: "Deeplink", data: 29664 }
      ]
    },
    {
      key: 13,
      date: 13,
      id: 13,
      data: [
        { key: "Direct", data: 29694 },
        { key: "Push", data: 29568 },
        { key: "Deeplink", data: 29394 }
      ]
    },
    {
      key: 14,
      date: 14,
      id: 14,
      data: [
        { key: "Direct", data: 29695 },
        { key: "Push", data: 29571 },
        { key: "Deeplink", data: 29430 }
      ]
    },
    {
      key: 15,
      date: 15,
      id: 15,
      data: [
        { key: "Direct", data: 29343 },
        { key: "Push", data: 29540 },
        { key: "Deeplink", data: 29653 }
      ]
    }
  ];
  return (
    <>
      <MultiSeriesBarGraph
        data={hourDataSet}
        unit="HOURS"
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
