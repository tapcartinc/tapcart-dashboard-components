import React, { useRef, useState, useEffect } from "react";
import {
  AreaChart,
  AreaSeries,
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
import { useFormattedNumber } from "../../../hooks/useFormattedNumber";

function convert(d, unit) {
  let date;
  if (unit === "WEEKS") {
    // const startDate = moment()
    //   .week(d)
    //   .startOf("isoWeek")
    //   .format("YYYY-MM-DD");
    // const endDate = moment()
    //   .week(d)
    //   .endOf("isoWeek")
    //   .format("YYYY-MM-DD");
    // date = `${startDate} - ${endDate}`;
    // console.log("startDate", startDate);
    // date = startDate;

    return moment()
      .week(d)
      .toDate();
  } else {
    date = moment(d).toDate();
  }

  return date;
}

const convertData = (data, unit) => {
  return (
    data &&
    data.reduce((acc, dataSet, index) => {
      if (dataSet.data.length) {
        return [
          ...acc,
          {
            key: dataSet.key,
            data: dataSet.data.map((key, index) => {
              return (key[index] = { ...key, key: convert(key.key, unit) });
            })
          }
        ];
      } else {
        return [...acc, { ...dataSet, key: convert(dataSet.key, unit) }];
      }
    }, [])
  );
};

const AreaGraph = props => {
  // const updatedData = props.data && convertData(props.data);
  const updatedData =
    props.data && props.unit === "WEEKS"
      ? convertData(props.data[0], props.unit)
      : convertData(props.data, props.unit);

  const [currUnit, setCurrUnit] = useState(null);

  const unitRef = useRef();

  useEffect(() => {
    if (props.unit !== currUnit && previousUnit !== props.unit) {
      return setCurrUnit(props.unit);
    }
    if (!currUnit && props.unit) {
      return setCurrUnit(props.unit);
    }
  }, [props.unit]);

  const previousUnit = unitRef.current;

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
    removeCard,
    unit
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
        info={info}
        data={updatedData}
        currency={currency}
        stacked={stacked}
        gradient={gradient}
        fillColors={fillColors}
        getColorScheme={getColorScheme}
        colors={colors}
        unit={currUnit}
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
  colors,
  info,
  unit
}) => {
  const getFormat = d => {
    return moment(d).format("MMM D YY");
  };

  const getTooltipFormat = value => {
    if (unit === "WEEKS") {
      return moment(value).format("MMM D");
    }
    if (unit === "DAYS") {
      return moment(value).format("MMM D");
    }
    if (unit === "HOURS") {
      return moment(`${value}:00:00`, "HH:mm:ss").format("h A");
    }
  };

  const keys = [];
  data && data.map(dataSet => keys.push(dataSet.key));

  if (data && data.length) {
    switch (stacked) {
      case true:
        return (
          <AreaChart
            width={470}
            height={220}
            series={
              <AreaSeries type="stacked" colorScheme={getColorScheme()} />
            }
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
                    label={
                      <LinearYAxisTickLabel
                        padding={5}
                        rotation={false}
                        format={data =>
                          useFormattedNumber(data).toLocaleString()
                        }
                      />
                    }
                  />
                }
              />
            }
            xAxis={
              <LinearXAxis
                // type="time"
                type={
                  unit === "DAYS"
                    ? "time"
                    : unit === "WEEKS"
                    ? "value"
                    : "value"
                }
                tickSeries={
                  <LinearXAxisTickSeries
                    line={null}
                    label={
                      <LinearXAxisTickLabel
                        padding={5}
                        format={d => {
                          const cat = getFormat(d);
                          return cat;
                        }}
                      />
                    }
                  />
                }
              />
            }
            series={
              <StackedAreaSeries
                type="stacked"
                interpolation="smooth"
                colorScheme={getColorScheme()}
                tooltip={
                  <TooltipArea
                    placement="top"
                    tooltip={
                      <ChartTooltip
                        followCursor={true}
                        content={d => {
                          const currentTotal =
                            d &&
                            d.data &&
                            d.data.length &&
                            d.data[0] &&
                            d.data[0].value;
                          const previousTotal =
                            d &&
                            d.data &&
                            d.data.length &&
                            d.data[1] &&
                            d.data[1].value;
                          const totalFormatted = useFormattedNumber(
                            d &&
                              d.data &&
                              d.data.length &&
                              d.data[0] &&
                              d.data[0].value
                          );

                          return (
                            <StyledTooltip
                              tipAlign="bottom"
                              style={{ background: "white", padding: 10 }}
                            >
                              <StyledAreaMapTooltip>
                                <StyledLeftTooltip>
                                  <Sofia
                                    marginBottom="2px"
                                    marginTop="5px"
                                    fontSize="11px"
                                    color={colorPicker.black}
                                  >
                                    {getTooltipFormat(d.x)}
                                    {/* {`${moment(d.x).format("MMM D")}`} */}
                                  </Sofia>
                                  <Sofia
                                    marginBottom="5px"
                                    marginTop="0px"
                                    fontSize="11px"
                                    color={colorPicker.blue}
                                    fontSize="13px"
                                  >
                                    {currency && <span>{currency}</span>}
                                    {totalFormatted.toLocaleString()}
                                  </Sofia>
                                </StyledLeftTooltip>
                                <StyledRightTooltip
                                  upShift={currentTotal >= previousTotal}
                                >
                                  <Sofia
                                    marginBottom="0px"
                                    color={
                                      currentTotal >= previousTotal
                                        ? colorPicker.green100
                                        : colorPicker.red
                                    }
                                  >
                                    {currentTotal > previousTotal && (
                                      <span>&uarr;</span>
                                    )}
                                    {currentTotal < previousTotal && (
                                      <span>&darr;</span>
                                    )}
                                    {Number(
                                      parseFloat(
                                        ((Number(currentTotal) -
                                          Number(previousTotal)) /
                                          ((Number(currentTotal) +
                                            Number(previousTotal)) /
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
                                      currentTotal >= previousTotal
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
                  />
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
            data={data}
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
                        padding={10}
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
