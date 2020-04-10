import React, { useRef, useEffect, useState } from "react";
import { Icon } from "../elements/Icon";
import styled from "styled-components";
import { colorPicker, circularStd } from "../utils/_dashVariables";

const AccordionSection = props => {
  const [errors, setErrors] = useState([]);
  const {
    isOpen,
    label,
    boxShadow,
    toggleIcons,
    steps,
    index,
    className,
    style,
    type,
    header,
    numerical,
    stepComplete,
    stateValues,
    requiredContent
  } = props;

  const currentErrorsRef = useRef();

  useEffect(() => {
    currentErrorsRef.current = props.errors ? props.errors : null;

    if (
      !previousErrors &&
      props.errors &&
      requiredContent &&
      requiredContent.length > 0
    ) {
      return throwErrors(props.errors);
    }

    if (
      props.errors &&
      previousErrors &&
      requiredContent &&
      requiredContent.length > 0 &&
      Object.keys(previousErrors).length !== Object.keys(props.errors).length
    ) {
      return throwErrors(props.errors);
    }

    if (previousErrors && !props.errors) {
      return setErrors([]);
    }
  }, [props.errors]);

  const previousErrors = currentErrorsRef.current;

  const throwErrors = errors => {
    const newErrors = [];
    const currentErrors = Object.entries(props.errors);

    currentErrors.map(error => {
      if (errors.hasOwnProperty(error[0])) {
        newErrors.push(error);
      }
    });
    return setErrors(newErrors);
  };

  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <AccordionStyledItem
      steps={steps}
      boxShadow={boxShadow}
      style={style}
      isOpen={isOpen}
      error={errors && errors.length > 0}
    >
      <AccordionLabel
        steps={steps}
        onClick={onClick}
        isOpen={isOpen}
        className={className}
        error={errors && errors.length > 0}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {steps && (
            <StyledStep
              stepComplete={stateValues[index]}
              error={errors && errors.length > 0}
            >
              {numerical && !stateValues[index] && <>{index + 1}</>}
              {steps && stateValues[index] && (
                <Icon type="checkmark" fill="#ffffff" />
              )}
            </StyledStep>
          )}
          {!steps && <Icon type="small-drag" style={{ marginRight: 8 }} />}
          {errors && errors.length > 0 && errors[0][1]}
          {!errors.length && label}
        </div>
        <div style={{ float: "right" }}>
          {!isOpen && (
            <span>
              <Icon
                fill={colorPicker.blue}
                type={
                  props.toggleIcons === "plus/minus"
                    ? "small-add"
                    : "arrow-down"
                }
              ></Icon>
            </span>
          )}
          {isOpen && (
            <span>
              <Icon
                fill={colorPicker.blue}
                type={toggleIcons === "plus/minus" ? "subtract" : "arrow-up"}
              ></Icon>
            </span>
          )}
        </div>
      </AccordionLabel>
      <AccordionWrapper isOpen={isOpen}>
        <AccordionChildren steps={steps} className={className} isOpen={isOpen}>
          {props.children}
        </AccordionChildren>
      </AccordionWrapper>
    </AccordionStyledItem>
  );
};
export default AccordionSection;

const AccordionWrapper = styled.div`
  ${props =>
    props.isOpen
      ? `
  max-height: 100rem;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.5s;
  transition-property: max-height;
  `
      : `
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;`}
`;

const AccordionStyledItem = styled.div`
  padding: 0px 30px 0px 15px;
  border-radius: 3px;
  background: white;
  box-shadow: ${props =>
    props.boxShadow ? "0px 2px 40px 0px rgba(0,0,0,0.05)" : null};
  margin-bottom: 20px;

  ${props =>
    props.isOpen &&
    `
  box-shadow: 0 0 0 2px ${colorPicker.blue};
  `}

  ${props =>
    props.steps &&
    !props.isOpen &&
    `box-shadow: 0 0 0 2px ${colorPicker.lightGray};`}

  ${props => props.error && `box-shadow: 0 0 0 2px ${colorPicker.red}`};

  ${props => (props.style ? props.style : null)};
`;

const AccordionLabel = styled.div`
  cursor: pointer;
  font-size: 14px;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  ${circularStd.book}
  height: 65px;
  text-transform: uppercase;
  color: ${props => (props.steps ? colorPicker.blue : colorPicker.black)};
  letter-spacing: 1px;

  ${props => props.error && `color: ${colorPicker.red}`};
`;

const AccordionChildren = styled.div`
  padding-bottom: 25px;
  ${props => props.steps && `padding-left: 40px;`}
  ${props =>
    props.isOpen
      ? `
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.2s;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      transition-property: opacity, transform;

 `
      : `opacity: 0;
      transform: translateY(-1rem);
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;

 `}
`;

// color: ${props =>
//   !props.className && (props.isOpen ? colors.blue : colors.black)};

const StyledStep = styled.div`
  transition: 0.2s all ease-in-out;
  background: ${props =>
    props.stepComplete ? colorPicker.green100 : colorPicker.blue};
  height: 26px;
  width: 26px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  ${props => props.error && `background: ${colorPicker.red};`}
`;
