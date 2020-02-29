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
  StyledDifference
} from "../styles";

import { ToolTip } from "../../../components/ToolTip";
import moment from "moment";

import { colorPicker, defaultGraphColors } from "../../../utils/_dashVariables";

function convert(d) {
  const date = moment(d).toDate();
  return date;
}

const convertData = data => {
  return data.reduce((acc, dataSet, index) => {
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
  }, []);
};

const AreaGraph = props => {
  const [state, setState] = useState({
    data: [],
    dimmension: "",
    prevData: [],
    range: []
  });

  const currentData = useRef();

  useEffect(() => {
    currentData.current = state.data;
    if (!previousData && props.data) {
      return setState(prevState => ({
        ...prevState,
        data: convertData(props.data)
      }));
    }

    if (state.range.length <= 0 && state.data.length > 0) {
      setRange();
    }
  }, [props.data, state.data]);

  const previousData = currentData.current;

  const { stacked, currency, colors, tooltip, statValues, title } = props;

  const setRange = () => {
    state.data.map((dataSet, index) => {
      if (dataSet.data.length) {
        return setState(prevState => ({
          ...prevState,
          range: [
            dataSet.data[0].key,
            dataSet.data[dataSet.data.length - 1].key
          ]
        }));
      } else {
        return setState(prevState => ({
          ...prevState,
          range: [state.data[0], state.data[state.data.length - 1]]
        }));
      }
    });
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
          <StyledDescText>
            {moment(state.range[0]).format("MMM Do")} -{" "}
            {moment(state.range[1]).format("MMM Do")}{" "}
            {moment(state.range[1]).format("YYYY")}
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
      <GraphDetails
        stacked={stacked}
        data={state.data}
        getColorScheme={getColorScheme}
      />
    </StyledGraphCard>
  );
};
export { AreaGraph };

const GraphDetails = ({ data, getColorScheme, stacked }) => {
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
              <StackedAreaSeries
                type="grouped"
                interpolation="linear"
                colorScheme={getColorScheme()}
                tooltip={
                  <TooltipArea
                    tooltip={
                      <ChartTooltip
                        followCursor={true}
                        modifiers={{
                          offset: "5px, 5px"
                        }}
                        content={(data, color) => (
                          <TooltipTemplate
                            color={color}
                            // value={{
                            //   x: formatValue(data.x),
                            //   y: `${formatValue(Math.abs(data.data[0].y))}`
                            // }}
                          />
                        )}
                      />
                    }
                  >
                    helllo
                  </TooltipArea>
                }
                area={
                  <Area
                    style={data =>
                      data &&
                      data.length &&
                      data[0] &&
                      data[0].key === "Current Period"
                        ? {
                            opacity: 0.7
                          }
                        : {
                            opacity: 0
                          }
                    }
                    gradient={
                      <Gradient
                        stops={[
                          <GradientStop
                            offset="0%"
                            stopOpacity={0}
                            key="stop"
                          />,
                          <GradientStop
                            offset="90%"
                            stopOpacity={0.3}
                            key="start"
                          />
                        ]}
                      />
                    }
                  />
                }
                line={<Line strokeWidth={3} />}
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
            series={<LineSeries colorScheme={getColorScheme()} />}
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
