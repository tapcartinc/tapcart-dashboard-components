import React, { Fragment, useRef, useState, useEffect } from "react";
import {
  PieChart,
  PieArcSeries,
  PieArcLabel,
  TooltipArea,
  DiscreteLegendEntry,
  PieArc,
  DiscreteLegend,
  ChartTooltip,
} from "reaviz";
import { StyledGraphCard, StyledTooltip, StyledLevelSquare } from "../styles";
import { Sofia } from "../../../elements/Typography";
import { colorPicker } from "../../../utils/_dashVariables";
import { useFormattedNumber } from "../../../hooks/useFormattedNumber";
import { CardHeading } from "../../CardHeading";

const PieGraph = (props) => {
  const {
    data,
    removeCard,
    tooltip,
    colors,
    info,
    body,
    currency,
    range,
  } = props;

  return (
    <StyledGraphCard onClick={() => removeCard(info)}>
      <CardHeading
        range={range}
        info={info}
        body={body}
        tooltip={tooltip}
        currency={currency}
      />
      <div style={{ paddingLeft: "50px" }}>
        <PieChart
          height={245}
          width={400}
          data={data}
          series={
            <PieArcSeries
              doughnut={true}
              label={null}
              colorScheme={colors}
              arc={
                <PieArc
                  tooltip={
                    <ChartTooltip
                      content={(d) => {
                        return (
                          <StyledTooltip width="70px">
                            <Sofia
                              style={{ textAlign: "center" }}
                              fontSize="11px"
                              color={colorPicker.blue}
                            >
                              {d.y}
                            </Sofia>
                          </StyledTooltip>
                        );
                      }}
                    />
                  }
                />
              }
            />
          }
        />
      </div>
      <Legend colors={colors} data={data} />
    </StyledGraphCard>
  );
};
export { PieGraph };

const Legend = ({ colors, data }) => {
  const sortData = data.slice(0).reverse();
  const sortcolors = colors.slice(0).reverse();
  return (
    <DiscreteLegend
      orientation="horizontal"
      style={{ margin: "0 auto" }}
      entries={sortData.map((dataSet, index) => {
        return (
          <DiscreteLegendEntry
            label={dataSet.key}
            color={sortcolors[index]}
            symbol={<StyledLevelSquare />}
          />
        );
      })}
    />
  );
};
