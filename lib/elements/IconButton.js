import React from "react";
import { Icon } from "../elements/Icon";
import styled from "styled-components";
import { transition, hover } from "../utils/_animations";
import { getColors } from "../utils/_functions";
import { colors } from "../utils/_variables";

const IconButton = ({ label, ...props }) => {
  return (
    <IconButtonStyle {...props}>
      {props.children}
      <Icon type={props.type} fill="white" height="24px" width="24px" />
    </IconButtonStyle>
  );
};

const Button = styled.button`
  border-radius: 3px;
  border: none;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  outline: none;
  ${transition}
  &:hover {
    cursor: pointer;
    ${hover}
  }
  ${props => (props.style ? props.style : null)}
`;

const IconButtonStyle = styled(Button)`
  background: ${props => (props.color ? getColors(props.color) : colors.blue)};
  display: flex;
  align-items: center;
  padding: 5px;
  height: 35px;
  width: 35px;
  color: #ffffff;
  ${props => (props.style ? props.style : null)}
`;

export { IconButton };
