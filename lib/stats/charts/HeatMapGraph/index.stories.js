import React, { useState } from "react";
import { HeatMapGraph } from "../HeatMapGraph/index";
import { heatmapColors } from "../../utils/_colors";
import { colorPicker } from "../../../utils/_dashVariables";
import "../../../utils/main.css";

export default {
  component: HeatMapGraph,
  title: "Stats/Charts/HeatMapGraph"
};

export const heatmapGraph = () => {
  const heatmapData = [
    {
      key: 0,
      id: "0",
      data: [
        { key: "Sun", data: 13188, id: 0 },
        { key: "Mon", data: 13302, id: 1 },
        { key: "Tue", data: 13092, id: 2 },
        { key: "Wed", data: 12989, id: 3 },
        { key: "Thu", data: 13178, id: 4 },
        { key: "Fri", data: 12669, id: 5 },
        { key: "Sat", data: 10633, id: 6 },
        { key: "Sun", data: 10918, id: 0 }
      ]
    },
    {
      key: 1,
      id: "1",
      data: [
        { key: "Sun", data: 12896, id: 0 },
        { key: "Mon", data: 13176, id: 1 },
        { key: "Tue", data: 12773, id: 2 },
        { key: "Wed", data: 12945, id: 3 },
        { key: "Thu", data: 13036, id: 4 },
        { key: "Fri", data: 13173, id: 5 },
        { key: "Sat", data: 11010, id: 6 },
        { key: "Sun", data: 10918, id: 0 }
      ]
    },
    {
      key: 2,
      id: "2",
      data: [
        { key: "Sun", data: 13331, id: 0 },
        { key: "Mon", data: 12926, id: 1 },
        { key: "Tue", data: 12822, id: 2 },
        { key: "Wed", data: 12925, id: 3 },
        { key: "Thu", data: 12932, id: 4 },
        { key: "Fri", data: 13369, id: 5 },
        { key: "Sat", data: 11009, id: 6 },
        { key: "Sun", data: 10605, id: 0 }
      ]
    },
    {
      key: 3,
      id: "3",
      data: [
        { key: "Sun", data: 13029, id: 0 },
        { key: "Mon", data: 12858, id: 1 },
        { key: "Tue", data: 13402, id: 2 },
        { key: "Wed", data: 12845, id: 3 },
        { key: "Thu", data: 12796, id: 4 },
        { key: "Fri", data: 12899, id: 5 },
        { key: "Sat", data: 10752, id: 6 },
        { key: "Sun", data: 11040, id: 0 }
      ]
    },
    {
      key: 4,
      id: "4",
      data: [
        { key: "Sun", data: 13247, id: 0 },
        { key: "Mon", data: 12807, id: 1 },
        { key: "Tue", data: 13128, id: 2 },
        { key: "Wed", data: 12808, id: 3 },
        { key: "Thu", data: 13124, id: 4 },
        { key: "Fri", data: 12628, id: 5 },
        { key: "Sat", data: 11063, id: 6 },
        { key: "Sun", data: 10777, id: 0 }
      ]
    },
    {
      key: 5,
      id: "5",
      data: [
        { key: "Sun", data: 12884, id: 0 },
        { key: "Mon", data: 12873, id: 1 },
        { key: "Tue", data: 13005, id: 2 },
        { key: "Wed", data: 12769, id: 3 },
        { key: "Thu", data: 13115, id: 4 },
        { key: "Fri", data: 12965, id: 5 },
        { key: "Sat", data: 10908, id: 6 },
        { key: "Sun", data: 10808, id: 0 }
      ]
    },
    {
      key: 6,
      id: "6",
      data: [
        { key: "Sun", data: 12970, id: 0 },
        { key: "Mon", data: 12804, id: 1 },
        { key: "Tue", data: 13124, id: 2 },
        { key: "Wed", data: 12937, id: 3 },
        { key: "Thu", data: 13356, id: 4 },
        { key: "Fri", data: 12825, id: 5 },
        { key: "Sat", data: 10910, id: 6 },
        { key: "Sun", data: 11005, id: 0 }
      ]
    },
    {
      key: 7,
      id: "7",
      data: [
        { key: "Sun", data: 12840, id: 0 },
        { key: "Mon", data: 13199, id: 1 },
        { key: "Tue", data: 13132, id: 2 },
        { key: "Wed", data: 12998, id: 3 },
        { key: "Thu", data: 13040, id: 4 },
        { key: "Fri", data: 12888, id: 5 },
        { key: "Sat", data: 10785, id: 6 },
        { key: "Sun", data: 10889, id: 0 }
      ]
    },
    {
      key: 8,
      id: "8",
      data: [
        { key: "Sun", data: 12835, id: 0 },
        { key: "Mon", data: 13107, id: 1 },
        { key: "Tue", data: 13114, id: 2 },
        { key: "Wed", data: 12826, id: 3 },
        { key: "Thu", data: 13100, id: 4 },
        { key: "Fri", data: 12830, id: 5 },
        { key: "Sat", data: 10848, id: 6 },
        { key: "Sun", data: 10898, id: 0 }
      ]
    },
    {
      key: 9,
      id: "9",
      data: [
        { key: "Sun", data: 13198, id: 0 },
        { key: "Mon", data: 12892, id: 1 },
        { key: "Tue", data: 13106, id: 2 },
        { key: "Wed", data: 12750, id: 3 },
        { key: "Thu", data: 13195, id: 4 },
        { key: "Fri", data: 11157, id: 5 },
        { key: "Sat", data: 10830, id: 6 },
        { key: "Sun", data: 10751, id: 0 }
      ]
    },
    {
      key: 10,
      id: "10",
      data: [
        { key: "Sun", data: 13054, id: 0 },
        { key: "Mon", data: 12778, id: 1 },
        { key: "Tue", data: 12846, id: 2 },
        { key: "Wed", data: 12896, id: 3 },
        { key: "Thu", data: 13002, id: 4 },
        { key: "Fri", data: 10847, id: 5 },
        { key: "Sat", data: 10789, id: 6 },
        { key: "Sun", data: 10603, id: 0 }
      ]
    },
    {
      key: 11,
      id: "11",
      data: [
        { key: "Sun", data: 13257, id: 0 },
        { key: "Mon", data: 12789, id: 1 },
        { key: "Tue", data: 13198, id: 2 },
        { key: "Wed", data: 12858, id: 3 },
        { key: "Thu", data: 13047, id: 4 },
        { key: "Fri", data: 10741, id: 5 },
        { key: "Sat", data: 10922, id: 6 },
        { key: "Sun", data: 10802, id: 0 }
      ]
    },
    {
      key: 12,
      id: "12",
      data: [
        { key: "Sun", data: 13060, id: 0 },
        { key: "Mon", data: 12895, id: 1 },
        { key: "Tue", data: 12994, id: 2 },
        { key: "Wed", data: 12850, id: 3 },
        { key: "Thu", data: 12967, id: 4 },
        { key: "Fri", data: 10711, id: 5 },
        { key: "Sat", data: 10766, id: 6 },
        { key: "Sun", data: 10883, id: 0 }
      ]
    },
    {
      key: 13,
      id: "13",
      data: [
        { key: "Sun", data: 12934, id: 0 },
        { key: "Mon", data: 13052, id: 1 },
        { key: "Tue", data: 13042, id: 2 },
        { key: "Wed", data: 12964, id: 3 },
        { key: "Thu", data: 12861, id: 4 },
        { key: "Fri", data: 10833, id: 5 },
        { key: "Sat", data: 11035, id: 6 },
        { key: "Sun", data: 5086, id: 0 }
      ]
    },
    {
      key: 14,
      id: "14",
      data: [
        { key: "Sun", data: 12859, id: 0 },
        { key: "Mon", data: 12918, id: 1 },
        { key: "Tue", data: 13152, id: 2 },
        { key: "Wed", data: 12867, id: 3 },
        { key: "Thu", data: 13140, id: 4 },
        { key: "Fri", data: 10844, id: 5 },
        { key: "Sat", data: 10928, id: 6 },
        { key: "Sun", data: 194, id: 0 }
      ]
    },
    {
      key: 15,
      id: "15",
      data: [
        { key: "Sun", data: 13032, id: 0 },
        { key: "Mon", data: 13073, id: 1 },
        { key: "Tue", data: 12892, id: 2 },
        { key: "Wed", data: 12902, id: 3 },
        { key: "Thu", data: 12911, id: 4 },
        { key: "Fri", data: 10895, id: 5 },
        { key: "Sat", data: 11072, id: 6 },
        { key: "Sun", data: 195, id: 0 }
      ]
    },
    {
      key: 16,
      id: "16",
      data: [
        { key: "Sun", data: 13025, id: 0 },
        { key: "Mon", data: 13168, id: 1 },
        { key: "Tue", data: 13183, id: 2 },
        { key: "Wed", data: 12603, id: 3 },
        { key: "Thu", data: 12812, id: 4 },
        { key: "Fri", data: 11081, id: 5 },
        { key: "Sat", data: 10815, id: 6 },
        { key: "Sun", data: 195, id: 0 }
      ]
    },
    {
      key: 17,
      id: "17",
      data: [
        { key: "Sun", data: 12861, id: 0 },
        { key: "Mon", data: 13160, id: 1 },
        { key: "Tue", data: 12841, id: 2 },
        { key: "Wed", data: 12812, id: 3 },
        { key: "Thu", data: 12747, id: 4 },
        { key: "Fri", data: 11117, id: 5 },
        { key: "Sat", data: 10986, id: 6 }
      ]
    },
    {
      key: 18,
      id: "18",
      data: [
        { key: "Sun", data: 12805, id: 0 },
        { key: "Mon", data: 13232, id: 1 },
        { key: "Tue", data: 12824, id: 2 },
        { key: "Wed", data: 12825, id: 3 },
        { key: "Thu", data: 13092, id: 4 },
        { key: "Fri", data: 10835, id: 5 },
        { key: "Sat", data: 11028, id: 6 }
      ]
    },
    {
      key: 19,
      id: "19",
      data: [
        { key: "Sun", data: 12885, id: 0 },
        { key: "Mon", data: 12848, id: 1 },
        { key: "Tue", data: 13211, id: 2 },
        { key: "Wed", data: 12879, id: 3 },
        { key: "Thu", data: 13080, id: 4 },
        { key: "Fri", data: 11040, id: 5 },
        { key: "Sat", data: 10784, id: 6 }
      ]
    },
    {
      key: 20,
      id: "20",
      data: [
        { key: "Sun", data: 13183, id: 0 },
        { key: "Mon", data: 13056, id: 1 },
        { key: "Tue", data: 12947, id: 2 },
        { key: "Wed", data: 13096, id: 3 },
        { key: "Thu", data: 12936, id: 4 },
        { key: "Fri", data: 10676, id: 5 },
        { key: "Sat", data: 10879, id: 6 }
      ]
    },
    {
      key: 21,
      id: "21",
      data: [
        { key: "Sun", data: 13002, id: 0 },
        { key: "Mon", data: 12853, id: 1 },
        { key: "Tue", data: 13176, id: 2 },
        { key: "Wed", data: 12894, id: 3 },
        { key: "Thu", data: 12742, id: 4 },
        { key: "Fri", data: 11006, id: 5 },
        { key: "Sat", data: 10965, id: 6 }
      ]
    },
    {
      key: 22,
      id: "22",
      data: [
        { key: "Sun", data: 12803, id: 0 },
        { key: "Mon", data: 13127, id: 1 },
        { key: "Tue", data: 12883, id: 2 },
        { key: "Wed", data: 13229, id: 3 },
        { key: "Thu", data: 13083, id: 4 },
        { key: "Fri", data: 10640, id: 5 },
        { key: "Sat", data: 10838, id: 6 }
      ]
    },
    {
      key: 23,
      id: "23",
      data: [
        { key: "Sun", data: 12825, id: 0 },
        { key: "Mon", data: 13358, id: 1 },
        { key: "Tue", data: 12892, id: 2 },
        { key: "Wed", data: 13048, id: 3 },
        { key: "Thu", data: 12956, id: 4 },
        { key: "Fri", data: 10768, id: 5 },
        { key: "Sat", data: 10583, id: 6 }
      ]
    }
  ];
  return (
    <>
      <HeatMapGraph
        range={{
          start: "2020-03-17T22:01:48.442Z",
          end: "2020-03-24T22:01:48.442Z"
        }}
        colors={heatmapColors}
        info={{
          id: "_s5y85ewd6",
          type: "card",
          name: "Sessions by Time of Day",
          description: "Allows you to view your sessions over the last 30 days."
        }}
        data={heatmapData}
      />
    </>
  );
};
