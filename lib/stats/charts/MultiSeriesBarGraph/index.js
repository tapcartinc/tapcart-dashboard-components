import React, { useState, useEffect } from "react";
import {
  StackedBarChart,
  StackedBarSeries,
  LinearYAxisTickSeries,
  LinearYAxis,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  GridlineSeries,
  Gridline,
  Bar,
  DiscreteLegend,
  DiscreteLegendEntry,
  LinearYAxisTickLabel,
  TooltipArea,
  ChartTooltip
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
  StyledLevelSquare,
  StyledTooltip,
  StyledHeatmapTip,
  StyledAreaMapTooltip,
  StyledLeftTooltip,
  StyledRightTooltip
} from "../styles";
import { useColorScheme } from "../../../hooks/useColorScheme";
import { generateDates } from "../HeatMapGraph/generateDates";
import { colorPicker } from "../../../utils/_dashVariables";
import moment from "moment";
import { useFormattedNumber } from "../../../hooks/useFormattedNumber";
import { Sofia } from "../../../elements/Typography";

const MultiSeriesBarGraph = props => {
  const {
    data,
    colors,
    tooltip,
    info,
    body,
    currency,
    range,
    keys,
    removeCard
  } = props;
  const colorScheme = useColorScheme(colors);

  return (
    <StyledGraphCard removeCard={() => removeCard(info)}>
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
            return (
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
      <StackedBarChart
        width={500}
        height={220}
        data={data}
        gridlines={
          <GridlineSeries
            line={
              <Gridline
                direction="y"
                strokeColor={colorPicker.gray25}
                strokeDasharray="0 0"
              />
            }
          />
        }
        xAxis={
          <LinearXAxis
            type="category"
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={
                  <LinearXAxisTickLabel
                    padding={5}
                    format={d => moment(d).format("MMM D")}
                  />
                }
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type="value"
            axisLine={null}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearYAxisTickLabel padding={10} label={null} />}
              />
            }
          />
        }
        series={
          <StackedBarSeries
            tooltip={
              <TooltipArea
                placement="top"
                tooltip={
                  <ChartTooltip
                    placement="top"
                    followCursor={true}
                    content={d => {
                      return (
                        <StyledTooltip width="130px">
                          {d.data.map((dataSet, index) => {
                            return (
                              <StyledAreaMapTooltip key={dataSet.key}>
                                <Sofia
                                  marginBottom="2px"
                                  marginTop="5px"
                                  fontSize="11px"
                                  color={colorPicker.black}
                                >
                                  {dataSet.key}
                                </Sofia>
                                <Sofia
                                  marginBottom="2px"
                                  marginTop="5px"
                                  fontSize="11px"
                                  color={colorScheme[index]}
                                >
                                  {dataSet.y}
                                </Sofia>
                              </StyledAreaMapTooltip>
                            );
                          })}
                        </StyledTooltip>
                      );
                    }}
                  />
                }
              />
            }
            bar={
              <Bar
                rounded={true}
                style={data => {
                  const index = keys.findIndex(e => e === data.x);
                  return {
                    fill: colors[index],
                    clipPath: "none"
                  };
                }}
                rounded={true}
              />
            }
            colorScheme={colorScheme}
          />
        }
      />
      <Legend colors={colors} />
    </StyledGraphCard>
  );
};
export { MultiSeriesBarGraph };

const Legend = ({ colors }) => {
  return (
    <DiscreteLegend
      orientation="horizontal"
      style={{ margin: "0 auto" }}
      entries={[
        <DiscreteLegendEntry
          label="Direct"
          color={colors[0]}
          symbol={<StyledLevelSquare />}
        />,
        <DiscreteLegendEntry
          label="Push"
          color={colors[1]}
          symbol={<StyledLevelSquare />}
        />,
        <DiscreteLegendEntry
          label="Deeplink"
          color={colors[2]}
          symbol={<StyledLevelSquare />}
        />
      ]}
    />
  );
};
