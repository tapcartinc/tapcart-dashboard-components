import React, { useEffect, useState } from "react";
//import './.css';

const useGetDifference = (currData, prevData, dimmension) => {
  const [state, setState] = useState({
    currentPeriodTotal: null,
    previousPeriodTotal: null,
    percentageDifference: null
  });

  useEffect(() => {
    if (
      (!state.currentPeriodTotal || !state.previousPeriodTotal) &&
      currData &&
      currData.length
    ) {
      const currentTotal = currData.reduce((acc, currPlot) => {
        return acc + parseFloat(currPlot.data);
      }, 0);

      const prevTotal = prevData.reduce((acc, prevPlot) => {
        return acc + parseFloat(prevPlot.data);
      }, 0);
      return setState(prevState => ({
        ...prevState,
        currentPeriodTotal: parseFloat(currentTotal).toFixed(2),
        previousPeriodTotal: parseFloat(prevTotal).toFixed(2),
        percentageDifference: Number(
          parseFloat(
            ((Number(currentTotal) - Number(prevTotal)) /
              ((Number(currentTotal) + Number(prevTotal)) / 2)) *
              100
          ).toFixed(2)
        )
      }));
    }
  });

  return state;
};
export { useGetDifference };
