import React, { Fragment, useRef, useState, useEffect } from "react";
import {
  PieChart,
  PieArcSeries,
  PieArcLabel,
  TooltipArea,
  PieArc,
  ChartTooltip
} from "reaviz";
import { StyledGraphCard, StyledTooltip } from "../styles";
import { Sofia } from "../../../elements/Typography";
import { colorPicker } from "../../../utils/_dashVariables";
import { useFormattedNumber } from "../../../hooks/useFormattedNumber";
import CardHeading from "../../CardHeading";

const PieGraph = props => {
  const {
    data,
    removeCard,
    tooltip,
    colors,
    info,
    body,
    currency,
    range
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
      <div style={{ paddingLeft: "40px", marginTop: "-50px" }}>
        <PieChart
          height={325}
          width={400}
          data={data}
          series={
            <PieArcSeries
              doughnut={true}
              colorScheme={colors}
              // label={
              //   <PieArcLabel
              //     style={{ width: "400px !important" }}
              //     // format={d => {
              //     //   return <Key>{d.key}</Key>;
              //     // }}
              //   />
              // }
              arc={
                <PieArc
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
                />
              }
            />
          }
        />
      </div>
    </StyledGraphCard>
  );
};
export { PieGraph };

const Key = ({ children }) => {
  return (
    <Fragment>
      {children}
      {/* {dataSet.key}
      {dataSet.data} */}
    </Fragment>
  );
};
