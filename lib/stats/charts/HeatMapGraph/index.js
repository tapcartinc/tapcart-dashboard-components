import React, { useState, useEffect, useRef } from "react";
import { Icon as DesignIcon } from "../../../elements/Icon";
import { generateDates, generateDataToo } from "./generateDates";
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
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference,
  StyledTooltip,
  StyledHeatmapTip,
  StyledCustomLegend
} from "../styles";
import moment from "moment";
import { colorPicker } from "../../../utils/_dashVariables";
import { ToolTip } from "../../../components/ToolTip";
import { Sofia } from "../../../elements/Typography";

const HeatMapGraph = props => {
  const [state, setState] = useState({
    data: [],
    dataToo: []
  });

  useEffect(() => {
    const updatedData = generateDates(
      "2019-01-01T00:00:00",
      "2019-01-07T00:00:00"
    );
    setState(() => ({
      data: updatedData,
      dataToo: generateDataToo()
    }));
  }, []);

  const sequentialData = () => {
    let start = 100;
    let index = 0;
    const legendDetails = [];
    while (start <= 800) {
      const details = {};
      details["key"] = `≥ ${start}`;
      details["color"] = heatmapColors[index];
      legendDetails.push(details);
      start = start + 100;
      index = index + 1;
    }

    return legendDetails;
  };

  const getRange = d => {
    return `>= ${JSON.stringify(d.y).split("")[0]}00`;
  };
  // `${formatValue(d.data.metadata.date)} ∙ ${formatValue(
  //   d.data.value
  // )}`
  const { stacked, currency, colors, tooltip, statValues, title } = props;

  return (
    <StyledGraphCard>
      <StyledCardHeader>
        <StyledTitleSection>
          <span className="title">
            <StyledTitle>{title}</StyledTitle>
            {tooltip && (
              <ToolTip color={colorPicker.grayBlue}>
                {tooltip && tooltip.text}
              </ToolTip>
            )}
          </span>
          <StyledDescText>
            Beep Bop Boop - Boop Bop
            {/* {moment(state.range[0]).format("MMM Do")} -{" "}
            {moment(state.range[1]).format("MMM Do")}{" "}
            {moment(state.range[1]).format("YYYY")} */}
          </StyledDescText>
          {/* <StyledDescText>1 Nov – 24 Nov 2019</StyledDescText> */}
        </StyledTitleSection>
        {statValues && (
          <StyledHeaderChildren>
            <StyledDescText>{statValues.title}</StyledDescText>
            <StyledStatHeader sm>
              {currency && (
                <span style={{ marginRight: "-4px" }}>{currency} </span>
              )}
              {Number(statValues.currentPeriodTotal).toLocaleString()}
            </StyledStatHeader>
            {statValues && (
              <StyledDifference
                upShift={
                  statValues.currentPeriodTotal > statValues.previousPeriodTotal
                }
              >
                {statValues.currentPeriodTotal >
                  statValues.previousPeriodTotal && (
                  <span className="arrow">&uarr;</span>
                )}
                {statValues.currentPeriodTotal <
                  statValues.previousPeriodTotal && (
                  <span className="arrow">&darr;</span>
                )}
                {currency && <span>{currency} </span>}
                {Number(statValues.previousPeriodTotal).toLocaleString()} (
                {statValues.percentageDifference}%)
              </StyledDifference>
            )}
          </StyledHeaderChildren>
        )}
      </StyledCardHeader>
      <Heatmap
        height={195}
        width={515}
        data={state.dataToo}
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
                        <StyledTooltip width="70px">
                          <StyledHeatmapTip>
                            <Sofia fontSize="11px" color={colorPicker.black}>
                              {getRange(d)}
                            </Sofia>
                            <Sofia color={colorPicker.blue}>{d.y}</Sofia>
                          </StyledHeatmapTip>
                        </StyledTooltip>
                      );
                    }}
                  />
                }
              />
            }
            colorScheme={heatmapColors}
          />
        }
        xAxis={
          <LinearXAxis
            type="time"
            tickSeries={<LinearXAxisTickSeries interval={timeDay} />}
          />
        }
        yAxis={
          <LinearYAxis
            type="category"
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
      <StyledCustomLegend data={sequentialData()} />

      {/* {sequentialData() && (
        <DiscreteLegend
          orientation="horizontal"
          entries={sequentialData().map(entry => {
            return (
              <DiscreteLegendEntry
                key={entry.key}
                label={`${entry.key}`}
                color={entry.color}
                orientation="horizontal"
                symbol={<Icon fill={entry.color} />}
              />
            );
          })}
          style={{ height: "35px" }}
        />
      )} */}
    </StyledGraphCard>
  );
};
export { HeatMapGraph };

const Icon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30"
    height="30"
    fill={fill}
  >
    <rect width="30" height="30" rx="4" />
  </svg>
);
