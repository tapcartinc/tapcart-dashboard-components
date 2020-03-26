import React, { useRef, useState, useEffect } from "react";
import {
  AreaChart,
  StackedAreaChart,
  StackedAreaSeries,
  GridlineSeries,
  Gridline,
  Gradient,
  GradientStop,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  LinearYAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearXAxis,
  Line,
  Area,
  LineSeries,
  ChartTooltip,
  TooltipTemplate,
  DiscreteLegendEntry,
  PointSeries,
  TooltipArea,
  DiscreteLegend
} from "reaviz";
import {
  StyledGraphCard,
  StyledTooltip,
  StyledLevelSquare,
  StyledAreaMapTooltip,
  StyledLeftTooltip,
  StyledRightTooltip
} from "../styles";
import { Sofia } from "../../../elements/Typography";

import { ToolTip } from "../../../components/ToolTip";
import moment from "moment";

import { colorPicker, defaultGraphColors } from "../../../utils/_dashVariables";
import CardHeading from "../../CardHeading";

function convert(d) {
  const date = moment(d).toDate();
  return date;
}

const convertData = data => {
  return (
    data &&
    data.reduce((acc, dataSet, index) => {
      if (dataSet.data.length) {
        return [
          ...acc,
          {
            key: dataSet.key,
            data: dataSet.data.map((key, index) => {
              return (key[index] = { ...key, key: convert(key.key) });
            })
          }
        ];
      } else {
        return [...acc, { ...dataSet, key: convert(dataSet.key) }];
      }
    }, [])
  );
};

