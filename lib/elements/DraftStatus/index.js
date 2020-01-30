import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

const DraftStatus = ({ status, ...props }) => {
  console.log("status", status);
  return (
    <StyledDraftStatusWrapper status={status}>
      <StyledStatusCircle {...props} status={status} />
      <StyledStatusText>{status || "Draft"}</StyledStatusText>
    </StyledDraftStatusWrapper>
  );
};

export { DraftStatus };

DraftStatus.propTypes = {
  // value: PropTypes.string.isRequired,
  // name: PropTypes.string,
  // placeholder: PropTypes.string,
  // onChange: PropTypes.func,
  // label: PropTypes.string
};

DraftStatus.defaultProps = {};

const StyledDraftStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colorPicker.gray};
  align-content: center;
  justify-content: flex-start;

  ${props => {
    return props.status === "live" && `color: ${colorPicker.green100};`;
  }}
  ${props => {
    return props.status === "scheduled" && `color: ${colorPicker.yellow};`;
  }}
`;

const StyledStatusCircle = styled.div`
  background: ${colorPicker.gray};
  height: 7px;
  width: 7px;
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
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.83px;

  ${circularStd.medium}
`;