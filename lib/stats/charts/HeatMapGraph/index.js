import React, { useState, useEffect, useRef } from "react";
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

  const { currency, removeCard, tooltip, range, info, body, data } = props;

  return (
    <StyledGraphCard onClick={() => removeCard(info)}>
      <StyledCardHeader>
        <StyledTitleSection>
          <span className="title">
            <StyledTitle>{info.name}</StyledTitle>
            {tooltip && (
              <ToolTip color={colorPicker.grayBlue}>{info.description}</ToolTip>
            )}
          </span>
          <StyledDescText>
            {moment(range.start).format("MMM Do")} -{" "}
            {moment(range.end).format("MMM Do")}{" "}
            {moment(range.end).format("YYYY")}
          </StyledDescText>
        </StyledTitleSection>
        {body &&
          body.length > 0 &&
          body.map(statInfo => {
            statInfo && (
              <StyledHeaderChildren key={statInfo.title}>
                <StyledDescText>{statInfo.title}</StyledDescText>
                <StyledStatHeader sm>
                  {currency && (
                    <span style={{ marginRight: "-4px" }}>{currency} </span>
                  )}
                  {Number(statInfo.total).toLocaleString()}
                </StyledStatHeader>

                <StyledDifference
                  upShift={statInfo.total > statInfo.previousTotal}
                >
                  {statInfo.total > statInfo.previousTotal && (
                    <span className="arrow">&uarr;</span>
                  )}
                  {statInfo.total < statInfo.previousTotal && (
                    <span className="arrow">&darr;</span>
                  )}
                  {currency && <span>{currency} </span>}
                  {Number(statInfo.previousTotal).toLocaleString()} (
                  {statInfo.percentChange}%)
                </StyledDifference>
              </StyledHeaderChildren>
            );
          })}
      </StyledCardHeader>
      <Heatmap
        height={195}
        width={515}
        data={data}
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
