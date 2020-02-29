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

const StyledTooltip = styled.div`
  position: relative;
  background: white;
  width: 70px;
  padding: 3px 8px;
  border-radius: 3px;
  text-align: center;
  transform: translateY(12px);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);

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
`;

const StyledHeatmapTip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeatmapTooltip = props => {
  return <StyledTooltip {...props}>{props.children}</StyledTooltip>;
};

export {
  StyledGraphCard,
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference,
  StyledHeatmapTooltip,
  StyledHeatmapTip
};
