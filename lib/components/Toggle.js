import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import PropTypes, { node } from "prop-types";

function Toggle(props) {
  return (
    <ToggleWrapper style={{ margin: 5 }} {...props}>
      <ToggleInput
        type="checkbox"
        id="toggle"
        checked={props.value}
        onChange={props.onToggle}
        name={props.name}
        autoComplete="off"
      />
      <ToggleLabel htmlFor="toggle" {...props} />
    </ToggleWrapper>
  );
}
export { Toggle };

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 18px;
  border-radius: 15px;
  background: ${props => (props.value ? colors.highlightblue : colors.gray)};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    transform: scale(1.15);
    background: ${props => (props.value ? colors.blue : "white")};
    border: 1px solid ${colors.gray};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.08);
    transition: 0.2s;
  }
`;

const ToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 18px;
  &:checked + ${ToggleLabel} {
    background: ${colors.highlightblue};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      transform: scale(1.15);
      border: 1px solid transparent;
      margin-left: 20px;
      transition: 0.2s;
      border: 1px solid #373aaf;
    }
  }
`;
