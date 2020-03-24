import React, { Fragment, useRef, useState, useEffect } from "react";
import {
  PieChart,
  PieArcSeries,
  PieArcLabel,
  TooltipArea,
  PieArc,
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
  StyledTooltip
} from "../styles";
import { Sofia } from "../../../elements/Typography";
import { colorPicker } from "../../../utils/_dashVariables";
import { useFormattedNumber } from "../../../hooks/useFormattedNumber";
// import { Icon } from "../../../elements/Icon";

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
      {/* <StyledCardHeader style={{ marginBottom: "-30px !important" }}>
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
                  {useFormattedNumber(section.currentTotal)}
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
      </StyledCardHeader> */}
      <div style={{ paddingLeft: "40px" }}>
        <PieChart
          height={325}
          width={400}
          data={data}
          series={
            <PieArcSeries
              doughnut={true}
              colorScheme={colors}
              label={
                <PieArcLabel
                  style={{ width: "400px !important" }}
                  format={d => {
                    return <Key>{d.key}</Key>;
                  }}
                />
              }
              arc={
                <PieArc
                  tooltip={
                    <ChartTooltip
                      placement="top"
                      followCursor={true}
                      content={d => {
                        console.log("d", d);
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
