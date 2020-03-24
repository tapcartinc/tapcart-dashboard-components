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
import { StyledGraphCard, StyledLevelSquare, StyledTooltip } from "../styles";

import { useFormattedNumber } from "../../../hooks/useFormattedNumber";
import CardHeading from "../../CardHeading";

const BarGraph = props => {
  const {
    currency,
    data,
    body,
    info,
    range,
    tooltip,
    colors,
    removeCard
  } = props;

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
      <CardHeading
        range={range}
        info={info}
        body={body}
        tooltip={tooltip}
        currency={currency}
      />
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
                label={<LinearXAxisTickLabel format={useFormattedNumber} />}
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
