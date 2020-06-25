import React from "react";
import {
  StyledCardHeader,
  StyledTitleSection,
  StyledHeaderChildren,
  StyledTitle,
  StyledDescText,
  StyledStatHeader,
  StyledDifference,
  StyledToolltipText,
} from "../charts/styles";
import moment from "moment";
import { colorPicker } from "../../utils/_dashVariables";
import { ToolTip } from "../../components/ToolTip";

const CardHeading = (props) => {
  const { range, info, body, currency } = props;

  return (
    <StyledCardHeader>
      <StyledTitleSection>
        <span className="title">
          <StyledTitle>{info.name}</StyledTitle>
          {info.description && (
            <ToolTip color={colorPicker.grayBlue}>
              <StyledToolltipText color={colorPicker.blue}>
                {info.description.props
                  ? info.description.props.children.map((child) => {
                      if (typeof child === "string") {
                        return React.createElement(
                          "div",
                          { key: child },
                          `${child}`
                        );
                      }
                    })
                  : info.description}
              </StyledToolltipText>
            </ToolTip>
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
        body.map((statInfo) => {
          return (
            <StyledHeaderChildren key={statInfo.title}>
              <StyledDescText>{statInfo.title}</StyledDescText>
              <StyledStatHeader sm>
                {currency && (
                  <span style={{ marginRight: "-4px" }}>{currency} </span>
                )}
                {statInfo.total}
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
                {statInfo.previousTotal}
                {statInfo.percentChange && (
                  <>&nbsp; ({statInfo.percentChange}%)</>
                )}
              </StyledDifference>
            </StyledHeaderChildren>
          );
        })}
    </StyledCardHeader>
  );
};
export { CardHeading };
