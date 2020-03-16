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

const BarGraph = props => {
  const { data, title, currency, statValues, tooltip, colors } = props;

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
        if (index <= state.data.length) {
          colors.push(color);
        }
      });
      return colors;
    }
  };

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

          <StyledDescText>1 Nov – 24 Nov 2019</StyledDescText>
        </StyledTitleSection>
        {statValues &&
          statValues.sectionInfo.map(section => {
            return (
              <StyledHeaderChildren key={section.title}>
                <StyledDescText>{section.title}</StyledDescText>
                <StyledStatHeader sm>
                  {currency && (
                    <span style={{ marginRight: "-4px" }}>{currency} </span>
                  )}
                  {formatNumber(section.currentTotal)}
                </StyledStatHeader>
                {statValues && (
                  <StyledDifference
                    upShift={section.currentTotal >= section.prevTotal}
                  >
                    {currency && <span>{currency} </span>}
                    {section.difference}
                  </StyledDifference>
                )}
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
