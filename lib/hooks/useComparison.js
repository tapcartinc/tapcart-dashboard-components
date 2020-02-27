import React, { useEffect, useState, useRef } from "react";
import { getData } from "../stats/SummaryCard/data";

function useComparison({ dimmension, data, prevData }) {
  const [state, setState] = useState({
    dimmension: "day",
    data: [],
    prevData: [],
    currentPeriodAvg: null,
    previousPeriodAvg: null,
    percentageDifference: null
  });

  const currentDimmension = useRef();

  useEffect(() => {
    currentDimmension.current = dimmension;
    if (!state.data.length && dimmension) {
      return setState(prevState => ({
        ...prevState,
        data,
        prevData
      }));
    }

    if (previousDimmension !== state.dimmension || !state.currentPeriodAvg) {
      const currData = getData(state.dimmension);
      const currentAverages =
        currData.reduce((acc, currPlot) => {
          return acc + parseFloat(currPlot.data);
        }, 0) / currData.length;

      const prevAverages =
        state.prevData.reduce((acc, prevPlot) => {
          return acc + parseFloat(prevPlot.data);
        }, 0) / prevData.length;
      const updatedCurrentPeriodAvg = parseFloat(currentAverages).toFixed(2);
      const updatedPreviousPeriodAvg = parseFloat(prevAverages).toFixed(2);

      return setState(prevState => ({
        ...prevState,
        data: getData(state.dimmension),
        currentPeriodAvg: updatedCurrentPeriodAvg,
        previousPeriodAvg: updatedPreviousPeriodAvg,
        percentageDifference: Number(
          parseFloat(
            ((Number(updatedCurrentPeriodAvg) -
              Number(updatedPreviousPeriodAvg)) /
              ((Number(updatedCurrentPeriodAvg) +
                Number(updatedPreviousPeriodAvg)) /
                2)) *
              100
          ).toFixed(4)
        )
      }));
    }
  }, [state.dimmension, state.data]);

  const previousDimmension = currentDimmension.current;

  return state;
}

export { useComparison };
