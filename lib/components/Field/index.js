import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Body } from "../../elements/Typography";
import { BoxedToggle } from "../../components/BoxedToggle";
import { circularStd, sofiaPro, colorPicker } from "../../utils/_dashVariables";

const Field = props => {
  const {
    label,
    description,
    lastField,
    fieldFlow,
    hasToggle,
    toggleState,
    setToggleState
  } = props;

  return (
    <StyledField
      lastField={lastField}
      fieldFlow={fieldFlow}
      {...props}
      hasToggle={hasToggle}
    >
      {label && (
        <StyledFieldInfo>
          <StyledLabel>{label}</StyledLabel>
          <StyledDescription>{description}</StyledDescription>
        </StyledFieldInfo>
      )}
      {hasToggle && (
        <div style={{ padding: "19px 24px" }}>
          <BoxedToggle
            type="basic"
            id="toggle"
            toggleState={toggleState}
            onChange={setToggleState}
          />
        </div>
      )}
      <StyledChildren
        toggleState={toggleState}
        hasToggle={hasToggle}
        fieldFlow={fieldFlow}
      >
        {props.children}
      </StyledChildren>
    </StyledField>
  );
};
export { Field };

const StyledField = styled.div`
  background: white;
  min-height: 78px;
  display: flex;

  ${props =>
    !props.lastField && `border-bottom: 1px solid ${colorPicker.gray25}`};
  ${props =>
    props.fieldFlow === "horizontal" &&
    `flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap;`}
  ${props =>
    props.fieldFlow === "vertical" &&
    `flex-direction: column; align-items: flex-start; justify-content: flex-start;`}
`;

const StyledChildren = styled.div`
  padding: 19px 24px;

  ${props =>
    props.fieldFlow === "vertical" &&
    `width: 100%; padding: 0px 24px 19px 24px`};
  ${props => props.hasToggle && `width: 100%; padding-top: 0px`};

  ${props => !props.hasToggle && `   display: flex`};
  ${props => props.hasToggle && !props.toggleState && ` display: none`};
  ${props => props.hasToggle && props.toggleState && `   display: flex`};
`;
const StyledFieldInfo = styled.div`
  padding: 19px 24px;
`;
const StyledLabel = styled(Body)`
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const StyledDescription = styled.p`
  color: ${colorPicker.gray};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}
`;
