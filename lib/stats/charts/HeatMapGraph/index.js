import React, { useState, useEffect } from "react";
import { Icon as DesignIcon } from "../../../elements/Icon";
import { heatmapColors } from "../../utils/_colors";
import { timeDay } from "d3-time";
import {
  Heatmap,
  HeatmapSeries,
  DiscreteLegend,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  HeatmapCell,
  ChartTooltip,
  DiscreteLegendEntry,
  TooltipTemplate,
  TooltipArea
} from "reaviz";

import {
  StyledGraphCard,
  StyledTooltip,
  StyledHeatmapTip,
  StyledCustomLegend
} from "../styles";
import moment from "moment";
import { colorPicker } from "../../../utils/_dashVariables";
import { Sofia } from "../../../elements/Typography";
import CardHeading from "../../CardHeading";

const HeatMapGraph = props => {
  const [legendKeys, setLegendKeys] = useState([]);
  const [cells, setCells] = useState([]);
  const [totalSessions, setTotalSessions] = useState(0);

  useEffect(() => {
    const totalSessions = props.data.reduce((acc, currDataSet) => {
      const total = currDataSet.data.reduce((insideAcc, insideDataSet) => {
        insideAcc = insideAcc + insideDataSet.data;
        return insideAcc;
      }, 0);

      acc = acc + total;
      return acc;
    }, 0);

    setTotalSessions(totalSessions);

    const legendData = props.data.reduce((acc, currData) => {
      currData.data.map(dataSet => {
        acc = [...acc, dataSet.data];
      });

      return acc;
    }, []);

    if (totalSessions) {
      getCells();
      getLegendKeys(legendData);
    }
  }, [props.data, totalSessions]);

  const getCells = () => {
    const boop = [];
    const dataCopy = props.data.slice(0);
    dataCopy.map((dataSet, index) => {
      const cat = { ...dataSet };

      cat.data.map((day, index) => {
        day["total"] = day.data;
        const booper = Number(((day.total / totalSessions) * 100).toFixed(4));
        day["metadata"] = booper;
      });

      boop.push(cat);
    });
    setCells(boop);
  };

  const getLegendKeys = array => {
    const maxInt = Math.max.apply(null, array);
    const minInt = Math.min.apply(null, array);
    const lastKey = Number(((maxInt / totalSessions) * 100).toFixed(4));
    const firstKey = Number(((minInt / totalSessions) * 100).toFixed(4));
    const range = parseFloat((lastKey - firstKey).toFixed(4));
    const step = (1 * range) / 8;
    let arrayStart = firstKey;
    let count = 0;

    let steps = [];

    while (lastKey > arrayStart && count < 8) {
      steps.push({
        key: parseFloat(arrayStart.toFixed(2)),
        total: arrayStart,
        color: heatmapColors[count]
      });
      arrayStart = arrayStart + step;
      count = count + 1;
    }

    return setLegendKeys(steps);
  };

  const {
    currency,
    removeCard,
    tooltip,
    range,
    info,
    body,

    colors
  } = props;

  return (
    <StyledGraphCard onClick={() => removeCard(info)}>
      <CardHeading
        range={range}
        info={info}
        body={body}
        tooltip={tooltip}
        currency={currency}
      />
      <Heatmap
        height={195}
        width={515}
        data={cells}
        series={
          <HeatmapSeries
            padding={0.14}
            cell={
              <HeatmapCell
                rx={1}
                ry={1}
                tooltip={
                  <ChartTooltip
                    content={d => {
                      return (
                        <StyledTooltip width="80px">
                          <StyledHeatmapTip>
                            <Sofia color={colorPicker.black}>
                              {d.data.metadata}%
                            </Sofia>
                            <Sofia color={colorPicker.blue}>{d.y} users</Sofia>
                          </StyledHeatmapTip>
                        </StyledTooltip>
                      );
                    }}
                  />
                }
              />
            }
            colorScheme={colors}
          />
        }
        xAxis={
          <LinearXAxis
            type="time"
            tickSeries={
              <LinearXAxisTickSeries
                interval={timeDay}
                line={null}
                label={
                  <LinearXAxisTickLabel
                    padding={5}
                    format={d => moment(d, "HH:mm").format("h a")}
                  />
                }
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type="time"
            axisLine={null}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearYAxisTickLabel padding={10} />}
              />
            }
          />
        }
      />
      {legendKeys && <StyledCustomLegend data={legendKeys} />}
    </StyledGraphCard>
  );
};
export { HeatMapGraph };
