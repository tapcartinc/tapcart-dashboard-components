import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { Icon } from "../elements/Icon";

function IconToggle(props) {
  return (
    <IconToggleWrapper style={{ margin: 5 }} {...props}>
      <IconToggleInput
        type="checkbox"
        id={props.name}
        checked={props.value}
        onChange={props.onToggle}
        name={props.name}
        style={{ position: "absolute" }}
      />

      <IconToggleLabel htmlFor={props.name} {...props}>
        <Icon
          type={props.icons[0]}
          fill={props.value ? "darkgray" : "white"}
          style={{
            position: "absolute",
            zIndex: 1,
            width: "30px",
            height: "30px",
            padding: "4px"
          }}
        ></Icon>
        <Icon
          type={props.icons[1]}
          fill={props.value ? "white" : "darkgray"}
          style={{
            position: "absolute",
            zIndex: 1,
            width: "30px",
            height: "30px",
            padding: "4px",
            right: 1
          }}
        ></Icon>
      </IconToggleLabel>
    </IconToggleWrapper>
  );
}
export { IconToggle };

const IconToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const IconToggleLabel = styled.label`
  position: relative;
  top: 0;
  left: 0;
  width: 73px;
  height: 38px;
  border-radius: 25px;
  background: ${props => (props.value ? colors.blue : colors.gray25)};
  cursor: pointer;
  border: 4px solid ${colors.gray25};

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transform: scale(1.3);
    background: ${colors.blue};
    border: 3px solid #3a3cb4;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.08);
    -webkit-transition: 0.2s;
    transition: 0.2s;
    position: absolute;
  }
`;

const IconToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 50px;
  height: 30px;

  &:checked + ${IconToggleLabel} {
    background-color: ${colors.gray25};

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transform: scale(1.3);
      border: 3px solid ${colors.blue};
      margin-left: 34px;
      transition: 0.2s;
      background-color: ${colors.blue};
    }
  }
`;
