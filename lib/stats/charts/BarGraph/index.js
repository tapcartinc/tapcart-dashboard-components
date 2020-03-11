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
  Bar
} from "reaviz";
import { colorPicker } from "../../../utils/_dashVariables";
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
  StyledAreaMapTooltip,
  StyledLeftTooltip,
  StyledRightTooltip
} from "../styles";
import moment from "moment";

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
            console.log("section", section);
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
      <BarChart
        height={250}
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
              <LinearXAxisTickSeries label={<LinearXAxisTickLabel />} />
            }
          />
        }
        series={
          <BarSeries
            colorScheme={getColorScheme()}
            layout="horizontal"
            bar={<Bar width={70} color="000000" />}
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
    </StyledGraphCard>
  );
};
export { BarGraph };
