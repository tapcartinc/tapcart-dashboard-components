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
    setToggleState,
    errors,
    flexWrap,
    justifyContent
  } = props;

  return (
    <StyledField
      lastField={lastField}
      fieldFlow={fieldFlow}
      hasChildren={props.children}
      {...props}
      hasToggle={hasToggle}
    >
      {label && (
        <StyledFieldInfo {...props}>
          <StyledLabel>{label}</StyledLabel>
          <StyledDescription errors={errors}>{description}</StyledDescription>
          {errors && errors.length > 0 && (
            <StyledErrors errors={errors}>
              {errors.map(error => {
                return <span key={error}>{error}</span>;
              })}
            </StyledErrors>
          )}
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
      {props.children && (
        <StyledChildren
          justifyContent={justifyContent}
          flexWrap={flexWrap}
          toggleState={toggleState}
          hasToggle={hasToggle}
          fieldFlow={fieldFlow}
        >
          {props.children}
        </StyledChildren>
      )}
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
    !props.hasChildren &&
    `flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap;`}
  ${props =>
    props.fieldFlow === "vertical" &&
    `flex-direction: column; align-items: flex-start; justify-content: flex-start; flex-wrap: wrap`};
`;

const StyledChildren = styled.div`
  padding: 19px 24px;
  padding-left: 5px;

  ${props =>
    props.fieldFlow === "vertical" &&
    `width: 100%; padding: 0px 24px 19px 24px;`};
  ${props =>
    props.hasToggle && `padding-left: 19px; width: 100%; padding-top: 0px`};

  ${props => !props.hasToggle && `display: flex`};
  ${props => props.hasToggle && !props.toggleState && `display: none`};
  ${props => props.hasToggle && props.toggleState && `display: flex`};
  ${props => props.flexWrap && `flex-wrap: wrap`};
  ${props => props.justifyContent && `justify-content: space-between`};
`;
const StyledFieldInfo = styled.div`
  padding: 19px 24px;
  ${props => (props.style ? props.style : null)}
`;
const StyledLabel = styled(Body)`
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 3px;
`;

const StyledDescription = styled.div`
  color: ${colorPicker.gray};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}
  ${props => props.errors && props.errors.length > 0 && `display: none`};
`;
const StyledErrors = styled.div`
  color: ${colorPicker.red};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}

  span {
    display: block;
  }
`;
