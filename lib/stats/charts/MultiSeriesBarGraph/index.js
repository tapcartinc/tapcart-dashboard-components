import React from "react";
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

const MultiSeriesBarGraph = props => {
  const { data, colors } = props;
  const colorScheme = useColorScheme(colors);

  const cats = generateDates(new Date("11/1/2019"), new Date("11/24/2019"));

  // console.log("data", data);

  return (
    <StyledGraphCard>
      <StackedBarChart
        width={500}
        height={220}
        data={cats}
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
        series={
          <StackedBarSeries
            bar={
              <Bar
                // rx={rx}
                // ry={ry}
                rounded={true}
                // gradient={null}
                // rangeLines={rangelines}
                // guide={guide}
                style={data => {
                  // console.log("data", data);
                  if (data.x === "Direct") {
                    console.log("Style callback...", data);
                    return {
                      fill: colors[0],
                      clipPath: "none"
                    };
                  }
                  if (data.x === "Push") {
                    console.log("Style callback...", data);
                    return {
                      fill: colors[1],
                      clipPath: "none"
                    };
                  }
                  if (data.x === "Deeplink") {
                    console.log("Style callback...", data);
                    return {
                      fill: colors[2],
                      clipPath: "none"
                    };
                  }
                }}
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
