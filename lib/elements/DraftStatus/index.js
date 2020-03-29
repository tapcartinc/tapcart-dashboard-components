import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

const DraftStatus = ({ status, ...props }) => {
  return (
    <StyledDraftStatusWrapper status={status}>
      <StyledStatusCircle {...props} status={status} />
      <StyledStatusText>{status || "Draft"}</StyledStatusText>
    </StyledDraftStatusWrapper>
  );
};

export { DraftStatus };

DraftStatus.propTypes = {
  /**
  options: live, scheduled, or no status prop (defaults to "draft")
  */
  status: PropTypes.string
};

DraftStatus.defaultProps = {
  status: ""
};

const StyledDraftStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colorPicker.gray};
  align-content: center;
  justify-content: flex-start;
  align-items: center;

  ${props => {
    return props.status === "live" && `color: ${colorPicker.green100};`;
  }}
  ${props => {
    return props.status === "scheduled" && `color: ${colorPicker.yellow};`;
  }}
`;

const StyledStatusCircle = styled.div`
  background: ${colorPicker.gray};
  height: 8px;
  width: 8px;
  border-radius: 50px;
  margin-right: 8px;

  ${props => {
    return props.status === "live" && `background: ${colorPicker.green100};`;
  }}
  ${props => {
    return props.status === "scheduled" && `background: ${colorPicker.yellow};`;
  }}

  ${props => (props.style ? props.style : null)};
`;

const StyledStatusText = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.83px;
  line-height: 0.8;
  ${circularStd.medium}
`;
