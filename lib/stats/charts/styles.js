import React from "react";
import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { Body, Description } from "../../elements/Typography";
import { boxShadow } from "../../utils/_variables";

const StyledGraphCard = styled.div`
  background: white;
  border: 1px solid ${colorPicker.gray25};
  width: 550px;
  height: 350px;
  border-radius: 3px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 23px;
`;

const StyledCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledCardHeader = props => {
  return <StyledCardHeaderWrapper>{props.children}</StyledCardHeaderWrapper>;
};

const StyledTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    display: flex;
    align-items: center;
  }
`;

const StyledTitle = styled(Body)`
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 2px;
`;

const StyledDescText = styled(Description)`
  font-size: 13px;
  line-height: 1;
  margin-top: 2px;
  margin-bottom: 4px;
`;

const StyledHeaderChildren = styled.div`
  text-align: right;
`;

const StyledStatHeader = styled.div`
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  font-weight: 400;
  color: ${colorPicker.blue};
  ${props => props.lg && `font-size: 30px`};
  ${props => props.sm && `font-size: 24px`};
  ${sofiaPro.regular}
`;

const StyledDifference = styled.div`
  margin-top: 4px;
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
  ${props =>
    props.upShift
      ? `color: ${colorPicker.green100}`
      : `color: ${colorPicker.red}`}
`;

const StyledTip = styled.div`
  position: relative;
  background: white;
  width: 100%;
  padding: 3px 8px;
  border-radius: 3px;
  text-align: center;
  transform: translateY(12px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: calc(42%);
    background: white;
    width: 12px;
    height: 8px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  ${props => props.width && `width: ${props.width};`}
`;

const StyledHeatmapTip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTooltip = props => {
  return (
    <StyledTip {...props} width={props.width}>
      {props.children}
    </StyledTip>
  );
};

const StyledAreaMapTooltip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const StyledCustomLegendWrapper = styled.ul`
  list-style: none;
  display: flex;
  font-size: 11px;
  color: ${colorPicker.gray};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const StyledLevelSquare = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 2px;
  margin-right: 8px;
  background: ${props => props.color};
`;
const StyledLevel = styled.li`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
  }
`;

const StyledCustomLegend = props => {
  const { data } = props;
  return (
    <StyledCustomLegendWrapper {...props}>
      {data.map(dataLevel => {
        return (
          <StyledLevel key={dataLevel.key}>
            <StyledLevelSquare color={dataLevel.color} />
            <span>{dataLevel.key}</span>
          </StyledLevel>
        );
      })}
    </StyledCustomLegendWrapper>
  );
};

const StyledLeftTooltip = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 5px;
  align-items: flex-start;
  justify-content: center;
`;

const StyledRightTooltip = styled.div`
  width: 55%;
  min-height: 35px;
  background: ${props =>
    props.upShift ? colorPicker.green50 : colorPicker.redTint};
  height: 100%;
  border-radius: 3px;

  span {
    margin-right: 3px;
  }
`;

export {
  StyledGraphCard,
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference,
  StyledTooltip,
  StyledHeatmapTip,
  StyledCustomLegend,
  StyledAreaMapTooltip,
  StyledLeftTooltip,
  StyledRightTooltip
};