const AreaGraph = props => {
  const updatedData = props.data && convertData(props.data);

  const {
    stacked,
    currency,
    colors,
    tooltip,
    range,
    gradient,
    fillColors,
    info,
    body,
    removeCard
  } = props;

  const getColorScheme = () => {
    if (colors) {
      return colors;
    } else {
      const colors = [];
      defaultGraphColors.map((color, index) => {
        if (index <= updatedData.length) {
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
      <GraphDetails
        data={updatedData}
        currency={currency}
        stacked={stacked}
        gradient={gradient}
        fillColors={fillColors}
        getColorScheme={getColorScheme}
        colors={colors}
      />
      <Legend colors={getColorScheme()} data={updatedData} />
    </StyledGraphCard>
  );
};
export { AreaGraph };

const GraphDetails = ({
  data,
  currency,
  getColorScheme,
  stacked,
  gradient,
  fillColors,
  strokes,
  colors
}) => {
  // const [keys, setKeys] = useState();
  const keys = [];
  data && data.map(dataSet => keys.push(dataSet.key));

  if (data && data.length) {
    switch (stacked) {
      case true:
        return (
          <StackedAreaChart
            width={470}
            height={220}
            data={data}
            gridlines={
              <GridlineSeries
                line={
                  <Gridline
                    direction="y"
                    strokeColor={colorPicker.gray25}
                    strokeDasharray="0 0"
                    style={{ strokeDasharray: "0 0" }}
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
            xAxis={
              <LinearXAxis
                type="time"
                tickSeries={
                  <LinearXAxisTickSeries
                    line={null}
                    label={
                      <LinearXAxisTickLabel
                        padding={5}
                        line={null}
                        format={d => moment(d).format("MMM D")}
                      />
                    }
                  />
                }
              />
            }
            series={
              <StackedAreaSeries
                type="grouped"
                interpolation="smooth"
                colorScheme={getColorScheme()}
                tooltip={
                  <TooltipArea
                    // placement="top"
                    tooltip={
                      <ChartTooltip
                        placement="top"
                        followCursor={true}
                        content={(d, ab, b) => {
                          return (
                            <StyledTooltip width="130px">
                              <StyledAreaMapTooltip>
                                <StyledLeftTooltip>
                                  <Sofia
                                    marginBottom="2px"
                                    marginTop="5px"
                                    fontSize="11px"
                                    color={colorPicker.black}
                                  >
                                    {moment(d.x).format("MMM D")}
                                  </Sofia>
                                  <Sofia
                                    marginBottom="5px"
                                    marginTop="0px"
                                    fontSize="11px"
                                    color={colorPicker.blue}
                                    fontSize="13px"
                                  >
                                    {currency && <span>{currency}</span>}
                                    {d.data[0].value.toLocaleString()}
                                  </Sofia>
                                </StyledLeftTooltip>
                                <StyledRightTooltip
                                  upShift={d.data[0].value >= d.data[1].value}
                                >
                                  <Sofia
                                    marginBottom="0px"
                                    color={
                                      d.data[0].value >= d.data[1].value
                                        ? colorPicker.green100
                                        : colorPicker.red
                                    }
                                  >
                                    {d.data[0].value > d.data[1].value && (
                                      <span>&uarr;</span>
                                    )}
                                    {d.data[0].value < d.data[1].value && (
                                      <span>&darr;</span>
                                    )}
                                    {Number(
                                      parseFloat(
                                        ((Number(d.data[0].value) -
                                          Number(d.data[1].value)) /
                                          ((Number(d.data[0].value) +
                                            Number(d.data[1].value)) /
                                            2)) *
                                          100
                                      ).toFixed(2)
                                    )}
                                    %
                                  </Sofia>
                                  <Sofia
                                    marginTop="0px"
                                    fontSize="10px"
                                    color={
                                      d.data[0].value >= d.data[1].value
                                        ? colorPicker.green100
                                        : colorPicker.red
                                    }
                                  >
                                    prev period
                                  </Sofia>
                                </StyledRightTooltip>
                              </StyledAreaMapTooltip>
                            </StyledTooltip>
                          );
                        }}
                      />
                    }
                  ></TooltipArea>
                }
                area={
                  <Area
                    style={(data, idx) =>
                      data && data.length && data[0] && data[0].key === keys[0]
                        ? {
                            opacity: fillColors ? 1 : 0.9,
                            fill: getColorScheme()[1]
                          }
                        : {
                            opacity: fillColors ? 1 : 0,
                            fill: getColorScheme()[0]
                          }
                    }
                    mask={
                      !fillColors ? (
                        <Gradient
                          stops={[
                            <GradientStop
                              offset="10%"
                              color={getColorScheme()[0]}
                              stopOpacity={0}
                              key="start"
                            />,
                            <GradientStop
                              offset="80%"
                              color={getColorScheme()[0]}
                              stopOpacity={gradient ? 1 : 0}
                              key="stop"
                            />
                          ]}
                        />
                      ) : null
                    }
                  />
                }
                line={
                  <Line
                    strokeWidth={3}
                    style={fillColors ? { stroke: "transparent" } : null}
                  />
                }
              />
            }
          />
        );
      case false:
        return (
          <AreaChart
            width={470}
            height={220}
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
            xAxis={
              <LinearXAxis
                type="time"
                tickSeries={
                  <LinearXAxisTickSeries
                    line={null}
                    label={
                      <LinearXAxisTickLabel
                        padding={5}
                        format={d => moment(d).format("ddd")}
                      />
                    }
                  />
                }
              />
            }
            series={
              <LineSeries
                colorScheme={getColorScheme()}
                symbols={<PointSeries show="hover" />}
              />
            }
            data={data}
          />
        );
      default:
        return <div>loading</div>;
    }
  } else {
    return <div>loading</div>;
  }
};

const Legend = ({ colors, data }) => {
  return (
    <DiscreteLegend
      orientation="horizontal"
      style={{ margin: "0 auto" }}
      entries={data.map((dataSet, index) => {
        return (
          <DiscreteLegendEntry
            label={dataSet.key}
            color={colors[index]}
            symbol={<StyledLevelSquare />}
          />
        );
      })}
    />
  );
};
