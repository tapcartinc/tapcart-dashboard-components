import React, { useState } from "react";
import {
  BarChart,
  BarSeries,
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
  TooltipArea,
  ChartTooltip
} from "reaviz";
import { Sofia } from "../../../elements/Typography";
import { colorPicker } from "../../../utils/_dashVariables";
import { Icon } from "../../../elements/Icon";
import { ToolTip } from "../../../components/ToolTip";
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
  StyledTooltip
} from "../styles";
import moment from "moment";

const BarGraph = props => {
  const { data, body, info, range, tooltip, colors, removeCard } = props;

  const formatNumber = num => {
    let number = Number(num);
    if (number > 999999) {
      number =
        Math.sign(number) * (Math.abs(number) / 1000000).toFixed(2) + "M";
      return number;
    }
    if (number > 999) {
      number = Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
      return number;
    }
    if (number < 999) {
      number = Math.sign(number) * Math.abs(number);
      return number;
    }
    return number;
  };

  const getColorScheme = () => {
    if (colors) {
      return colors;
    } else {
      const colors = [];
      defaultGraphColors.map((color, index) => {
        if (index <= data.length) {
          colors.push(color);
        }
      });
      return colors;
    }
  };

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
      <Icon
        type="apple"
        fill="white"
        style={{
          overflow: "visible",
          position: "absolute",
          right: 435,
          top: 120
        }}
      />
      <Icon
        type="android"
        fill="white"
        style={{
          overflow: "visible",
          position: "absolute",
          right: 437,
          top: 208
        }}
      />
      <BarChart
        height={220}
        width={500}
        data={data}
        gridlines={
          <GridlineSeries
            line={
              <Gridline
                direction="x"
                strokeColor={colorPicker.gray25}
                strokeDasharray="0 0"
              />
            }
          />
        }
        xAxis={
          <LinearXAxis
            type="value"
            tickSeries={
              <LinearXAxisTickSeries
                label={<LinearXAxisTickLabel format={formatNumber} />}
              />
            }
          />
        }
        series={
          <BarSeries
            colorScheme={getColorScheme()}
            layout="horizontal"
            tooltip={
              <TooltipArea
                placement="top"
                tooltip={
                  <ChartTooltip
                    placement="top"
                    followCursor={true}
                    content={d => {
                      return (
                        <StyledTooltip width="70px">
                          <Sofia fontSize="11px" color={colorPicker.black}>
                            {d.key}
                          </Sofia>
                          <Sofia color={colorPicker.blue}>
                            {/* {formatNumber(d.y)} */}
                            {d.y.toLocaleString()}
                          </Sofia>
                        </StyledTooltip>
                      );
                    }}
                  />
                }
              ></TooltipArea>
            }
            bar={
              <Bar
                width={60}
                // mask={<Stripes />}
                style={data => {
                  return (
                    data && {
                      position: "relative",
                      fill: getColorScheme()[data.id],
                      clipPath: "none",
                      opacity: 1,
                      borderRadius: 3
                    }
                  );
                }}
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type="category"
            line={null}
            tickSeries={<LinearYAxisTickSeries />}
          />
        }
      />
      <Legend colors={colors} />
    </StyledGraphCard>
  );
};
export { BarGraph };

const Legend = ({ colors }) => {
  return (
    <DiscreteLegend
      orientation="horizontal"
      style={{ margin: "0 auto" }}
      entries={[
        <DiscreteLegendEntry
          label="iOS"
          color={colors[0]}
          symbol={<StyledLevelSquare />}
        />,
        <DiscreteLegendEntry
          label="Android"
          color={colors[1]}
          symbol={<StyledLevelSquare />}
        />
      ]}
    />
  );
};
