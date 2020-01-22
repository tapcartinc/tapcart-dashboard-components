import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/_variables";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";

function BoxedToggle(props) {
  console.log("props", props);
  switch (props.type) {
    case "basic":
      return (
        <BoxedToggleWrapper
          style={{ margin: 5 }}
          border={colorPicker.grayBlue}
          backgroundOn={colorPicker.green100}
          backgroundOff={colorPicker.offWhite}
          {...props}
        >
          <BoxedToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            style={{ position: "absolute" }}
            {...props}
          />

          <BoxedToggleLabel
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            htmlFor={props.name}
            {...props}
          >
            <Icon
              type="checkmark-small"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 10,
                marginTop: 11
              }}
            ></Icon>
            <Icon
              type="small-close"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : colors.grayText}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 10,
                marginTop: 11
              }}
            ></Icon>
          </BoxedToggleLabel>
        </BoxedToggleWrapper>
      );
    default:
      return <div />;
  }
}
export { BoxedToggle };

const BoxedToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const BoxedToggleLabel = styled.label`
  position: relative;
  width: 64px;
  height: 32px;
  cursor: pointer;
  height: 32px;
  box-shadow: 0 0 0 1px
    ${props =>
      props.toggleState ? colorPicker.green100 : colorPicker.grayBlue};
  border-radius: 3px;
  background: ${props =>
    props.toggleState ? props.backgroundOn : props.backgroundOff};
  transition: 0.2s;
  &::after {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 3px;
    box-shadow: 0 0 0 1px
      ${props => (props.toggleState ? props.backgroundOn : props.border)};
    background: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    position: absolute;

    ${props => (!props.toggleState ? `left: 0` : `right: 0`)};
  }
`;

const BoxedToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  width: 64px;
  height: 32px;
  transition: 0.2s;
  &:checked {
    ${props => console.log("props", props.checked)}
    transition: 0.2s;
    &::after {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      margin-left: 34px;
      left: 0px;
      transition: 0.2s;
    }
  }
`;
