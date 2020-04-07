import React, { useRef, useState, useEffect } from "react";
import { SummaryCard } from "./index";
import { Container } from "../../layout/Container";
import { Button } from "../../elements/Button";
import { Header } from "../../elements/Typography";
import { getData, getPrevData } from "./data";
import moment from "moment";

export default {
  component: SummaryCard,
  title: "Stats/SummaryCard"
};

export const summaryCard = () => {
  const [state, setState] = useState({
    dimmension: "day",
    data: [],
    prevAvg: [],
    currentPeriodAvg: null,
    previousPeriodAvg: null
  });

  const currentDimmension = useRef();

  useEffect(() => {
    currentDimmension.current = state.dimmension;

    if (!state.data.length && state.dimmension) {
      return setState(prevState => ({
        ...prevState,
        data: getData(state.dimmension)
      }));
    }

    if (previousDimmension !== state.dimmension || !state.currentPeriodAvg) {
      const currData = getData(state.dimmension);
      const currentAverages =
        currData.reduce((acc, currPlot) => {
          return acc + parseFloat(currPlot.data);
        }, 0) / currData.length;
      const prevData = getPrevData(state.dimmension);
      const prevAverages =
        prevData.reduce((acc, prevPlot) => {
          return acc + parseFloat(prevPlot.data);
        }, 0) / prevData.length;
      return setState(prevState => ({
        ...prevState,
        data: getData(state.dimmension),
        currentPeriodAvg: parseFloat(currentAverages).toFixed(2),
        previousPeriodAvg: parseFloat(prevAverages).toFixed(2)
      }));
    }
  }, [state.dimmension, state.data]);

  const previousDimmension = currentDimmension.current;

  const setDimmension = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      dimmension: e.target.name
    }));
  };

  const { previousPeriodAvg, currentPeriodAvg, data } = state;
  return (
    <Container>
      <Header>{state.dimmension}</Header>
      <Button kind="transparent--blue" name="day" onClick={setDimmension}>
        day
      </Button>
      <Button kind="transparent--blue" name="week" onClick={setDimmension}>
        week
      </Button>
      <Button kind="transparent--blue" name="month" onClick={setDimmension}>
        month
      </Button>

      <SummaryCard
        title="Total App Sales"
        icon="orders"
        data={[
          { key: "26-Mar-2020", data: 258737, id: 0 },
          { key: "27-Mar-2020", data: 313230, id: 1 },
          { key: "28-Mar-2020", data: 311361, id: 2 },
          { key: "29-Mar-2020", data: 312364, id: 3 },
          { key: "30-Mar-2020", data: 310981, id: 4 },
          { key: "31-Mar-2020", data: 313639, id: 5 },
          { key: "01-Apr-2020", data: 309506, id: 6 },
          { key: "02-Apr-2020", data: 51612, id: 7 }
        ]}
        currentScore={currentPeriodAvg}
        prevPeriodScore={previousPeriodAvg}
        currency="$"
        percentageDifference={Number(
          parseFloat(
            ((Number(currentPeriodAvg) - Number(previousPeriodAvg)) /
              ((Number(currentPeriodAvg) + Number(previousPeriodAvg)) / 2)) *
              100
          ).toFixed(4)
        )}
      />
    </Container>
  );
};
