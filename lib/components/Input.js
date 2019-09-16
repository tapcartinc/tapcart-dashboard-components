import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { Generic, placeholder, input } from "../elements/Typography";

function Input({ value, name, label, placeholder, icon, ...props }) {
  return (
    <form onSubmit={props.onSubmit} style={props.style}>
      {label && <Generic style={{ marginBottom: 10 }}>{label}</Generic>}
      <InputStyle
        value={value}
        name={name}
        onChange={props.onChange}
        placeholder={placeholder}
        {...props}
      />
    </form>
  );
}

export { Input };

const InputStyle = styled.input`
  border-radius: 3px;
  border: 1px ${colors.bluegray} solid;
  background: ${colors.offwhite};
  width: ${props => (props.size ? props.size : "100%")};
  padding: 15px 20px;
  letter-spacing: 0.25px;
  ${input},
  &:hover {
    cursor: pointer;
  }
  &::placeholder {
    ${placeholder}
  }
  &:focus {
    outline: none;
  }
  font-weight: 400;
  ${props => (props.style ? props.style : null)};
`;
