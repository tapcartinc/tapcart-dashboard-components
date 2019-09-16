import React from "react";
import styled from "styled-components";
import { boxShadow } from "../utils/_variables";
import { getColors } from "../utils/_functions";

const ContainerStyle = styled.section`
  border-radius: 3px;
  ${boxShadow};
  background: ${props => {
    if (props.bgColor) {
      return getColors(props.bgColor);
    } else {
      return "white";
    }
  }};
  width: ${props => (props.columns ? `${100 / props.columns}%` : "100%")};
  ${props => (props.style ? props.style : null)}
`;

const Container = ({ ...props }) => {
  return (
    <div className="container">
      <ContainerStyle {...props}>{props.children}</ContainerStyle>
    </div>
  );
};

export { Container };
