import React from "react";
import {
  StyledGraphCard,
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference
} from "../charts/styles";
import { colorPicker } from "../../utils/_dashVariables";

const CardHeading = props => {
  const { range, info, body, currency } = props;
  return (
    <StyledCardHeader>
      <StyledTitleSection>
        <span className="title">
          <StyledTitle>{info.name}</StyledTitle>
          {tooltip && (
            <ToolTip color={colorPicker.grayBlue}>{info.description}</ToolTip>
          )}
        </span>
        <StyledDescText>
          {moment(range.start).format("MMM Do")} -{" "}
          {moment(range.end).format("MMM Do")}{" "}
          {moment(range.end).format("YYYY")}
        </StyledDescText>
      </StyledTitleSection>
      {body &&
        body.length > 0 &&
        body.map(statInfo => {
          return (
            <StyledHeaderChildren key={statInfo.title}>
              <StyledDescText>{statInfo.title}</StyledDescText>
              <StyledStatHeader sm>
                {currency && (
                  <span style={{ marginRight: "-4px" }}>{currency} </span>
                )}
                {Number(statInfo.total).toLocaleString()}
              </StyledStatHeader>

              <StyledDifference
                upShift={statInfo.total > statInfo.previousTotal}
              >
                {statInfo.total > statInfo.previousTotal && (
                  <span className="arrow">&uarr;</span>
                )}
                {statInfo.total < statInfo.previousTotal && (
                  <span className="arrow">&darr;</span>
                )}
                {currency && <span>{currency} </span>}
                {Number(statInfo.previousTotal).toLocaleString()} (
                {statInfo.percentChange}%)
              </StyledDifference>
            </StyledHeaderChildren>
          );
        })}
    </StyledCardHeader>
  );
};
export default CardHeading;
