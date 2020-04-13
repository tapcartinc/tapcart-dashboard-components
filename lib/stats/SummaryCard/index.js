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

  const updatedDataDates = data.map(dataSet => {
    return { ...dataSet, key: moment(dataSet.key) };
  });

  const getIcon = name => {
    switch (name) {
      case "Total App Sales":
        return "orders";
      case "App Sessions":
        return "session";
      case "Conversion Rate":
        return "conversion";
      default:
        break;
    }
  };

  return (
    <StyledSummaryCardWrapper
      upShift={currentScore > prevPeriodScore}
      onClick={() => removeCard(info)}
    >
      <StyledBorderTop upShift={currentScore > prevPeriodScore} />
      <StyledCardLeft>
        <div className="summary-card-header">
          <StatsIcon type={getIcon(title)} />
          <StyledBody>{title}</StyledBody>
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
            height={80}
            data={updatedDataDates}
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
  width: 323px;
  height: 130px;
  border: 1px solid ${colorPicker.gray25};
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  padding: 24px 23px 20px 20px;
  display: flex;
  align-items: center;
  margin-right: 15px;
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
  margin-top: 5px;
`;

const StyledBody = styled(Body)`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  margin-left: 7px;
  ${circularStd.medium}
`;

const StyledStatHeader = styled.div`
  text-align: left;
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
