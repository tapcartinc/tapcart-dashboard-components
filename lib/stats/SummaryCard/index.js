import React from "react";
import styled from "styled-components";
import {
  AreaSparklineChart,
  AreaSeries,
  Gradient,
  GradientStop,
  Area,
  ScatterPoint,
  PointSeries,
  Line,
  symbol
} from "reaviz";
import { colorPicker, sofiaPro, circularStd } from "../../utils/_dashVariables";
import moment from "moment";
import { StatsIcon } from "../StatsIcon";
import { Body } from "../../elements/Typography";

const SummaryCard = props => {
  const {
    title,
    info,
    icon,
    currentScore,
    percentageDifference,
    prevPeriodScore,
    data,
    removeCard,
    currency
  } = props;
  const currentColor =
    currentScore > prevPeriodScore ? colorPicker.green100 : colorPicker.red;

  return (
    <StyledSummaryCardWrapper
      upShift={currentScore > prevPeriodScore}
      onClick={() => removeCard(info)}
    >
      <StyledBorderTop upShift={currentScore > prevPeriodScore} />
      <StyledCardLeft>
        <div className="summary-card-header">
          <StatsIcon type={icon} iconLeft />
          <StyledBody> {title}</StyledBody>
        </div>
        <StyledStatHeader lg>
          {currency && <span>{currency}</span>}
          {currentScore}
        </StyledStatHeader>
        <StyledDifference unShift={currentScore > prevPeriodScore}>
          {currentScore > prevPeriodScore && (
            <span className="arrow">&uarr;</span>
          )}
          {currentScore < prevPeriodScore && (
            <span className="arrow">&darr;</span>
          )}
          {currency && <span>{currency} </span>}
          {prevPeriodScore} ({percentageDifference}%)
        </StyledDifference>
      </StyledCardLeft>
      <StyledCardRight>
        {data.length > 0 && (
          <AreaSparklineChart
            width={113}
            height={67}
            data={data}
            series={
              <AreaSeries
                tooltip={null}
                colorScheme={[currentColor]}
                interpolation="smooth"
                symbols={
                  <PointSeries
                    show="last"
                    point={
                      <ScatterPoint
                        symbol={d => {
                          return (
                            <g>
                              <circle
                                cx="1"
                                cy="0"
                                r="3"
                                stroke={currentColor}
                                strokeWidth="2"
                                fill="white"
                              />
                            </g>
                          );
                        }}
                      />
                    }
                  />
                }
                area={
                  <Area
                    style={{ opacity: 0.6 }}
                    gradient={
                      <Gradient
                        stops={[
                          <GradientStop
                            offset="20%"
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
                line={<Line strokeWidth={2} />}
              />
            }
          />
        )}
      </StyledCardRight>
    </StyledSummaryCardWrapper>
  );
};
export { SummaryCard };

const StyledSummaryCardWrapper = styled.div`
  width: 270px;
  height: 118px;
  border: 1px solid ${colorPicker.gray25};
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  padding: 24px 5px 20px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBorderTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 7px;
  width: 100%;
  background: ${props =>
    props.upShift ? colorPicker.green100 : colorPicker.red};
`;

const StyledCardLeft = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  .summary-card-header {
    display: flex;
    align-items: center;
  }
`;
const StyledCardRight = styled.div`
  width: 46%;
  position: absolute;
  right:
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: flex-end;
  height: 77px;
  right: 10px;
`;

const StyledBody = styled(Body)`
  font-size: 13px;
  font-weight: 500;
  margin-left: -2px;
  width: 100%;
  font-
  ${circularStd.medium}
`;

const StyledStatHeader = styled.div`
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  font-weight: 300;
  color: ${colorPicker.blue};
  ${props => props.lg && `font-size: 30px`};
  ${props => props.sm && `font-size: 27px`};
  ${sofiaPro.light}
`;
const StyledDifference = styled.div`
  margin-top: 8px;
  color: ${props => (props.unShift ? colorPicker.green100 : colorPicker.red)};
  -webkit-font-smoothing: antialiased;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  ${sofiaPro.regular}
  .arrow {
    margin-right: 3px;
    margin-top: 2px;
  }
`;
